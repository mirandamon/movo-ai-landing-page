export function TomaEndorsement() {
  return (
    <section className="py-12 md:py-16 bg-yellow-50 border-y border-yellow-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center">
              <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-2">As recommended by the</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">Car Dealership Guy</h3>
            <p className="text-foreground italic">
              Every service department will need this. It's like an additional team member, but available and earning
              revenue 24/7. [Toma] is the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
