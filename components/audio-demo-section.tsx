"use client"

import { useState, useRef } from "react"

export function AudioDemoSection() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([])

  const demos = [
    {
      title: "Schedule inquiry for swim lessons",
      duration: "0:58",
      description: "Movo checks availability and books a trial class",
      audioUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20First%20Project%20from%20Podcastle%20%281%29-YSRounD4d0Pm8RUWNpjqV9wUQML4Qx.mp3",
    },
    {
      title: "Parent asking about basketball programs",
      duration: "1:24",
      description: "Movo explains program options, pricing, and sends a registration link",
      audioUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project%202%20Podcast-3Awcen2I0pySuWbfoTVPmwjka7PnGv.mp3",
    },
  ]

  const togglePlay = (index: number) => {
    const audio = audioRefs.current[index]
    if (!audio || !demos[index].audioUrl) return

    if (playingIndex === index) {
      audio.pause()
      setPlayingIndex(null)
    } else {
      // Pause any currently playing audio
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex]?.pause()
      }
      audio.play()
      setPlayingIndex(index)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-accent/5 via-background to-accent-secondary/5">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-medium text-sm mb-6">
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
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
            Real Calls
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 text-balance">
            Listen to a real parent call — fully handled by Movo.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
            No scripts. No robotic responses. Just natural conversations that convert.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {demos.map((demo, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-sans text-xl font-semibold text-foreground mb-2">{demo.title}</h3>
                  <p className="text-base text-muted-foreground">{demo.description}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {demo.duration}
                </span>
              </div>

              {demo.audioUrl && (
                <audio
                  ref={(el) => {
                    audioRefs.current[index] = el
                  }}
                  src={demo.audioUrl}
                  onEnded={() => setPlayingIndex(null)}
                />
              )}

              <button
                onClick={() => togglePlay(index)}
                disabled={!demo.audioUrl}
                className="inline-flex items-center gap-3 px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  {playingIndex === index ? (
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
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
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
                      className="ml-0.5"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </div>
                {playingIndex === index ? "Pause Call" : "Play Call"}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            These are unedited recordings of Movo handling real parent inquiries.
          </p>
        </div>
      </div>
    </section>
  )
}
