export function RevenueSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-muted/30 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 border border-border/50">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 md:mb-8 text-foreground leading-tight text-balance">
                Your phones never stop ringing.
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
                  Parents call when you're coaching, traveling, or closed.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
                  Each call is a potential registration or renewal — but half never reach you.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
                  Those are lost seats, lost revenue, and lost trust.
                </p>
                <div className="pt-2">
                  <button className="bg-foreground text-background px-8 py-3 rounded-full font-sans font-semibold text-base hover:opacity-90 transition-opacity">
                    Talk to Movo
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-8 pl-6 border-l-4 border-accent/40"></div>
            </div>

            {/* Right side - Live calls feed */}
            <div className="md:order-last">
              <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-sans font-bold mb-2 text-foreground">Most parents call after 5 p.m.</h3>
                  <p className="text-sm text-muted-foreground">Real Calls Happening Now</p>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      academy: "Elite Basketball Academy",
                      location: "Los Angeles",
                      time: "2 min ago",
                      type: "Registration",
                    },
                    {
                      academy: "Champions Soccer Club",
                      location: "Miami",
                      time: "4 min ago",
                      type: "Schedule inquiry",
                    },
                    { academy: "ProSwim Academy", location: "Austin", time: "6 min ago", type: "Payment link" },
                    {
                      academy: "Victory Tennis Center",
                      location: "Seattle",
                      time: "8 min ago",
                      type: "Program details",
                    },
                    {
                      academy: "Peak Performance Gym",
                      location: "Denver",
                      time: "11 min ago",
                      type: "Class availability",
                    },
                  ].map((call, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <div>
                          <div className="font-medium text-sm">{call.academy}</div>
                          <div className="text-xs text-muted-foreground">{call.location}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium">{call.type}</div>
                        <div className="text-xs text-muted-foreground">{call.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
