export function TomaSetup() {
  const integrations = ["Tekion", "Reynolds", "CDK", "VinSolutions", "PBS", "Dealer-FX", "myKaarma", "Zapier", "Google"]

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {integrations.map((integration, index) => (
                  <div
                    key={integration}
                    className="bg-white border-2 border-border rounded-xl p-4 text-center hover:shadow-md transition-all hover:-translate-y-1"
                    style={{
                      transform: `rotate(${((index % 3) - 1) * 3}deg)`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <p className="text-sm font-semibold text-foreground">{integration}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-accent text-sm font-medium mb-2">Setup</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                It Just <span className="font-handwriting text-accent">Drops In</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Toma is compatible with all major DMSs, schedulers, and other software to get you up and running in less
                than a day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
