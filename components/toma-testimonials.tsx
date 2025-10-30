export function TomaTestimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Don't Just Take <span className="font-handwriting text-accent">Our</span> Word For It
            </h2>
            <p className="text-muted-foreground">
              Our customers tell their friends about us. Here's what they have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-border rounded-2xl p-8">
              <p className="text-foreground italic text-lg mb-6">
                My experience with Toma has been 10 out of 10. It saves 43 hours of our advisors' time on average each
                month so we can focus on in-person customers and drive revenue. It's almost like we added another member
                to our team.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                  ES
                </div>
                <div>
                  <p className="font-semibold text-foreground">Eric Stockton</p>
                  <p className="text-sm text-muted-foreground">Service Manager, Boulder Nissan</p>
                </div>
              </div>

              <div className="mb-4">
                <img src="/boulder-nissan-logo.jpg" alt="Boulder Nissan" className="h-8" />
              </div>

              <a
                href="#"
                className="text-accent hover:text-accent-secondary font-medium text-sm inline-flex items-center gap-1"
              >
                Read case study →
              </a>
            </div>

            <div className="bg-white border-2 border-border rounded-2xl p-8">
              <p className="text-foreground italic text-lg mb-6">
                After turning Toma on and listening to the first few recordings, it felt like we have another member of
                the team on the phone. It was booking and modifying appointments, pinging our team for follow-ups, and
                delighting customers.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                  JK
                </div>
                <div>
                  <p className="font-semibold text-foreground">Joe King</p>
                  <p className="text-sm text-muted-foreground">Service Director, Hyundai of St. Augustine</p>
                </div>
              </div>

              <div className="mb-4">
                <img src="/hyundai-of-st-augustine-logo.jpg" alt="Hyundai of St. Augustine" className="h-8" />
              </div>

              <a
                href="#"
                className="text-accent hover:text-accent-secondary font-medium text-sm inline-flex items-center gap-1"
              >
                Read case study →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
