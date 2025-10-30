"use client"

import { useState } from "react"

export function MovoTeachIt() {
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>(["Basketball"])
  const [pricing, setPricing] = useState("Monthly")
  const [locations, setLocations] = useState<string[]>(["Downtown"])
  const [tone, setTone] = useState("Warm + concise")

  const programs = ["Basketball", "Soccer", "Swimming", "Tennis"]
  const locationOptions = ["Downtown", "Westside", "Northside"]

  return (
    <section id="teach-it" className="section-padding bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 font-sans">
              Teach <span className="handwriting text-6xl md:text-7xl">It</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Movo learns your academy in minutes.
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto">
              Upload your class list, fees, and FAQs - or just share call recordings. Movo listens, learns, and speaks
              like your coordinators do.
            </p>
          </div>

          <div className="p-8 bg-background rounded-3xl border-2 border-border">
            <div className="space-y-6">
              {/* Programs */}
              <div>
                <label className="block text-sm font-semibold mb-3">Programs</label>
                <div className="flex flex-wrap gap-2">
                  {programs.map((program) => (
                    <button
                      key={program}
                      onClick={() =>
                        setSelectedPrograms((prev) =>
                          prev.includes(program) ? prev.filter((p) => p !== program) : [...prev, program],
                        )
                      }
                      className={`px-4 py-2 rounded-full border-2 transition-all ${
                        selectedPrograms.includes(program)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card border-border hover:border-primary"
                      }`}
                    >
                      {program}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div>
                <label className="block text-sm font-semibold mb-3">Pricing</label>
                <div className="flex gap-2">
                  {["Monthly", "Term"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setPricing(option)}
                      className={`px-4 py-2 rounded-full border-2 transition-all ${
                        pricing === option
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card border-border hover:border-primary"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div>
                <label className="block text-sm font-semibold mb-3">Locations</label>
                <div className="flex flex-wrap gap-2">
                  {locationOptions.map((location) => (
                    <button
                      key={location}
                      onClick={() =>
                        setLocations((prev) =>
                          prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location],
                        )
                      }
                      className={`px-4 py-2 rounded-full border-2 transition-all ${
                        locations.includes(location)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card border-border hover:border-primary"
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tone */}
              <div>
                <label className="block text-sm font-semibold mb-3">Tone</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-card focus:border-primary focus:outline-none"
                >
                  <option>Warm + concise</option>
                  <option>Professional + detailed</option>
                  <option>Friendly + casual</option>
                </select>
              </div>
            </div>

            {/* Result Card */}
            <div className="mt-8 p-6 bg-accent/10 border-2 border-accent/30 rounded-2xl">
              <div className="text-sm font-semibold text-accent mb-2">Great! Movo now knows:</div>
              <div className="text-sm text-foreground mb-4">
                {selectedPrograms.length} programs, {locations.length} locations, sibling discount, and your tone.
              </div>
              <div className="p-4 bg-card rounded-xl border border-border">
                <div className="text-xs font-semibold text-muted-foreground mb-2">Try a sample:</div>
                <div className="text-sm mb-3 italic">"Do you have space for a 9-year-old on Tuesday?"</div>
                <div className="text-sm text-primary font-medium">
                  → "Yes! We have Basketball sessions on Tuesdays at 5pm in Downtown. Would you like me to hold a seat?"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
