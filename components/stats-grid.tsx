import { Card } from "@/components/ui/card"

export function StatsGrid() {
  const stats = [
    {
      metric: "99.9%",
      description: "vulnerability detection accuracy across all repositories",
      company: "ACME CORP",
    },
    {
      metric: "85%",
      description: "faster time to remediation with automated fixes",
      company: "TECHFLOW",
    },
    {
      metric: "200%",
      description: "increase in secure code generation from first line",
      company: "DEVOPS+",
    },
    {
      metric: "10x",
      description: "faster security review and deployment cycles",
      company: "CLOUDNINE",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 bg-card/50 border-border/50">
          <div className="space-y-3">
            <div className="text-3xl font-bold text-primary">{stat.metric}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
            <div className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">{stat.company}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
