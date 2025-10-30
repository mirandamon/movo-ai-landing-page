export function ProductMockupSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
              See every call, message, and enrollment in real-time
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your dashboard shows exactly what Movo is doing — who's calling, what they're asking, and which parents
              are enrolling.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <span>Live call transcripts and summaries</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <span>Track enrollments and payments</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <span>Analytics on call volume and conversion</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="relative">
              <img
                src="/images/design-mode/Gemini%20Generated%20Image%20%289%29.png"
                alt="Movo Platform on Laptop"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
