import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Clock,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['078 195 6621', 'EMG: 078 947 0543'],
      action: 'tel:+27781956621',
      actionText: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['wisegate@gmail.com'],
      action: 'mailto:wisegate@gmail.com',
      actionText: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Soweto , Johannesburg , Gauteng'],
      action: 'https://maps.google.com',
      actionText: 'Get Directions',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 7:00 AM - 6:00 PM', 'Sat: 8:00 AM - 2:00 PM', 'Sun: Emergency Only'],
      action: 'tel:+27781956621',
      actionText: 'Emergency Line',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | WiseGate - Gate Services</title>
        <meta name="description" content="Contact WiseGate for gate repair, installation, and automation services. 24/7 emergency support available across Gauteng." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-dark-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

        <div className="relative section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-500/20">
              Get In Touch
            </span>
            <h1 className="heading-xl text-white mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl">
              Have a question or need a quote? We're here to help. Reach out via phone, email, 
              or fill out the form below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-24 lg:py-32 bg-dark-50">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl p-10 text-center shadow-lg"
                  >
                    <div className="inline-flex p-4 bg-emerald-100 rounded-full mb-6">
                      <Check className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-dark-900 mb-4">Message Sent!</h2>
                    <p className="text-dark-500 mb-6">
                      Thank you for reaching out. We'll get back to you within 2 hours during business hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                      }}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg">
                    <h2 className="text-2xl font-bold text-dark-900 mb-6">Send Us a Message</h2>

                    <div className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-dark-700 mb-2">Full Name *</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3.5 bg-dark-50 border border-dark-200 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                              placeholder="Your name"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-dark-700 mb-2">Email *</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3.5 bg-dark-50 border border-dark-200 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-dark-700 mb-2">Phone</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3.5 bg-dark-50 border border-dark-200 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                              placeholder="078 195 6621"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-dark-700 mb-2">Subject</label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-dark-50 border border-dark-200 rounded-xl text-dark-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all appearance-none"
                          >
                            <option value="">Select subject</option>
                            <option value="quote">Request Quote</option>
                            <option value="repair">Repair Service</option>
                            <option value="installation">New Installation</option>
                            <option value="emergency">Emergency</option>
                            <option value="general">General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-dark-700 mb-2">Message *</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-dark-400" />
                          <textarea
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3.5 bg-dark-50 border border-dark-200 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                            placeholder="How can we help you?"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Contact Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-50 rounded-xl">
                        <info.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-dark-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-dark-500 text-sm">{detail}</p>
                        ))}
                        <a
                          href={info.action}
                          className="inline-flex items-center gap-1 text-primary-600 text-sm font-semibold mt-3 hover:text-primary-700 transition-colors"
                        >
                          {info.actionText}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Social Links */}
                <div className="bg-dark-950 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="p-3 bg-dark-800 rounded-xl hover:bg-primary-600 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-dark-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-dark-100">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <p className="text-dark-600 font-semibold">Service Area: Gauteng & Surrounds</p>
            <p className="text-dark-400 text-sm mt-1">Johannesburg, Pretoria, Midrand, Sandton, Centurion, and more</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
