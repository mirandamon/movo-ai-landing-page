export function MovoSwitchKit() {
  const steps = [
    {
      title: "After-hours first",
      description: "Movo answers when you're closed. Zero disruption.",
      outcome: "You wake up to seats held + payments pending.",
    },
    {
      title: "Overflow next",
      description: "When coaches are busy, Movo answers. No parent waits.",
      outcome: "Every call gets answered, every opportunity captured.",
    },
    {
      title: "Full coverage",
      description: "Human fallback always on. You're in control.",
      outcome: "Seamless handoff when needed, confidence always.",
    },
  ]

  return (
    <section id="run-it" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              Run <span className="handwriting text-5xl md:text-6xl">It</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Start small. Scale instantly.
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Most academies begin after-hours. Once they see the lift, they go full coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-3xl border border-border hover:border-primary transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 font-sans">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="p-4 bg-accent/10 rounded-xl border border-accent/20">
                  <div className="text-sm font-semibold text-accent mb-1">Outcome:</div>
                  <div className="text-sm">{step.outcome}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground italic">Live in under an hour. No number change.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
