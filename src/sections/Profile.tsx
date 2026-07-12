'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Flame } from 'lucide-react'

const LEETCODE_URL = 'https://leetcode.com/u/Diya30jain/'

interface DifficultyStat {
    solved: number
    total: number
}

interface LeetCodeStats {
    totalSolved: number
    totalProblems: number
    easy: DifficultyStat
    medium: DifficultyStat
    hard: DifficultyStat
    totalSubmissions: number
    totalActiveDays: number
    streak: number
}

interface LeetCodeApiResponse extends LeetCodeStats {
    submissionCalendar: string | Record<string, number>
    error?: string
}

type HeatmapGrid = number[][]

const FALLBACK_STATS: LeetCodeStats = {
    totalSolved: 145,
    totalProblems: 3860,
    easy: { solved: 95, total: 929 },
    medium: { solved: 41, total: 2019 },
    hard: { solved: 9, total: 912 },
    totalSubmissions: 261,
    totalActiveDays: 73,
    streak: 51,
}

interface CalendarBounds {
    startMs: number
    todayTs: number
    numWeeks: number
    todayUTC: number
}

function getCalendarBounds(): CalendarBounds {
    const now = new Date()
    const todayUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    
    // Go back exactly 1 year in calendar time
    const oneYearAgo = new Date(todayUTC)
    oneYearAgo.setUTCFullYear(oneYearAgo.getUTCFullYear() - 1)
    const oneYearAgoMs = oneYearAgo.getTime()
    const oneYearAgoDayOfWeek = oneYearAgo.getUTCDay()
    
    // Align to the Sunday of that week
    const startMs = oneYearAgoMs - oneYearAgoDayOfWeek * 86400000
    const todayTs = todayUTC / 1000

    // Calculate how many weeks are needed to reach today
    const totalDays = Math.round((todayUTC - startMs) / 86400000) + 1
    const numWeeks = Math.ceil(totalDays / 7)

    return { startMs, todayTs, numWeeks, todayUTC }
}

function generateFallbackHeatmap(): HeatmapGrid {
    const { numWeeks } = getCalendarBounds()
    const weeks: HeatmapGrid = []
    let seed = 42
    const rand = () => {
        seed = (seed * 16807 + 0) % 2147483647
        return (seed - 1) / 2147483646
    }
    for (let w = 0; w < numWeeks; w++) {
        const week: number[] = []
        for (let d = 0; d < 7; d++) {
            const r = rand()
            if (r < 0.6) week.push(0)
            else if (r < 0.75) week.push(1)
            else if (r < 0.87) week.push(rand() < 0.5 ? 2 : 3)
            else if (r < 0.95) week.push(Math.ceil(rand() * 3) + 3)
            else week.push(Math.ceil(rand() * 4) + 6)
        }
        weeks.push(week)
    }
    return weeks
}

function getHeatColor(val: number): string {
    if (val === 0) return '#e8f5ea'
    if (val <= 1) return '#b7e4c7'
    if (val <= 3) return '#74c69d'
    if (val <= 6) return '#40916c'
    return '#1b4332'
}

function buildHeatmapFromCalendar(
    calendarJson: string | Record<string, number>
): HeatmapGrid | null {
    const calendarMap: Record<string, number> =
        typeof calendarJson === 'string' ? JSON.parse(calendarJson) : calendarJson
    const entries = Object.keys(calendarMap)
    if (entries.length === 0) return null

    const { startMs, todayTs, numWeeks } = getCalendarBounds()

    const weeks: HeatmapGrid = []
    let currentMs = startMs
    let matchCount = 0

    for (let w = 0; w < numWeeks; w++) {
        const week: number[] = []
        for (let d = 0; d < 7; d++) {
            const ts = currentMs / 1000
            if (ts > todayTs) {
                week.push(-1)
            } else {
                const val = calendarMap[ts.toString()] || 0
                if (val > 0) matchCount++
                week.push(val)
            }
            currentMs += 86400000
        }
        weeks.push(week)
    }

    if (matchCount < 5) return null
    return weeks
}

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function getMonthLabels(): string[] {
    const now = new Date()
    const labels: string[] = []
    for (let i = 12; i >= 1; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
        labels.push(MONTHS_SHORT[d.getMonth()])
    }
    return labels
}

function useCountUp(target: number, duration = 1200) {
    const [count, setCount] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null)
    const started = useRef<boolean>(false)
    const prevTarget = useRef<number | null>(null)

    useEffect(() => {
        if (target === 0) {
            setCount(0)
            return
        }

        // If the target changed since last run, allow re-animating
        if (prevTarget.current !== target) {
            started.current = false
            prevTarget.current = target
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    const start = performance.now()

                    const animate = (now: number) => {
                        const progress = Math.min((now - start) / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.round(eased * target))
                        if (progress < 1) requestAnimationFrame(animate)
                    }

                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.3 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target, duration])

    return { count, ref }
}
interface DifficultyRingProps {
    label: string
    solved: number
    total: number
    color: string
    delay: number
    reducedMotion: boolean | null
}

const DifficultyRing: React.FC<DifficultyRingProps> = ({
    label,
    solved,
    total,
    color,
    delay,
    reducedMotion,
}) => {
    const radius = 28
    const stroke = 4
    const circumference = 2 * Math.PI * radius
    const center = radius + stroke
    const ratio = total > 0 ? solved / total : 0

    return (
        <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
        >
            <div className="relative flex-shrink-0">
                <svg width={center * 2} height={center * 2} className="transform -rotate-90">
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="none"
                        stroke="#d8f0dd"
                        strokeWidth={stroke}
                    />
                    <motion.circle
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: circumference * (1 - ratio) }}
                        transition={{
                            duration: reducedMotion ? 0 : 1.5,
                            ease: 'easeOut',
                            delay: reducedMotion ? 0 : delay,
                        }}
                        viewport={{ once: true }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-sm font-bold text-gray-800 font-Outfit">{solved}</span>
                </div>
            </div>
            <div>
                <span className="text-xs font-bold font-Outfit" style={{ color }}>
                    {label}
                </span>
                <p className="text-[10px] text-gray-500 font-Outfit">
                    {solved}/{total}
                </p>
            </div>
        </motion.div>
    )
}

const Profile: React.FC = () => {
    const [stats, setStats] = useState<LeetCodeStats>(FALLBACK_STATS)
    const [heatmap, setHeatmap] = useState<HeatmapGrid>([])
    const [loading, setLoading] = useState<boolean>(true)
    const heatmapScrollRef = useRef<HTMLDivElement>(null)
    const prefersReducedMotion = useReducedMotion()

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/api/leetcode')
                if (!res.ok) throw new Error('API failed')
                const data: LeetCodeApiResponse = await res.json()
                if (data.error) throw new Error(data.error)

                setStats({
                    totalSolved: data.totalSolved,
                    totalProblems: data.totalProblems,
                    easy: data.easy,
                    medium: data.medium,
                    hard: data.hard,
                    totalSubmissions: data.totalSubmissions,
                    totalActiveDays: data.totalActiveDays,
                    streak: data.streak,
                })

                const realGrid = buildHeatmapFromCalendar(data.submissionCalendar)
                setHeatmap(realGrid || generateFallbackHeatmap())
            } catch {
                setStats(FALLBACK_STATS)
                setHeatmap(generateFallbackHeatmap())
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const submissions = useCountUp(stats.totalSubmissions)
    const activeDays = useCountUp(stats.totalActiveDays)
    const maxStreak = useCountUp(stats.streak)
    const monthLabels = getMonthLabels()

    const getWeekMonthName = (wi: number) => {
        const { startMs } = getCalendarBounds()
        const date = new Date(startMs + wi * 7 * 86400000)
        return MONTHS_SHORT[date.getUTCMonth()]
    }

    useEffect(() => {
        if (!loading && heatmapScrollRef.current) {
            heatmapScrollRef.current.scrollLeft = heatmapScrollRef.current.scrollWidth
        }
    }, [loading])

    return (
        <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            id="leetcode"
            className="w-full px-4 sm:px-6 md:px-12 py-12 md:py-16 scroll-mt-20 bg-gradient-to-b from-white via-emerald-50 to-emerald-100 overflow-hidden"
        >
            <motion.h4
                initial={{ y: -15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center mb-2 text-base sm:text-lg font-Ovo text-emerald-600"
            >
                Competitive Programming
            </motion.h4>

            <motion.h2
                initial={{ y: -15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent"
            >
                LeetCode Journey
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center max-w-2xl mx-auto mt-4 mb-8 font-Ovo text-gray-700"
            >
                Sharpening problem-solving skills one challenge at a time.
            </motion.p>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="rounded-2xl p-5 sm:p-6 mb-4 bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-md"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5 sm:gap-6">
                            <DifficultyRing
                                label="Total"
                                solved={stats.totalSolved}
                                total={stats.totalProblems}
                                color="#1b4332"
                                delay={0.1}
                                reducedMotion={prefersReducedMotion}
                            />
                            <DifficultyRing
                                label="Easy"
                                solved={stats.easy.solved}
                                total={stats.easy.total}
                                color="#40916c"
                                delay={0.2}
                                reducedMotion={prefersReducedMotion}
                            />
                            <DifficultyRing
                                label="Medium"
                                solved={stats.medium.solved}
                                total={stats.medium.total}
                                color="#52b788"
                                delay={0.35}
                                reducedMotion={prefersReducedMotion}
                            />
                            <DifficultyRing
                                label="Hard"
                                solved={stats.hard.solved}
                                total={stats.hard.total}
                                color="#74c69d"
                                delay={0.5}
                                reducedMotion={prefersReducedMotion}
                            />
                        </div>

                        <div className="flex items-center gap-5 sm:gap-6">
                            {[
                                { label: 'Submissions', val: submissions },
                                { label: 'Active Days', val: activeDays },
                            ].map((s) => (
                                <div key={s.label} ref={s.val.ref} className="text-center">
                                    <div className="text-lg sm:text-xl font-bold text-gray-800 font-Outfit">
                                        {loading ? '—' : s.val.count}
                                    </div>
                                    <div className="text-[10px] text-gray-500 font-Ovo">{s.label}</div>
                                </div>
                            ))}
                            <div ref={maxStreak.ref} className="text-center">
                                <div className="text-lg sm:text-xl font-bold text-gray-800 font-Outfit flex items-center justify-center gap-1">
                                    {loading ? '—' : maxStreak.count}
                                    <motion.span
                                        animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                    >
                                        <Flame size={16} className="text-green-600" fill="currentColor" />
                                    </motion.span>
                                </div>
                                <div className="text-[10px] text-gray-500 font-Ovo">Streak</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="rounded-2xl p-5 sm:p-6 bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-md"
                >
                    <div ref={heatmapScrollRef} className="w-full overflow-x-auto heatmap-scroll">
                        <div className="flex items-center mb-2">
                            <h3 className="text-xs font-semibold text-gray-500 font-Outfit">
                                <span className="text-base font-bold text-gray-800">
                                    {loading ? '—' : stats.totalSubmissions}
                                </span>{' '}
                                submissions in the past year
                            </h3>
                        </div>

                        {loading ? (
                            <div className="flex items-center justify-center h-[80px]">
                                <div className="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                            </div>
                        ) : (
                            <>
                                <div className="overflow-x-auto pb-12">
                                    <div className="inline-flex flex-col min-w-min">
                                        {/* Months Row */}
                                        <div className="flex gap-[3px] mb-2 text-gray-500 font-Outfit select-none relative h-5">
                                            {heatmap.map((week, wi) => {
                                                const currentMonth = getWeekMonthName(wi)
                                                const prevMonth = wi > 0 ? getWeekMonthName(wi - 1) : null
                                                const isMonthStart = currentMonth !== prevMonth

                                                return (
                                                    <div
                                                        key={wi}
                                                        className="relative w-[8px] sm:w-[10px] md:w-[12px] flex-shrink-0"
                                                        style={{
                                                            marginRight: wi % 4 === 3 ? '12px' : '0px'
                                                        }}
                                                    >
                                                        {isMonthStart && (
                                                            <span className="absolute left-0 bottom-0 whitespace-nowrap text-[8px] sm:text-[9px] font-bold text-gray-500">
                                                                {currentMonth}
                                                            </span>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        {/* Heatmap Grid */}
                                        <div className="flex gap-[3px]">
                                            {heatmap.map((week, wi) => (
                                                <div 
                                                    key={wi} 
                                                    className="flex flex-col gap-[3px]"
                                                    style={{
                                                        marginRight: wi % 4 === 3 ? '12px' : '0px'
                                                    }}
                                                >
                                                    {week.map((val, di) => (
                                                        <motion.div
                                                            key={`${wi}-${di}`}
                                                            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0 }}
                                                            whileInView={{
                                                                opacity: val === -1 ? 0 : 1,
                                                                scale: val === -1 ? 0 : 1,
                                                            }}
                                                            transition={{ delay: 0.002 * wi, duration: 0.1 }}
                                                            viewport={{ once: true }}
                                                            className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] rounded-[1px] sm:rounded-[2px]"
                                                            style={{
                                                                backgroundColor: val === -1 ? 'transparent' : getHeatColor(val),
                                                            }}
                                                            title={
                                                                val > 0
                                                                    ? `${val} submission(s)`
                                                                    : val === 0
                                                                    ? 'No submissions'
                                                                    : ''
                                                            }
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 mt-2 text-[7px] sm:text-[8px] md:text-[9px] text-gray-400">
                                    <span>Less</span>
                                    {[0, 1, 2, 4, 7].map((v) => (
                                        <div
                                            key={v}
                                            className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-[1px] sm:rounded-[2px]"
                                            style={{ backgroundColor: getHeatColor(v) }}
                                        />
                                    ))}
                                    <span>More</span>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center pt-4"
                >
                    <motion.a
                        href={LEETCODE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-600 text-sm text-emerald-700 hover:bg-emerald-50 transition-all duration-300 font-Outfit"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l.842.742a1.38 1.38 0 0 0 1.913-.064 1.366 1.366 0 0 0-.063-1.93l-.842-.74c-2.09-1.791-5.159-1.421-6.924.881L5.104 9.594l4.391-4.691A1.383 1.383 0 0 0 9.14 3.36L13.64.258a1.38 1.38 0 0 0-.157-.258ZM19.78 5.71a1.374 1.374 0 0 0-.961.438l-.12.128c-.246.26-.38.608-.38.97a1.376 1.376 0 0 0 .443.99l.842.742c.652.64.972 1.469.947 2.264a2.68 2.68 0 0 1-.066.523 2.545 2.545 0 0 1-.619 1.164l-2.982 3.19c-1.058 1.134-3.204 1.27-4.43.278l-.842-.742a1.38 1.38 0 0 0-1.913.064 1.366 1.366 0 0 0 .063 1.93l.842.74c2.09 1.791 5.159 1.421 6.924-.881l2.982-3.19a5.266 5.266 0 0 0 1.209-2.104 5.35 5.35 0 0 0 .125-.513 5.527 5.527 0 0 0-.062-2.362 5.83 5.83 0 0 0-.349-1.017 5.938 5.938 0 0 0-1.271-1.818l-.842-.742a1.38 1.38 0 0 0-.953-.389Z" />
                        </svg>
                        Visit LeetCode Profile
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Profile
