export function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance font-sans text-foreground">
            Parents call. You're on the court.
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>When you're running a sports academy, most calls happen when you're coaching, traveling, or asleep.</p>
            <p>Every missed call means a lost enrollment. Parents don't leave voicemails — they just move on.</p>
            <p className="text-foreground font-semibold">
              That's why top academies now use AI phone reps to handle every inquiry instantly — day or night.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 text-left">
              <div className="text-destructive font-semibold mb-4">Before:</div>
              <div className="text-lg text-foreground">Missed Calls = Missed Players</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-left">
              <div className="text-accent font-semibold mb-4">After:</div>
              <div className="text-lg text-foreground">Every Parent Answered Instantly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
