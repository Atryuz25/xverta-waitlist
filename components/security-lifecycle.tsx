export function SecurityLifecycle() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Three-Step Loop */}
      <div className="relative w-80 h-80">
        {/* Loop Path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
          <defs>
            <path id="loop-path" d="M 160,40 A 120,120 0 1,1 159,40" />
          </defs>

          {/* Main Loop Circle */}
          <circle cx="160" cy="160" r="120" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />

          {/* Data Stream Animation */}
          <circle r="3" fill="currentColor" opacity="0.8">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#loop-path" />
            </animateMotion>
          </circle>
        </svg>

        {/* Step 1: Analyze */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
          <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center mb-2">
            <div className="text-xs font-mono">01</div>
          </div>
          <div className="text-sm font-semibold">Analyze</div>
          <div className="text-xs text-muted-foreground">Multi-layered Scans</div>
        </div>

        {/* Step 2: Remediate */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 text-center">
          <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center mb-2">
            <div className="text-xs font-mono">02</div>
          </div>
          <div className="text-sm font-semibold">Remediate</div>
          <div className="text-xs text-muted-foreground">One-click PR</div>
        </div>

        {/* Step 3: Prevent */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center mb-2">
            <div className="text-xs font-mono">03</div>
          </div>
          <div className="text-sm font-semibold">Prevent</div>
          <div className="text-xs text-muted-foreground">IDE Suggestions</div>
        </div>
      </div>
    </div>
  )
}
