import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Shield } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Get Quote', path: '/quote' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-effect shadow-lg shadow-dark-900/5'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled ? 'bg-primary-600' : 'bg-white/10 backdrop-blur-sm'
              }`}>
                <Shield className={`w-7 h-7 ${isScrolled ? 'text-white' : 'text-white'}`} />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-dark-900' : 'text-white'
                }`}>
                  WiseGate
                </span>
                <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-white/70'
                }`}>
                  Security Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? isScrolled
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-white bg-white/10'
                      : isScrolled
                      ? 'text-dark-600 hover:text-primary-600 hover:bg-dark-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                        isScrolled ? 'bg-primary-600' : 'bg-white'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+27781956621"
                className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-dark-700' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>078 195 6621</span>
              </a>
              <Link
                to="/quote"
                className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/25'
                    : 'bg-white text-dark-900 hover:bg-white/90'
                }`}
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-dark-900 hover:bg-dark-50' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark-950/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl"
            >
              <div className="p-6 pt-24">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                          isActive(link.path)
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-dark-700 hover:bg-dark-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-dark-100">
                  <a
                    href="tel:+27781956621"
                    className="flex items-center gap-3 px-4 py-3 text-dark-700 hover:bg-dark-50 rounded-xl transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold">078 195 6621</span>
                  </a>
                  <Link
                    to="/quote"
                    className="block mt-4 px-4 py-3 bg-primary-600 text-white text-center font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
