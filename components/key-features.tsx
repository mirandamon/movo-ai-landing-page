export function KeyFeatures() {
  const useCases = [
    {
      useCase: "Inbound Calls",
      role: "Answers instantly, explains programs, sends payment links",
      example: '"My son is 10, which class should he join?"',
    },
    {
      useCase: "Outbound Calls",
      role: "Follows up with unpaid or new leads",
      example: '"Hi! Just checking if you\'re ready to confirm your spot for Term 2."',
    },
    {
      useCase: "Renewals",
      role: "Reminds returning families",
      example: '"Term 3 starts next week — I can renew your registration now."',
    },
    {
      useCase: "Pricing Questions",
      role: "Shares fees + installment options",
      example: '"We offer AED 1,000 per term or 4-month plans via Tabby."',
    },
    {
      useCase: "Scheduling",
      role: "Suggests nearest branch or slot",
      example: '"We have openings Mon/Wed/Fri at Raha — would that work?"',
    },
    {
      useCase: "CRM Updates",
      role: "Logs details + status automatically",
      example: '"Quotation sent via WhatsApp, pending payment."',
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-16 text-center text-foreground">
            Answers every parent. Sends every link.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Use Case</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Movo's Role</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Example</th>
                </tr>
              </thead>
              <tbody>
                {useCases.map((item, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-4 font-medium text-foreground">{item.useCase}</td>
                    <td className="py-4 px-4 text-muted-foreground text-sm">{item.role}</td>
                    <td className="py-4 px-4 text-muted-foreground text-sm italic">{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
