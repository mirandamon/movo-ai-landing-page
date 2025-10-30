"use client"

import { useState } from "react"

export function MovoDoubtMode() {
  const [activeTab, setActiveTab] = useState("complex")

  const tabs = [
    {
      id: "complex",
      label: "Complex calls?",
      content: "Yes. We handle multi-topic questions; when confidence drops, we escalate to your staff.",
    },
    {
      id: "accents",
      label: "Accents?",
      content: "Understands various English accents and speaking styles; we tune on your calls.",
    },
    {
      id: "edge",
      label: "Edge cases?",
      content: "We say 'let me check' and route, not hallucinate.",
    },
    {
      id: "setup",
      label: "Setup pain?",
      content: "No new number. Teach us your programs. Go live same day.",
    },
  ]

  return (
    <section className="section-padding-sm bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
              <span className="handwriting text-4xl md:text-5xl text-accent font-sans">I don't believe you</span>
            </h2>
            <p className="text-muted-foreground">We built this section for you.</p>
          </div>

          <div className="bg-card rounded-3xl border-2 border-border p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6 bg-background rounded-2xl border border-border">
              <p className="text-lg leading-relaxed">{tabs.find((tab) => tab.id === activeTab)?.content}</p>
            </div>

            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Hear real calls
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
