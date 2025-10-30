import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Rookie",
      calls: "1,000",
      price: "$499",
      description: "Single academy",
      features: ["1,000 calls per month", "Basic CRM integration", "Email support", "Call transcripts"],
    },
    {
      name: "Pro",
      calls: "5,000",
      price: "$1,500",
      description: "Multi-location sports orgs",
      features: [
        "5,000 calls per month",
        "Advanced CRM integration",
        "Priority support",
        "Call analytics",
        "WhatsApp integration",
      ],
      popular: true,
    },
    {
      name: "Elite",
      calls: "10,000+",
      price: "Custom",
      description: "Franchises / national academies",
      features: [
        "Unlimited calls",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics",
        "Multi-language support",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-balance font-sans text-foreground">
            Start with one academy. Scale to every branch.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-card border rounded-2xl p-8 relative ${
                  plan.popular ? "border-accent shadow-xl scale-105" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2 text-foreground">{plan.price}</div>
                  {plan.price !== "Custom" && <div className="text-muted-foreground">/month</div>}
                  <div className="text-sm text-muted-foreground mt-4">{plan.description}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-transparent border-2 hover:bg-muted"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    {plan.price === "Custom" ? "Talk to Sales" : "Get a Demo"}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
