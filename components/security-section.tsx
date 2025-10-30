import { Shield, Lock, FileCheck } from "lucide-react"

export function SecuritySection() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Shield className="w-8 h-8 mx-auto mb-3 text-foreground" />
            <h3 className="font-semibold mb-2">COPPA Compliant</h3>
            <p className="text-sm text-muted-foreground">Fully compliant with children's privacy regulations</p>
          </div>
          <div>
            <Lock className="w-8 h-8 mx-auto mb-3 text-foreground" />
            <h3 className="font-semibold mb-2">Bank-Level Security</h3>
            <p className="text-sm text-muted-foreground">All data encrypted and securely stored</p>
          </div>
          <div>
            <FileCheck className="w-8 h-8 mx-auto mb-3 text-foreground" />
            <h3 className="font-semibold mb-2">SOC 2 Certified</h3>
            <p className="text-sm text-muted-foreground">Independently audited security standards</p>
          </div>
        </div>
      </div>
    </section>
  )
}
