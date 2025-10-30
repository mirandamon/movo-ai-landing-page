export function SportsTable() {
  const sports = [
    {
      icon: "🏀",
      sport: "Basketball",
      useCase: "Handle parent inquiries, schedule trials, send payment links",
    },
    {
      icon: "⚽",
      sport: "Football / Soccer",
      useCase: "Manage weekend and after-hours calls",
    },
    {
      icon: "🏊",
      sport: "Swimming",
      useCase: "Explain class levels, safety, and term schedules",
    },
    {
      icon: "🎾",
      sport: "Tennis / Martial Arts",
      useCase: "Book trials, manage waitlists, and confirm renewals",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-center text-foreground">
            Works for every academy.
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Movo works for any academy that depends on phone calls to grow.
          </p>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Sport</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Use Case</th>
                </tr>
              </thead>
              <tbody>
                {sports.map((item, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-medium text-foreground">{item.sport}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">{item.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground mt-8">If parents call you, Movo can answer for you.</p>
        </div>
      </div>
    </section>
  )
}
