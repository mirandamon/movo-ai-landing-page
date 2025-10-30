import { Card } from "@/components/ui/card"
import { Phone, Calendar, CreditCard, Clock, MessageSquare, Zap } from "lucide-react"

const useCases = [
  {
    icon: Phone,
    title: "24/7 Phone Coverage",
    description:
      "Never miss a call again. Movo answers every parent inquiry instantly—during practice, after hours, or on weekends—so you capture every enrollment opportunity.",
  },
  {
    icon: Calendar,
    title: "Automated Registration & Renewals",
    description:
      "Handle class registrations, camp sign-ups, and season renewals automatically. Movo follows up with leads who didn't complete registration and reminds returning families to re-enroll.",
  },
  {
    icon: CreditCard,
    title: "Instant Payment Collection",
    description:
      "Send payment links instantly during calls or via text. Movo follows up on overdue payments and processes registration fees automatically—turning inquiries into revenue immediately.",
  },
  {
    icon: MessageSquare,
    title: "Outbound Follow-Up Campaigns",
    description:
      "Automatically call or text parents who inquired but didn't enroll, remind families about upcoming renewals, and re-engage past members—all without lifting a finger.",
  },
  {
    icon: Clock,
    title: "Schedule Management",
    description:
      "Book trial sessions, reschedule classes, and answer schedule questions instantly. Movo syncs with your calendar and CRM to keep everything organized.",
  },
  {
    icon: Zap,
    title: "CRM & WhatsApp Integration",
    description:
      "Every call is logged in your CRM (Zoho, HubSpot, etc.) and conversations continue seamlessly on WhatsApp or SMS—all tracked in one place.",
  },
]

export function UseCases() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Everything you need to grow your academy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Movo handles the repetitive work—answering calls, collecting payments, and following up with leads—so you
            can focus on coaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                <useCase.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
