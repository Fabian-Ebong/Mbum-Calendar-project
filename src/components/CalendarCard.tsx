
// import { MonthData } from "../types/calendar"
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

// interface CalendarCardProps {
//   data: MonthData
// }

// const MONTH_DESCRIPTIONS: Record<string, string> = {
//   January: "Ŋwɛɛ Ŋkàr Bkwâa",
//   February: "Ŋwɛɛ Ntòo Bfòo",
//   March: "Ŋwɛɛ Mbèŋ",
//   April: "Ŋwɛɛ Msuu",
//   May: "Ŋwɛɛ Nsʉsi Bkwâa",
//   June: "Ŋwɛɛ Ncoʼ Mkuu",
//   July: "Ŋwɛɛ Nye Bkwâa",
//   August: "Ŋwɛɛ Ŋkep Bkwâa",
//   September: "Ŋwɛɛ Ncoʼ Berɛŋ",
//   October: "Ŋwɛɛ Saa",
//   November: "Ŋwɛɛ Lùu",
//   December: "Ŋwɛɛ Ŋkàʼ",
// }

// // 8 Mbum days = 8 columns
// const MBUM_HEADERS = [
//   "Mrù'",
//   "Ndʉŋ",
//   "Ŋgàŋ",
//   "Ntaala'",
//   "Sèŋ",
//   "Lì",
//   "Ŋkapyè",
//   "Yè",
// ]

// const MBUM_HEADER_COLORS: Record<string, string> = {
//   "Mrù'": "text-purple-700",
//   "Ndʉŋ": "text-red-700",
//   "Ŋgàŋ": "text-emerald-700",
//   "Ntaala'": "text-indigo-700",
//   "Sèŋ": "text-rose-700",
//   "Lì": "text-amber-700",
//   "Ŋkapyè": "text-teal-700",
//   "Yè": "text-blue-700",
// }

// export default function CalendarCard({ data }: CalendarCardProps) {
//   const firstMbumIndex = data.days[0]?.mbumIndex ?? 0
//   const todayStr = new Date().toISOString().split("T")[0]
//   const description = MONTH_DESCRIPTIONS[data.name]

//   return (
//     <Card className="w-full max-w-7xl rounded-2xl overflow-hidden ring-1 ring-slate-300 shadow-[0_30px_80px_rgba(15,23,42,0.45)] bg-gradient-to-b from-white to-slate-50">
//       <CardHeader className="bg-slate-900 text-white pb-4 border-b border-slate-600 shadow-[inset_0_-2px_0_rgba(255,255,255,0.08)]">
//         <CardTitle className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white break-words">
//           {description}{" "}
//           <span className="italic">({data.name})</span>{" "}
//           {data.year}

//           <span className="block mt-1 text-lg sm:text-xl font-medium text-slate-300 italic">
//             Mbum week has 8 days, begins on Mrù' and ends on Yè.
//           </span>
//         </CardTitle>
//       </CardHeader>

//       <CardContent className="p-0">
//         {/* Premium Mbum headers */}
//         <div className="grid grid-cols-8 bg-gradient-to-b from-slate-50 to-slate-200 border-b border-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
//           {MBUM_HEADERS.map((day) => (
//             <div
//               key={day}
//               className="py-3 px-1 text-center border-r border-slate-300 last:border-r-0"
//               title={day}
//             >
//               <span
//                 className={[
//                   "inline-block px-3 py-1 rounded-full bg-white shadow-sm",
//                   "text-xs sm:text-sm lg:text-base font-extrabold tracking-wide",
//                   MBUM_HEADER_COLORS[day],
//                   day === "Mrù'" ? "ring-2 ring-purple-300 shadow-md" : "",
//                 ].join(" ")}
//               >
//                 {day}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Calendar grid */}
//         <div className="grid grid-cols-8 gap-[3px] sm:gap-1 bg-slate-300/70 p-[3px] sm:p-1 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(15,23,42,0.18)]">
//           {/* Empty cells before first day */}
//           {Array.from({ length: firstMbumIndex }).map((_, i) => (
//             <div
//               key={`empty-${i}`}
//               className="min-h-[86px] sm:min-h-32 rounded-lg bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
//             />
//           ))}

//           {/* Date cells */}
//           {data.days.map((day) => {
//             const isToday = day.fullDate === todayStr

//             return (
//               <div
//                 key={day.fullDate}
//                 className={[
//                   "min-h-[86px] sm:min-h-32 rounded-lg p-2 flex flex-col justify-between",
//                   "bg-white",
//                   "shadow-[0_4px_10px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]",
//                   "transition-all duration-200",
//                   isToday
//                     ? "ring-2 ring-blue-400 shadow-[0_18px_45px_rgba(37,99,235,0.30)]"
//                     : "hover:-translate-y-[2px] hover:shadow-[0_16px_30px_rgba(15,23,42,0.20)]",
//                 ].join(" ")}
//               >
//                 <div className="flex items-start justify-between gap-1">
//                   {/* Gregorian date */}
//                   <span
//                     className={[
//                       "text-sm sm:text-base font-semibold",
//                       isToday
//                         ? "bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full animate-pulse"
//                         : "text-slate-900",
//                     ].join(" ")}
//                   >
//                     {day.date}
//                   </span>

//                   {/* English weekday */}
//                   <span className="text-[10px] sm:text-xs font-medium text-slate-500 text-right leading-tight">
//                     {day.englishDay}
//                   </span>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

import { MonthData } from "../types/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

interface CalendarCardProps {
  data: MonthData
}

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

const MBUM_HEADERS = [
  "Mrù'",
  "Ndʉŋ",
  "Ŋgàŋ",
  "Ntaala'",
  "Sèŋ",
  "Lì",
  "Ŋkapyè",
  "Yè",
]

const MBUM_HEADER_COLORS: Record<string, string> = {
  "Mrù'": "text-purple-700",
  "Ndʉŋ": "text-red-700",
  "Ŋgàŋ": "text-emerald-700",
  "Ntaala'": "text-indigo-700",
  "Sèŋ": "text-rose-700",
  "Lì": "text-amber-700",
  "Ŋkapyè": "text-teal-700",
  "Yè": "text-blue-700",
}

export default function CalendarCard({ data }: CalendarCardProps) {
  const firstMbumIndex = data.days[0]?.mbumIndex ?? 0
  const todayStr = new Date().toISOString().split("T")[0]
  const description = MONTH_DESCRIPTIONS[data.name]

  return (
    <Card className="w-full max-w-7xl rounded-2xl overflow-hidden ring-1 ring-slate-300 shadow-[0_30px_80px_rgba(15,23,42,0.45)] bg-gradient-to-b from-white to-slate-50">
      <CardHeader className="bg-slate-900 text-white pb-4 border-b border-slate-600 shadow-[inset_0_-2px_0_rgba(255,255,255,0.08)]">
        <CardTitle className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white break-words">
          {description}{" "}
          <span className="italic">({data.name})</span>{" "}
          {data.year}

          <span className="block mt-1 text-lg sm:text-xl font-medium text-slate-300 italic">
            Mbum week has 8 days, begins on Mrù' and ends on Yè.
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        {/* Premium Mbum headers */}
        <div className="grid grid-cols-8 bg-gradient-to-b from-slate-50 to-slate-200 border-b border-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          {MBUM_HEADERS.map((day) => (
            <div
              key={day}
              className="py-3 px-1 text-center border-r border-slate-300 last:border-r-0"
              title={day}
            >
              <span
                className={[
                  "inline-block px-3 py-1 rounded-full bg-white shadow-sm",
                  "text-xs sm:text-sm lg:text-base font-extrabold tracking-wide",
                  MBUM_HEADER_COLORS[day],
                  day === "Mrù'" ? "ring-2 ring-purple-300 shadow-md" : "",
                ].join(" ")}
              >
                {day}
              </span>
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-8 gap-[3px] sm:gap-1 bg-slate-300/70 p-[3px] sm:p-1 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(15,23,42,0.18)]">
          {/* Empty cells before first day */}
          {Array.from({ length: firstMbumIndex }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="min-h-[86px] sm:min-h-32 rounded-lg bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
            />
          ))}

          {/* Date cells */}
          {data.days.map((day) => {
            const isToday = day.fullDate === todayStr
            const isMbumWeekStart = day.mbumIndex === 0 // Mrù'

            return (
              <div
                key={day.fullDate}
                className={[
                  "relative min-h-[86px] sm:min-h-32 rounded-lg p-2 flex flex-col justify-between",
                  "bg-white",
                  "shadow-[0_4px_10px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]",
                  "transition-all duration-200",
                  // Strong visual start of a new Mbum week
                  isMbumWeekStart
                    ? "ring-2 ring-purple-300 border-l-4 border-l-purple-500"
                    : "",
                  isToday
                    ? "ring-2 ring-blue-400 shadow-[0_18px_45px_rgba(37,99,235,0.30)]"
                    : "hover:-translate-y-[2px] hover:shadow-[0_16px_30px_rgba(15,23,42,0.20)]",
                ].join(" ")}
              >
                {/* Start-of-week flag */}
                {isMbumWeekStart && (
                  <span className="absolute top-1 left-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-purple-600">
                    Mrù'
                  </span>
                )}

                <div className="flex items-start justify-between gap-1">
                  {/* Gregorian date */}
                  <span
                    className={[
                      "text-sm sm:text-base font-semibold",
                      isToday
                        ? "bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full animate-pulse"
                        : "text-slate-900",
                    ].join(" ")}
                  >
                    {day.date}
                  </span>

                  {/* English weekday */}
                  <span className="text-[10px] sm:text-xs font-medium text-slate-500 text-right leading-tight">
                    {day.englishDay}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mbum week legend */}
        <div className="mt-6 flex flex-col items-center gap-2 text-sm sm:text-base text-slate-600 px-3 pb-4">
          <span className="font-semibold text-slate-700">
            Mbum Week Cycle
          </span>

          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-semibold shadow-sm">
              Mrù'
            </span>
            <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold shadow-sm">
              Ndʉŋ
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold shadow-sm">
              Ŋgàŋ
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold shadow-sm">
              Ntaala'
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 font-semibold shadow-sm">
              Sèŋ
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-semibold shadow-sm">
              Lì
            </span>
            <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 font-semibold shadow-sm">
              Ŋkapyè
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold shadow-sm">
              Yè
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}