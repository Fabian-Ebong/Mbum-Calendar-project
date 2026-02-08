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

// Cultural color coding for Mbum days
const MBUM_DAY_COLORS: Record<string, string> = {
  "Ŋgàŋ": "text-emerald-700",
  "ŋtaala'": "text-indigo-700",
  "Sèŋ": "text-rose-700",
  "Lì": "text-amber-700",
  "ŋkapyè": "text-teal-700",
  "Yè": "text-blue-700",
  "Mrù'": "text-purple-700",
  "ŋdʉŋ": "text-red-700",
}

function getMbumColor(mbumDay: string) {
  return MBUM_DAY_COLORS[mbumDay.trim()] ?? "text-blue-700"
}

export default function CalendarCard({ data }: CalendarCardProps) {
  const firstDayIndex = new Date(data.year, data.monthIndex, 1).getDay()
  const todayStr = new Date().toISOString().split("T")[0]
  const description = MONTH_DESCRIPTIONS[data.name]

  return (
    <Card className="w-full max-w-6xl shadow-xl border-0 overflow-hidden">
      <CardHeader className="bg-slate-900 text-white pb-4">
        <CardTitle className="text-center text-lg sm:text-xl font-semibold tracking-wide">
          {data.name} {data.year}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        {/* Month Description */}
        <div className="px-3 sm:px-4 py-3 bg-white border-b">
          <p className="text-center text-xl sm:text-2xl font-bold text-red-600 break-words">
            {description}
          </p>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 bg-slate-50 border-b">
          {WEEKDAYS_FULL.map((day, i) => (
            <div
              key={day}
              className="py-2 text-center text-[10px] sm:text-xs font-semibold text-slate-500"
              title={day}
            >
              <span className="sm:hidden">{WEEKDAYS_SHORT[i]}</span>
              <span className="hidden sm:inline">{day}</span>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 bg-white">
          {/* Empty cells before first day */}
          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="min-h-[70px] sm:min-h-28 border"
            />
          ))}

          {/* Days */}
          {data.days.map((day) => {
            const isToday = day.fullDate === todayStr

            return (
              <div
                key={day.fullDate}
                className={[
                  "min-h-[70px] sm:min-h-28 border p-1.5 sm:p-2",
                  "flex flex-col justify-between transition-colors",
                  isToday
                    ? "bg-blue-50 border-blue-300 shadow-[0_0_0_3px_rgba(37,99,235,0.15)]"
                    : "hover:bg-slate-50",
                ].join(" ")}
              >
                {/* Date number */}
                <span
                  className={[
                    "text-sm sm:text-base font-semibold",
                    isToday
                      ? "bg-blue-600 text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full animate-pulse"
                      : "text-slate-900",
                  ].join(" ")}
                >
                  {day.date}
                </span>

                {/* Mbum day name */}
                <span
                  className={[
                    // Auto-scaling font
                    "text-[clamp(15px,3.2vw,20px)] sm:text-[clamp(17px,1.6vw,22px)]",
                    // Bold + spacing
                    "font-extrabold tracking-wide leading-tight",
                    // Shadow for contrast
                    "drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]",
                    // Cultural color
                    getMbumColor(day.mbumDay),
                    // Animate today
                    isToday ? "animate-pulse" : "",
                  ].join(" ")}
                  style={{
                    textShadow:
                      "0 1px 0 rgba(255,255,255,0.95), 0 -1px 0 rgba(255,255,255,0.95), 1px 0 0 rgba(255,255,255,0.95), -1px 0 0 rgba(255,255,255,0.95)",
                  }}
                >
                  {day.mbumDay}
                </span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
