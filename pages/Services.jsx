import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  MessageSquare, 
  Package, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Zap,
  Award,
  TrendingUp
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "1-on-1 Calls",
      price: "$150",
      period: "/hour",
      description: "Personal coaching sessions tailored to your specific situation and goals.",
      features: [
        "Personalized strategy development",
        "Direct access to Tyler's expertise", 
        "Actionable next steps",
        "Follow-up resources included",
        "Flexible scheduling"
      ],
      popular: true,
      color: "accent-highlight"
    },
    {
      icon: MessageSquare,
      title: "Feedback on Ideas",
      price: "$75",
      period: "/session",
      description: "Get expert feedback on your business ideas and income strategies.",
      features: [
        "Expert idea evaluation",
        "Market viability assessment",
        "Implementation roadmap",
        "Risk analysis",
        "Next steps guidance"
      ],
      popular: false,
      color: "subtle-accent"
    },
    {
      icon: Package,
      title: "Resource Toolkits",
      price: "$97-$297",
      period: "",
      description: "Complete toolkits with templates, guides, and step-by-step instructions.",
      features: [
        "Comprehensive guides",
        "Ready-to-use templates",
        "Video walkthroughs",
        "Lifetime access",
        "Regular updates"
      ],
      popular: false,
      color: "bg-[var(--stone-gray)] text-white"
    },
    {
      icon: Calendar,
      title: "Group Workshops",
      price: "$47",
      period: "/session",
      description: "Learn alongside other motivated individuals in interactive workshops.",
      features: [
        "Live interactive sessions",
        "Group learning environment",
        "Networking opportunities",
        "Q&A sessions",
        "Workshop recordings"
      ],
      popular: false,
      color: "bg-white border-2 border-[var(--vibrant-orange)]"
    }
  ]

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Landscape Designer",
      content: "Tyler's 1-on-1 coaching helped me identify opportunities I never saw before. Within a month, I had my first consulting client paying me $500 for advice I used to give away for free.",
      rating: 5
    },
    {
      name: "David Kim", 
      role: "HVAC Technician",
      content: "The resource toolkit was exactly what I needed. Tyler's approach is so practical - no complicated strategies, just simple steps that actually work.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Electrician",
      content: "The group workshops were incredible. Learning alongside other tradespeople who 'get it' made all the difference. I launched my side business within 3 months.",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "How quickly can I expect to see results?",
      answer: "Most clients see their first income within 30-60 days of implementing the strategies we discuss. However, results vary based on your industry, available time, and how quickly you take action."
    },
    {
      question: "Do I need any special skills or experience?",
      answer: "Not at all! The whole point is helping you monetize the skills and experience you already have. Whether you're a tradesperson, have a hobby, or professional expertise - there's value there."
    },
    {
      question: "What if I'm not sure which service is right for me?",
      answer: "That's exactly what our free consultation is for. We'll discuss your situation and I'll recommend the best approach for your specific needs and goals."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, I offer a 30-day money-back guarantee on all services. If you're not completely satisfied, I'll refund your investment, no questions asked."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="editorial-hero bg-[var(--warm-off-white)]">
        <div className="editorial-grid">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="accent-highlight text-sm font-semibold px-4 py-2 rounded-full">
              Professional Services
            </Badge>
            
            <h1 className="editorial-heading text-6xl">
              Choose Your Path to
              <span className="block text-[var(--vibrant-orange)]">Success</span>
            </h1>
            
            <p className="editorial-body text-xl leading-relaxed max-w-2xl mx-auto">
              Whether you need one-on-one guidance, expert feedback, comprehensive resources, 
              or group learning, I've got options that fit your style, schedule, and budget.
            </p>
            
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[var(--vibrant-orange)]" />
                <span className="editorial-body text-sm">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[var(--vibrant-orange)]" />
                <span className="editorial-body text-sm">95% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[var(--vibrant-orange)]" />
                <span className="editorial-body text-sm">50+ Clients Helped</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="editorial-section bg-white">
        <div className="editorial-grid">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.title} className={`magazine-card p-8 relative group ${service.popular ? 'ring-2 ring-[var(--vibrant-orange)] ring-opacity-50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="accent-highlight text-xs font-semibold px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`p-4 rounded-xl ${service.color}`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[var(--rich-black)]">
                        {service.price}
                        <span className="text-lg font-normal text-[var(--stone-gray)]">{service.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="editorial-subheading text-2xl mb-3">{service.title}</h3>
                    <p className="editorial-body mb-6">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[var(--vibrant-orange)] flex-shrink-0" />
                        <span className="editorial-body text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 space-y-3">
                    <Link to="/contact">
                      <Button className={`w-full ${service.popular ? 'premium-button' : 'premium-button-secondary'} group-hover:shadow-lg transition-all`}>
                        {service.popular ? 'Book Now' : 'Learn More'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    
                    {service.title === "1-on-1 Calls" && (
                      <Link to="/contact">
                        <Button className="premium-button-secondary w-full text-sm">
                          Schedule Free Consultation
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>

      {/* Testimonials */}
      <section className="editorial-section bg-[var(--warm-off-white)]">
        <div className="editorial-grid">
          <div className="text-center space-y-6 mb-16">
            <Badge className="accent-highlight text-sm font-semibold px-4 py-2 rounded-full">
              Client Success Stories
            </Badge>
            
            <h2 className="editorial-heading text-5xl">
              Real Results from
              <span className="block text-[var(--vibrant-orange)]">Real People</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card stagger-animation">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--vibrant-orange)] text-[var(--vibrant-orange)]" />
                    ))}
                  </div>
                  
                  <p className="editorial-body text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="editorial-subheading text-sm">{testimonial.name}</div>
                    <div className="editorial-body text-xs text-[var(--stone-gray)]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="editorial-section bg-white">
        <div className="editorial-grid">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <Badge className="accent-highlight text-sm font-semibold px-4 py-2 rounded-full">
                Frequently Asked Questions
              </Badge>
              
              <h2 className="editorial-heading text-5xl">
                Common Questions About
                <span className="block text-[var(--vibrant-orange)]">Working Together</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="magazine-card p-6 stagger-animation">
                  <h3 className="editorial-subheading text-lg mb-3">{faq.question}</h3>
                  <p className="editorial-body">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="editorial-body mb-6">Don't see your question answered here?</p>
              <Link to="/contact">
                <Button className="premium-button text-lg px-8 py-4 h-auto">
                  Ask Me Anything
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="high-contrast-section editorial-section">
        <div className="editorial-grid">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="editorial-heading text-5xl text-white">
              Ready to Get Started?
            </h2>
            
            <p className="text-gray-300 text-xl">
              The best time to start was yesterday. The second best time is now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button className="premium-button text-lg px-8 py-4 h-auto">
                  Book Your Free Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/resources">
                <Button className="premium-button-secondary text-lg px-8 py-4 h-auto bg-white/10 border-white/20 text-white hover:bg-white hover:text-[var(--rich-black)]">
                  Start with Free Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

