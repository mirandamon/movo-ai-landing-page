export function TomaPersonalize() {
  const agents = [
    {
      name: "Carla",
      company: "Boulder Nissan",
      location: "Boulder, CO",
      avatar: "bg-slate-700",
    },
    {
      name: "Rhett",
      company: "Seth Wadley Ford of Pauls Valley",
      location: "Pauls Valley, OK",
      avatar: "bg-slate-700",
    },
    {
      name: "Mia",
      company: "Evergreen Subaru",
      location: "Toronto, ON",
      avatar: "bg-slate-700",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-medium mb-2">Personalize</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Agents That Fit <span className="font-handwriting text-accent">Your Brand</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the voice, tone, and responses of your AI agents to match your brand identity and customer service
              values.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="bg-white border-2 border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`w-24 h-24 ${agent.avatar} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <div className="w-3 h-3 bg-accent rounded-full absolute top-2 right-2" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{agent.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{agent.company}</p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {agent.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
