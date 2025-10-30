"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container max-w-[1400px] mx-auto flex h-16 md:h-20 items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-4 md:gap-12">
          <a href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl md:text-3xl text-foreground lowercase">movo</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="mailto:ari@movoai.co"
              className="text-base font-normal text-foreground hover:text-foreground/70 transition-colors"
            >
              Contact
            </a>
            <span className="text-base font-normal text-foreground hover:text-foreground/70 transition-colors cursor-pointer">
              Company
            </span>
          </nav>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="lg"
            className="hidden lg:inline-flex bg-background border border-border hover:bg-foreground/5 rounded-full px-8 h-12 text-base"
            asChild
          >
            <a href="/portal">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Academy Login
            </a>
          </Button>
          <Button
            size="lg"
            className="hidden md:inline-flex bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-12 text-base font-semibold"
            asChild
          >
            <a href="https://calendly.com/ari-movoai/30min" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden h-10 w-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
