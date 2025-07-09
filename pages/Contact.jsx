import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  MessageSquare,
  Calendar,
  Users,
  Package,
  HelpCircle
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to your backend
    console.log('Contact form submission:', formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const faqs = [
    {
      question: "How quickly can you respond to my inquiry?",
      answer: "I typically respond to all inquiries within 24 hours during business days. For urgent matters, feel free to call directly."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! I offer a complimentary 15-minute discovery call to discuss your goals and see if we're a good fit to work together."
    },
    {
      question: "What's the best way to prepare for our call?",
      answer: "Come with specific questions about your situation. Think about your current skills, what you'd like to achieve, and any challenges you're facing."
    },
    {
      question: "Do you work with people outside your local area?",
      answer: "Absolutely! Most of my coaching is done via video calls, so I can work with clients anywhere. The principles apply regardless of location."
    },
    {
      question: "What if I'm not sure which service is right for me?",
      answer: "That's exactly what our discovery call is for. We'll discuss your situation and I'll recommend the best approach for your specific needs and goals."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Let's Talk About Your Goals
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Ready to turn your knowledge into income? I'm here to help. 
            Reach out and let's discuss how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="service">I'm Interested In</Label>
                          <Select onValueChange={(value) => handleInputChange('service', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="consultation">Free Consultation</SelectItem>
                              <SelectItem value="one-on-one">1-on-1 Coaching</SelectItem>
                              <SelectItem value="feedback">Idea Feedback</SelectItem>
                              <SelectItem value="toolkit">Resource Toolkit</SelectItem>
                              <SelectItem value="workshop">Group Workshop</SelectItem>
                              <SelectItem value="other">Other/Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your current situation, goals, and how I can help you..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        * Required fields. I'll respond within 24 hours.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thanks for reaching out, {formData.name}. I'll review your message and 
                        get back to you within 24 hours with next steps.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        In the meantime, feel free to download my free guide or explore my services.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">tyler@buildernextdoor.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">(555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">Serving clients nationwide</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-sm text-muted-foreground">Within 24 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Free Call
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Package className="mr-2 h-4 w-4" />
                    Download Free Guide
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Join Next Workshop
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    All times are Eastern Time. Emergency consultations available by appointment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about working together
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see your question answered here?
            </p>
            <Button variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" />
              Ask Me Anything
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            The best time to start was yesterday. The second best time is now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Free Call
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Package className="mr-2 h-5 w-5" />
              Start with Free Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

