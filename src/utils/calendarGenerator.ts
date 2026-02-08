import { MonthData } from "../types/calendar"

// ✅ Correct 8-day Mbum order (as you specified)
const MBUM_CYCLE = [
  "Mrù'",
  "Ndʉŋ",
  "Ŋgàŋ",
  "Ntaala'",
  "Sèŋ",
  "Lì",
  "Ŋkapyè",
  "Yè",
] as const

// ✅ Anchor date: Sunday, Feb 8, 2026 corresponds to "Mrù'" (index 0)
// Use UTC to avoid DST/timezone issues
const ANCHOR_DATE_UTC = new Date(Date.UTC(2026, 1, 8)) // Feb = 1 (0-based month)

const DAY_MS = 24 * 60 * 60 * 1000
const ENGLISH_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const

function toUTCDateOnly(d: Date) {
  return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
}

function diffDaysUTC(a: Date, b: Date) {
  // whole-day difference (a - b) in UTC, safe across DST
  return Math.round((toUTCDateOnly(a).getTime() - toUTCDateOnly(b).getTime()) / DAY_MS)
}

export function generateMonthData(year: number, month: number): MonthData {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthName = new Date(year, month, 1).toLocaleString("default", { month: "long" })

  const days = []

  for (let date = 1; date <= daysInMonth; date++) {
    const currentDateObj = new Date(year, month, date)

    // ✅ Compute cycle index using UTC-safe day difference
    const deltaDays = diffDaysUTC(currentDateObj, ANCHOR_DATE_UTC)

    // ✅ Proper modulo that works for negative values too
    const cycleIndex = ((deltaDays % 8) + 8) % 8

    const mbumDay = MBUM_CYCLE[cycleIndex]
    const englishDay = ENGLISH_DAYS[currentDateObj.getDay()]

    // Format YYYY-MM-DD
    const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`

    days.push({
      date,
      englishDay,
      mbumDay,
      fullDate,
    })
  }

  return {
    name: monthName,
    year,
    monthIndex: month,
    days,
  }
}
