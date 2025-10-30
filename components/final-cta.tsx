import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-balance">
            Parents are calling. Make sure someone answers.
          </h2>
          <p className="text-xl text-background/80 mb-10 text-balance leading-relaxed">
            Movo fills your programs while you coach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 rounded-full px-8 h-12 text-base font-medium"
              asChild
            >
              <a href="https://calendly.com/ari-movoai/30min" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book a Demo
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground rounded-full px-8 h-12 text-base font-medium"
              asChild
            >
              <a href="https://calendly.com/ari-movoai/30min" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
                Hear a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
