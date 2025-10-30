export function ResultsMetrics() {
  const metrics = [
    {
      stat: "80%",
      label: "fewer missed calls",
      description: "Every inquiry answered instantly",
    },
    {
      stat: "+60%",
      label: "faster enrollment response",
      description: "Parents get info immediately",
    },
    {
      stat: "2×",
      label: "higher paid sign-ups",
      description: "Quicker follow-ups = higher conversions",
    },
    {
      stat: "24/7",
      label: "coverage",
      description: "Calls handled even during practice or off-season",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance font-sans">
            The Numbers That Matter
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">{metric.stat}</div>
                <div className="text-xl font-semibold mb-2 opacity-90">{metric.label}</div>
                <div className="text-sm opacity-75 leading-relaxed">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
