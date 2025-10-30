export default function QuickSetupSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-padding max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-sm font-semibold text-accent">Quick Start</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Setup takes less than an hour</h2>

        <p className="text-xl text-muted-foreground mb-12 text-balance">
          Connect your phone line, load FAQs, and Movo starts taking calls.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-accent">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Connect your line</h3>
            <p className="text-muted-foreground">Forward your existing number or get a new one. Takes 5 minutes.</p>
          </div>

          <div className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-accent">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Load your FAQs</h3>
            <p className="text-muted-foreground">
              Upload your program details, pricing, and schedule. We handle the rest.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-accent">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Start taking calls</h3>
            <p className="text-muted-foreground">
              Movo answers immediately, books registrations, and sends payment links.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
