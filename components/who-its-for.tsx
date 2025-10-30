export function WhoItsFor() {
  const sports = [
    {
      icon: "🏀",
      name: "Basketball Academies",
      example: "Parents asking about age groups, term dates, fees, or camp registration",
    },
    {
      icon: "⚽",
      name: "Football & Soccer Clubs",
      example: "Handling inquiries during matches or weekends",
    },
    {
      icon: "🏊",
      name: "Swimming Schools",
      example: "Explaining safety, session times, and pricing",
    },
    {
      icon: "🎾",
      name: "Tennis & Martial Arts Centers",
      example: "Scheduling trial lessons and collecting payments",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-balance font-sans text-foreground">
            Whether you run basketball, football, swimming, or dance — the calls never stop.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 leading-relaxed">
            Our AI rep is trained to speak your language — parents, players, schedules, seasons, and sign-ups.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {sports.map((sport) => (
              <div key={sport.name} className="bg-card border border-border rounded-2xl p-8">
                <div className="text-4xl mb-4">{sport.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{sport.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{sport.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
