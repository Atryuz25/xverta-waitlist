export function XvertaCore() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Central Core */}
      <div className="relative">
        <div className="w-24 h-24 bg-primary rounded-lg core-glow flex items-center justify-center">
          <div className="text-2xl font-bold text-primary-foreground font-mono">X</div>
        </div>

        {/* Neural Network Lines */}
        <div className="absolute inset-0 -m-8">
          <svg className="w-40 h-40" viewBox="0 0 160 160">
            <defs>
              <pattern id="neural" patternUnits="userSpaceOnUse" width="4" height="4">
                <circle cx="2" cy="2" r="0.5" fill="currentColor" opacity="0.3" />
              </pattern>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
              strokeDasharray="2,2"
            />
            <circle
              cx="80"
              cy="80"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.1"
              strokeDasharray="1,1"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
