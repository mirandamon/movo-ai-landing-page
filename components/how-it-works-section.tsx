export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Parent calls or messages.",
      description: "Same number you already use.",
    },
    {
      number: "2",
      title: "Movo answers instantly.",
      description: "Natural, trained voice that understands your programs, pricing, and tone.",
    },
    {
      number: "3",
      title: "Conversation unfolds.",
      description: "Parents sometimes want to just chat — Movo handles them all, naturally.",
    },
    {
      number: "4",
      title: "Enrollment complete.",
      description: "Sends text or payment link. Confirms seat. Updates your CRM.",
    },
  ]

  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            From call to registration — <span className="font-handwriting text-accent">automatically.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted border-2 border-border mb-4">
                <span className="text-2xl font-bold text-foreground">{step.number}</span>
              </div>
              <h3 className="font-sans text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground space-x-2">
          <span>Response time &lt; 5 seconds</span>
          <span>•</span>
          <span>Available 24/7</span>
          <span>•</span>
          <span>Human fallback built-in</span>
        </div>
      </div>
    </section>
  )
}
