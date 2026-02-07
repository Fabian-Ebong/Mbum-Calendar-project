import * as React from "react"

type Variant = "default" | "ghost"
type Size = "default" | "icon"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors " +
    "focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50 disabled:pointer-events-none"

  const variants: Record<Variant, string> = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-900",
  }

  const sizes: Record<Size, string> = {
    default: "h-10 px-4 py-2",
    icon: "h-10 w-10",
  }

  return (
    <button
      className={[base, variants[variant], sizes[size], className].join(" ")}
      {...props}
    />
  )
}
