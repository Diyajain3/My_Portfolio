'use client'
import React, { useState, useEffect, useRef, RefObject } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Flame } from 'lucide-react'

const USERNAME = 'Diya30jain'
const API_BASE = 'https://alfa-leetcode-api.onrender.com'
const LEETCODE_URL = `https://leetcode.com/u/${USERNAME}/`

// ---------- Types ----------

interface DifficultyBucket {
  solved: number
  total: number
}

interface LeetCodeStats {
  totalSolved: number
  totalProblems: number
  easy: DifficultyBucket
  medium: DifficultyBucket
  hard: DifficultyBucket
  totalSubmissions: number
  totalActiveDays: number
  streak: number
}

interface SolvedApiResponse {
  solvedProblem?: number
  totalQuestions?: number
  easySolved?: number
  totalEasy?: number
  mediumSolved?: number
  totalMedium?: number
  hardSolved?: number
  totalHard?: number
  totalSubmissionNum?: { difficulty: string; count: number; submissions: number }[]
}

interface CalendarApiResponse {
  submissionCalendar?: string | Record<string, number>
  [key: string]: unknown
}

type CalendarMap = Record<string, number> // unix-day-ts string -> submission count

// -1 marks a future day (not yet happened), rendered transparent
type HeatmapWeek = number[]
type HeatmapGrid = HeatmapWeek[]

interface DifficultyRingProps {
  label: string
  solved: number
  total: number
  color: string
  delay: number
  reducedMotion: boolean | null
}

interface MonthMarker {
  weekIndex: number
  label: string
}

// Returns the Sunday (week-start) date for each of the 53 weeks in
// the heatmap grid, so month boundaries can be located precisely
// instead of guessing evenly-spaced label positions.
function getWeekStartDates(): Date[] {
  const now = new Date()
  const todayUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  const todayDayOfWeek = new Date(todayUTC).getUTCDay()
  const startMs = todayUTC - (52 * 7 + todayDayOfWeek) * 86400000

  const dates: Date[] = []
  for (let w = 0; w < 53; w++) {
    dates.push(new Date(startMs + w * 7 * 86400000))
  }
  return dates
}

// Finds the week index where each new month begins, so a visual gap
// and a correctly-positioned label can be placed exactly there.
function getMonthMarkers(weekStartDates: Date[]): MonthMarker[] {
  const markers: MonthMarker[] = []
  let lastMonth: number | null = null
  weekStartDates.forEach((date, i) => {
    const month = date.getUTCMonth()
    if (month !== lastMonth) {
      markers.push({ weekIndex: i, label: MONTHS_SHORT[month] })
      lastMonth = month
    }
  })
  return markers
}

// Platform-wide problem counts rarely change, so these act as a
// sensible fallback if the API response doesn't include per-user
// "out of" totals under the field names we expect. Update these
// occasionally from your real profile page if they drift.
const FALLBACK_TOTALS = {
  totalProblems: 3985,
  easyTotal: 953,
  mediumTotal: 2081,
  hardTotal: 951,
}

const FALLBACK_STATS: LeetCodeStats = {
  totalSolved: 0,
  totalProblems: FALLBACK_TOTALS.totalProblems,
  easy: { solved: 0, total: FALLBACK_TOTALS.easyTotal },
  medium: { solved: 0, total: FALLBACK_TOTALS.mediumTotal },
  hard: { solved: 0, total: FALLBACK_TOTALS.hardTotal },
  totalSubmissions: 0,
  totalActiveDays: 0,
  streak: 0,
}

// Palette: white / light green / dark green only — no dark-mode
// variants, no off-palette accents (purple/yellow/red/orange).
const PALETTE = {
  darkest: '#14532D', // headings, primary numbers, "Total"/"Hard" rings
  dark: '#166534',
  mid: '#16A34A', // "Medium" ring, streak flame
  light: '#4ADE80', // "Easy" ring
  track: '#DCFCE7', // ring track (unfilled)
  muted: '#4B7A5A', // secondary/label text (green-tinted gray)
}

function generateFallbackHeatmap(): HeatmapGrid {
  const weeks: HeatmapGrid = []
  let seed = 42
  const rand = (): number => {
    seed = (seed * 16807 + 0) % 2147483647
    return (seed - 1) / 2147483646
  }
  for (let w = 0; w < 53; w++) {
    const week: HeatmapWeek = []
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

// Light-only green ramp — no dark-mode branch.
function getHeatColor(val: number): string {
  if (val === 0) return '#E5F7EA'
  if (val <= 1) return '#BBF7D0'
  if (val <= 3) return '#4ADE80'
  if (val <= 6) return '#16A34A'
  return '#14532D'
}

// Builds a 53-week grid ending on the current day, indexing directly
// into the raw { "unixTs": count } map by day-aligned timestamp.
// This avoids converting timestamps to local date-strings on both
// sides (a source of off-by-one bugs across timezones) — we just
// need the grid's own UTC day-start timestamps to line up with
// however the API day-aligns its keys.
function buildHeatmapFromCalendar(calendarMap: CalendarMap | null | undefined): HeatmapGrid | null {
  if (!calendarMap) return null
  const entries = Object.keys(calendarMap)
  if (entries.length === 0) return null

  const now = new Date()
  const todayUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  const todayDayOfWeek = new Date(todayUTC).getUTCDay()
  const startMs = todayUTC - (52 * 7 + todayDayOfWeek) * 86400000
  const todayTs = todayUTC / 1000

  const weeks: HeatmapGrid = []
  let currentMs = startMs
  let matchCount = 0

  for (let w = 0; w < 53; w++) {
    const week: HeatmapWeek = []
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

function useCountUp(target: number, duration = 1200): { count: number; ref: RefObject<HTMLDivElement | null> } {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    if (target === 0) {
      setCount(0)
      return
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

// Compact inline ring
const DifficultyRing = ({ label, solved, total, color, delay, reducedMotion }: DifficultyRingProps) => {
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
          <circle cx={center} cy={center} r={radius} fill="none" stroke={PALETTE.track} strokeWidth={stroke} />
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
          <span className="text-sm font-bold font-Outfit" style={{ color: PALETTE.darkest }}>
            {solved}
          </span>
        </div>
      </div>
      <div>
        <span className="text-xs font-bold font-Outfit" style={{ color }}>
          {label}
        </span>
        <p className="text-[10px] font-Outfit" style={{ color: PALETTE.muted }}>
          {solved}/{total}
        </p>
      </div>
    </motion.div>
  )
}

const LeetCode = () => {
  const [stats, setStats] = useState<LeetCodeStats>(FALLBACK_STATS)
  const [heatmap, setHeatmap] = useState<HeatmapGrid>([])
  const [loading, setLoading] = useState<boolean>(true)
  const heatmapScrollRef = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    async function fetchData() {
      try {
        const [solvedRes, calendarRes] = await Promise.all([
          fetch(`${API_BASE}/${USERNAME}/solved`),
          fetch(`${API_BASE}/${USERNAME}/calendar`),
        ])
        if (!solvedRes.ok) throw new Error(`Profile fetch failed: ${solvedRes.status}`)

        const solvedData: SolvedApiResponse = await solvedRes.json()
        console.log('LeetCode /solved response:', solvedData)

        setStats({
          totalSolved: solvedData.solvedProblem ?? 0,
          totalProblems: solvedData.totalQuestions ?? FALLBACK_TOTALS.totalProblems,
          easy: {
            solved: solvedData.easySolved ?? 0,
            total: solvedData.totalEasy ?? FALLBACK_TOTALS.easyTotal,
          },
          medium: {
            solved: solvedData.mediumSolved ?? 0,
            total: solvedData.totalMedium ?? FALLBACK_TOTALS.mediumTotal,
          },
          hard: {
            solved: solvedData.hardSolved ?? 0,
            total: solvedData.totalHard ?? FALLBACK_TOTALS.hardTotal,
          },
          totalSubmissions:
            solvedData.totalSubmissionNum?.find((s) => s.difficulty === 'All')?.submissions ?? 0,
          totalActiveDays: 0,
          streak: 0,
        })

        if (calendarRes.ok) {
          const calendarJson: CalendarApiResponse = await calendarRes.json()
          console.log('LeetCode /calendar response:', calendarJson)

          const rawCalendar =
            typeof calendarJson.submissionCalendar === 'string'
              ? calendarJson.submissionCalendar
              : calendarJson.submissionCalendar ?? (calendarJson as unknown as Record<string, number>)

          const calendarMap: CalendarMap =
            typeof rawCalendar === 'string' ? JSON.parse(rawCalendar) : (rawCalendar as CalendarMap)

          const activeDays = Object.keys(calendarMap || {}).length

          // Longest streak ever (not "current streak starting today").
          // A current-streak-from-today calc breaks as soon as today
          // has no submission yet, even mid-streak — showing 0 for
          // most of the day. Max streak avoids that entirely.
          const activeTimestamps = Object.entries(calendarMap || {})
            .filter(([, count]) => (count as number) > 0)
            .map(([ts]) => Number(ts))
            .sort((a, b) => a - b)

          let maxStreak = 0
          let current = 0
          let prevTs: number | null = null
          for (const ts of activeTimestamps) {
            current = prevTs !== null && ts - prevTs === 86400 ? current + 1 : 1
            maxStreak = Math.max(maxStreak, current)
            prevTs = ts
          }

          setStats((prev) => ({ ...prev, totalActiveDays: activeDays, streak: maxStreak }))

          const realGrid = buildHeatmapFromCalendar(calendarMap)
          setHeatmap(realGrid || generateFallbackHeatmap())
        } else {
          setHeatmap(generateFallbackHeatmap())
        }
      } catch (err) {
        console.error('LeetCode fetch error:', err)
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
  const weekStartDates = getWeekStartDates()
  const monthMarkers = getMonthMarkers(weekStartDates)
  const monthMarkerByWeek = new Map(monthMarkers.map((m) => [m.weekIndex, m.label]))

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
      className="w-full px-[12%] py-8 scroll-mt-20 relative z-10 bg-gradient-to-br from-white via-[#F0FDF4] to-[#DCFCE7]"
    >
      <motion.h4
        initial={{ y: -15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-Ovo"
        style={{ color: PALETTE.mid }}
      >
        Competitive Programming
      </motion.h4>
      <motion.h2
        initial={{ y: -15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
        className="
text-center
text-5xl
md:text-6xl
font-black
bg-gradient-to-r
from-[#14532D]
via-[#16A34A]
to-[#4ADE80]
bg-clip-text
text-transparent
"
      >
        LeetCode Journey
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-4 mb-8 font-Ovo"
        style={{ color: PALETTE.muted }}
      >
        Sharpening problem-solving skills one challenge at a time.
      </motion.p>

      <div className="max-w-4xl mx-auto">
        {/* Top row: Problem counts (rings) + stats side-by-side */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          viewport={{ once: true }}
          className="
relative
overflow-hidden
rounded-[30px]
border
border-green-200/60
bg-gradient-to-br
from-white
via-green-50
to-emerald-100
p-6
sm:p-8
mb-4
shadow-[0_20px_60px_rgba(22,163,74,0.15)]
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-2
hover:shadow-[0_25px_70px_rgba(22,163,74,0.25)]
"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Difficulty rings — horizontal */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5 sm:gap-6">
              <DifficultyRing
                label="Total"
                solved={stats.totalSolved}
                total={stats.totalProblems}
                color={PALETTE.darkest}
                delay={0.1}
                reducedMotion={prefersReducedMotion}
              />
              <DifficultyRing
                label="Easy"
                solved={stats.easy.solved}
                total={stats.easy.total}
                color={PALETTE.light}
                delay={0.2}
                reducedMotion={prefersReducedMotion}
              />
              <DifficultyRing
                label="Medium"
                solved={stats.medium.solved}
                total={stats.medium.total}
                color={PALETTE.mid}
                delay={0.35}
                reducedMotion={prefersReducedMotion}
              />
              <DifficultyRing
                label="Hard"
                solved={stats.hard.solved}
                total={stats.hard.total}
                color={PALETTE.dark}
                delay={0.5}
                reducedMotion={prefersReducedMotion}
              />
            </div>

            {/* Quick stats: Submissions / Active Days / Streak */}
            <div className="flex items-center gap-5 sm:gap-6">
              {[
                { label: 'Submissions', val: submissions },
                { label: 'Active Days', val: activeDays },
              ].map((s) => (
                <div key={s.label} ref={s.val.ref} className="text-center">
                  <div className="text-lg sm:text-xl font-bold font-Outfit" style={{ color: PALETTE.darkest }}>
                    {loading ? '—' : s.val.count}
                  </div>
                  <div className="text-[10px] font-Ovo" style={{ color: PALETTE.muted }}>
                    {s.label}
                  </div>
                </div>
              ))}
              <div ref={maxStreak.ref} className="text-center">
                <div
                  className="text-lg sm:text-xl font-bold font-Outfit flex items-center justify-center gap-1"
                  style={{ color: PALETTE.darkest }}
                >
                  {loading ? '—' : maxStreak.count}
                  <motion.span
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Flame size={16} style={{ color: PALETTE.mid }} fill="currentColor" />
                  </motion.span>
                </div>
                <div className="text-[10px] font-Ovo" style={{ color: PALETTE.muted }}>
                  Max Streak
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Heatmap below — full width */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          viewport={{ once: true }}
          className="
relative
overflow-hidden
rounded-[30px]
border
border-green-200/60
bg-gradient-to-br
from-white
via-green-50
to-emerald-100
p-8
shadow-[0_20px_60px_rgba(22,163,74,0.18)]
backdrop-blur-xl
transition-all
duration-500
hover:-translate-y-2
hover:shadow-[0_25px_70px_rgba(22,163,74,0.28)]
"
        >
          <div ref={heatmapScrollRef} className="w-full overflow-x-auto heatmap-scroll">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <h3 className="text-xs font-semibold font-Outfit" style={{ color: PALETTE.muted }}>
                <span className="text-base font-bold" style={{ color: PALETTE.darkest }}>
                  {loading ? '—' : stats.totalSubmissions}
                </span>{' '}
                submissions in the past year
              </h3>
              <div className="flex gap-5 text-xs font-Outfit" style={{ color: PALETTE.muted }}>
                <span>
                  Total active days:{' '}
                  <span className="font-semibold" style={{ color: PALETTE.darkest }}>
                    {loading ? '—' : stats.totalActiveDays}
                  </span>
                </span>
                <span>
                  Max streak:{' '}
                  <span className="font-semibold" style={{ color: PALETTE.darkest }}>
                    {loading ? '—' : stats.streak}
                  </span>
                </span>
              </div>
            </div>
            {loading ? (
              <div className="flex items-center justify-center h-[80px]">
                <div
                  className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin"
                  style={{ borderColor: PALETTE.mid, borderTopColor: 'transparent' }}
                />
              </div>
            ) : (
              <>
                <div className="inline-flex gap-[3px]">
                  {heatmap.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((val, di) => (
                        <motion.div
                          key={`${wi}-${di}`}
                          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0 }}
                          whileInView={{ opacity: val === -1 ? 0 : 1, scale: val === -1 ? 0 : 1 }}
                          transition={{ delay: 0.002 * wi, duration: 0.1 }}
                          viewport={{ once: true }}
                          className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-[2px]"
                          style={{ backgroundColor: val === -1 ? 'transparent' : getHeatColor(val) }}
                          title={val > 0 ? `${val} submission(s)` : val === 0 ? 'No submissions' : ''}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="inline-flex gap-[3px] mt-1.5 text-[9px] font-Outfit" style={{ color: PALETTE.muted }}>
                  {heatmap.map((_, wi) => (
                    <span key={wi} className="w-[10px] sm:w-[12px] shrink-0 whitespace-nowrap">
                      {monthMarkerByWeek.get(wi) ?? ''}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-2 text-[9px]" style={{ color: PALETTE.muted }}>
                  <span>Less</span>
                  {[0, 1, 2, 4, 7].map((v) => (
                    <div key={v} className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: getHeatColor(v) }} />
                  ))}
                  <span>More</span>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Visit Profile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center pt-6"
        >
          <motion.a
            href={LEETCODE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-300 font-Outfit text-sm font-medium"
            style={{ borderColor: PALETTE.track, color: PALETTE.darkest }}
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

export default LeetCode