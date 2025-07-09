import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { 
  MessageCircle, 
  X, 
  Send, 
  Calendar, 
  Download, 
  Package, 
  Users,
  ArrowRight,
  Bot,
  User
} from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState('welcome')
  const [messages, setMessages] = useState([])
  const [showTyping, setShowTyping] = useState(false)

  const chatSteps = {
    welcome: {
      message: "Hi! I'm Tyler's smart concierge. I'm here to help you find exactly what you need. What brings you here today?",
      options: [
        { text: "I want to start making money from my skills", next: "monetize" },
        { text: "I have a business idea I need feedback on", next: "feedback" },
        { text: "I'm not sure where to start", next: "unsure" },
        { text: "I want to learn more about Tyler", next: "about" }
      ]
    },
    monetize: {
      message: "Great! Turning your skills into income is exactly what Tyler specializes in. Based on your situation, what sounds most appealing?",
      options: [
        { text: "I want personalized 1-on-1 guidance", next: "one-on-one" },
        { text: "I prefer learning at my own pace", next: "self-paced" },
        { text: "I want to start with something free", next: "free-start" },
        { text: "I'm ready to invest in my success", next: "invest" }
      ]
    },
    feedback: {
      message: "Perfect! Tyler offers expert feedback sessions where he'll evaluate your idea and give you a clear roadmap. This sounds like exactly what you need.",
      options: [
        { text: "Book a feedback session ($75)", action: "contact", service: "feedback" },
        { text: "Tell me more about this service", action: "link", url: "/services" },
        { text: "I want to start with something free first", next: "free-start" }
      ]
    },
    unsure: {
      message: "No worries! Many successful people started exactly where you are. Let me help you figure out your next step. What describes you best?",
      options: [
        { text: "I'm a tradesperson with years of experience", next: "tradesperson" },
        { text: "I'm an aspiring entrepreneur", next: "entrepreneur" },
        { text: "I have skills but don't know their value", next: "skills-assessment" },
        { text: "I want to see what others have achieved", next: "success-stories" }
      ]
    },
    about: {
      message: "Tyler is a hands-on guy who figured out how to turn his expertise into multiple income streams. He helps people just like you bridge the gap between skills and sustainable income.",
      options: [
        { text: "Read Tyler's full story", action: "link", url: "/about" },
        { text: "See what services he offers", action: "link", url: "/services" },
        { text: "I'm ready to work with him", next: "ready-to-start" },
        { text: "Start over", next: "welcome" }
      ]
    },
    "one-on-one": {
      message: "Excellent choice! Tyler's 1-on-1 coaching sessions are his most popular service. You'll get personalized strategy development and direct access to his expertise.",
      options: [
        { text: "Book a 1-on-1 session ($150)", action: "contact", service: "one-on-one" },
        { text: "Schedule a free consultation first", action: "contact", service: "consultation" },
        { text: "Learn more about 1-on-1 coaching", action: "link", url: "/services" }
      ]
    },
    "self-paced": {
      message: "Smart approach! Tyler has resource toolkits that give you everything you need to succeed at your own pace - guides, templates, and step-by-step instructions.",
      options: [
        { text: "Browse resource toolkits", action: "link", url: "/services" },
        { text: "Start with the free guide", action: "link", url: "/resources" },
        { text: "Join a group workshop instead", next: "workshop" }
      ]
    },
    "free-start": {
      message: "Perfect! Tyler offers a comprehensive free guide: '5 Steps to Start Charging for What You Know' - it's the exact framework he used to create multiple income streams.",
      options: [
        { text: "Download the free guide", action: "link", url: "/resources" },
        { text: "Schedule a free consultation", action: "contact", service: "consultation" },
        { text: "Browse all free resources", action: "link", url: "/resources" }
      ]
    },
    tradesperson: {
      message: "You're in the right place! Tyler started as a tradesperson and knows exactly how to help you monetize your expertise without sacrificing your core work.",
      options: [
        { text: "Get the free guide for tradespeople", action: "link", url: "/resources" },
        { text: "Book a strategy session", action: "contact", service: "one-on-one" },
        { text: "See success stories from other tradespeople", action: "link", url: "/services" }
      ]
    },
    "ready-to-start": {
      message: "Fantastic! Tyler would love to help you turn your knowledge into income. What's the best next step for you?",
      options: [
        { text: "Schedule a free consultation", action: "contact", service: "consultation" },
        { text: "Book a 1-on-1 coaching session", action: "contact", service: "one-on-one" },
        { text: "Start with the free guide", action: "link", url: "/resources" },
        { text: "See all service options", action: "link", url: "/services" }
      ]
    }
  }

  const addMessage = (message, isBot = true) => {
    setMessages(prev => [...prev, { text: message, isBot, timestamp: Date.now() }])
  }

  const handleOptionClick = (option) => {
    // Add user's choice to messages
    addMessage(option.text, false)
    
    // Show typing indicator
    setShowTyping(true)
    
    setTimeout(() => {
      setShowTyping(false)
      
      if (option.action === 'link') {
        addMessage("I'll take you there now!")
        setTimeout(() => {
          window.location.href = option.url
        }, 1000)
      } else if (option.action === 'contact') {
        addMessage("Great choice! I'll take you to the contact form where you can specify your interest.")
        setTimeout(() => {
          window.location.href = '/contact'
        }, 1500)
      } else if (option.next) {
        setCurrentStep(option.next)
        const nextStep = chatSteps[option.next]
        if (nextStep) {
          addMessage(nextStep.message)
        }
      }
    }, 1000)
  }

  const resetChat = () => {
    setMessages([])
    setCurrentStep('welcome')
    setShowTyping(false)
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addMessage(chatSteps.welcome.message)
      }, 500)
    }
  }, [isOpen])

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5" />
                  <CardTitle className="text-lg">Tyler's Smart Concierge</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetChat}
                    className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-sm opacity-90">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Online now</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-secondary text-secondary-foreground'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        <span className="text-sm">{message.text}</span>
                        {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      </div>
                    </div>
                  </div>
                ))}
                
                {showTyping && (
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Options */}
              {currentStep && chatSteps[currentStep] && !showTyping && (
                <div className="p-4 border-t bg-muted/30">
                  <div className="space-y-2">
                    {chatSteps[currentStep].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleOptionClick(option)}
                        className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal"
                      >
                        <span className="text-sm">{option.text}</span>
                        <ArrowRight className="h-3 w-3 ml-auto flex-shrink-0" />
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

