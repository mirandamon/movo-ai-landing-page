export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                  Features
                </span>
              </li>
              <li>
                <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                  Integrations
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                  Documentation
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                  About
                </span>
              </li>
              <li>
                <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                  Careers
                </span>
              </li>
              <li>
                <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                  Contact
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                  Privacy
                </span>
              </li>
              <li>
                <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                  Terms
                </span>
              </li>
              <li>
                <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                  Security
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">movo</div>
            </div>
            <div className="flex gap-4">
              <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                Twitter
              </span>
              <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                LinkedIn
              </span>
              <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                Instagram
              </span>
            </div>
          </div>
          <p className="text-sm text-background/60 text-center md:text-left">
            Built by Movo — powering AI phone reps for the next generation of sports academies.
          </p>
        </div>
      </div>
    </footer>
  )
}
