// src/components/FloatingWhatsApp.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  Wrench, 
  Star 
} from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  // Replace with your actual details
  const phoneNumber = '2781956621';
  const email = 'wisegate@gmail.com';
  const businessHours = 'Mon-Sat: 7AM - 7PM';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const notificationTimer = setTimeout(() => {
      setHasNotification(false);
    }, 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(notificationTimer);
    };
  }, []);

  const quickMessages = [
    {
      icon: Wrench,
      text: 'Need emergency repair',
      message: 'Hi WiseGate, I need urgent gate repair assistance.',
      color: 'bg-red-500',
    },
    {
      icon: Star,
      text: 'Request a quote',
      message: 'Hi WiseGate, I would like a quote for gate services.',
      color: 'bg-primary-500',
    },
    {
      icon: Clock,
      text: 'Check availability',
      message: 'Hi WiseGate, what is your availability this week?',
      color: 'bg-blue-500',
    },
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: () => window.open(`https://wa.me/${phoneNumber}?text=Hi%20WiseGate%2C%20I%20need%20assistance.`, '_blank'),
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
    },
    {
      icon: Phone,
      label: 'Call Now',
      action: () => window.open(`tel:+${phoneNumber}`, '_blank'),
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => window.open(`mailto:${email}?subject=Service%20Inquiry`, '_blank'),
      color: 'bg-dark-700',
      hoverColor: 'hover:bg-dark-800',
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
          {/* Chat Panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden border border-dark-100 max-h-[80vh] overflow-y-auto"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white sticky top-0 z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">WiseGate Support</h3>
                        <div className="flex items-center gap-2 text-sm text-green-100">
                          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                          <span>Online Now</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-green-100">
                    👋 Welcome! How can we help you today?
                  </p>
                  
                  <div className="flex items-center gap-2 mt-3 text-xs text-green-100 bg-white/10 rounded-lg p-2">
                    <Shield className="w-4 h-4" />
                    <span>We typically reply within 5 minutes</span>
                  </div>
                </div>

                {/* Quick Messages */}
                <div className="p-4 space-y-3">
                  <p className="text-xs font-semibold text-dark-400 uppercase tracking-wider">
                    Quick Messages
                  </p>
                  {quickMessages.map((msg, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        window.open(
                          `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg.message)}`,
                          '_blank'
                        );
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-dark-50 transition-colors text-left group"
                    >
                      <div className={`p-2 rounded-lg ${msg.color} text-white flex-shrink-0`}>
                        <msg.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-dark-700 group-hover:text-dark-900">
                        {msg.text}
                      </span>
                      <MessageCircle className="w-4 h-4 text-dark-300 ml-auto flex-shrink-0 group-hover:text-green-500 transition-colors" />
                    </motion.button>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-dark-100" />

                {/* Contact Options */}
                <div className="p-4 space-y-2">
                  <p className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-3">
                    Other Ways to Reach Us
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {contactOptions.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={option.action}
                        className={`flex flex-col items-center gap-2 p-3 rounded-xl ${option.color} ${option.hoverColor} text-white transition-all group`}
                      >
                        <option.icon className="w-5 h-5" />
                        <span className="text-xs font-medium">{option.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="border-t border-dark-100 p-4 bg-dark-50">
                  <div className="flex items-center gap-2 text-xs text-dark-500">
                    <Clock className="w-4 h-4" />
                    <span>{businessHours}</span>
                  </div>
                  <p className="text-xs text-dark-400 mt-2">
                    Emergency services available 24/7
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setIsOpen(!isOpen);
              setHasNotification(false);
            }}
            className={`relative p-4 rounded-full shadow-2xl transition-all duration-300 ${
              isOpen 
                ? 'bg-dark-700 hover:bg-dark-800' 
                : 'bg-green-500 hover:bg-green-600'
            }`}
            aria-label="Contact us via WhatsApp"
          >
            {isOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <MessageCircle className="w-7 h-7 text-white" />
            )}

            {/* Notification Badge */}
            {hasNotification && !isOpen && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2"
              >
                <span className="flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-white text-xs items-center justify-center font-bold">
                    1
                  </span>
                </span>
              </motion.div>
            )}

            {/* Pulse Effect */}
            {!isOpen && (
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-green-500"
              />
            )}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;