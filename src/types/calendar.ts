export interface DayData {
  date: number
  englishDay: string
  mbumDay: string
  fullDate: string
}

export interface MonthData {
  name: string
  year: number
  monthIndex: number
  days: DayData[]
}