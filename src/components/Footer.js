import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Clock, ArrowUp, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Get Quote', path: '/quote' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Gate Motor Repair',
    'Motor Replacement',
    'Remote Programming',
    'New Installation',
    'Sliding Gates',
    'Swing Gates',
    'Intercom Systems',
    'Access Control',
  ];

  return (
    <footer className="bg-dark-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-primary-600 rounded-xl">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">WiseGate</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-400">
                  Gate Automation Experts
                </span>
              </div>
            </Link>
            <p className="text-dark-300 text-sm leading-relaxed mb-6">
              South Africa's trusted gate repair and installation specialists. 
              Professional service, quality workmanship, guaranteed satisfaction.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-dark-800 rounded-lg text-dark-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <span className="text-dark-300 text-sm">
                  Johannesburg, Pretoria & Gauteng, South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="tel:+27123456789" className="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                  012 345 6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="wisegate@gmail.com" className="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                  wisegate@gmail.comW
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <div className="text-dark-300 text-sm">
                  <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p>Sat: 8:00 AM - 2:00 PM</p>
                  <p className="text-primary-400 font-medium">24/7 Emergency Service</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © 2026 GatePro Security Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-dark-500">
            <Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
            <Link to="/guarantee" className="hover:text-primary-400 transition-colors">Our Guarantee</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-colors z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;