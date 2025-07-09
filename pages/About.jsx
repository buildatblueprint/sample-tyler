import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, CheckCircle, Users, Award, Target } from 'lucide-react'
import constructionBusiness from '@/assets/construction-business.jpg'
import coachingConsultation from '@/assets/coaching-consultation.jpg'
import businessHandshake from '@/assets/business-handshake.jpg'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Meet Tyler Roberts
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm a hands-on guy who figured out how to get paid for what I knew. 
                Now I help others bridge the gap between their skills and sustainable income.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Work With Me
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">
                    View Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={constructionBusiness}
                alt="Tyler Roberts in his element"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tyler's Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              My Story: From Tools to Teaching
            </h2>
            <p className="text-xl text-muted-foreground">
              How a tradesman discovered the power of sharing knowledge
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">The Beginning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I started my career like many of you — with my hands, my tools, and a strong work ethic. 
                  For years, I built, fixed, and created things that people needed. I was good at what I did, 
                  but I was trading time for money, and there's only so many hours in a day.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The turning point came when a neighbor asked me to help him start his own contracting business. 
                  As I shared what I'd learned over the years, I realized something powerful: 
                  my experience was valuable beyond just the physical work I could do.
                </p>
              </div>
              <div>
                <img
                  src={coachingConsultation}
                  alt="Tyler helping others"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="order-2 md:order-1">
                <img
                  src={businessHandshake}
                  alt="Building partnerships"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-primary mb-4">The Discovery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  That first coaching conversation opened my eyes. I wasn't just helping someone with their business — 
                  I was helping them avoid the mistakes I'd made, shortcut the learning curve, and build something sustainable.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Word spread. More people started asking for advice. I began charging for my time and expertise, 
                  and suddenly I had a new income stream that didn't require me to be on a job site 12 hours a day.
                </p>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-4 text-center">The Realization</h3>
              <p className="text-muted-foreground leading-relaxed text-center text-lg">
                "Every tradesperson, every entrepreneur, every skilled worker has knowledge that others would pay for. 
                The challenge isn't having something valuable to offer — it's knowing how to package it, 
                price it, and deliver it in a way that creates real value for others."
              </p>
              <p className="text-center mt-4 font-semibold text-primary">— Tyler Roberts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Builder Next Door */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Why I Started Builder Next Door
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I saw too many skilled people struggling to make ends meet while sitting on a goldmine of knowledge. 
              Builder Next Door exists to change that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Bridge the Gap</h3>
                <p className="text-muted-foreground">
                  Help skilled workers transition from trading time for money to building 
                  scalable income streams based on their expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Practical Solutions</h3>
                <p className="text-muted-foreground">
                  Provide real-world, tested strategies that work for people who prefer 
                  action over theory and results over promises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Methods</h3>
                <p className="text-muted-foreground">
                  Share the exact methods I used to create multiple income streams 
                  while maintaining my core business and values.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values & Approach */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              My Approach
            </h2>
            <p className="text-xl text-muted-foreground">
              How I work with clients to create lasting results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">No Fluff, Just Results</h3>
                  <p className="text-muted-foreground">
                    I focus on practical strategies that you can implement immediately, 
                    not theoretical concepts that sound good but don't work in the real world.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Step-by-Step Guidance</h3>
                  <p className="text-muted-foreground">
                    Every strategy comes with clear, actionable steps. You'll know exactly 
                    what to do next and how to measure your progress.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Respect Your Time</h3>
                  <p className="text-muted-foreground">
                    I understand you're busy. My methods are designed to fit into your 
                    existing schedule, not take over your life.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Build on Your Strengths</h3>
                  <p className="text-muted-foreground">
                    Instead of trying to change who you are, I help you leverage 
                    the skills and knowledge you already have.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Sustainable Growth</h3>
                  <p className="text-muted-foreground">
                    I'm not interested in get-rich-quick schemes. I help you build 
                    income streams that will serve you for years to come.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Ongoing Support</h3>
                  <p className="text-muted-foreground">
                    Building a business is a journey, not a destination. I'm here to 
                    support you through the challenges and celebrate the wins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's have a conversation about your goals and how I can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

