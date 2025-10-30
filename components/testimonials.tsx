import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, ArrowRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "After turning AutoFlow on and listening to the first few recordings, it felt like we have another member of the team on the phone. It was booking and modifying appointments, pinging our team for follow-ups, and delighting customers.",
    author: "Joe King",
    role: "Service Director",
    company: "Hyundai of St. Augustine",
  },
  {
    quote:
      "My experience with AutoFlow has been 10 out of 10. It saves 43 hours of our advisors' time on average each month so we can focus on in-person customers and drive revenue. It's almost like we added another member to our team.",
    author: "Eric Stockton",
    role: "Service Manager",
    company: "Boulder Nissan",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">What Our Customers Say About Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 relative">
              <Quote className="h-10 w-10 text-accent/20 mb-6" />
              <blockquote className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
              <div className="border-t border-border pt-6">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
                <Button variant="link" className="mt-4 p-0 h-auto">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
