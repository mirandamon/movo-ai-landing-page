export function Integrations() {
  const integrations = ["CDK Global", "Reynolds & Reynolds", "DealerSocket", "Tekion", "Dealertrack", "AutoManager"]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Integrates with Your Dealership Software</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {integration}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
