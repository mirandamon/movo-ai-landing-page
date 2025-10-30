import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function UseCaseStory() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance font-sans text-foreground">
            How a youth basketball academy turned missed calls into enrollments.
          </h2>

          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Problem</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Solution</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-6 text-muted-foreground">Parents called after hours or during practice</td>
                    <td className="px-6 py-6 text-muted-foreground">
                      AI rep answered instantly, explained programs, and sent payment links
                    </td>
                    <td className="px-6 py-6 text-foreground font-semibold">80% fewer missed calls</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-6 text-muted-foreground">Agents repeated the same info all day</td>
                    <td className="px-6 py-6 text-muted-foreground">
                      AI handled FAQs about pricing, class times, and locations
                    </td>
                    <td className="px-6 py-6 text-foreground font-semibold">60% faster response time</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-6 text-muted-foreground">Manual follow-ups in WhatsApp</td>
                    <td className="px-6 py-6 text-muted-foreground">
                      AI sent links and logged notes in Zoho automatically
                    </td>
                    <td className="px-6 py-6 text-foreground font-semibold">100% call tracking accuracy</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-muted/30 px-8 py-10 border-t border-border">
              <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed">
                "Parents can call anytime — and still get answers, quotes, and payment links. It's like having a 24/7
                front-desk coach."
              </blockquote>
              <div className="mt-4 text-muted-foreground font-semibold">— Esra, MPAC Sports (Dubai)</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              See the Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
