"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        size="lg"
        className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-14 font-medium shadow-2xl"
        asChild
      >
        <a href="https://calendly.com/ari-posner/quick-chat" target="_blank" rel="noopener noreferrer">
          Book a Demo
        </a>
      </Button>
    </div>
  )
}
