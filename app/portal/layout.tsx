import type React from "react"
import { PortalSidebar } from "@/components/portal/portal-sidebar"
import { AuthCheck } from "@/components/portal/auth-check"

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthCheck>
      <div className="flex h-screen bg-gray-50">
        <PortalSidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </AuthCheck>
  )
}
