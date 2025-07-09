import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { 
  Download, 
  CheckCircle, 
  Mail, 
  FileText, 
  Video, 
  Headphones,
  ArrowRight,
  Gift,
  Users,
  Clock
} from 'lucide-react'

export default function Resources() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to your email service
    console.log('Email signup:', { name, email })
    setIsSubmitted(true)
  }

  const additionalResources = [
    {
      title: 'Weekly Newsletter',
      description: 'Get practical tips and strategies delivered to your inbox every Tuesday.',
      icon: Mail,
      type: 'Newsletter'
    },
    {
      title: 'Skill Assessment Worksheet',
      description: 'Identify your most valuable skills and knowledge areas.',
      icon: FileText,
      type: 'Worksheet'
    },
    {
      title: 'Video Training Series',
      description: 'Watch Tyler break down real client success stories.',
      icon: Video,
      type: 'Video Series'
    },
    {
      title: 'Podcast Interviews',
      description: 'Listen to conversations with successful entrepreneurs.',
      icon: Headphones,
      type: 'Podcast'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="w-4 h-4 mr-2" />
            Free Resource
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            5 Steps to Start Charging for What You Know
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            The exact framework I used to turn my expertise into multiple income streams — 
            and how you can do the same, even if you've never sold anything before.
          </p>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Guide Preview */}
            <div>
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-lg text-primary-foreground mb-8">
                <h2 className="text-2xl font-bold mb-6">What You'll Learn:</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span>How to identify your most valuable knowledge and skills</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span>The 3 ways to package your expertise for maximum impact</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span>How to price your knowledge confidently</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span>Where to find your first paying customers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span>The simple system to deliver value and get results</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Pages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Steps</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">30</div>
                  <div className="text-sm text-muted-foreground">Minutes</div>
                </div>
              </div>
            </div>

            {/* Email Capture Form */}
            <div>
              <Card className="p-8">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">Get Your Free Guide</CardTitle>
                  <p className="text-muted-foreground">
                    Enter your details below and I'll send it to your inbox immediately.
                  </p>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">First Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your first name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        <Download className="mr-2 h-5 w-5" />
                        Get My Free Guide
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        I respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Check Your Email!</h3>
                      <p className="text-muted-foreground mb-6">
                        I've sent your free guide to {email}. It should arrive within the next few minutes.
                      </p>
                      <Button asChild>
                        <Link to="/services">
                          Explore Services
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Prefer to talk first?
                </p>
                <Button asChild variant="outline">
                  <Link to="/contact">
                    Schedule a Free Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              More Free Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Additional tools and content to help you on your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalResources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{resource.title}</h3>
                          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                          {resource.description}
                        </p>
                        <Button variant="outline" size="sm">
                          Access Now
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              What Others Are Saying
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from people who downloaded the guide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  "This guide opened my eyes to opportunities I never saw before. 
                  Within a month, I had my first consulting client paying me $500 for advice 
                  I used to give away for free."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Maria Santos</div>
                    <div className="text-sm text-muted-foreground">Landscape Designer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  "Tyler's approach is so practical. No complicated strategies, 
                  just simple steps that actually work. I wish I had found this years ago."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">David Kim</div>
                    <div className="text-sm text-muted-foreground">HVAC Technician</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for the Next Step?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Once you've read the guide, let's talk about how to implement these strategies 
            in your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Strategy Call
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

