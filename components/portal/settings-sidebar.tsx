"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

const navigation = [
  { name: "Account", href: "/portal/settings" },
  { name: "Integrations", href: "/portal/settings/integrations" },
  { name: "Email warmup", href: "/portal/settings/email-warmup" },
  { name: "Team", href: "/portal/settings/team" },
  { name: "Billing", href: "/portal/settings/billing" },
]

export function SettingsSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r border-gray-200 bg-white p-6">
      <div className="mb-8 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-black text-[10px] font-bold text-white">
          Movo
        </div>
      </div>

      <h2 className="mb-6 text-2xl font-semibold">Settings</h2>

      <div className="mb-6">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
      </div>

      <nav className="space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.name === "Integrations" && pathname === "/portal/settings")
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive ? "bg-purple-100 text-purple-700" : "text-gray-700 hover:bg-gray-100",
              )}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>

      <Button variant="outline" className="mt-8 w-full justify-start gap-2 bg-transparent" size="sm">
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  )
}
