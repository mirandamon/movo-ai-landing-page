export function WhatItDoes() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-foreground text-background dark">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans mb-4 md:mb-6 text-center leading-tight">
            Meet your new front-desk teammate.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-background/70 mb-12 md:mb-16 text-center leading-relaxed max-w-3xl mx-auto">
            Movo is trained specifically for sports academies. It speaks to parents naturally — over phone or WhatsApp —
            and takes care of everything your staff repeats all day.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="bg-background text-foreground rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Inbound calls</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Answers instantly when parents call</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Shares schedules, prices, and available classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Recommends the nearest location</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Sends registration or payment links via WhatsApp/SMS</span>
                </li>
              </ul>
            </div>

            <div className="bg-background text-foreground rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Outbound calls</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Follows up with parents who haven't paid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Reminds returning families to renew</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Calls new leads from your CRM automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Sends confirmation once payment is made</span>
                </li>
              </ul>
            </div>

            <div className="bg-background text-foreground rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Admin & CRM</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Logs every call and summary in Zoho or HubSpot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Tags leads by location, class, and status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>Syncs with WhatsApp, Twilio, or Google Sheets</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg md:text-xl lg:text-2xl text-background font-medium">
              No scripts to memorize. No missed calls. Just full programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
