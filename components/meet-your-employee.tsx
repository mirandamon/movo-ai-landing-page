import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function MeetYourEmployee() {
  const benefits = [
    "Answers parent questions instantly",
    "Works 24/7, never takes a break",
    "Sends payment and registration links",
    "Integrates with your existing CRM",
    "Learns from every conversation",
    "Handles multiple calls simultaneously",
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-4 text-foreground">
            Meet Your New Employee
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Movo AI works around the clock to fill your classes
          </p>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
