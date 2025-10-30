import { Button } from "@/components/ui/button"
import { Volume2, Calendar } from "lucide-react"

export function TooGoodCTA() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6">
            Parents are calling. Make sure someone answers.
          </h2>
          <p className="text-xl text-background/80 mb-10">
            Your AI phone rep fills your classes while you focus on coaching.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-background text-background hover:bg-background/10 bg-transparent"
            >
              <Volume2 className="mr-2 h-5 w-5" />
              Hear a Sample Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
