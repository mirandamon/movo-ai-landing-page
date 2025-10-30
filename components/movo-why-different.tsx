"use client"

import { useEffect, useRef, useState } from "react"

export function MovoWhyDifferent() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([false, false, false, false])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight - 150 && !isVisible) {
          setIsVisible(true)
          // Stagger feature animations
          visibleFeatures.forEach((_, i) => {
            setTimeout(() => {
              setVisibleFeatures((prev) => {
                const newState = [...prev]
                newState[i] = true
                return newState
              })
            }, i * 150)
          })
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible])

  const features = [
    {
      emoji: "🎤",
      title: "Sounds real",
      description: "Conversational tone, natural pauses, real empathy — not a call-center script.",
    },
    {
      emoji: "💬",
      title: "Handles details",
      description: "Knows every program, fee, and location — so parents get accurate answers fast.",
    },
    {
      emoji: "📱",
      title: "Sends links",
      description: "Shares payment or registration links instantly via WhatsApp or SMS.",
    },
    {
      emoji: "📊",
      title: "Logs everything",
      description: "Every call summarized and stored in your dashboard — no follow-ups missed.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="why-different"
      className="py-20 md:py-32 bg-[#fafafa] transition-opacity duration-700"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans text-[#111] leading-tight">
            Parents can't tell it's AI.
            <br />
            That's the point.
          </h2>
          <p className="text-lg md:text-xl text-[#555] max-w-3xl mx-auto leading-relaxed">
            Movo speaks your programs, pricing, and tone — naturally.
            <br />
            No scripts. No robots. Just your academy's voice, available 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-500"
              style={{
                opacity: visibleFeatures[index] ? 1 : 0,
                transform: visibleFeatures[index] ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h3 className="text-2xl font-bold mb-3 text-[#111]">
                <span className="mr-2">{feature.emoji}</span>
                {feature.title}
              </h3>
              <p className="text-[#555] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold text-primary">Not a bot. A trained voice for your academy.</p>
        </div>
      </div>
    </section>
  )
}
