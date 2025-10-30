export function FeaturesSection() {
  const features = [
    {
      title: "Understands Parents",
      points: [
        "Handles questions about age groups, class times, pricing, and locations.",
        'Learns your program names ("U10 Elite", "Beginners Term 2", etc.).',
        "Adjusts tone for moms, dads, or returning customers.",
      ],
    },
    {
      title: "Answers Instantly",
      points: [
        "No hold music, no missed calls.",
        "Works across languages and accents (English, Arabic, Indian English, etc.).",
      ],
    },
    {
      title: "Acts, Don't Just Talk",
      points: [
        "Sends payment links through WhatsApp or SMS.",
        "Books trial classes or adds to waitlists.",
        "Updates your CRM automatically.",
      ],
    },
    {
      title: "Improves Every Season",
      points: ["Analyzes transcripts to suggest better scripts and offers."],
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance font-sans text-foreground">
            Your 24/7 Enrollment Desk.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">{feature.title}</h3>
                <ul className="space-y-4">
                  {feature.points.map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-accent font-bold flex-shrink-0">✓</span>
                      <span className="text-muted-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
