export function TomaCustomize() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white border-2 border-border rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm">?</span>
                </div>
                <div>
                  <p className="text-sm text-foreground">
                    If the customer mentions <span className="italic font-handwriting">the latest EV recall</span>
                  </p>
                </div>
              </div>

              <div className="pl-9 border-l-2 border-muted space-y-4">
                <p className="text-sm text-muted-foreground italic">Do we have parts in stock?</p>

                <div className="flex gap-4">
                  <div className="flex-1 bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-sm text-orange-700">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                      </svg>
                      <span className="font-medium">No</span>
                    </div>
                    <p className="text-xs text-orange-600 mt-1">Take their vehicle details</p>
                  </div>

                  <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-sm text-green-700">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">Yes</span>
                    </div>
                    <p className="text-xs text-green-600 mt-1">Transfer to Service Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-accent text-sm font-medium mb-2">Customize</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              You <span className="font-handwriting text-accent">Make the Rules</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We spend time understanding your unique business needs and edge-cases to ensure your AI agents get stuff
              done the right way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
