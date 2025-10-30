import Image from "next/image"

export function LogoSection({ variant = "primary" }: { variant?: "primary" | "secondary" }) {
  const logos = [
    {
      name: "MPAC Sports",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jMdgzrImJkiIOFjqbswPIiui03e1Z8.png",
      width: 80,
      height: 80,
    },
    {
      name: "Nastic Sports Academy",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1QQYmP1CGQrZzqI4CiHHTVhxvdnGM9.png",
      width: 120,
      height: 120,
    },
    {
      name: "Alicante Sports Academy",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xnnkhsn7B8sGIUbYpuKILFPmizenXi.png",
      width: 120,
      height: 120,
    },
    {
      name: "Maccabi Tel Aviv",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fbkYoAiFyoPIc4MmMBBuZId5a8UqBt.png",
      width: 70,
      height: 70,
    },
  ]

  return (
    <section className="section-padding-sm border-y border-border">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <p className="text-center text-sm md:text-base font-semibold text-muted-foreground mb-12 tracking-wide uppercase">
          Trusted by leading sports organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 md:gap-x-16 md:gap-y-16 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-32 md:h-40 w-full">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="object-contain h-full w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
