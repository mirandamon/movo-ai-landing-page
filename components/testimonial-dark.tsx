import { Play } from "lucide-react"

export function TestimonialDark() {
  return (
    <section className="py-32 bg-foreground text-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="bg-foreground/95 rounded-3xl p-12 md:p-16 border border-background/10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/modern-basketball-sports-facility-exterior.jpg"
                alt="MPAC Sports Facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 leading-tight">
                How a basketball academy doubled enrollments in 30 days.
              </h2>
              <p className="text-lg text-background/80 leading-relaxed">
                MPAC Sports in Dubai handles over 1,000 calls a day across locations.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-background/80 mb-6 leading-relaxed">
              Before Movo, agents spent hours repeating the same details about term dates, prices, and programs.
            </p>
            <p className="text-lg text-background/80 mb-8 leading-relaxed">
              Parents who called after hours rarely got answers.
            </p>

            <p className="text-xl text-background font-semibold mb-8">Now, Movo handles everything — automatically.</p>

            <p className="text-base text-background/70 mb-6">Results:</p>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold mb-1">80%</div>
                <div className="text-sm text-background/70">fewer missed calls</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">2×</div>
                <div className="text-sm text-background/70">faster enrollment time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">2×</div>
                <div className="text-sm text-background/70">more paid registrations</div>
              </div>
            </div>

            <blockquote className="border-l-4 border-background/30 pl-6 mb-8">
              <p className="text-lg italic text-background/90 mb-4">
                "Parents can call anytime — and still get answers, quotes, and payment links. It's like having a 24/7
                front-desk coach."
              </p>
              <cite className="text-sm text-background/70 not-italic">— Esra D., CEO, MPAC Sports</cite>
            </blockquote>

            <div className="text-center">
              <button className="inline-flex items-center gap-2 text-sm text-background/80 hover:text-background underline rounded-full">
                <Play className="w-4 h-4" />
                Play MPAC's Demo Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
