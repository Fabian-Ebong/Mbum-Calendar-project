

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

// // Hard-coded village assignment by visible cell position (1 village per cell)
// const MBUM_VILLAGES = [
//   "Mbum Villages",
//   "Binshua",
//   "Bongom",
//   "Chup",
//   "Nkambe",
//   "Kungi",
//   "Njap",
//   "Njirong",
//   "Bihnjeng",
//   "Ntumbaw",
//   "Nwangri",
//   "Mbaah",
//   "Mbot",
//   "Saah",
//   "Sop",
//   "Wat",
//   "Bih",
//   "Binka",
//   "Kup",
//   "Ngarum",
//   "Ntundip",
//   "Sinna",
//   "Taku",
//   "Tabenken",
//   "Talla",
//   "Konchep",
//   "Luh",
//   "Mbipgo",
//   "Ndu",
//   "Ngvulu",
//   "Njilah",
//   "Njimnkang",
//   "Nseh-Makop",
//   "Sehn",
//   "Wowo",
//   "NJEB WARR",
//   "NJEB TANG",
//   "NJEB YAA",
//   "MBUM",
//   "ABEE YU NGER",
// ]

// const WARR_VILLAGES = new Set([
//   "Binshua",
//   "Bongom",
//   "Chup",
//   "Nkambe",
//   "Kungi",
//   "Njap",
//   "Njirong",
//   "Bihnjeng",
//   "Ntumbaw",
//   "Nwangri",
//   "Mbaah",
//   "Mbot",
//   "Saah",
//   "Sop",
//   "Wat",
// ])

// const TANG_VILLAGES = new Set([
//   "Bih",
//   "Binka",
//   "Kup",
//   "Ngarum",
//   "Ntundip",
//   "Sinna",
//   "Taku",
//   "Tabenken",
//   "Talla",
// ])

// const YAA_VILLAGES = new Set([
//   "Konchep",
//   "Luh",
//   "Mbipgo",
//   "Ndu",
//   "Ngvulu",
//   "Njilah",
//   "Njimnkang",
//   "Nseh-Makop",
//   "Sehn",
//   "Wowo",
// ])

// const SPECIAL_LABELS = new Set([
//   "Mbum Villages",
//   "NJEB WARR",
//   "NJEB TANG",
//   "NJEB YAA",
//   "MBUM",
//   "ABEE YU NGER",
// ])

// function getVillageForCell(cellIndex: number) {
//   return MBUM_VILLAGES[cellIndex] ?? ""
// }

// function getVillageBadgeClass(village: string) {
//   if (SPECIAL_LABELS.has(village)) {
//     return "bg-slate-900 text-white border border-slate-800"
//   }

//   if (WARR_VILLAGES.has(village)) {
//     return "bg-blue-50 text-blue-800 border border-blue-200"
//   }

//   if (TANG_VILLAGES.has(village)) {
//     return "bg-emerald-50 text-emerald-800 border border-emerald-200"
//   }

//   if (YAA_VILLAGES.has(village)) {
//     return "bg-rose-50 text-rose-800 border border-rose-200"
//   }

//   return "bg-amber-50 text-slate-800 border border-amber-200"
// }

// export default function CalendarCard({ data }: CalendarCardProps) {
//   const firstMbumIndex = data.days[0]?.mbumIndex ?? 0
//   const totalCells = 40 // 8 columns × 5 rows
//   const trailingEmptyCells = Math.max(
//     0,
//     totalCells - (firstMbumIndex + data.days.length)
//   )

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
//           {Array.from({ length: firstMbumIndex }).map((_, i) => {
//             const village = getVillageForCell(i)

//             return (
//               <div
//                 key={`empty-${i}`}
//                 className="min-h-[86px] sm:min-h-32 rounded-lg bg-white p-2 flex flex-col justify-end shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
//               >
//                 {village && (
//                   <span
//                     className={[
//                       "inline-block self-start px-2 py-1 rounded-md shadow-sm",
//                       "text-[11px] sm:text-xs font-extrabold leading-tight",
//                       "max-w-full break-words",
//                       getVillageBadgeClass(village),
//                     ].join(" ")}
//                   >
//                     {village}
//                   </span>
//                 )}
//               </div>
//             )
//           })}

//           {/* Date cells */}
//           {data.days.map((day, index) => {
//             const isToday = day.fullDate === todayStr
//             const cellIndex = firstMbumIndex + index
//             const village = getVillageForCell(cellIndex)

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

//                 {village && (
//                   <span
//                     className={[
//                       "inline-block self-start mt-2 px-2 py-1 rounded-md shadow-sm",
//                       "text-[11px] sm:text-xs font-extrabold leading-tight",
//                       "max-w-full break-words",
//                       getVillageBadgeClass(village),
//                     ].join(" ")}
//                   >
//                     {village}
//                   </span>
//                 )}
//               </div>
//             )
//           })}

//           {/* Empty cells after last day so every month has 8 columns × 5 rows */}
//           {Array.from({ length: trailingEmptyCells }).map((_, i) => {
//             const cellIndex = firstMbumIndex + data.days.length + i
//             const village = getVillageForCell(cellIndex)

//             return (
//               <div
//                 key={`trailing-empty-${i}`}
//                 className="min-h-[86px] sm:min-h-32 rounded-lg bg-white p-2 flex flex-col justify-end shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
//               >
//                 {village && (
//                   <span
//                     className={[
//                       "inline-block self-start px-2 py-1 rounded-md shadow-sm",
//                       "text-[11px] sm:text-xs font-extrabold leading-tight",
//                       "max-w-full break-words",
//                       getVillageBadgeClass(village),
//                     ].join(" ")}
//                   >
//                     {village}
//                   </span>
//                 )}
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

// Hard-coded village assignment by visible cell position (1 village per cell)
const MBUM_VILLAGES = [
  "Mbum Villages",
  "Binshua",
  "Bongom",
  "Chup",
  "Nkambe",
  "Kungi",
  "Njap",
  "Njirong",
  "Bihnjeng",
  "Ntumbaw",
  "Nwangri",
  "Mbaah",
  "Mbot",
  "Saah",
  "Sop",
  "Wat",
  "Bih",
  "Binka",
  "Kup",
  "Ngarum",
  "Ntundip",
  "Sinna",
  "Taku",
  "Tabenken",
  "Talla",
  "Konchep",
  "Luh",
  "Mbipgo",
  "Ndu",
  "Ngvulu",
  "Njilah",
  "Njimnkang",
  "Nseh-Makop",
  "Sehn",
  "Wowo",
  "NJEB WARR",
  "NJEB TANG",
  "NJEB YAA",
  "MBUM",
  "ABEE YU NGER",
]

const WARR_VILLAGES = new Set([
  "Binshua",
  "Bongom",
  "Chup",
  "Nkambe",
  "Kungi",
  "Njap",
  "Njirong",
  "Bihnjeng",
  "Ntumbaw",
  "Nwangri",
  "Mbaah",
  "Mbot",
  "Saah",
  "Sop",
  "Wat",
])

const TANG_VILLAGES = new Set([
  "Bih",
  "Binka",
  "Kup",
  "Ngarum",
  "Ntundip",
  "Sinna",
  "Taku",
  "Tabenken",
  "Talla",
])

const YAA_VILLAGES = new Set([
  "Konchep",
  "Luh",
  "Mbipgo",
  "Ndu",
  "Ngvulu",
  "Njilah",
  "Njimnkang",
  "Nseh-Makop",
  "Sehn",
  "Wowo",
])

function getVillageForCell(cellIndex: number) {
  return MBUM_VILLAGES[cellIndex] ?? ""
}

function getVillageBadgeClass(village: string) {
  if (village === "NJEB WARR") {
    return "bg-blue-100 text-blue-900 border border-blue-300"
  }

  if (village === "NJEB TANG") {
    return "bg-emerald-100 text-emerald-900 border border-emerald-300"
  }

  if (village === "NJEB YAA") {
    return "bg-rose-100 text-rose-900 border border-rose-300"
  }

  if (village === "MBUM" || village === "ABEE YU NGER" || village === "Mbum Villages") {
    return "bg-slate-900 text-white border border-slate-800"
  }

  if (WARR_VILLAGES.has(village)) {
    return "bg-blue-50 text-blue-800 border border-blue-200"
  }

  if (TANG_VILLAGES.has(village)) {
    return "bg-emerald-50 text-emerald-800 border border-emerald-200"
  }

  if (YAA_VILLAGES.has(village)) {
    return "bg-rose-50 text-rose-800 border border-rose-200"
  }

  return "bg-amber-50 text-slate-800 border border-amber-200"
}

export default function CalendarCard({ data }: CalendarCardProps) {
  const firstMbumIndex = data.days[0]?.mbumIndex ?? 0
  const totalCells = 40 // 8 columns × 5 rows
  const trailingEmptyCells = Math.max(
    0,
    totalCells - (firstMbumIndex + data.days.length)
  )

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
          {Array.from({ length: firstMbumIndex }).map((_, i) => {
            const village = getVillageForCell(i)

            return (
              <div
                key={`empty-${i}`}
                className="min-h-[86px] sm:min-h-32 rounded-lg bg-white p-2 flex flex-col justify-end shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
              >
                {village && (
                  <span
                    className={[
                      "inline-block self-start px-2 py-1 rounded-md shadow-sm",
                      "text-[11px] sm:text-xs font-extrabold leading-tight",
                      "max-w-full break-words",
                      getVillageBadgeClass(village),
                    ].join(" ")}
                  >
                    {village}
                  </span>
                )}
              </div>
            )
          })}

          {/* Date cells */}
          {data.days.map((day, index) => {
            const isToday = day.fullDate === todayStr
            const cellIndex = firstMbumIndex + index
            const village = getVillageForCell(cellIndex)

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

                {village && (
                  <span
                    className={[
                      "inline-block self-start mt-2 px-2 py-1 rounded-md shadow-sm",
                      "text-[11px] sm:text-xs font-extrabold leading-tight",
                      "max-w-full break-words",
                      getVillageBadgeClass(village),
                    ].join(" ")}
                  >
                    {village}
                  </span>
                )}
              </div>
            )
          })}

          {/* Empty cells after last day so every month has 8 columns × 5 rows */}
          {Array.from({ length: trailingEmptyCells }).map((_, i) => {
            const cellIndex = firstMbumIndex + data.days.length + i
            const village = getVillageForCell(cellIndex)

            return (
              <div
                key={`trailing-empty-${i}`}
                className="min-h-[86px] sm:min-h-32 rounded-lg bg-white p-2 flex flex-col justify-end shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
              >
                {village && (
                  <span
                    className={[
                      "inline-block self-start px-2 py-1 rounded-md shadow-sm",
                      "text-[11px] sm:text-xs font-extrabold leading-tight",
                      "max-w-full break-words",
                      getVillageBadgeClass(village),
                    ].join(" ")}
                  >
                    {village}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}