import { MonthData } from "../types/calendar"

// The 8-day cycle extracted from your provided data
// Jan 1, 2026 (Thursday) is Index 0
const MBUM_CYCLE = [
  "Ŋgàŋ",      // 0 (Corrected Spelling)
  "Ŋtaala'",   // 1
  "Sèŋ",       // 2
  "Lì",        // 3
  "Ŋkapyè",    // 4
  "Yè",        // 5
  "Mrù'",      // 6
  "Ŋdʉŋ",      // 7
]

// Anchor date: Jan 1, 2026 is "Ŋgàŋ" (Index 0)
const ANCHOR_DATE = new Date("2026-01-01T00:00:00")

export function generateMonthData(year: number, month: number): MonthData {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  })

  const days = []

  for (let date = 1; date <= daysInMonth; date++) {
    const currentDateObj = new Date(year, month, date)
    
    // Calculate difference in days from anchor
    const diffTime = currentDateObj.getTime() - ANCHOR_DATE.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    // Calculate index in the 8-day cycle
    // We handle negative modulo for dates before 2026
    let cycleIndex = diffDays % 8
    if (cycleIndex < 0) {
      cycleIndex += 8
    }

    const mbumDay = MBUM_CYCLE[cycleIndex]
    const englishDay = currentDateObj.toLocaleString("default", {
      weekday: "long",
    })
    
    // Format YYYY-MM-DD for fullDate
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