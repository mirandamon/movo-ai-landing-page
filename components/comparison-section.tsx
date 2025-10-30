export function ComparisonSection() {
  const alternatives = [
    {
      name: "Hiring Front Desk Staff",
      cons: ["$40k+ per year per person", "Limited to business hours", "Sick days and turnover", "Training required"],
    },
    {
      name: "Generic Answering Service",
      cons: [
        "Can't handle complex questions",
        "No system integration",
        "Impersonal experience",
        "Can't process payments",
      ],
    },
    {
      name: "Voicemail",
      cons: ["Parents hang up", "Delayed responses", "Lost enrollments", "No follow-up"],
    },
  ]

  const movoFeatures = [
    "24/7 availability",
    "Answers complex questions",
    "Processes payments instantly",
    "Integrates with your systems",
    "Never sick or on vacation",
    "Costs less than one employee",
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-foreground text-background dark">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold mb-3 md:mb-4 leading-tight">
            Why every academy switches to Movo
          </h2>
          <p className="text-base md:text-lg text-background/70">Other solutions can't match what Movo delivers.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl md:text-2xl font-sans font-bold mb-6 md:mb-8">The Alternatives</h3>
            <div className="space-y-4 md:space-y-6">
              {alternatives.map((alt, index) => (
                <div
                  key={index}
                  className="border border-background/20 rounded-xl md:rounded-2xl p-4 md:p-6 bg-background/5 shadow-sm"
                >
                  <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{alt.name}</h4>
                  <ul className="space-y-2">
                    {alt.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-background/70">
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4 text-red-400 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-sans font-bold mb-6 md:mb-8">Movo</h3>
            <div className="border-2 border-background rounded-2xl md:rounded-3xl p-6 md:p-8 bg-background/10 shadow-sm">
              <ul className="space-y-3 md:space-y-4">
                {movoFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-green-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
