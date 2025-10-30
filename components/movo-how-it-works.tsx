"use client"

import { useEffect, useRef, useState } from "react"

export function MovoHowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight - 150 && !isVisible) {
          setIsVisible(true)
          // Stagger step animations
          setTimeout(() => setVisibleSteps([0]), 0)
          setTimeout(() => setVisibleSteps([0, 1]), 150)
          setTimeout(() => setVisibleSteps([0, 1, 2]), 300)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible])

  const conversation = [
    {
      speaker: "parent",
      message: "Hi, my son's 9 — is there a class in Brooklyn?",
    },
    {
      speaker: "movo",
      message: "Yes! We have a Junior Skills Program there. Would you like me to send you the free trial link?",
    },
    {
      speaker: "parent",
      message: "Sure, that's perfect.",
    },
    {
      speaker: "movo",
      message: "Great — I've just sent it to your WhatsApp!",
    },
  ]

  return (
    <section ref={sectionRef} className="bg-white py-32 md:py-40 px-6 overflow-hidden">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2
          className={`font-sans text-[42px] md:text-[52px] font-extrabold leading-tight mb-5 text-[#111] transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Set it up once.
          <br />
          Movo never misses another call.
        </h2>
        <p
          className={`text-lg md:text-xl text-[#555] max-w-[650px] mx-auto mb-20 leading-relaxed transition-all duration-800 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Upload your programs, pricing, and schedules once — then let Movo handle every parent call after that.
        </p>

        <div className="flex justify-center gap-12 md:gap-16 flex-wrap mb-24">
          {[
            {
              num: 1,
              title: "Upload your info",
              desc: "Pricing, locations, programs, and schedules — all in one place.",
            },
            {
              num: 2,
              title: "Parents call",
              desc: "Movo answers instantly, explains programs, and offers trial sessions.",
            },
            {
              num: 3,
              title: "You review results",
              desc: "Every call, message, and registration logged in your dashboard.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className={`flex-1 min-w-[260px] max-w-[300px] text-center transition-all duration-800 ${
                visibleSteps.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7E64FF] to-[#A994FF] text-white font-bold text-lg flex items-center justify-center mx-auto mb-5">
                {step.num}
              </div>
              <h3 className="font-sans text-xl md:text-[22px] font-bold mb-2 text-[#111]">{step.title}</h3>
              <p className="text-base md:text-[17px] text-[#555] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div
          className={`text-left max-w-[700px] mx-auto transition-all duration-800 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h4 className="text-xl md:text-[22px] font-bold mb-4 text-[#111]">Example Call</h4>
          <div className="bg-[#F8F7FF] rounded-2xl p-6 md:p-7 shadow-md">
            <div className="space-y-3">
              {conversation.map((turn, index) => (
                <div key={index} className={`flex ${turn.speaker === "movo" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`inline-block py-3.5 px-5 rounded-[20px] text-base leading-relaxed max-w-[85%] ${
                      turn.speaker === "parent" ? "bg-[#EDEDED] text-[#222]" : "bg-[#7E64FF] text-white"
                    }`}
                  >
                    {turn.message}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
