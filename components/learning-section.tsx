"use client"

import { useEffect, useState } from "react"

export function LearningSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const learningItems = [
    {
      title: "New programs added",
      description: "Automatically learns about new classes, camps, and offerings",
      icon: (
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
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      ),
    },
    {
      title: "Parent questions analyzed",
      description: "Learns from every conversation to improve responses",
      icon: (
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
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      ),
    },
    {
      title: "Accents & dialects",
      description: "Adapts to regional speech patterns and pronunciation",
      icon: (
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
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "FAQs updated",
      description: "Captures common questions and refines answers weekly",
      icon: (
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
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      ),
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % learningItems.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [learningItems.length])

  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent font-medium text-sm">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Always Improving
          </div>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Movo never stops learning.
          </h2>
          <p className="text-xl md:text-2xl text-background/70 max-w-3xl mx-auto text-pretty">
            Every week, it gets smarter. Learns new programs, accents, FAQs — automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className={`relative bg-background/5 border rounded-2xl p-6 space-y-4 transition-all duration-500 ${
                activeIndex === index
                  ? "border-accent bg-accent/10 scale-105"
                  : "border-background/20 hover:border-background/40"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  activeIndex === index ? "bg-accent text-background" : "bg-background/10 text-background"
                }`}
              >
                {item.icon}
              </div>
              <h3 className="font-sans text-lg font-semibold text-background">{item.title}</h3>
              <p className="text-background/70 text-sm leading-relaxed">{item.description}</p>
              {activeIndex === index && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-background/60">No manual updates. No retraining. Just continuous improvement.</p>
        </div>
      </div>
    </section>
  )
}
