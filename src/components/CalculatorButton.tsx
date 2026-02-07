import { Button } from "./ui/button"
import { LucideIcon } from "lucide-react"

interface CalculatorButtonProps {
  label: string
  onClick: () => void
  variant?: "default" | "operator" | "equals" | "clear" | "backspace"
  icon?: LucideIcon
  ariaLabel: string
}

export function CalculatorButton({ 
  label, 
  onClick, 
  variant = "default",
  icon: Icon,
  ariaLabel 
}: CalculatorButtonProps) {
  const baseClasses = "h-16 text-xl font-semibold rounded-lg transition-all duration-150"
  
  const variantClasses = {
    default: "bg-gray-700 hover:bg-gray-600 text-white active:bg-gray-500",
    operator: "bg-blue-500 hover:bg-blue-600 text-white active:bg-blue-400",
    equals: "bg-purple-500 hover:bg-purple-600 text-white active:bg-purple-400",
    clear: "bg-red-500 hover:bg-red-600 text-white active:bg-red-400",
    backspace: "bg-orange-500 hover:bg-orange-600 text-white active:bg-orange-400"
  }

  return (
    <Button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} w-full`}
      aria-label={ariaLabel}
    >
      {Icon ? <Icon className="w-6 h-6" /> : label}
    </Button>
  )
}