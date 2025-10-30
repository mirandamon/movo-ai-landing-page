import { Card } from "@/components/ui/card"

export function MPACCaseStudy() {
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Success Story
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6 text-balance leading-tight">
            How a basketball academy doubled enrollments in 30 days
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            From missed calls and lost enrollments to 24/7 coverage and automated payments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Story & Quote */}
          <div className="space-y-8">
            <Card className="p-8 md:p-10 bg-card border-2 border-accent/20 shadow-xl">
              <svg className="h-10 w-10 text-accent mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed text-balance">
                "Most parents call at night when we're coaching. Before Movo, we'd miss dozens of calls every week. Now
                every inquiry gets answered instantly, and we're collecting payments on the spot."
              </blockquote>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center font-bold text-xl text-accent border-2 border-accent/30">
                  E
                </div>
                <div>
                  <div className="font-bold text-lg">Elite Basketball Academy</div>
                  <div className="text-sm text-muted-foreground">Youth Basketball Training</div>
                </div>
              </div>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Elite Basketball Academy was handling hundreds of calls daily—parents asking about schedules, pricing,
                  and registration. Most calls came after hours or during coaching sessions, resulting in missed
                  enrollments, delayed payments, and frustrated parents. Their team was spending hours on repetitive
                  questions instead of coaching.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Movo became their 24/7 AI phone representative, handling inbound inquiries instantly and making
                  outbound follow-up calls automatically. The system integrated with their Zoho CRM and WhatsApp,
                  logging every interaction and sending payment links on the spot.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Metrics */}
          <div className="space-y-6">
            <Card className="p-8 md:p-10 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/30 shadow-xl">
              <div className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">
                Results in 90 Days
              </div>
              <div className="space-y-8">
                <div>
                  <div className="text-6xl font-bold mb-3 text-accent">80%</div>
                  <div className="text-foreground font-medium text-lg">Reduction in missed calls</div>
                </div>
                <div>
                  <div className="text-6xl font-bold mb-3 text-accent">&lt;1 min</div>
                  <div className="text-foreground font-medium text-lg">Average enrollment response time</div>
                </div>
                <div>
                  <div className="text-6xl font-bold mb-3 text-accent">+50%</div>
                  <div className="text-foreground font-medium text-lg">Payment completion rate</div>
                </div>
                <div>
                  <div className="text-6xl font-bold mb-3 text-accent">24/7</div>
                  <div className="text-foreground font-medium text-lg">After-hours coverage</div>
                </div>
                <div>
                  <div className="text-6xl font-bold mb-3 text-accent">100%</div>
                  <div className="text-foreground font-medium text-lg">CRM accuracy & call logging</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-card border border-border shadow-lg">
              <h4 className="font-bold text-lg mb-6">Key Features Used</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-accent mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="leading-relaxed">24/7 inbound call handling for schedule and pricing questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-accent mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="leading-relaxed">
                    Automated outbound follow-ups with leads who didn't complete registration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-accent mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="leading-relaxed">Instant payment link delivery via SMS and WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-accent mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="leading-relaxed">Zoho CRM integration for automatic call logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-accent mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="leading-relaxed">Renewal reminders for returning families</span>
                </li>
              </ul>
            </Card>

            <button className="w-full inline-flex items-center justify-center gap-2 text-lg font-semibold transition-all rounded-full bg-foreground px-8 py-4 hover:bg-foreground/90 hover:scale-105 text-background shadow-lg">
              See How Movo Can Help Your Academy
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
