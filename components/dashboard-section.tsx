export function DashboardSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6 text-balance">
            Your business, finally visible.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See every call, every lead, every payment — in one simple view. Movo keeps your staff in the loop with
            searchable transcripts, real-time notifications, and automated summaries.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
          {/* Dashboard Header */}
          <div className="border-b border-border p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent text-white rounded-lg flex items-center justify-center font-bold text-xl">
                M
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Movo Sport Center</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-muted-foreground border border-border rounded-lg px-4 py-2">
                Jan 23, 2025 - Jan 26, 2025
              </div>
              <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Export
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border px-4 md:px-6">
            <div className="flex gap-6 overflow-x-auto">
              <button className="py-3 px-1 border-b-2 border-accent font-medium text-sm whitespace-nowrap">
                Insights
              </button>
              <button className="py-3 px-1 text-muted-foreground hover:text-foreground text-sm whitespace-nowrap transition-colors">
                Interactions
              </button>
              <button className="py-3 px-1 text-muted-foreground hover:text-foreground text-sm whitespace-nowrap transition-colors">
                Customers
              </button>
              <button className="py-3 px-1 text-muted-foreground hover:text-foreground text-sm whitespace-nowrap transition-colors">
                Unresolved
              </button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Unique Customers
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="text-4xl font-bold mb-3">13,405</div>
              <div className="text-sm text-green-600 flex items-center gap-1 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span>19.4% from last month</span>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Calls</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="text-4xl font-bold mb-3">15,812</div>
              <div className="text-sm text-green-600 flex items-center gap-1 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span>25.1% from last month</span>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Appointments Booked
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="text-4xl font-bold mb-3">7,921</div>
              <div className="text-sm text-green-600 flex items-center gap-1 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span>31.6% from last month</span>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Resolution Rate
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="text-4xl font-bold mb-3">78.4%</div>
              <div className="text-sm text-red-600 flex items-center gap-1 font-medium">
                <span>↓ 3.6% from last month</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="px-4 md:px-6 pb-4">
            <div className="border border-accent/30 bg-accent/5 rounded-lg p-3 flex items-center gap-2 text-foreground">
              <span className="text-accent">✨</span>
              <span className="text-sm font-medium">Search Calls and Customers with AI</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-t border-b border-border bg-muted/30">
                <tr>
                  <th className="text-left py-3 px-4 md:px-6 text-sm font-medium text-muted-foreground">Time</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Sentiment</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Summary</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                  <th className="text-left py-3 px-4 md:px-6 text-sm font-medium text-muted-foreground">Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span className="text-sm">2m 8s</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                        TM
                      </div>
                      <span className="text-sm font-medium">Sarah Martinez</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-green-600">😊</span>
                      <span>4</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm italic">Basketball camp registration for 2 kids</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                      ✓ Followed-Up
                    </span>
                  </td>
                  <td className="py-4 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <button className="text-muted-foreground hover:text-foreground">▶</button>
                      <button className="text-muted-foreground hover:text-foreground">🔖</button>
                      <button className="text-muted-foreground hover:text-foreground">💬</button>
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span className="text-sm">3m 55s</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                        BT
                      </div>
                      <span className="text-sm font-medium">Michael Chen</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-green-600">😊</span>
                      <span>3</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm italic">Summer training schedule inquiry</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                      ✓ Resolved
                    </span>
                  </td>
                  <td className="py-4 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <button className="text-muted-foreground hover:text-foreground">▶</button>
                      <button className="text-muted-foreground hover:text-foreground">🔖</button>
                      <button className="text-muted-foreground hover:text-foreground">💬</button>
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span className="text-sm">3m 32s</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                        JC
                      </div>
                      <span className="text-sm font-medium">Jennifer Park</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-600">😐</span>
                      <span>2</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm italic">Payment plan for annual membership</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">
                      ✗ Unresolved
                    </span>
                  </td>
                  <td className="py-4 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <button className="text-muted-foreground hover:text-foreground">▶</button>
                      <button className="text-muted-foreground hover:text-foreground">🔖</button>
                      <button className="text-muted-foreground hover:text-foreground">💬</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-border p-4 md:p-6 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Page 1 of 10</span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-border rounded text-sm hover:bg-muted transition-colors">
                ««
              </button>
              <button className="px-3 py-1 border border-border rounded text-sm hover:bg-muted transition-colors">
                ‹
              </button>
              <button className="px-3 py-1 border border-border rounded text-sm hover:bg-muted transition-colors">
                ›
              </button>
              <button className="px-3 py-1 border border-border rounded text-sm hover:bg-muted transition-colors">
                »»
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">Searchable call history</h3>
            <p className="text-sm text-muted-foreground">Find any conversation instantly with AI-powered search</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">Multi-location view</h3>
            <p className="text-sm text-muted-foreground">Manage all your academies from one dashboard</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">CRM + WhatsApp integration</h3>
            <p className="text-sm text-muted-foreground">Syncs with your existing tools automatically</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <h3 className="font-sans text-lg font-semibold mb-2">Real-time transcripts</h3>
            <p className="text-sm text-muted-foreground">Every conversation logged and summarized instantly</p>
          </div>
        </div>
      </div>
    </section>
  )
}
