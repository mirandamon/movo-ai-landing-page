import { Button } from "@/components/ui/button"

export function TomaFinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-2 border-border rounded-3xl p-12 md:p-16 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent text-sm font-medium mb-2">Ready to take the next step?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Automate your phone calls with Toma today.
                </h2>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-secondary text-accent-foreground font-medium px-8 py-6 text-lg"
                >
                  Schedule a Demo →
                </Button>
              </div>

              <div className="hidden md:block">
                <svg width="400" height="300" viewBox="0 0 400 300" fill="none" className="w-full">
                  <rect
                    x="50"
                    y="50"
                    width="300"
                    height="200"
                    rx="8"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted-foreground/30"
                  />
                  <rect x="80" y="80" width="80" height="60" rx="4" fill="#A8E063" opacity="0.2" />
                  <circle cx="280" cy="110" r="30" fill="#A8E063" opacity="0.3" />
                  <path
                    d="M200 150 L250 180 L200 210"
                    stroke="#A8E063"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
