import { Users, Calendar, Clock } from "lucide-react"

interface Badge {
  label: string
  count: number
  variant: "blue" | "yellow" | "red"
}

interface MetricCardProps {
  title: string
  value: string
  icon: "users" | "calendar" | "clock"
  badges?: Badge[]
}

const icons = {
  users: Users,
  calendar: Calendar,
  clock: Clock,
}

const badgeStyles = {
  blue: "bg-blue-100 text-blue-700",
  yellow: "bg-yellow-100 text-yellow-700",
  red: "bg-red-100 text-red-700",
}

export function MetricCard({ title, value, icon, badges }: MetricCardProps) {
  const Icon = icons[icon]

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <Icon className="h-4 w-4 text-gray-400" />
      </div>
      <div className="text-3xl font-bold">{value}</div>
      {badges && (
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className={`rounded-full px-3 py-1 text-xs font-medium ${badgeStyles[badge.variant]}`}
            >
              {badge.count} {badge.label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
