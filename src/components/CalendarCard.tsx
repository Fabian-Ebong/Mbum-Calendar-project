// import { MonthData } from "../types/calendar"
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

// interface CalendarCardProps {
//   data: MonthData
// }

// // Mapping of English month names to Mbum descriptions
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

// const WEEKDAYS_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const WEEKDAYS_SHORT = ["S", "M", "T", "W", "T", "F", "S"]

// // Subtle week-block tints (repeats as blocks progress)
// const MBUM_BLOCK_TINTS = [
//   "bg-slate-50",
//   "bg-blue-50",
//   "bg-emerald-50",
//   "bg-amber-50",
//   "bg-rose-50",
//   "bg-indigo-50",
// ] as const

// function getBlockTint(mbumBlock: number) {
//   const i = ((mbumBlock % MBUM_BLOCK_TINTS.length) + MBUM_BLOCK_TINTS.length) % MBUM_BLOCK_TINTS.length
//   return MBUM_BLOCK_TINTS[i]
// }

// // Cultural color coding for Mbum days
// const MBUM_DAY_COLORS: Record<string, string> = {
//   "Ŋgàŋ": "text-emerald-700",
//   "Ntaala'": "text-indigo-700",
//   "Sèŋ": "text-rose-700",
//   "Lì": "text-amber-700",
//   "ŋkapyè": "text-teal-700",
//   "Yè": "text-blue-700",
//   "Mrù'": "text-purple-700",
//   "Ndʉŋ": "text-red-700",
// }

// function getMbumColor(mbumDay: string) {
//   return MBUM_DAY_COLORS[mbumDay.trim()] ?? "text-blue-700"
// }

// export default function CalendarCard({ data }: CalendarCardProps) {
//   const firstDayIndex = new Date(data.year, data.monthIndex, 1).getDay()
//   const todayStr = new Date().toISOString().split("T")[0]
//   const description = MONTH_DESCRIPTIONS[data.name]

//   return (
//     <Card
//       className={[
//         "w-full max-w-6xl overflow-hidden",
//         "rounded-2xl",
//         // Stronger boundary (ring) + real shadow depth
//         "ring-1 ring-slate-300/70",
//         "shadow-[0_25px_70px_rgba(15,23,42,0.35)]",
//         // Subtle gradient surface
//         "bg-gradient-to-b from-white to-slate-50",
//       ].join(" ")}
//       > {/* Header title layout: Displays the Mbum month description, English month (in italics), and year. All text stays on a single line for visual cohesion
//         - Uses bold white text for prominence against the dark header
//       */}
//       <CardHeader className="bg-slate-900 text-white pb-4 border-b border-slate-600 shadow-[inset_0_-2px_0_rgba(255,255,255,0.08)]">
//         <CardTitle className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white break-words">
//             {description}{" "}
//             <span className="italic">
//               ({data.name})
//             </span>{" "}
//             {data.year}

//             {/* Mbum week explanation */}
//             <span className="block mt-1 text-lg sm:text-xl font-medium text-slate-300 italic">
//               Mbum week has 8 days, begins on Mrù' and ends on Yè.
//             </span>
//         </CardTitle>
//       </CardHeader>

//       <CardContent className="p-0">
//         {/* Weekday Headers */}
//         <div className="grid grid-cols-7 bg-slate-100 border-b border-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(15,23,42,0.15)]">
//           {WEEKDAYS_FULL.map((day, i) => (
//             <div
//               key={day}
//               className={[
//                 "py-2 text-center text-[10px] sm:text-xs font-bold text-slate-700",
//                 "border-r border-slate-300 last:border-r-0",
//               ].join(" ")}
//               title={day}
//             >
//               <span className="sm:hidden">{WEEKDAYS_SHORT[i]}</span>
//               <span className="hidden sm:inline">{day}</span>
//             </div>
//           ))}
//         </div>

//         {/* Calendar Grid (framed + gaps between tiles) */}
//         <div
//           className={[
//             "grid grid-cols-7",
//             // gaps create clear boundaries and a tile look
//             "gap-[3px] sm:gap-1",
//             // frame behind tiles
//             "bg-slate-300/70",
//             "p-[3px] sm:p-1",
//             "rounded-xl",
//             // inset frame depth
//             "shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(15,23,42,0.18)]",
//           ].join(" ")}
//         >
//           {/* Empty cells before first day */}
//           {Array.from({ length: firstDayIndex }).map((_, i) => (
//             <div
//               key={`empty-${i}`}
//               className={[
//                 "min-h-[74px] sm:min-h-28",
//                 // tile shape
//                 "rounded-lg",
//                 // subtle bevel
//                 "bg-gradient-to-b from-white to-slate-50",
//                 "shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]",
//               ].join(" ")}
//             />
//           ))}

//           {/* Days */}
//           {data.days.map((day) => {
//             const isToday = day.fullDate === todayStr
//             const blockTint = getBlockTint(day.mbumBlock)

//             return (
//               <div
//                 key={day.fullDate}
//                 className={[
//                   "min-h-[74px] sm:min-h-28 rounded-lg p-2 flex flex-col justify-between",
//                   blockTint, // ✅ one tint per 8-day block
//                   // ✅ gradient overlay that DOES NOT kill the tint
//                   "bg-gradient-to-b from-white/40 to-transparent",
//                   // tile depth
//                   "shadow-[0_4px_10px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]",
//                   "transition-all duration-200",
//                   isToday
//                     ? "ring-2 ring-blue-400/70 shadow-[0_18px_45px_rgba(37,99,235,0.30),inset_0_1px_0_rgba(255,255,255,0.95)]"
//                     : "hover:-translate-y-[2px] hover:shadow-[0_16px_30px_rgba(15,23,42,0.20),inset_0_1px_0_rgba(255,255,255,0.95)]",
//                 ].join(" ")}
//               >
//                 {/* Date number */}
//                 <span
//                   className={[
//                     "text-sm sm:text-base font-semibold",
//                     isToday
//                       ? "bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full animate-pulse shadow-[0_6px_16px_rgba(37,99,235,0.35)]"
//                       : "text-slate-900",
//                   ].join(" ")}
//                 >
//                   {day.date}
//                 </span>

//                 {/* Mbum day name */}
//                 <span
//                   className={[
//                     // Bigger base + desktop-only bump
//                     "text-[clamp(15px,3.2vw,20px)] sm:text-[clamp(17px,1.6vw,22px)] lg:text-[clamp(20px,1.2vw,26px)]",
//                     "font-extrabold tracking-wide leading-tight",
//                     // shadow for contrast
//                     "drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]",
//                     // cultural color
//                     getMbumColor(day.mbumDay),
//                     // animate on today
//                     isToday ? "animate-pulse" : "",
//                   ].join(" ")}
//                   style={{
//                     // white outline for readability
//                     textShadow:
//                       "0 1px 0 rgba(255,255,255,0.95), 0 -1px 0 rgba(255,255,255,0.95), 1px 0 0 rgba(255,255,255,0.95), -1px 0 0 rgba(255,255,255,0.95)",
//                   }}
//                 >
//                   {day.mbumDay}
//                 </span>
//               </div>
//             )
//           })}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// New code for 8 days column//

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

// // 8-column Mbum week headers
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

// const MBUM_BLOCK_TINTS = [
//   "bg-slate-50",
//   "bg-blue-50",
//   "bg-emerald-50",
//   "bg-amber-50",
//   "bg-rose-50",
//   "bg-indigo-50",
// ] as const

// function getBlockTint(mbumBlock: number) {
//   const i =
//     ((mbumBlock % MBUM_BLOCK_TINTS.length) + MBUM_BLOCK_TINTS.length) %
//     MBUM_BLOCK_TINTS.length
//   return MBUM_BLOCK_TINTS[i]
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
//         {/* 8-column Mbum headers */}
//         <div className="grid grid-cols-8 bg-slate-100 border-b border-slate-300">
//           {MBUM_HEADERS.map((day) => (
//             <div
//               key={day}
//               className="py-2 px-1 text-center text-[11px] sm:text-sm font-bold text-slate-700 border-r border-slate-300 last:border-r-0"
//               title={day}
//             >
//               {day}
//             </div>
//           ))}
//         </div>

//         {/* 8-column calendar grid */}
//         <div className="grid grid-cols-8 gap-[3px] sm:gap-1 bg-slate-300/70 p-[3px] sm:p-1 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(15,23,42,0.18)]">
//           {/* Empty cells before first day based on Mbum index */}
//           {Array.from({ length: firstMbumIndex }).map((_, i) => (
//             <div
//               key={`empty-${i}`}
//               className="min-h-[86px] sm:min-h-32 rounded-lg bg-gradient-to-b from-white to-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
//             />
//           ))}

//           {/* Days */}
//           {data.days.map((day) => {
//             const isToday = day.fullDate === todayStr
//             const blockTint = getBlockTint(day.mbumBlock)

//             return (
//               <div
//                 key={day.fullDate}
//                 className={[
//                   "min-h-[86px] sm:min-h-32 rounded-lg p-2 flex flex-col justify-between",
//                   blockTint,
//                   "bg-gradient-to-b from-white/40 to-transparent",
//                   "shadow-[0_4px_10px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]",
//                   "transition-all duration-200",
//                   isToday
//                     ? "ring-2 ring-blue-400/70 shadow-[0_18px_45px_rgba(37,99,235,0.30),inset_0_1px_0_rgba(255,255,255,0.95)]"
//                     : "hover:-translate-y-[2px] hover:shadow-[0_16px_30px_rgba(15,23,42,0.20),inset_0_1px_0_rgba(255,255,255,0.95)]",
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

// 8 Mbum days = 8 columns
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

        {/* Mbum headers */}
        <div className="grid grid-cols-8 bg-slate-100 border-b border-slate-300">
          {MBUM_HEADERS.map((day) => (
            <div
              key={day}
              className="py-2 px-1 text-center text-[11px] sm:text-sm font-bold text-slate-700 border-r border-slate-300 last:border-r-0"
            >
              {day}
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

            return (
              <div
                key={day.fullDate}
                className={[
                  "min-h-[86px] sm:min-h-32 rounded-lg p-2 flex flex-col justify-between",
                  "bg-white",
                  "shadow-[0_4px_10px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]",
                  "transition-all duration-200",
                  isToday
                    ? "ring-2 ring-blue-400 shadow-[0_18px_45px_rgba(37,99,235,0.30)]"
                    : "hover:-translate-y-[2px] hover:shadow-[0_16px_30px_rgba(15,23,42,0.20)]",
                ].join(" ")}
              >
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

      </CardContent>
    </Card>
  )
}