"use client"

import { useState } from "react"

interface CallCard {
  id: number
  location: string
  service: string
  rating: string
  duration: string
  timeAgo: string
  resolved: boolean
}

const mockCalls: CallCard[] = [
  {
    id: 1,
    location: "Antioch",
    service: "Recall Service",
    rating: "3/5",
    duration: "2m 58s",
    timeAgo: "8 months ago",
    resolved: false,
  },
  {
    id: 2,
    location: "Agoura Hills",
    service: "Recall Service",
    rating: "3/5",
    duration: "3m 10s",
    timeAgo: "8 months ago",
    resolved: false,
  },
  {
    id: 3,
    location: "Alameda",
    service: "Brake Inspection",
    rating: "3/5",
    duration: "6m 57s",
    timeAgo: "8 months ago",
    resolved: true,
  },
  {
    id: 4,
    location: "Kennewick",
    service: "Oil Change",
    rating: "2/5",
    duration: "2m 26s",
    timeAgo: "8 months ago",
    resolved: false,
  },
  {
    id: 5,
    location: "Kennewick",
    service: "Battery Replacement",
    rating: "3/5",
    duration: "1m 44s",
    timeAgo: "8 months ago",
    resolved: false,
  },
  {
    id: 6,
    location: "Kennewick",
    service: "Transmission Repair",
    rating: "3/5",
    duration: "3m 26s",
    timeAgo: "8 months ago",
    resolved: false,
  },
  {
    id: 7,
    location: "Bellingham",
    service: "Oil Change",
    rating: "3/5",
    duration: "3m 49s",
    timeAgo: "8 months ago",
    resolved: false,
  },
  {
    id: 8,
    location: "Austin",
    service: "Brake Inspection",
    rating: "3/5",
    duration: "3m 45s",
    timeAgo: "8 months ago",
    resolved: true,
  },
]

export function TomaRealCalls() {
  const [calls, setCalls] = useState(mockCalls)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Real Calls <span className="font-handwriting text-accent">Happening Right Now</span>
            </h2>
          </div>
          <p className="text-muted-foreground">
            These are real calls. Toma analyzes every call and gives you actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {calls.map((call) => (
            <div
              key={call.id}
              className="bg-white border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className={call.resolved ? "text-accent text-sm font-medium" : "text-muted-foreground text-sm"}>
                    {call.resolved ? "✓ Resolved" : "✕ Unresolved"}
                  </span>
                </div>
              </div>

              <p className="text-sm text-foreground mb-2">
                Someone from <span className="font-semibold">{call.location}</span> just called about{" "}
                <span className="font-semibold">a {call.service}</span>
              </p>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="bg-secondary px-2 py-1 rounded">{call.rating}</span>
                <span>{call.duration}</span>
                <span>{call.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
