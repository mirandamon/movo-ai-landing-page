export function LiveCallsFeed() {
  const calls = [
    { academy: "Elite Basketball Academy", location: "Los Angeles", time: "2 min ago", type: "Registration" },
    { academy: "Champions Soccer Club", location: "Miami", time: "4 min ago", type: "Schedule inquiry" },
    { academy: "ProSwim Academy", location: "Austin", time: "6 min ago", type: "Payment link" },
    { academy: "Victory Tennis Center", location: "Seattle", time: "8 min ago", type: "Program details" },
    { academy: "Peak Performance Gym", location: "Denver", time: "11 min ago", type: "Class availability" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Real Calls Happening Now</h2>
          <p className="text-lg text-muted-foreground">
            Movo is answering calls for sports academies across the country — right now.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {calls.map((call, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <div className="font-medium">{call.academy}</div>
                  <div className="text-sm text-muted-foreground">{call.location}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{call.type}</div>
                <div className="text-xs text-muted-foreground">{call.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
