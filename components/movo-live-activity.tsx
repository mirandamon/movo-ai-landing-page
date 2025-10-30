"use client"

import { useEffect, useState } from "react"

export function MovoLiveActivity() {
  const activities = [
    "Renewal link sent — 2 min ago",
    "New soccer trial booked for Thu 5pm — 4s response",
    "Parent asked about swim lesson fees — SMS link shared",
    "Seat confirmed for U12 Basketball Advanced — Westside location",
    "Sibling discount applied — Registration complete",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [activities.length])

  return (
    <section className="py-8 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium">Live</span>
          </div>
          <div className="text-sm md:text-base font-medium animate-fade-in-up" key={currentIndex}>
            {activities[currentIndex]}
          </div>
        </div>
      </div>
    </section>
  )
}
