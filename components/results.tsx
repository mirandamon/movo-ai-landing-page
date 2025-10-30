import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function Results() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <Card className="overflow-hidden bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-2">
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    Case Study
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                    Learn how AutoFlow is generating more service revenue
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Martin Management Group saw incredible results across all their locations around the country.
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">In 90 Days:</div>
                  </div>
                </div>
                <Button>
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card className="p-6 bg-background">
                  <div className="text-4xl font-bold mb-2">9,000+</div>
                  <div className="text-muted-foreground">Appointments Booked</div>
                </Card>
                <Card className="p-6 bg-background">
                  <div className="text-4xl font-bold mb-2">$2M+</div>
                  <div className="text-muted-foreground">Revenue Generated</div>
                </Card>
                <Card className="p-6 bg-background">
                  <div className="text-4xl font-bold mb-2">22K+</div>
                  <div className="text-muted-foreground">Calls Automated</div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
