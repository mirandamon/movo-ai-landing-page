export function TomaObserve() {
  const callTypes = [
    { label: "Express Service", percentage: 47.4, color: "bg-accent" },
    { label: "Tailgate Wire Harness Recall", percentage: 23.7, color: "bg-accent/80" },
    { label: "Electric Power Steering Recall", percentage: 17.8, color: "bg-accent/60" },
    { label: "Repair Request", percentage: 11.8, color: "bg-accent/40" },
    { label: "Service Status Inquiry", percentage: 8.3, color: "bg-accent/30" },
    { label: "Parts Inquiry", percentage: 5.9, color: "bg-accent/20" },
    { label: "General Inquiry", percentage: 3.6, color: "bg-accent/10" },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-accent text-sm font-medium mb-2">Observe</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Get <span className="font-handwriting text-accent">Complete Visibility</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get insights into call volume, breakdowns on call types, customer satisfaction over time, and actionable
                recommendations.
              </p>
            </div>

            <div className="bg-white border-2 border-border rounded-2xl p-6">
              <div className="space-y-3">
                {callTypes.map((type) => (
                  <div key={type.label} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{type.label}</span>
                        <span className="text-sm text-muted-foreground">{type.percentage}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full ${type.color} transition-all duration-500`}
                          style={{ width: `${type.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-orange-900">Warning!</p>
                    <p className="text-xs text-orange-700">
                      Your soonest Express Service availability is over 1 week out.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-blue-900">New insight!</p>
                    <p className="text-xs text-blue-700">
                      Customers are more likely to book oil changes on Wednesdays.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-purple-900">New recommendation!</p>
                    <p className="text-xs text-purple-700">
                      Increase Express Service capacity on Wednesdays from 12pm to 3pm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
