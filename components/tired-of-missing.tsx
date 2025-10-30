import { Button } from "@/components/ui/button"

export function TiredOfMissing() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6">Tired of leaving enrollments on the table?</h2>
          <p className="text-xl text-background/80 mb-8">
            Every missed call is a missed opportunity. Let AI handle parent inquiries 24/7.
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
