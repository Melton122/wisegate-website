import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Phone, ArrowRight, Clock, MapPin } from 'lucide-react';

const CTASection = () => {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-600" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative section-padding">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-6 border border-white/20">
              Ready to Get Started?
            </span>
            <h2 className="heading-lg text-white mb-6">
              Get Your Free Quote Today
            </h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-10">
              Whether it's an emergency repair or a new installation, our team is ready to help. 
              Contact us now for a free, no-obligation quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-xl shadow-primary-900/20"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+27781956621"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-primary-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call 078 195 6621
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-200 text-sm">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                24/7 Emergency Service / EMERGENCY REPAIRS AVAILABLE / EMERGENCY NO.: 078 947 0543
              </span>
              <span className="hidden sm:block w-1 h-1 bg-primary-400 rounded-full" />
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Serving Gauteng & Surrounds
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
