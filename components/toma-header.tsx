import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TomaHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-foreground">toma</div>
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="lg" className="hidden md:inline-flex bg-transparent">
            Schedule a Demo
          </Button>
          <Button variant="ghost" size="lg">
            Dealer Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}
