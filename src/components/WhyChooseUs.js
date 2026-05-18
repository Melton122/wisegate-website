import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  HeadphonesIcon,
  Wrench,
  BadgeCheck,
  Truck,
  ThumbsUp
} from 'lucide-react';

const WhyChooseUs = () => {
  const { ref, inView } = useScrollAnimation(0.1);

  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Licensed & Insured',
      description: 'Fully certified technicians with comprehensive insurance coverage for your peace of mind.',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency repairs. We respond within 2 hours for urgent gate failures.',
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Over a decade of expertise in gate automation. We\'ve seen and fixed every possible issue.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Expert Support',
      description: 'Dedicated customer support team available via phone, WhatsApp, and email for any queries.',
    },
    {
      icon: Wrench,
      title: 'Quality Parts Only',
      description: 'We use genuine manufacturer parts and high-quality alternatives with full warranty coverage.',
    },
    {
      icon: BadgeCheck,
      title: 'Workmanship Guarantee',
      description: 'All repairs and installations come with our satisfaction guarantee and extended warranties.',
    },
    {
      icon: Truck,
      title: 'Free Site Assessment',
      description: 'No-obligation on-site evaluation. We assess your needs and provide a detailed quote.',
    },
    {
      icon: ThumbsUp,
      title: '500+ Happy Clients',
      description: 'Trusted by homeowners, businesses, and estates across Gauteng and surrounding areas.',
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-500/20">
              Why Choose Us
            </span>
            <h2 className="heading-lg text-white mb-4">
              The <span className="text-gradient">WiseGate</span> Difference
            </h2>
            <p className="text-dark-300 text-lg">
              We don't just fix gates — we deliver peace of mind with every service call.
            </p>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-primary-500/30 transition-all duration-500 hover:bg-dark-900"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-primary-500/10 text-primary-400 mb-5 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
