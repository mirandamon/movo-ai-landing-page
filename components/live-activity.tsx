"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MapPin, Clock } from "lucide-react"
import { useEffect, useState } from "react"

const activities = [
  { location: "Charlotte", service: "Oil Change", rating: 4, duration: "4m 35s" },
  { location: "Denver", service: "Tire Rotation", rating: 5, duration: "3m 12s" },
  { location: "Austin", service: "Brake Inspection", rating: 5, duration: "5m 48s" },
  { location: "Seattle", service: "Battery Check", rating: 4, duration: "2m 56s" },
  { location: "Miami", service: "Alignment", rating: 5, duration: "6m 22s" },
  { location: "Boston", service: "Fluid Top-off", rating: 4, duration: "3m 45s" },
]

export function LiveActivity() {
  const [visibleActivities, setVisibleActivities] = useState(activities.slice(0, 3))

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleActivities((prev) => {
        const newActivities = [...prev]
        newActivities.shift()
        newActivities.push(activities[Math.floor(Math.random() * activities.length)])
        return newActivities
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Real Calls Happening Now</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            See how AutoFlow handles customer calls in real-time across dealerships nationwide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {visibleActivities.map((activity, index) => (
            <Card
              key={`${activity.location}-${index}`}
              className="p-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-muted-foreground">Someone from</span>
                      <span className="font-semibold">{activity.location}</span>
                      <span className="text-sm text-muted-foreground">just called about</span>
                    </div>
                    <div className="text-lg font-semibold mb-2">{activity.service}</div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {activity.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{activity.rating} / 5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                  <CheckCircle2 className="h-3 w-3" />
                  Resolved
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
