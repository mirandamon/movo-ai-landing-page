export function CustomerTestimonial() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-sans text-center mb-16 text-foreground">
          What Our Customers Say About Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/modern-sports-academy-building-exterior.jpg"
              alt="Sports academy"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl text-foreground leading-relaxed mb-6">
                "Parents can call anytime — and still get answers, quotes, and payment links. It's like having a 24/7
                front desk."
              </p>
              <div>
                <div className="font-semibold text-foreground">Esra D.</div>
                <div className="text-sm text-muted-foreground">CEO, MPAC Sports</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
