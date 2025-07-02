import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Coffee, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Main Navigation - Pure Luxury Glass */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass backdrop-blur-20 border-b border-white/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-responsive">
          <div className="flex justify-between items-center h-20 sm:h-24">
            {/* Logo - Minimal & Elegant */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center space-x-4 group">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105 border border-coffee-400/30">
                    <Coffee className="h-5 w-5 text-coffee-700" />
                  </div>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-light text-coffee-800 tracking-wide">
                    Café Moderne
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Ultra Clean */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-12">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className={`relative text-sm font-light tracking-wide transition-colors duration-200 py-2 ${
                        isActive(item.path)
                          ? 'text-coffee-800'
                          : 'text-coffee-600 hover:text-coffee-800'
                      }`}
                    >
                      {item.name}
                      {isActive(item.path) && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-px bg-coffee-800"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button - Minimalist */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="hidden lg:block"
            >
              <Link
                to="/contact"
                className="glass px-6 xl:px-8 py-2 xl:py-3 text-sm font-light text-coffee-800 border border-coffee-400/50 transition-colors duration-200 hover:bg-coffee-400 hover:text-cream-25 hover:border-coffee-300"
              >
                Réserver
              </Link>
            </motion.div>

            {/* Mobile menu button - Clean */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center text-coffee-700 border border-coffee-400/30 transition-colors duration-200 hover:bg-coffee-400 hover:text-cream-25"
              >
                {isOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Luxury Glass */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-white/20"
          >
            <div className="max-w-7xl mx-auto px-8 py-8">
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      to={item.path}
                      className={`block text-base sm:text-lg font-light tracking-wide transition-all duration-200 py-2 ${
                        isActive(item.path)
                          ? 'text-coffee-800 border-l-2 border-coffee-800 pl-3 sm:pl-4'
                          : 'text-coffee-600 hover:text-coffee-800 hover:pl-2'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="pt-6 border-t border-coffee-200/30"
                >
                  <Link
                    to="/contact"
                    className="inline-block glass px-8 py-4 text-sm font-light text-coffee-800 border border-coffee-200/50 transition-all duration-300 hover:bg-coffee-50/50"
                    onClick={() => setIsOpen(false)}
                  >
                    Réserver une table
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20 sm:h-24"></div>
    </>
  )
}

export default Navbar 