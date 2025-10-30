"use client"

import { useEffect, useRef, useState } from "react"

export function TestimonialsGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [showLogos, setShowLogos] = useState(false)
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Show logos after 200ms
            setTimeout(() => setShowLogos(true), 200)
            // Show testimonials with stagger
            setTimeout(() => setVisibleTestimonials([0]), 400)
            setTimeout(() => setVisibleTestimonials([0, 1]), 550)
            setTimeout(() => setVisibleTestimonials([0, 1, 2]), 700)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      quote: "We used to miss half our calls — now Movo answers every one, and we've doubled trial bookings.",
      author: "Harry",
      academy: "MPAC Sports",
      image: "/testimonial-person-1.png", // Updated to use new professional headshot
    },
    {
      quote: "Parents call us at 10 p.m. — Movo answers like our best staff member.",
      author: "Alicia",
      academy: "Macabbi Swim School",
      image: "/testimonial-person-2.png", // Updated to use new professional headshot
    },
    {
      quote: "It's like having a 24/7 receptionist that knows our programs by heart.",
      author: "James",
      academy: "Haifa Swim Academy",
      image: "/testimonial-person-3.png", // Updated to use new professional headshot
    },
  ]

  const logos = [
    { src: "/sports-academy-logo-1.jpg", alt: "MPAC Sports" },
    { src: "/sports-academy-logo-2.jpg", alt: "Goldfish Swim School" },
    { src: "/sports-academy-logo-3.jpg", alt: "Long Island Swim School" },
    { src: "/sports-academy-logo-1.jpg", alt: "ABC Sports Academy" },
  ]

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl lg:text-[52px] font-bold mb-5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Academies using Movo today
        </h2>
        <p
          className={`text-lg md:text-xl text-[#555] max-w-[700px] mx-auto mb-16 md:mb-20 leading-relaxed transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          From basketball to swim schools, Movo helps every academy stay connected — answering parents instantly and
          capturing more sign-ups.
        </p>

        <div
          className={`flex items-center justify-center gap-12 md:gap-16 flex-wrap mb-16 md:mb-20 transition-all duration-700 ${
            showLogos ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              className="h-12 md:h-16 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-[#F8F7FF] rounded-[20px] p-7 md:p-8 shadow-[0_6px_16px_rgba(0,0,0,0.05)] transition-all duration-700 ${
                visibleTestimonials.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <img
                src={testimonial.image || "/placeholder.svg?height=64&width=64"}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <p className="text-base md:text-[17px] text-[#333] leading-relaxed mb-3">{testimonial.quote}</p>
              <span className="text-sm md:text-[15px] font-semibold text-[#7E64FF]">
                {testimonial.author} – {testimonial.academy}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
