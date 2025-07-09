import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Free Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <header className="editorial-nav sticky top-0 z-50 border-b border-[var(--border)]">
      <div className="editorial-grid">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-[var(--rich-black)] rounded-lg flex items-center justify-center group-hover:bg-[var(--vibrant-green)] transition-colors">
              <span className="text-white text-lg">🚪</span>
            </div>
            <div>
              <div className="editorial-subheading text-lg leading-none">Builder Next Door</div>
              <div className="editorial-body text-xs text-[var(--stone-gray)] leading-none">by Tyler Roberts</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative group ${
                  isActive(item.href)
                    ? 'text-[var(--rich-black)]'
                    : 'text-[var(--stone-gray)] hover:text-[var(--rich-black)]'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[var(--vibrant-green)] rounded-full"></div>
                )}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[var(--vibrant-green)] rounded-full group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button className="premium-button px-6 py-2 h-auto text-sm">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[var(--rich-black)]" />
            ) : (
              <Menu className="h-6 w-6 text-[var(--rich-black)]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border)] bg-white/95 backdrop-blur">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? 'text-[var(--rich-black)] bg-[var(--vibrant-orange)]/10 border-l-4 border-[var(--vibrant-orange)]'
                      : 'text-[var(--stone-gray)] hover:text-[var(--rich-black)] hover:bg-white/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-[var(--border)] mt-4">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="premium-button w-full">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

