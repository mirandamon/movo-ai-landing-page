"use client"

import { useState } from "react"

interface Call {
  academy: string
  location: string
  time: string
}

export function LiveCalls() {
  const [calls, setCalls] = useState<Call[]>([
    { academy: "MPAC Sports", location: "Dubai", time: "2m ago" },
    { academy: "Falcon Academy", location: "London", time: "5m ago" },
    { academy: "Elite Basketball", location: "Los Angeles", time: "8m ago" },
    { academy: "Champions Club", location: "Dubai", time: "12m ago" },
  ])

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-center mb-4 text-foreground">
            Real Calls Happening Now
          </h2>
          <p className="text-center text-muted-foreground mb-12">Live activity from sports academies using Movo AI</p>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              {calls.map((call, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div>
                      <div className="font-semibold text-foreground">{call.academy}</div>
                      <div className="text-sm text-muted-foreground">{call.location}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{call.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
