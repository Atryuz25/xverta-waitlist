"use client"
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { Github, Shield, Zap, Eye, ArrowRight, Sparkles, Search, Code, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
const Beams = dynamic(() => import('./Beams'), { ssr: false })

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ]

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    })

    observerRef.current = observer

    const elements = document.querySelectorAll(".text-reveal, .slide-in-left, .slide-in-right, .scale-in, .fade-in-up, .stagger-1, .stagger-2, .stagger-3")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Join Beta</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-muted-foreground hover:text-foreground transition-colors block py-2"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-6">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Join Beta
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <section className="py-32 px-6 hero-gradient relative overflow-hidden">
        {/* Background Beams Animation */}
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        
        {/* Foreground Content */}
        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-20">
          <div className="text-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-foreground text-sm font-medium floating">
            <Sparkles className="w-4 h-4 text-primary pulse" />
            Now in Private Beta
            <span className="typing-cursor"></span>
          </div>
          <h1 className="text-reveal stagger-1 text-4xl md:text-6xl font-bold leading-tight text-balance">
            Go from <span className="gradient-text">security anxiety</span> to{" "}
            <span className="text-foreground">automated assurance</span>
          </h1>
          <p className="text-reveal stagger-2 text-xl md:text-2xl text-muted-foreground/90 leading-relaxed text-pretty max-w-4xl mx-auto font-light">
            Xverta is the <span className="font-semibold text-foreground">AI-powered security co-pilot</span> for scaling teams. We unify scanning, automate fixes with
            one-click pull requests, and prevent vulnerabilities before they're even written.
          </p>
          <div className="text-reveal stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold glow-pulse transform hover:scale-105 transition-all duration-300"
            >
              Join the Private Beta
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-border hover:bg-card/80 bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              Watch Demo
              <Eye className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Modern Feature Grid - React Bits Inspired */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to secure your codebase with AI-powered automation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="scale-in bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Scanning</h3>
              <p className="text-muted-foreground text-sm">Advanced machine learning algorithms detect vulnerabilities with unprecedented accuracy.</p>
            </div>
            
            <div className="scale-in bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">One-Click Fixes</h3>
              <p className="text-muted-foreground text-sm">Automatically generate and apply security patches with a single click.</p>
            </div>
            
            <div className="scale-in bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IDE Integration</h3>
              <p className="text-muted-foreground text-sm">Real-time security suggestions directly in your development environment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="slide-in-left text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-sm font-medium mb-8 floating">
              <Search className="w-4 h-4 text-primary pulse" />
              Step 1: Analyze
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Gain Total <span className="gradient-text">Visibility</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground/90 text-pretty max-w-4xl mx-auto font-light leading-relaxed">
              Before you can fix anything, you need a single source of truth. Xverta provides deep, multi-layered scans
              to give you a complete picture of your risk, from your code to your live applications.
            </p>
          </div>

          {/* UI Image Showcase - Compact Side Layout */}
          <div className="scale-in mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center max-w-5xl mx-auto">
              <div className="flex-1">
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 transform hover:scale-105 transition-all duration-300 glow-white">
                  <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background/20"></div>
                    <div className="text-center space-y-2 relative z-10">
                      <Search className="w-8 h-8 text-primary mx-auto floating" />
                      <p className="text-sm text-foreground font-medium">Security Dashboard</p>
                      <p className="text-xs text-muted-foreground/70">Multi-layered scanning</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-left space-y-4 slide-in-right">
                <h3 className="text-xl font-bold text-foreground">Comprehensive Analysis</h3>
                <p className="text-muted-foreground/90 text-sm leading-relaxed">Get complete visibility across all your repositories and applications with deep, multi-layered security scanning that identifies vulnerabilities others miss.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="fade-in-up stagger-1 p-8 card-hover bg-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Comprehensive Code Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive code analysis across all repositories
                </p>
              </div>
            </Card>

            <Card className="fade-in-up stagger-2 p-8 card-hover bg-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Real-time Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed">Real-time monitoring of deployed applications</p>
              </div>
            </Card>

            <Card className="fade-in-up stagger-3 p-8 card-hover bg-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <Search className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Unified Dashboard</h3>
                <p className="text-muted-foreground leading-relaxed">Unified dashboard with actionable insights</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section - React Bits Inspired */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="scale-in">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="scale-in">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">10x</div>
              <div className="text-muted-foreground">Faster Fixes</div>
            </div>
            <div className="scale-in">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Monitoring</div>
            </div>
            <div className="scale-in">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100+</div>
              <div className="text-muted-foreground">Security Rules</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="slide-in-left text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-sm font-medium mb-8 floating">
              <Zap className="w-4 h-4 text-primary pulse" />
              Step 2: Remediate
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Go from Discovery to Deployment <span className="gradient-text">in a Click</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-4xl mx-auto font-light leading-relaxed">
              Finding problems is easy. Fixing them is hard. Xverta closes the loop with intelligent, automated
              remediation that transforms security from a development blocker into a seamless part of the workflow.
            </p>
          </div>

          {/* UI Image Showcase - Compact Side Layout */}
          <div className="fade-in-up mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center max-w-5xl mx-auto">
              <div className="flex-1 text-left space-y-4">
                <h3 className="text-xl font-bold">Automated Remediation</h3>
                <p className="text-muted-foreground text-sm">Transform security findings into fixed code with AI-powered remediation and one-click pull requests.</p>
              </div>
              <div className="flex-1">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-muted/40"></div>
                    <div className="text-center space-y-2 relative z-10">
                      <Zap className="w-8 h-8 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground font-medium">Fix Generation</p>
                      <p className="text-xs text-muted-foreground/70">One-click PR creation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="fade-in-up stagger-1 p-8 card-hover bg-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">AI-Powered Fixes</h3>
                <p className="text-muted-foreground leading-relaxed">AI-powered automatic fix generation</p>
              </div>
            </Card>

            <Card className="fade-in-up stagger-2 p-8 card-hover bg-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">One-Click PRs</h3>
                <p className="text-muted-foreground leading-relaxed">One-click pull request creation</p>
              </div>
            </Card>

            <Card className="fade-in-up stagger-3 p-8 card-hover bg-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Seamless Integration</h3>
                <p className="text-muted-foreground leading-relaxed">Seamless integration with your workflow</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-up text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Step 3: Prevent
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-glow">
              Write Secure Code <span className="text-foreground">from the First Line</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-4xl mx-auto font-light leading-relaxed">
              The most effective way to fix a vulnerability is to never write it in the first place. Xverta's proactive
              code generation engine is designed to be your team's security partner during the creation process.
            </p>
          </div>

          {/* UI Image Showcase - Compact Side Layout */}
          <div className="fade-in-up mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center max-w-5xl mx-auto">
              <div className="flex-1">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-muted/40"></div>
                    <div className="text-center space-y-2 relative z-10">
                      <Shield className="w-8 h-8 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground font-medium">IDE Integration</p>
                      <p className="text-xs text-muted-foreground/70">Real-time suggestions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-left space-y-4">
                <h3 className="text-xl font-bold">Proactive Prevention</h3>
                <p className="text-muted-foreground text-sm">Write secure code from the first line with real-time IDE suggestions and proactive security guidance.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="fade-in-up stagger-1 p-8 card-hover bg-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Real-time Suggestions</h3>
                <p className="text-muted-foreground leading-relaxed">Real-time security suggestions in your IDE</p>
              </div>
            </Card>

            <Card className="fade-in-up stagger-2 p-8 card-hover bg-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Proactive Generation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proactive code generation with security built-in
                </p>
              </div>
            </Card>

            <Card className="fade-in-up stagger-3 p-8 card-hover bg-card">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Best Practices</h3>
                <p className="text-muted-foreground leading-relaxed">Best practices enforcement from day one</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 hero-gradient">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="fade-in-up text-5xl md:text-6xl font-bold text-balance text-glow">
            Ready to Ship <span className="text-foreground">Faster</span>, and{" "}
            <span className="text-foreground">Safer</span>?
          </h2>
          <p className="fade-in-up stagger-1 text-xl md:text-2xl text-muted-foreground text-pretty font-light leading-relaxed">
            Stop choosing between speed and security. Join the private beta to get early access to the future of
            application security.
          </p>
          <Button
            className="fade-in-up stagger-2 bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold glow-white"
            size="lg"
          >
            Join the Private Beta
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-6 section-gradient">
        <div className="max-w-md mx-auto space-y-6">
          <div className="fade-in-up text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Get Started</h3>
            <p className="text-muted-foreground">Choose your preferred sign-in method</p>
          </div>
          <div className="grid gap-4">
            <Button
              variant="outline"
              className="fade-in-up stagger-1 w-full bg-card border-border hover:bg-muted card-hover py-6 text-lg font-semibold"
            >
              <Github className="w-5 h-5 mr-3" />
              Continue with GitHub
            </Button>
            <Button
              variant="outline"
              className="fade-in-up stagger-2 w-full bg-card border-border hover:bg-muted card-hover py-6 text-lg font-semibold"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6 bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-foreground mb-4">Xverta</div>
          <p className="text-muted-foreground">© 2025 Xverta, Inc. | Coimbatore, India</p>
        </div>
      </footer>
    </div>
  )
}
