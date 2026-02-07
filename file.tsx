import { useState, useEffect } from "react"
import CalendarCard from "./components/CalendarCard"
import { MonthData } from "./types/calendar"

// Simple Mbum day name mapping (cyclical 5-day week)
const MBUM_DAYS = ["Cɛɛ", "Cuɔ", "Kaa", "Nɔɔk", "Fij"]

function generateMonthData(year: number, monthIndex: number): MonthData {
  const date = new Date(year, monthIndex, 1)
  const monthName = date.toLocaleString('default', { month: 'long' })
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  
  const days = []
  
  // Calculate starting day index for Mbum cycle (simplified logic)
  // In a real app, you would calculate the offset from a known reference date
  let mbumDayIndex = (monthIndex + year) % 5 

  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(year, monthIndex, i)
    const fullDate = currentDate.toISOString().split('T')[0]
    
    days.push({
      date: i,
      fullDate: fullDate,
      mbumDay: MBUM_DAYS[mbumDayIndex]
    })
    
    mbumDayIndex = (mbumDayIndex + 1) % 5
  }

  return {
    name: monthName,
    year,
    monthIndex,
    days
  }
}

function App() {
  const [currentData, setCurrentData] = useState<MonthData | null>(null)

  useEffect(() => {
    const now = new Date()
    const data = generateMonthData(now.getFullYear(), now.getMonth())
    setCurrentData(data)
  }, [])

  if (!currentData) return <div className="flex items-center justify-center h-screen">Loading...</div>

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <CalendarCard data={currentData} />
    </div>
  )
}

export default App