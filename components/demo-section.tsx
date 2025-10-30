import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"

export function DemoSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance font-sans text-foreground">
            Hear It in Action
          </h2>

          <p className="text-xl text-center text-muted-foreground mb-12">
            A parent calls after practice. The AI answers.
          </p>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Volume2 className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold text-lg text-foreground">Inbound Call Example</div>
              </div>
              <div className="space-y-4 pl-16">
                <div className="bg-muted/50 rounded-lg p-4 text-muted-foreground">
                  "Hi, I wanted to know about basketball classes for my 9-year-old."
                </div>
                <div className="bg-primary text-primary-foreground rounded-lg p-4">
                  "Of course! For 8–11-year-olds we run a beginner academy three days a week at our Raha branch. Would
                  you like me to send you the registration link?"
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Volume2 className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold text-lg text-foreground">After-Hours Call Example</div>
              </div>
              <div className="pl-16">
                <div className="bg-primary text-primary-foreground rounded-lg p-4">
                  "Hello, this is Movo from MPAC Sports. We're still open for registration — I can help you right now."
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Volume2 className="mr-2 h-5 w-5" />
                Play Full Conversation
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 bg-transparent" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Live Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
