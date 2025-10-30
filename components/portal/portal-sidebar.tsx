"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, Users, Phone, BookOpen, Settings, LogOut, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/portal", icon: LayoutDashboard },
  { name: "Customers", href: "/portal/customers", icon: Users },
  { name: "Calls", href: "/portal/calls", icon: Phone },
  { name: "Programs", href: "/portal/programs", icon: BookOpen },
  { name: "Knowledge", href: "/portal/knowledge", icon: BookOpen },
  { name: "Settings", href: "/portal/settings", icon: Settings },
]

export function PortalSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("portal_authenticated")
    router.push("/portal/login")
  }

  return (
    null
  )
}
