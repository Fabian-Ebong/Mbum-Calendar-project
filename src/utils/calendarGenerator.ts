// import { MonthData } from "../types/calendar"

// // ✅ Correct 8-day Mbum order (as you specified)
// const MBUM_CYCLE = [
//   "Mrù'",
//   "Ndʉŋ",
//   "Ŋgàŋ",
//   "Ntaala'",
//   "Sèŋ",
//   "Lì",
//   "Ŋkapyè",
//   "Yè",
// ] as const

// // ✅ Anchor date: Sunday, Feb 8, 2026 corresponds to "Mrù'" (index 0)
// // Use UTC to avoid DST/timezone issues
// const ANCHOR_DATE_UTC = new Date(Date.UTC(2026, 1, 8)) // Feb = 1 (0-based month)

// const DAY_MS = 24 * 60 * 60 * 1000
// const ENGLISH_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const

// function toUTCDateOnly(d: Date) {
//   return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
// }

// function diffDaysUTC(a: Date, b: Date) {
//   // whole-day difference (a - b) in UTC, safe across DST
//   return Math.round((toUTCDateOnly(a).getTime() - toUTCDateOnly(b).getTime()) / DAY_MS)
// }

// export function generateMonthData(year: number, month: number): MonthData {
//   const daysInMonth = new Date(year, month + 1, 0).getDate()
//   const monthName = new Date(year, month, 1).toLocaleString("default", { month: "long" })

//   const days = []

//   for (let date = 1; date <= daysInMonth; date++) {
//     const currentDateObj = new Date(year, month, date)

//     // ✅ Compute cycle index using UTC-safe day difference
//     const deltaDays = diffDaysUTC(currentDateObj, ANCHOR_DATE_UTC)

//     // ✅ Proper modulo that works for negative values too
//     const mbumIndex = ((deltaDays % 8) + 8) % 8
//     const mbumBlock = Math.floor(deltaDays / 8) // ✅ same for all 8 days (Mrù'..Yè)

//     const mbumDay = MBUM_CYCLE[mbumIndex]
//     const englishDay = ENGLISH_DAYS[currentDateObj.getDay()]

//     // Format YYYY-MM-DD
//     const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`

//     days.push({
//       date,
//       englishDay,
//       mbumDay,
//       mbumIndex,     // 0..7
//       mbumBlock,     // ✅ block id for tinting
//       fullDate,
//     })
//   }

//   return {
//     name: monthName,
//     year,
//     monthIndex: month,
//     days,
//   }
// }


import { MonthData } from "../types/calendar"

// Correct 8-day Mbum order
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

// Anchor date: February 8, 2026 = "Mrù'" in West African Time (WAT / UTC+1)
const ANCHOR_YEAR = 2026
const ANCHOR_MONTH = 1 // February (0-based)
const ANCHOR_DAY = 8
const ANCHOR_INDEX = 0 // "Mrù'"

const DAY_MS = 24 * 60 * 60 * 1000
const WAT_OFFSET_MINUTES = 60 // UTC+1

const ENGLISH_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const

/**
 * Convert a JS Date into a "date-only" timestamp aligned to West African Time (UTC+1).
 * This avoids device-local timezone drift and keeps the Mbum cycle anchored to WAT.
 */
function toWATDateOnlyTimestamp(date: Date) {
  const utcTime = date.getTime()
  const watTime = utcTime + WAT_OFFSET_MINUTES * 60 * 1000
  return Math.floor(watTime / DAY_MS) * DAY_MS
}

/**
 * Build the anchor timestamp directly in WAT.
 */
function makeWATAnchorTimestamp(year: number, month: number, day: number) {
  // Midnight in WAT is 23:00 UTC on the previous day
  return Date.UTC(year, month, day, 0, -WAT_OFFSET_MINUTES, 0, 0)
}

const ANCHOR_TIMESTAMP = makeWATAnchorTimestamp(
  ANCHOR_YEAR,
  ANCHOR_MONTH,
  ANCHOR_DAY
)

function diffDaysWAT(a: Date) {
  return Math.round(
    (toWATDateOnlyTimestamp(a) - ANCHOR_TIMESTAMP) / DAY_MS
  )
}

export function generateMonthData(year: number, month: number): MonthData {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthName = new Date(year, month, 1).toLocaleString("default", {
    month: "long",
  })

  const days = []

  for (let date = 1; date <= daysInMonth; date++) {
    const currentDateObj = new Date(year, month, date)

    // Difference in whole days relative to the WAT anchor
    const deltaDays = diffDaysWAT(currentDateObj)

    // Position inside the 8-day Mbum cycle
    const mbumIndex =
      ((ANCHOR_INDEX + deltaDays) % MBUM_CYCLE.length + MBUM_CYCLE.length) %
      MBUM_CYCLE.length

    // 8-day block id for tinting
    const mbumBlock = Math.floor(deltaDays / 8)

    const mbumDay = MBUM_CYCLE[mbumIndex]
    const englishDay = ENGLISH_DAYS[currentDateObj.getDay()]

    const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      date
    ).padStart(2, "0")}`

    days.push({
      date,
      englishDay,
      mbumDay,
      mbumIndex,
      mbumBlock,
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