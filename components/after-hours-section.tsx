import { Card } from "@/components/ui/card"
import { Phone, Clock, TrendingUp } from "lucide-react"

export function AfterHoursSection() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6 text-balance leading-tight">
              Most parents call at night.
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              The majority of parent inquiries happen after practice hours—evenings, weekends, and late nights. Every
              missed call is a lost enrollment. Movo ensures you never miss an opportunity, no matter when parents reach
              out.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Instant Response, Any Time</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Answer questions about schedules, pricing, and availability—even at 11 PM on a Sunday.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">No More Voicemail Tag</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Parents get immediate answers instead of waiting for callbacks—leading to faster enrollments.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Capture Every Lead</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Convert after-hours inquiries into enrollments automatically with instant payment links.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 md:p-10 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/30 shadow-xl">
            <div className="space-y-8">
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                  Peak Call Times
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">6 PM - 9 PM</span>
                      <span className="text-sm text-accent font-bold">45% of calls</span>
                    </div>
                    <div className="h-3 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full transition-all" style={{ width: "45%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Weekends</span>
                      <span className="text-sm text-accent font-bold">30% of calls</span>
                    </div>
                    <div className="h-3 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full transition-all" style={{ width: "30%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">After 9 PM</span>
                      <span className="text-sm text-accent font-bold">15% of calls</span>
                    </div>
                    <div className="h-3 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full transition-all" style={{ width: "15%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="text-5xl font-bold mb-3 text-accent">90%</div>
                <div className="text-foreground font-medium">of parent inquiries happen outside business hours</div>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <div className="text-sm text-muted-foreground mb-2 font-semibold">Without Movo</div>
                <div className="text-lg font-bold text-destructive mb-4">Missed calls = Lost enrollments</div>
                <div className="text-sm text-muted-foreground mb-2 font-semibold">With Movo</div>
                <div className="text-lg font-bold text-accent">Every call answered = Every opportunity captured</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
