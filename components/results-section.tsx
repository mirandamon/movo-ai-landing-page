export function ResultsSection() {
  const metrics = [
    {
      metric: "+30%",
      label: "trial-to-enrollment",
      description: "More parents convert when they get instant answers",
    },
    {
      metric: "+25%",
      label: "renewals",
      description: "Automated follow-ups keep families engaged",
    },
    {
      metric: "<5s",
      label: "average response time",
      description: "Parents never wait on hold or for callbacks",
    },
    {
      metric: "40%+",
      label: "admin hours saved",
      description: "Your team focuses on coaching, not phone calls",
    },
  ]

  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6 text-balance">
              The results speak for themselves.
            </h2>
            <p className="text-xl md:text-2xl text-background/70 text-pretty">
              Real metrics from academies using Movo to answer every call.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="bg-background/5 border border-background/20 rounded-2xl p-8 hover:bg-background/10 hover:border-accent transition-all"
              >
                <div className="text-5xl md:text-6xl font-bold text-accent mb-3">{item.metric}</div>
                <div className="text-xl font-semibold text-background mb-2">{item.label}</div>
                <div className="text-sm text-background/70 leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-background/10 border border-background/20 rounded-2xl p-8 text-center">
            <p className="text-lg md:text-xl text-background/90 italic leading-relaxed">
              "We used to miss half our parent calls. Now Movo answers every one — even on weekends."
            </p>
            <p className="text-sm text-background/60 mt-4">— Academy Director, MPAC Sports</p>
          </div>
        </div>
      </div>
    </section>
  )
}
