export function AIFlowDiagram() {
  const inquiries = [
    { text: "When does basketball training start?", color: "bg-pink-100" },
    { text: "Can I reschedule my daughter's swim class?", color: "bg-blue-100" },
    { text: "How much are swim lessons?", color: "bg-amber-100" },
    { text: "How much is soccer summer camp?", color: "bg-emerald-100" },
    { text: "Is there a trial class for my son?", color: "bg-indigo-100" },
  ]

  const actions = [
    { title: "Class Scheduling", items: ["Check Availability", "View Schedule", "Book Class"] },
    { title: "Appointment Management", items: ["Look Up Booking", "Reschedule Class", "Send Notification"] },
    { title: "Pricing Inquiry", items: ["Check Package Prices", "Process Payment", "Send Receipt"] },
    { title: "Trial Class", items: ["Check Availability", "Schedule Trial", "Notify Coach"] },
  ]

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
        {/* Left side - Parent inquiries */}
        <div className="space-y-4">
          {inquiries.map((inquiry, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full ${inquiry.color} flex items-center justify-center flex-shrink-0`}>
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-2 flex-1 border border-gray-200">
                <p className="text-sm font-medium text-gray-800">{inquiry.text}</p>
              </div>
              <svg
                className="w-6 h-6 text-gray-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>

        {/* Center - AI Agent */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white">M</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-white">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right side - Action categories */}
        <div className="space-y-4">
          {actions.map((action, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-gray-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div className="bg-white rounded-lg px-4 py-3 flex-1 border border-gray-200 shadow-sm">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{action.title}</h4>
                <ul className="space-y-0.5">
                  {action.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-xs text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
