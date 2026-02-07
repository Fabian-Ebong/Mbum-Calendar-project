import { MonthData, DayData } from "../types/calendar"

// Mbum day names starting from Sunday
const MBUM_DAYS = [
  "Ŋdʉŋ",      // Sunday
  "Ŋgaŋ",      // Monday
  "Ŋtaala'",   // Tuesday
  "Ŋkapyè",    // Wednesday
  "Cɛɛrɛ",      // Thursday
  "Kɛɛzɛ̀r",    // Friday
  "Sàndà"      // Saturday
]

export const generateMonthData = (year: number, monthIndex: number): MonthData => {
  const date = new Date(year, monthIndex, 1)
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const monthName = date.toLocaleString("default", { month: "long" })

  const days: DayData[] = []

  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(year, monthIndex, i)
    const dayOfWeek = currentDate.getDay()

    days.push({
      date: i,
      fullDate: currentDate.toISOString().split('T')[0],
      mbumDay: MBUM_DAYS[dayOfWeek]
    })
  }

  return {
    name: monthName,
    monthIndex,
    year,
    days
  }
}