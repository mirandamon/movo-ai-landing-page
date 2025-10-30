export function IntegrationsGrid() {
  const integrations = ["Zoho CRM", "Respond.io", "Twilio", "Google Sheets", "HubSpot", "Tabby / Tamara"]

  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold font-sans text-center mb-4 text-foreground">
          Connects to the systems you already use.
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-12">
          No migration, no new software — just plug in and go live.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 text-muted-foreground/60 font-semibold text-sm text-center"
            >
              {integration}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
