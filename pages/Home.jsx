import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Target, 
  Zap,
  Star,
  TrendingUp,
  Award,
  MessageSquare
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Editorial Style */}
      <section className="editorial-hero hero-gradient">
        <div className="editorial-grid">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <Badge className="accent-highlight text-sm font-semibold px-4 py-2 rounded-full">
                Your Builder Next Door
              </Badge>
              
              <h1 className="editorial-heading text-4xl lg:text-5xl">
                Turn What You
                <span className="block text-[var(--vibrant-green)]">Know</span>
                Into What You
                <span className="block">Earn</span>
              </h1>
              
              <p className="editorial-body text-xl leading-relaxed max-w-lg">
                I help everyday people — especially tradespeople and aspiring entrepreneurs — 
                transform their skills and experience into sustainable income through coaching, 
                digital products, and step-by-step support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <Button className="premium-button text-lg px-8 py-4 h-auto">
                    Book a Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <Link to="/resources">
                  <Button className="premium-button-secondary text-lg px-8 py-4 h-auto">
                    Download Free Guide
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--vibrant-orange)] border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-[var(--stone-gray)] border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-[var(--soft-peach)] border-2 border-white"></div>
                  </div>
                  <span className="editorial-body text-sm">50+ Success Stories</span>
                </div>
                
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--vibrant-green)] text-[var(--vibrant-green)]" />
                  ))}
                  <span className="editorial-body text-sm ml-2">4.9/5 Rating</span>
                </div>
              </div>
            </div>
            
            <div className="relative fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="relative bg-gradient-to-br from-[var(--vibrant-green)] to-green-600 rounded-2xl p-12 text-center shadow-2xl">
                <div className="text-6xl mb-4">🚪</div>
                <h3 className="text-white text-2xl font-bold mb-2">Tyler Roberts</h3>
                <p className="text-green-100">Your Builder Next Door</p>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="editorial-body text-sm font-semibold">Available for consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="editorial-grid">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="stagger-animation">
              <div className="text-3xl font-bold text-[var(--rich-black)]">50+</div>
              <div className="editorial-body text-sm">Clients Helped</div>
            </div>
            <div className="stagger-animation">
              <div className="text-3xl font-bold text-[var(--rich-black)]">$2M+</div>
              <div className="editorial-body text-sm">Revenue Generated</div>
            </div>
            <div className="stagger-animation">
              <div className="text-3xl font-bold text-[var(--rich-black)]">95%</div>
              <div className="editorial-body text-sm">Success Rate</div>
            </div>
            <div className="stagger-animation">
              <div className="text-3xl font-bold text-[var(--rich-black)]">5 Years</div>
              <div className="editorial-body text-sm">Experience</div>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>

      {/* About Preview - High Contrast */}
      <section className="high-contrast-section editorial-section">
        <div className="editorial-grid">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge className="subtle-accent text-sm font-semibold px-4 py-2 rounded-full">
                From Hands-On Work to Helping Others
              </Badge>
              
              <h2 className="editorial-subheading text-4xl text-white">
                I'm a hands-on guy who figured out how to get paid for what I knew
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Now I help others do the same — turning years of experience into income streams 
                that work for you, not against you. No fluff, no theory. Just real-world strategies 
                that work for people who build, fix, and create with their hands.
              </p>
              
              <Link to="/about">
                <Button className="premium-button text-lg px-8 py-4 h-auto mt-6">
                  Read My Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="magazine-card p-6 bg-white/10 backdrop-blur border-white/20">
                <div className="flex items-start gap-4">
                  <div className="accent-highlight p-3 rounded-lg">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="editorial-subheading text-lg text-white mb-2">Practical Approach</h3>
                    <p className="text-gray-300 text-sm">
                      No fluff, no theory. Just real-world strategies that work for people who build, fix, and create.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="magazine-card p-6 bg-white/10 backdrop-blur border-white/20">
                <div className="flex items-start gap-4">
                  <div className="accent-highlight p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="editorial-subheading text-lg text-white mb-2">Proven Results</h3>
                    <p className="text-gray-300 text-sm">
                      I've helped dozens create additional income streams without sacrificing their core work.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="magazine-card p-6 bg-white/10 backdrop-blur border-white/20">
                <div className="flex items-start gap-4">
                  <div className="accent-highlight p-3 rounded-lg">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="editorial-subheading text-lg text-white mb-2">Step-by-Step Support</h3>
                    <p className="text-gray-300 text-sm">
                      From idea to income, I'll walk you through every step with clear, actionable guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>

      {/* Services Preview - Magazine Style */}
      <section className="editorial-section bg-white">
        <div className="editorial-grid">
          <div className="text-center space-y-6 mb-16">
            <Badge className="accent-highlight text-sm font-semibold px-4 py-2 rounded-full">
              How I Can Help You
            </Badge>
            
            <h2 className="editorial-heading text-5xl">
              Choose Your Path to
              <span className="block text-[var(--vibrant-green)]">Success</span>
            </h2>
            
            <p className="editorial-body text-xl max-w-2xl mx-auto">
              Whether you need one-on-one guidance or prefer to learn at your own pace, 
              I've got options that fit your style and schedule.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="magazine-card p-8 group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="accent-highlight p-4 rounded-xl">
                    <Users className="h-8 w-8" />
                  </div>
                  <Badge className="subtle-accent text-xs font-semibold px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
                
                <div>
                  <h3 className="editorial-subheading text-2xl mb-3">1-on-1 Calls</h3>
                  <p className="editorial-body mb-4">
                    Personal coaching sessions tailored to your specific situation and goals.
                  </p>
                  <div className="text-3xl font-bold text-[var(--rich-black)] mb-4">$150<span className="text-lg font-normal text-[var(--stone-gray)]">/hour</span></div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--vibrant-green)]" />
                    <span className="editorial-body text-sm">Personalized strategy development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--vibrant-green)]" />
                    <span className="editorial-body text-sm">Direct access to expertise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--vibrant-green)]" />
                    <span className="editorial-body text-sm">Actionable next steps</span>
                  </li>
                </ul>
                
                <Link to="/services" className="block">
                  <Button className="premium-button w-full group-hover:shadow-lg transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="magazine-card p-8 group">
              <div className="space-y-6">
                <div className="accent-highlight p-4 rounded-xl w-fit">
                  <MessageSquare className="h-8 w-8" />
                </div>
                
                <div>
                  <h3 className="editorial-subheading text-2xl mb-3">Feedback on Ideas</h3>
                  <p className="editorial-body mb-4">
                    Get expert feedback on your business ideas and income strategies.
                  </p>
                  <div className="text-3xl font-bold text-[var(--rich-black)] mb-4">$75<span className="text-lg font-normal text-[var(--stone-gray)]">/session</span></div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--vibrant-green)]" />
                    <span className="editorial-body text-sm">Expert idea evaluation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--vibrant-green)]" />
                    <span className="editorial-body text-sm">Market viability assessment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--vibrant-green)]" />
                    <span className="editorial-body text-sm">Implementation roadmap</span>
                  </li>
                </ul>
                
                <Link to="/services" className="block">
                  <Button className="premium-button-secondary w-full group-hover:shadow-lg transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="premium-button-secondary text-lg px-8 py-4 h-auto">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="editorial-section bg-[var(--warm-off-white)]">
        <div className="editorial-grid">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="editorial-heading text-5xl">
              Ready to Turn Your Skills Into
              <span className="block text-[var(--vibrant-green)]">Income?</span>
            </h2>
            
            <p className="editorial-body text-xl">
              Start with my free guide: "5 Steps to Start Charging for What You Know"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/resources">
                <Button className="premium-button text-lg px-8 py-4 h-auto">
                  Get Free Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button className="premium-button-secondary text-lg px-8 py-4 h-auto">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

