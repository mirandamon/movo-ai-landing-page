import { SettingsSidebar } from "@/components/portal/settings-sidebar"
import { IntegrationsSection } from "@/components/portal/integrations-section"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-white">
      <SettingsSidebar />
      <div className="flex-1">
        <IntegrationsSection />
      </div>
    </div>
  )
}
