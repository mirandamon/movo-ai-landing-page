import { ExternalLink, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface IntegrationCardProps {
  icon: "outlook" | "gmail" | "email" | "slack" | "hubspot" | "pipedrive" | "salesforce" | "zoho"
  title: string
  description: string
  connected: boolean
  hasCustomize?: boolean
}

const iconMap = {
  outlook: (
    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-white">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 4v16h10V4H7zm5 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
      </svg>
    </div>
  ),
  gmail: (
    <div className="flex h-10 w-10 items-center justify-center rounded bg-red-500 text-white">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    </div>
  ),
  email: (
    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-600 text-white">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    </div>
  ),
  slack: (
    <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-600 text-white">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 15a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-5z" />
      </svg>
    </div>
  ),
  hubspot: (
    <div className="flex h-10 w-10 items-center justify-center rounded bg-orange-500 text-white">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    </div>
  ),
  pipedrive: (
    <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-800 text-white">
      <span className="text-lg font-bold">P</span>
    </div>
  ),
  salesforce: (
    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-white">
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
      </svg>
    </div>
  ),
  zoho: (
    <div className="flex h-10 w-10 items-center justify-center rounded bg-red-600 text-white">
      <span className="text-lg font-bold">Z</span>
    </div>
  ),
}

export function IntegrationCard({ icon, title, description, connected, hasCustomize }: IntegrationCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-4">
        {iconMap[icon]}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{title}</h3>
            {connected && <div className="h-2 w-2 rounded-full bg-green-500" />}
            <ExternalLink className="h-4 w-4 text-gray-400" />
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {hasCustomize && (
          <Button variant="outline" size="sm">
            Customize
          </Button>
        )}
        {!connected && (
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200">
            <Plus className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  )
}
