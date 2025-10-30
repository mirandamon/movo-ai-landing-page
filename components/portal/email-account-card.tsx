import { Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmailAccountCardProps {
  name: string
  email: string
  sent: number
  total: number
  status: "Active"
}

export function EmailAccountCard({ name, email, sent, total, status }: EmailAccountCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
      <div className="flex items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium">{name}</span>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">{status}</span>
          </div>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {sent} / {total} emails sent today
        </span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Pencil className="h-4 w-4" />
            Edit
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Trash2 className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      </div>
    </div>
  )
}
