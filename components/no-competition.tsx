import { Phone, Clock, CreditCard, Zap } from "lucide-react"

export function NoCompetition() {
  const features = [
    {
      icon: Phone,
      title: "24/7 Call Handling",
      description: "Never miss a parent inquiry, even during games or holidays",
    },
    {
      icon: Clock,
      title: "Instant Response",
      description: "Parents get answers immediately, no waiting for callbacks",
    },
    {
      icon: CreditCard,
      title: "Payment Links",
      description: "Automatically sends registration and payment links via SMS",
    },
    {
      icon: Zap,
      title: "CRM Integration",
      description: "Syncs every conversation to your existing tools automatically",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-foreground">There's No Competition</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The only AI phone rep built specifically for sports academies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
