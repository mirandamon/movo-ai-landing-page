"use client"

import { useEffect, useRef } from "react"

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null)
  const howItWorksRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    }

    const animateOnScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }

    const observer = new IntersectionObserver(animateOnScroll, observerOptions)

    if (statsRef.current) observer.observe(statsRef.current)
    if (howItWorksRef.current) observer.observe(howItWorksRef.current)
    if (testimonialsRef.current) observer.observe(testimonialsRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="relative top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between bg-[#FFF9F5] border-b border-gray-200">
        <img src="/movo-logo.png" alt="Movo logo" className="h-16 sm:h-24 md:h-32 w-auto object-contain" />
        <a
          href="https://calendly.com/ari-movoai/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[#FF7A29] hover:bg-[#E8650F] px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.03] hover:shadow-lg"
        >
          Book a Demo
        </a>
      </header>

      <div className="min-h-screen bg-gradient-to-b from-[#FFF9F5] via-[#FFF3EB] to-[#FFFDFC] text-gray-900 font-sans overflow-x-hidden">
        <div>
          {/* HERO */}
          <section
            id="hero"
            className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#FFF5ED] to-[#FFF9F5] overflow-hidden"
          >
            <div className="relative z-10 mx-auto max-w-7xl grid lg:grid-cols-2 items-center gap-8 sm:gap-12 px-4 sm:px-6">
              <div className="animate-fade-in-up text-center lg:text-left">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-[#FF7A29] mb-3 sm:mb-4">
                  Movo isn’t voice AI. It’s your closer on autopilot.
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
                  Parents call.
                  <br />
                  Movo answers.
                </h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
Movo turns missed calls into paid enrollments - instantly, in your voice.                  <br />
                                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a
                    href="https://calendly.com/ari-movoai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#FF7A29] hover:bg-[#E8650F] px-6 sm:px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.03] hover:shadow-lg"
                  >
                    Book a Demo
                  </a>
                  <a
                    href="https://calendly.com/ari-movoai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white border-2 border-[#FF7A29] px-6 sm:px-7 py-3 text-sm font-semibold text-[#FF7A29] hover:bg-[#FFF5ED] transition-all hover:scale-[1.03] hover:shadow-md"
                  >
                    See How It Works
                  </a>
                </div>
                <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-gray-500">
                  Trusted by leading academies like MPAC Sports and HoopLab.
                </p>
              </div>
              <div className="relative flex justify-center animate-fade-in-up animation-delay-200">
                <img
                  src="/movo-avatar-waving.png"
                  alt="Movo mascot holding phone and smiling"
                  className="h-64 sm:h-80 md:h-96 w-auto object-contain"
                />
              </div>
            </div>
          </section>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* PAIN SECTION */}
          <section
            id="pain"
            className="relative py-12 sm:py-16 md:py-18 bg-gradient-to-b from-[#F5F3FF] via-[#F8F6FF] to-[#F5F3FF]"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="grid lg:grid-cols-[1fr_auto] items-start gap-8 sm:gap-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight text-center lg:text-left">
                    Every missed call costs you money
                  </h2>
                  <p className="mt-4 sm:mt-5 max-w-xl text-gray-600 text-center lg:text-left mx-auto lg:mx-0">
                    80% of new enrollments start with a phone call.
                    <br />
                    If you don't answer in 5 seconds, parents move to the next academy.
                    <br />
                    Movo answers instantly — 24/7 — and turns every call into a sale.
                  </p>
                  <div
                    ref={statsRef}
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center lg:justify-start opacity-0 translate-y-8 transition-all duration-700"
                  >
                    <div className="text-center animate-scale-in animation-delay-100">
                      <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FF7A29]/10 mb-3">
                        <p className="text-4xl sm:text-5xl font-bold text-[#FF7A29]">{"<5s"}</p>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500">pickup</p>
                    </div>
                    <div className="text-center animate-scale-in animation-delay-200">
                      <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-400/10 mb-3">
                        <p className="text-3xl sm:text-4xl font-bold text-gray-600">2-3×</p>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500">more conversions</p>
                    </div>
                    <div className="text-center animate-scale-in animation-delay-300">
                      <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#B8A4FF]/10 mb-3">
                        <p className="text-4xl sm:text-5xl font-bold text-[#B8A4FF]">24/7</p>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500">coverage</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex justify-center items-center">
                  <img
                    src="/movo-avatar-sitting.png"
                    alt="Movo mascot sitting at a desk with a ringing phone"
                    className="h-72 w-auto object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              <div className="mt-10 sm:mt-12 max-w-2xl mx-auto rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 shadow-md ring-1 ring-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-gray-500">Incoming Call - 7:42pm</p>
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Parent:</p>
                      <p className="text-gray-700 text-sm sm:text-base">"Hi, do you have classes for 9-year-olds?"</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Movo:</p>
                      <p className="text-gray-700 text-sm sm:text-base">
                        "Yes — our next program starts Tuesday at 6 p.m. Want me to reserve a trial spot?"
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 sm:pt-4 border-t border-gray-100">
                    <p className="text-xs sm:text-sm text-green-600 font-medium">
                      ✅ Trial booked • Payment link sent • Revenue logged
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* HOW IT WORKS */}
          <section id="how" className="py-12 sm:py-16 md:py-18 bg-white">
            <div className="mx-auto max-w-7xl text-center px-4 sm:px-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                Movo turns every parent conversation into revenue.
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-10 sm:mb-12">
                Movo automates the work your staff doesn't have time for — answering, following up, and renewing
                memberships.
              </p>
              <div
                ref={howItWorksRef}
                className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-3 opacity-0 translate-y-8 transition-all duration-700"
              >
                <div className="flex flex-col items-center bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-100">
                  <img
                    src="/phone-handset.png"
                    alt="Orange phone handset"
                    className="h-20 sm:h-24 w-auto object-contain mb-4 hover:scale-110 transition-transform duration-300"
                  />
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Inbound</h4>
                  <p className="text-sm text-gray-600">Answers instantly, books trials, sends payments.</p>
                </div>
                <div className="flex flex-col items-center bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-200">
                  <img
                    src="/movo-avatar-desk-phone.png"
                    alt="Movo mascot sitting at a desk with a ringing phone"
                    className="h-20 sm:h-24 w-auto object-contain mb-4 hover:scale-110 transition-transform duration-300"
                  />
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Outbound</h4>
                  <p className="text-sm text-gray-600">Calls missed leads, fills programs, recovers no-shows.</p>
                </div>
                <div className="flex flex-col items-center bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-300">
                  <img
                    src="/movo-avatar-laptop.png"
                    alt="Movo mascot working on laptop with basketball"
                    className="h-20 sm:h-24 w-auto object-contain mb-4 hover:scale-110 transition-transform duration-300"
                  />
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Retention</h4>
                  <p className="text-sm text-gray-600">
                    Reaches out before memberships expire and renews automatically.
                  </p>
                </div>
              </div>
              <p className="mt-8 sm:mt-10 text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
                All synced with your scheduling and payment tools - no system change needed.
              </p>
            </div>
          </section>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* SOUNDS REAL */}
          <section id="soundsreal" className="py-12 sm:py-16 md:py-18 bg-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6">
                  Sounds Real. Works Instantly.
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                  Parents can't tell it's AI — that's the point.
                  <br />
                  Movo speaks in your tone, understands your programs, and sells like your top coach.
                  <br />
                  No scripts. No bots. Just your voice, 24/7.
                </p>

                <div className="mt-8 sm:mt-12 flex justify-center">
                  <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-gradient-to-br from-[#FFB89A] via-[#FF8C42] to-[#FF7A29] flex items-center justify-center shadow-lg animate-pulse-slow">
                    <span className="text-4xl sm:text-5xl">🎤</span>
                  </div>
                </div>

                <a
                  href="https://calendly.com/ari-movoai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 sm:mt-10 inline-block rounded-xl bg-[#FF7A29] hover:bg-[#E8650F] px-6 sm:px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.03] hover:shadow-lg"
                >
                  Hear a Real Call
                </a>
              </div>
            </div>
          </section>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* SOCIAL PROOF */}
          <section id="socialproof" className="py-12 sm:py-16 md:py-18 bg-gradient-to-b from-[#FFF9F5] to-[#FFF5ED]">
            <div className="mx-auto max-w-7xl text-center px-4 sm:px-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 sm:mb-12">
                Trusted by leading sports academies.
              </h3>
              <div
                ref={testimonialsRef}
                className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto opacity-0 translate-y-8 transition-all duration-700"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg/50 border border-gray-100 flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-100">
                  <div className="mb-4">
                    <img
                      src="/mpac-sports-logo.jpg"
                      alt="MPAC Sports logo"
                      className="h-10 sm:h-12 w-auto object-contain"
                    />
                  </div>
                  <img
                    src="/testimonial-harry.jpg"
                    alt="Harry from MPAC Sports"
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover mb-4 sm:mb-6 hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-sm sm:text-base text-gray-800 text-center mb-4 sm:mb-6">
                    We went from 2 sign-ups to 8 per month without lifting a finger.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#FF7A29]">Harry – MPAC Sports</p>
                </div>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg/50 border border-gray-100 flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-200">
                  <div className="mb-4">
                    <img
                      src="/macabbi-swim-school-logo.jpg"
                      alt="Macabbi Swim School logo"
                      className="h-10 sm:h-12 w-auto object-contain"
                    />
                  </div>
                  <img
                    src="/testimonial-alicia.jpg"
                    alt="Alicia from Macabbi Swim School"
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover mb-4 sm:mb-6 hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-sm sm:text-base text-gray-800 text-center mb-4 sm:mb-6">
                    Parents call us at 10 p.m. - Movo answers like our best staff member.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#FF7A29]">Alicia – Macabbi Swim School</p>
                </div>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg/50 border border-gray-100 flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-300">
                  <div className="mb-4">
                    <img
                      src="/haifa-swim-academy-logo.jpg"
                      alt="Haifa Swim Academy logo"
                      className="h-10 sm:h-12 w-auto object-contain"
                    />
                  </div>
                  <img
                    src="/testimonial-james.jpg"
                    alt="James from Haifa Swim Academy"
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover mb-4 sm:mb-6 hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-sm sm:text-base text-gray-800 text-center mb-4 sm:mb-6">
                    It's like having a 24/7 receptionist that knows our programs by heart.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#FF7A29]">James – Haifa Swim Academy</p>
                </div>
              </div>
            </div>
          </section>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* ROI */}
          <section
            id="roi"
            className="py-12 sm:py-16 md:py-18 bg-gradient-to-b from-[#FFF9F5] via-[#FFF3EB] to-[#FFF5ED]"
          >
            <div className="mx-auto max-w-4xl text-center px-4 sm:px-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Built to pay for itself - fast.
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10">
                Most academies miss hundreds of calls per month.
                <br />
                Each missed call is a $1K–$3K opportunity.
                <br />
                Movo answers, follows up, and closes them for you.
              </p>
              <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-100 max-w-lg mx-auto">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <p className="text-4xl sm:text-5xl font-bold text-[#FF7A29] mb-2">$12K+</p>
                    <p className="text-sm sm:text-base text-gray-600">in new monthly revenue recovered</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-500">
                      Based on 50 missed calls × 40% conversion × $600 average enrollment.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://calendly.com/ari-movoai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 sm:mt-10 inline-block rounded-xl bg-[#FF7A29] hover:bg-[#E8650F] px-6 sm:px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.03] hover:shadow-lg"
              >
                Calculate Your Missed Revenue
              </a>
            </div>
          </section>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* FINAL CTA */}
          <section
            id="cta"
            className="relative bg-gradient-to-br from-[#F5F3FF] via-[#F8F6FF] to-[#F5F3FF] py-12 sm:py-16 md:py-20"
          >
            <div className="mx-auto max-w-7xl grid items-center gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-6 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  Stop missing calls. Start enrolling faster.
                </h3>
                <p className="mt-4 sm:mt-5 max-w-xl text-gray-600 mx-auto lg:mx-0">
                  Movo runs your sales follow-up - like a closer you don’t have to train.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a
                    href="https://calendly.com/ari-movoai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#FF7A29] hover:bg-[#E8650F] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.03] hover:shadow-lg"
                  >
                    Book a Demo
                  </a>
                  <a
                    href="https://calendly.com/ari-movoai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white border-2 border-[#FF7A29] px-6 py-3 text-sm font-semibold text-[#FF7A29] hover:bg-[#FFF5ED] transition-all hover:scale-[1.03] hover:shadow-md"
                  >
                    Hear a Real Call
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center">
                <img
                  src="/movo-avatar-clipboard.png"
                  alt="Movo mascot waving with enrollment clipboard"
                  className="h-64 sm:h-72 md:h-80 w-auto object-contain"
                />
              </div>
            </div>
          </section>
        </div>

        <footer className="border-t border-gray-100 bg-white py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <img src="/movo-logo.png" alt="Movo logo" className="h-8 w-auto object-contain" />
                <span className="text-sm text-[#333333]">AI phone rep for sports academies</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="/portal" className="text-sm text-[#333333] hover:text-[#FF7A29] transition-colors">
                  Portal
                </a>
                <div className="text-sm text-[#333333] text-center md:text-right">
                  © {new Date().getFullYear()} Movo AI. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
