"use client"

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PortalHeaderProps {
  title: string
}

export function PortalHeader({ title }: PortalHeaderProps) {
  return (
    <div className="border-b border-gray-200 bg-white px-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex items-center gap-4">
          <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm">
            <option>Filter by line</option>
          </select>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Calendar className="h-4 w-4" />
            May 18, 2025 - May 24, 2025
          </Button>
          <div className="text-right">
            <div className="text-sm font-semibold">Movo</div>
          </div>
        </div>
      </div>
    </div>
  )
}
