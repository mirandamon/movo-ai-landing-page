"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function TomaLiveDemo() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left illustration */}
            <div className="hidden md:flex justify-center">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none" className="w-full max-w-sm">
                <path
                  d="M50 150 Q50 50 150 50 Q250 50 250 150 Q250 250 150 250 Q50 250 50 150"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-muted-foreground/30"
                />
                <circle cx="150" cy="120" r="40" fill="#A8E063" opacity="0.2" />
                <path
                  d="M130 110 L140 120 L170 90"
                  stroke="#A8E063"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Demo form */}
            <div className="bg-white border-2 border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">Check out our LIVE product</h3>
              <p className="text-muted-foreground mb-6">Try to book a service appointment like a real customer.</p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    Your name *
                  </Label>
                  <Input id="name" placeholder="John Smith" className="mt-1.5 h-12" />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Your number *
                  </Label>
                  <Input id="phone" placeholder="(123) 456-7890" className="mt-1.5 h-12" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Your email *
                  </Label>
                  <Input id="email" type="email" placeholder="john.smith@toma.com" className="mt-1.5 h-12" />
                </div>

                <Button className="w-full bg-accent hover:bg-accent-secondary text-accent-foreground font-medium h-12 text-base mt-2">
                  Call me now
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
