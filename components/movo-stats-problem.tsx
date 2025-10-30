"use client"

import { useEffect, useRef, useState } from "react"

export function MovoStatsProblem() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="px-6 text-center"
      style={{
        background: "#F7F6FC",
        padding: "100px 0",
      }}
    >
      <div className="max-w-[1140px] mx-auto">
        <h2
          className={`text-[52px] font-bold leading-[1.1] mb-6 transition-all duration-900 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ color: "#0D0B19" }}
        >
          Parents don't leave voicemails.
          <br />
          They leave.
        </h2>

        <p
          className={`text-lg max-w-[600px] mx-auto mb-[26px] transition-all duration-900 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ color: "rgba(13,11,25,0.74)" }}
        >
          80% of parent calls happen after 6 p.m. If no one picks up, they move to the next academy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mt-[26px]">
          {[
            { stat: "< 5 s", label: "average pickup time", delay: "200ms" },
            { stat: "+ 40 %", label: "more trial bookings", delay: "400ms" },
            { stat: "24 / 7", label: "availability", delay: "600ms" },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-white border rounded-[14px] p-[22px] text-center transition-all duration-900 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                borderColor: "rgba(13,11,25,0.08)",
                boxShadow: "0 10px 30px rgba(13,11,25,0.10)",
                transitionDelay: item.delay,
              }}
            >
              <h3
                className="text-[36px] font-bold m-0"
                style={{
                  background: "linear-gradient(90deg, #7E64FF, #B39DFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.stat}
              </h3>
              <p className="text-base" style={{ color: "rgba(13,11,25,0.74)" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
