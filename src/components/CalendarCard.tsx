import { MonthData } from "../types/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

interface CalendarCardProps {
  data: MonthData
}

// Mapping of English month names to Mbum descriptions
const MONTH_DESCRIPTIONS: Record<string, string> = {
  January: "Ŋwɛɛ Ŋkàr Bkwâa",
  February: "Ŋwɛɛ Ntòo Bfòo",
  March: "Ŋwɛɛ Mbèŋ",
  April: "Ŋwɛɛ Msuu",
  May: "Ŋwɛɛ Nsʉsi Bkwâa",
  June: "Ŋwɛɛ Ncoʼ Mkuu",
  July: "Ŋwɛɛ Nye Bkwâa",
  August: "Ŋwɛɛ Ŋkep Bkwâa",
  September: "Ŋwɛɛ Ncoʼ Berɛŋ",
  October: "Ŋwɛɛ Saa",
  November: "Ŋwɛɛ Lùu",
  December: "Ŋwɛɛ Ŋkàʼ",
}

const WEEKDAYS_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const WEEKDAYS_SHORT = ["S", "M", "T", "W", "T", "F", "S"]

export default function CalendarCard({ data }: CalendarCardProps) {
  const firstDayIndex = new Date(data.year, data.monthIndex, 1).getDay()
  const todayStr = new Date().toISOString().split("T")[0]
  const description = MONTH_DESCRIPTIONS[data.name]

  return (
    <Card className="w-full max-w-5xl shadow-xl border-0 overflow-hidden">
      <CardHeader className="bg-slate-900 text-white pb-4">
        <CardTitle className="text-center text-lg sm:text-xl font-semibold tracking-wide">
          {data.name} {data.year}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        {/* Month Description */}
        <div className="px-3 sm:px-4 py-3 bg-white border-b border-slate-100">
          <p className="text-center text-xl sm:text-2xl font-bold text-red-600 break-words">
            {description}
          </p>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 bg-slate-50 border-b border-black/10">
          {WEEKDAYS_FULL.map((day, i) => (
            <div
              key={day}
              className="py-2 text-center text-[10px] sm:text-xs font-semibold text-slate-500"
              title={day}
              aria-label={day}
            >
              {/* short on mobile, full on larger screens */}
              <span className="sm:hidden">{WEEKDAYS_SHORT[i]}</span>
              <span className="hidden sm:inline">{day}</span>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 bg-white">
          {/* Empty cells before the 1st */}
          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="min-h-[68px] sm:min-h-28 border border-black/10"
            />
          ))}

          {/* Render days */}
          {data.days.map((day) => {
            const isToday = day.fullDate === todayStr

            return (
              <div
                key={day.fullDate}
                className={[
                  "min-h-[68px] sm:min-h-28 border border-black/10",
                  "p-1.5 sm:p-2 flex flex-col justify-between",
                  "transition-colors duration-200",
                  isToday ? "bg-blue-50 border-blue-200" : "hover:bg-slate-50",
                ].join(" ")}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={[
                      "text-sm sm:text-base font-semibold",
                      isToday
                        ? "bg-blue-600 text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full"
                        : "text-slate-900",
                    ].join(" ")}
                  >
                    {day.date}
                  </span>
                </div>

                <div className="mt-1">
                  <span
                    className={[
                      "block font-bold leading-tight",
                      "text-[11px] sm:text-sm",
                      isToday ? "text-blue-700" : "text-blue-600",
                    ].join(" ")}
                  >
                    {day.mbumDay}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
