import { Card } from "@/components/ui/card"

export function FeaturesGrid() {
  const features = [
    {
      title: "Unified Scanning",
      description:
        "Multi-layered security analysis across all repositories with real-time monitoring of deployed applications.",
      visual: (
        <div className="relative h-32 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-4 h-4 bg-primary/20 rounded border border-primary/30" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded-full core-glow" />
          </div>
        </div>
      ),
    },
    {
      title: "Automated Remediation",
      description: "AI-powered automatic fix generation with one-click pull requests for seamless integration.",
      visual: (
        <div className="relative h-32 flex items-center justify-center">
          <div className="space-y-2">
            <div className="w-32 h-3 bg-muted rounded" />
            <div className="w-24 h-3 bg-muted rounded" />
            <div className="w-28 h-3 bg-primary/50 rounded" />
          </div>
          <div className="absolute top-4 right-4">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-xs">✓</div>
          </div>
        </div>
      ),
    },
    {
      title: "Proactive Prevention",
      description:
        "Write secure code from the first line with intelligent IDE suggestions and vulnerability prevention.",
      visual: (
        <div className="relative h-32 flex items-center justify-center">
          <div className="space-y-1 font-mono text-xs">
            <div className="text-muted-foreground">{"function authenticate() {"}</div>
            <div className="text-primary ml-4">{"// Secure implementation"}</div>
            <div className="text-muted-foreground ml-4">{"return validateToken();"}</div>
            <div className="text-muted-foreground">{"}"}</div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Card key={index} className="p-8 bg-card/30 border-border/30 hover:bg-card/50 transition-colors">
          <div className="space-y-6">
            {feature.visual}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
