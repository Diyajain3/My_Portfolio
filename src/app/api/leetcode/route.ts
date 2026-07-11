import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const USERNAME = "Diya30jain";
const API_BASE = "https://leetcode-api-pied.vercel.app";

interface AcSubmission {
  difficulty: string;
  count: number;
  submissions: number;
}

interface UserResponse {
  submitStats: {
    acSubmissionNum: AcSubmission[];
  };
}

interface StatsResponse {
  total: number;
  by_difficulty: {
    easy: number;
    medium: number;
    hard: number;
  };
}

interface CalendarResponse {
  submissionCalendar: Record<string, number>;
}

// Total submissions = sum of every value in the calendar
function computeTotalSubmissions(calendarMap: Record<string, number>): number {
  return Object.values(calendarMap).reduce((sum, count) => sum + count, 0);
}

// Active days = number of calendar keys with count > 0
function computeActiveDays(calendarMap: Record<string, number>): number {
  return Object.values(calendarMap).filter((count) => count > 0).length;
}

// Max streak = longest run of consecutive day-timestamps (each 86400s apart)
function computeMaxStreak(calendarMap: Record<string, number>): number {
  const activeTimestamps = Object.entries(calendarMap)
    .filter(([, count]) => count > 0)
    .map(([ts]) => Number(ts))
    .sort((a, b) => a - b);

  if (activeTimestamps.length === 0) return 0;

  let maxStreak = 1;
  let currentStreak = 1;

  for (let i = 1; i < activeTimestamps.length; i++) {
    const diff = activeTimestamps[i] - activeTimestamps[i - 1];
    if (diff === 86400) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 1;
    }
  }

  return maxStreak;
}

export async function GET() {
  try {
    const [userRes, statsRes, calendarRes] = await Promise.all([
      fetch(`${API_BASE}/user/${USERNAME}`, { cache: "no-store" }),
      fetch(`${API_BASE}/stats`, { next: { revalidate: 86400 } }),
      fetch(`${API_BASE}/user/${USERNAME}/calendar`, { cache: "no-store" }),
    ]);

    if (!userRes.ok) throw new Error(`User fetch failed: ${userRes.status}`);
    if (!statsRes.ok) throw new Error(`Stats fetch failed: ${statsRes.status}`);
    if (!calendarRes.ok) throw new Error(`Calendar fetch failed: ${calendarRes.status}`);

    const userData: UserResponse = await userRes.json();
    const statsData: StatsResponse = await statsRes.json();
    const calendarData: CalendarResponse = await calendarRes.json();

    const acCounts = userData.submitStats.acSubmissionNum;
    const getSolved = (diff: string) =>
      acCounts.find((c) => c.difficulty === diff)?.count ?? 0;

    const calendarMap = calendarData.submissionCalendar ?? {};

    const result = {
      totalSolved: getSolved("All"),
      totalProblems: statsData.total,
      easy: { solved: getSolved("Easy"), total: statsData.by_difficulty.easy },
      medium: { solved: getSolved("Medium"), total: statsData.by_difficulty.medium },
      hard: { solved: getSolved("Hard"), total: statsData.by_difficulty.hard },
      totalSubmissions: computeTotalSubmissions(calendarMap),
      totalActiveDays: computeActiveDays(calendarMap),
      streak: computeMaxStreak(calendarMap), // now represents MAX streak
      submissionCalendar: calendarMap,
    };

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}