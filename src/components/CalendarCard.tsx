import { MonthData } from "../types/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

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

export default function CalendarCard({ data }: CalendarCardProps) {
  // Get the day of the week for the 1st of the month (0 = Sunday, 6 = Saturday)
  const firstDayIndex = new Date(data.year, data.monthIndex, 1).getDay()
  
  // Get today's date string for highlighting
  const todayStr = new Date().toISOString().split('T')[0]

  // Retrieve the description for the current month
  const description = MONTH_DESCRIPTIONS[data.name]

  return (
    <Card className="w-full max-w-lg shadow-xl border-0 overflow-hidden">
      <CardHeader className="bg-slate-900 text-white rounded-t-lg pb-4">
        <CardTitle className="text-center text-xl font-semibold tracking-wide">
          {data.name} {data.year}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Month Description */}
        <div className="px-4 py-3 bg-white border-b border-slate-100">
          <p className="text-center text-2xl font-bold text-red-600">
            {description}
          </p>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 bg-slate-50">
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
            <div
              key={day}
              className="py-2 text-center text-xs font-semibold text-slate-500 border border-black/10 rounded-md"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 bg-white">
          {/* Empty cells for days before the 1st */}
          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div key={`empty-${i}`} className="bg-white min-h-28 p-2 border border-black/10 rounded-md" />
          ))}

          {/* Render Days */}
          {data.days.map((day) => {
            const isToday = day.fullDate === todayStr
            
            return (
              <div
                key={day.fullDate}
                className={`
                  bg-white min-h-28 p-2 flex flex-col justify-between 
                  border border-black/10 rounded-md
                  transition-colors duration-200
                  ${isToday ? 'bg-blue-50 border-blue-200' : 'hover:bg-slate-50'}
                `}
              >
                <span className={`
                  text-base font-medium
                  ${isToday ? 'bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full' : 'text-slate-900'}
                `}>
                  {day.date}
                </span>
                <div className="mt-1">
                  <span className={`
                    text-sm font-bold block mb-0.5
                    ${isToday ? 'text-blue-700' : 'text-blue-600'}
                  `}>
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