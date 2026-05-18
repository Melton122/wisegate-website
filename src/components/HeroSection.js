import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Wrench, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Shield, value: '15+', label: 'Years Experience' },
    { icon: Wrench, value: '5,000+', label: 'Repairs Done' },
    { icon: Clock, value: '24/7', label: 'Emergency Service' },
    { icon: Award, value: '100%', label: 'Satisfaction' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative section-padding w-full py-32 lg:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8"
              >
                <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                <span className="text-primary-400 text-sm font-medium">Professional Gate Services</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="heading-xl text-white mb-6"
              >
                Expert Gate{' '}
                <span className="text-gradient">Repair</span>
                <br />
                & Installation
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-dark-300 leading-relaxed mb-10 max-w-xl"
              >
                South Africa's leading gate specialists. From motor repairs to complete 
                installations, we deliver premium quality workmanship with guaranteed satisfaction. 
                Free quotes available.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-16"
              >
                <Link
                  to="/quote"
                  className="btn-primary inline-flex items-center justify-center gap-2 text-center"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-center border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                >
                  View Services
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-dark-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Main Image Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/20"
                >
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                    alt="Gate Installation"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-dark rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-600 rounded-lg">
                          <Wrench className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Same Day Service</p>
                          <p className="text-dark-300 text-sm">Emergency repairs available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -top-6 -right-6 glass-dark rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary-500 rounded-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">R800</p>
                      <p className="text-dark-300 text-xs">Starting Price</p>
                    </div>
                  </div>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 glass-dark rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-primary-600 border-2 border-dark-900 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{i}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">500+ Reviews</p>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <svg key={i} className="w-3 h-3 text-secondary-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
