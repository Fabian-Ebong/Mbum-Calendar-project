import { useState } from "react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import { generateMonthData } from "./utils/calendarGenerator"
import CalendarCard from "./components/CalendarCard"

function App() {
  // State to track the currently viewed month
  const [currentDate, setCurrentDate] = useState(new Date())

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // Generate data for the current view
  const monthData = generateMonthData(year, month)

  const goToPreviousMonth = () => setCurrentDate(new Date(year, month - 1, 1))
  const goToNextMonth = () => setCurrentDate(new Date(year, month + 1, 1))
  const goToToday = () => setCurrentDate(new Date())

  const handleDateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value // Format: YYYY-MM-DD
    if (!value) return

    const [yearStr, monthStr] = value.split("-")
    const parsedYear = parseInt(yearStr, 10)
    const parsedMonth = parseInt(monthStr, 10) - 1 // JS months are 0-indexed

    // Update state to the first day of the selected month
    setCurrentDate(new Date(parsedYear, parsedMonth, 1))
  }

  return (
    <div className="min-h-screen bg-gray-50 px-3 py-4 sm:px-4 md:p-8 [padding-bottom:env(safe-area-inset-bottom)]">
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation and Search */}
        <header className="flex flex-col gap-6 mb-8">
          {/* Title Section */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Mbum Calendar by Dr Ebong
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-400">
              Dedicated to Hon Ester Ntalla
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-medium">
              {monthData.name} {year}
            </p>
          </div>

          {/* Controls Section (compact toolbar) */}
          <div className="w-full flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-3 bg-white p-2 rounded-xl shadow-sm border border-gray-200 w-full max-w-xl">
              {/* Navigation Buttons */}
              <div className="flex items-center gap-1 w-full md:w-auto justify-between md:justify-start">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToPreviousMonth}
                  aria-label="Previous month"
                  className="h-10 w-10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  onClick={goToToday}
                  className="px-4 h-10 font-medium"
                >
                  Today
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToNextMonth}
                  aria-label="Next month"
                  className="h-10 w-10"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Date Search Input */}
              <div className="relative w-full md:w-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  type="date"
                  onChange={handleDateSearch}
                  className="pl-9 w-full md:w-48 h-10"
                  aria-label="Jump to date"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Render the single month view */}
        <div className="flex justify-center">
          <CalendarCard data={monthData} />
        </div>
      </div>
    </div>
  )
}

export default App
