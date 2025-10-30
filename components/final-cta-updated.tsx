import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTAUpdated() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance font-sans text-foreground">
            Parents are calling — make sure someone answers.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Your AI rep handles every call, every question, and every registration — even when you're coaching.
          </p>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-16 bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative">
              <div className="text-sm text-muted-foreground mb-2">Nighttime, 8:43 PM</div>
              <div className="text-lg font-semibold text-foreground">Answered by AI</div>
              <div className="mt-4 text-muted-foreground italic">
                "Coach packing up gear, phone ringing — but every parent still gets an answer."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
