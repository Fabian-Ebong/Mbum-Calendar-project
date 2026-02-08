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
    <Card
      className={[
        "w-full max-w-6xl overflow-hidden",
        "rounded-2xl",
        // Stronger boundary (ring) + real shadow depth
        "ring-1 ring-slate-300/70",
        "shadow-[0_25px_70px_rgba(15,23,42,0.35)]",
        // Subtle gradient surface
        "bg-gradient-to-b from-white to-slate-50",
      ].join(" ")}
    >
      <CardHeader className="bg-slate-900 text-white pb-4 border-b border-slate-800 shadow-[inset_0_-2px_0_rgba(255,255,255,0.08)]">
        <CardTitle className="text-center text-lg sm:text-xl font-semibold tracking-wide">
          {data.name} {data.year}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        {/* Month Description */}
        <div className="px-3 sm:px-4 py-3 bg-white border-b border-slate-200">
          <p className="text-center text-xl sm:text-2xl font-bold text-red-600 break-words">
            {description}
          </p>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 bg-slate-100 border-b border-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(15,23,42,0.15)]">
          {WEEKDAYS_FULL.map((day, i) => (
            <div
              key={day}
              className={[
                "py-2 text-center text-[10px] sm:text-xs font-bold text-slate-700",
                "border-r border-slate-300 last:border-r-0",
              ].join(" ")}
              title={day}
            >
              <span className="sm:hidden">{WEEKDAYS_SHORT[i]}</span>
              <span className="hidden sm:inline">{day}</span>
            </div>
          ))}
        </div>

        {/* Calendar Grid (framed + gaps between tiles) */}
        <div
          className={[
            "grid grid-cols-7",
            // gaps create clear boundaries and a tile look
            "gap-[3px] sm:gap-1",
            // frame behind tiles
            "bg-slate-300/70",
            "p-[3px] sm:p-1",
            "rounded-xl",
            // inset frame depth
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(15,23,42,0.18)]",
          ].join(" ")}
        >
          {/* Empty cells before first day */}
          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className={[
                "min-h-[74px] sm:min-h-28",
                // tile shape
                "rounded-lg",
                // subtle bevel
                "bg-gradient-to-b from-white to-slate-50",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]",
              ].join(" ")}
            />
          ))}

          {/* Days */}
          {data.days.map((day) => {
            const isToday = day.fullDate === todayStr

            return (
              <div
                key={day.fullDate}
                className={[
                  "min-h-[74px] sm:min-h-28",
                  "rounded-lg",
                  "p-2 flex flex-col justify-between",
                  // tile bevel + depth
                  "bg-gradient-to-b from-white to-slate-50",
                  "shadow-[0_4px_10px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]",
                  "transition-all duration-200",
                  isToday
                    ? "bg-blue-50 ring-2 ring-blue-400/50 shadow-[0_18px_45px_rgba(37,99,235,0.28),inset_0_1px_0_rgba(255,255,255,0.95)]"
                    : "hover:-translate-y-[2px] hover:shadow-[0_16px_30px_rgba(15,23,42,0.20),inset_0_1px_0_rgba(255,255,255,0.95)]",
                ].join(" ")}
              >
                {/* Date number */}
                <span
                  className={[
                    "text-sm sm:text-base font-semibold",
                    isToday
                      ? "bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full animate-pulse shadow-[0_6px_16px_rgba(37,99,235,0.35)]"
                      : "text-slate-900",
                  ].join(" ")}
                >
                  {day.date}
                </span>

                {/* Mbum day name */}
                <span
                  className={[
                    // Bigger base + desktop-only bump
                    "text-[clamp(15px,3.2vw,20px)] sm:text-[clamp(17px,1.6vw,22px)] lg:text-[clamp(20px,1.2vw,26px)]",
                    "font-extrabold tracking-wide leading-tight",
                    // shadow for contrast
                    "drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]",
                    // cultural color
                    getMbumColor(day.mbumDay),
                    // animate on today
                    isToday ? "animate-pulse" : "",
                  ].join(" ")}
                  style={{
                    // white outline for readability
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
