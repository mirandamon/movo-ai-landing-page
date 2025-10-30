export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Train the AI",
      description: "We use your existing call scripts, FAQs, and price sheets to teach it how your academy speaks.",
    },
    {
      number: "2",
      title: "Connect Your Systems",
      description: "Integrates with Zoho, HubSpot, Google Sheets, or WhatsApp for instant updates and links.",
    },
    {
      number: "3",
      title: "Launch in Days",
      description: "The AI starts answering calls, explaining programs, and sending payment links automatically.",
    },
    {
      number: "4",
      title: "Watch It Learn",
      description:
        "Every conversation makes it smarter — adapting to your tone, language, and parents' common questions.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance font-sans text-foreground">
            From Call to Registration — Automatically.
          </h2>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Step {step.number} — {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-muted/30 rounded-2xl p-8 border border-border">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl">📞</div>
                <div className="text-lg font-semibold text-foreground">Parent call</div>
              </div>
              <div className="text-muted-foreground">→</div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl">🤖</div>
                <div className="text-lg font-semibold text-foreground">AI answers</div>
              </div>
              <div className="text-muted-foreground">→</div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl">💳</div>
                <div className="text-lg font-semibold text-foreground">Payment link</div>
              </div>
              <div className="text-muted-foreground">→</div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl">📊</div>
                <div className="text-lg font-semibold text-foreground">CRM update</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
