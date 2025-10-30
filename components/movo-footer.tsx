import Image from "next/image"

export function MovoFooter() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <Image src="/movo-logo.png" alt="Movo" width={360} height={120} className="h-24 w-auto" quality={100} />
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            <div className="text-sm text-muted-foreground">© 2025 Movo. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
