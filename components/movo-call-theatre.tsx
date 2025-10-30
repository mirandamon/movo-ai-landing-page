"use client"

export function MovoCallTheatre() {
  const conversation = [
    {
      speaker: "Parent",
      message: "Hi, my son's 9 - do you have a beginner basketball class on Tuesdays?",
      insight: {
        title: "Program matched",
        details: "U9 Basketball Beginner → Downtown → Tue 5pm (2/14 seats)",
      },
    },
    {
      speaker: "Movo",
      message: "Yes! Two slots left in the 5 p.m. beginner program in Brooklyn.",
      insight: null,
    },
    {
      speaker: "Parent",
      message: "Great, how much is it?",
      insight: {
        title: "Pricing policy applied",
        details: "$180 a month — sibling discount included if needed. Want me to hold the slot?",
      },
    },
    {
      speaker: "Movo",
      message: "$180 monthly. Sibling discount is 10%. Shall I send the registration link via text?",
      insight: null,
    },
    {
      speaker: "Parent",
      message: "Yes, please.",
      insight: {
        title: "Action",
        details: "Imessage link sent",
      },
    },
    {
      speaker: "Movo",
      message: "Done. I’ve sent the registration link to your Imessage.",
      insight: {
        title: "Status",
        details: "Slot ON HOLD 2h",
        escalation: "Payment failure → staff SMS",
      },
    },
  ]

  return (
    <section id="hear-it" className="section-padding bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              The Call <span className="handwriting text-5xl md:text-6xl">Theatre</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              When parents call, Movo sounds like your front desk.
            </h3>
            <p className="text-xl text-muted-foreground">
              No scripts. No bots. Just your programs, your prices, your tone - answered in seconds.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Transcript Column */}
            <div className="lg:col-span-2 space-y-6">
              {conversation.map((turn, index) => (
                <div
                  key={index}
                  className={`flex ${turn.speaker === "Movo" ? "justify-start" : "justify-end"} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`max-w-md p-5 rounded-2xl ${
                      turn.speaker === "Movo"
                        ? "bg-primary/10 border border-primary/20"
                        : "bg-accent/10 border border-accent/20"
                    }`}
                  >
                    <div className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                      {turn.speaker}
                    </div>
                    <p className="text-base leading-relaxed">{turn.message}</p>
                  </div>
                </div>
              ))}

              <div className="pt-6 text-center">
                <button className="px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  Hear this call
                </button>
              </div>
            </div>

            {/* Brain Cards Column */}
            <div className="space-y-4">
              <div className="sticky top-24">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  What Movo Understood
                </h3>
                {conversation
                  .filter((turn) => turn.insight)
                  .map((turn, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 bg-background rounded-xl border border-border animate-slide-in-right"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <div className="text-sm font-semibold text-primary mb-2">{turn.insight?.title}</div>
                      <div className="text-sm text-muted-foreground">{turn.insight?.details}</div>
                      {turn.insight?.escalation && (
                        <div className="mt-2 pt-2 border-t border-border text-xs text-muted-foreground">
                          Escalation: {turn.insight.escalation}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
