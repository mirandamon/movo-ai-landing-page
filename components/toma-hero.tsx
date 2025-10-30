import { Button } from "@/components/ui/button"

export function TomaHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            Double your service appointment bookings.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Toma is the industry-leading phone AI that takes phone calls, books appointments, and skyrockets your
            revenue on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-secondary text-accent-foreground font-medium px-8 py-6 text-lg"
            >
              I'm interested →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-medium px-8 py-6 text-lg bg-transparent"
            >
              I don't believe you
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
