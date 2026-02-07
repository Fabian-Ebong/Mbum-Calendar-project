import { MonthData } from "../types/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

interface CalendarMonthProps {
  monthData: MonthData
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function CalendarMonth({ monthData }: CalendarMonthProps) {
  return (
    <Card className="w-full h-full flex flex-col shadow-md border-slate-200">
      <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
        <CardTitle className="text-center text-xl font-bold text-slate-800">
          {monthData.name} {monthData.year}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex-1 flex flex-col">
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wider py-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-2 flex-1">
          {monthData.days.map((day) => (
            <div
              key={day.fullDate}
              className="group relative flex flex-col items-center justify-center p-2 rounded-lg border border-slate-100 bg-white hover:border-indigo-300 hover:shadow-sm transition-all duration-200 aspect-square"
            >
              <span className="text-sm font-medium text-slate-900">
                {day.date}
              </span>
              <span className="text-xs text-slate-400 mt-1">
                {day.englishDay.slice(0, 3)}
              </span>
              
              {/* Mbum Day - Prominent */}
              <div className="mt-auto pt-2">
                <span className="text-sm font-bold text-indigo-600 group-hover:text-indigo-700">
                  {day.mbumDay}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}