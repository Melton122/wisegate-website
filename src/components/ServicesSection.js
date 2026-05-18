import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  Wrench, 
  Replace, 
  Globe, 
  DoorOpen, 
  ArrowRightLeft, 
  ArrowLeftRight,
  Cpu,
  Lock,
  Settings,
  Zap,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const { ref, inView } = useScrollAnimation(0.1);

  const services = [
    {
      icon: Wrench,
      title: 'Gate Motor Repair',
      description: 'Expert diagnosis and repair of all gate motor brands. We fix electrical faults, mechanical issues, and programming errors.',
      price: 'From R800',
      features: ['Same-day service', 'All brands supported', '6-month warranty'],
      color: 'bg-blue-500',
      popular: false,
    },
    {
      icon: Replace,
      title: 'Motor Replacement',
      description: 'Complete motor replacement with high-quality units. We supply and install motors from leading manufacturers.',
      price: 'From R2,500',
      features: ['Premium motors', 'Professional install', '2-year warranty'],
      color: 'bg-emerald-500',
      popular: true,
    },
    {
      icon: Globe,
      title: 'Remote Programming',
      description: 'Programming of new and existing remotes. We handle all remote types including smart home integration.',
      price: 'From R200',
      features: ['All remote types', 'Smart home ready', 'On-site service'],
      color: 'bg-violet-500',
      popular: false,
    },
    {
      icon: DoorOpen,
      title: 'New Installation',
      description: 'Complete gate automation installation from scratch. Free on-site assessment and custom quote provided.',
      price: 'Free Quote',
      features: ['Free assessment', 'Custom design', 'Full automation'],
      color: 'bg-amber-500',
      popular: false,
    },
    {
      icon: ArrowRightLeft,
      title: 'Sliding Gates',
      description: 'Installation and repair of sliding gate systems. Includes track, motor, and safety sensor setup.',
      price: 'From R3,500',
      features: ['Smooth operation', 'Safety sensors', 'Weather resistant'],
      color: 'bg-rose-500',
      popular: false,
    },
    {
      icon: ArrowLeftRight,
      title: 'Swing Gates',
      description: 'Professional swing gate installation with hydraulic or electromechanical operators. Single or double leaf.',
      price: 'From R3,000',
      features: ['Hydraulic option', 'Single/double leaf', 'Safety compliant'],
      color: 'bg-cyan-500',
      popular: false,
    },
    {
      icon: Cpu,
      title: 'Intercom Systems',
      description: 'Install and repair audio and video intercom systems. Integration with gate automation for seamless access control.',
      price: 'From R1,500',
      features: ['Video/audio options', 'Mobile app integration', 'Multi-unit support'],
      color: 'bg-indigo-500',
      popular: false,
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Advanced access control solutions including keypads, card readers, biometric scanners, and mobile access.',
      price: 'From R2,000',
      features: ['Biometric options', 'Audit trails', 'Cloud management'],
      color: 'bg-orange-500',
      popular: false,
    },
    {
      icon: Settings,
      title: 'Maintenance Plans',
      description: 'Regular maintenance packages to keep your gate system running smoothly and prevent costly breakdowns.',
      price: 'From R350/month',
      features: ['Monthly inspections', 'Priority support', 'Discounted repairs'],
      color: 'bg-teal-500',
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              Our Services
            </span>
            <h2 className="heading-lg text-dark-900 mb-4">
              Complete Gate <span className="text-gradient">Solutions</span>
            </h2>
            <p className="body-lg">
              From emergency repairs to full installations, we provide comprehensive gate services 
              tailored to your security needs and budget.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`group relative bg-white rounded-2xl border border-dark-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1 ${
                  service.popular ? 'ring-2 ring-primary-500 ring-offset-2' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl ${service.color} bg-opacity-10 mb-6`}>
                    <service.icon className={`w-7 h-7 ${service.color.replace('bg-', 'text-')}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-dark-600">
                        <Zap className="w-4 h-4 text-primary-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-dark-100">
                    <div>
                      <p className="text-xs text-dark-400 uppercase tracking-wider">Starting at</p>
                      <p className="text-2xl font-bold text-dark-900">{service.price}</p>
                    </div>
                    <Link
                      to="/quote"
                      className="flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors group/link"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-dark-500 mb-4">Need a custom solution? We handle all gate types and brands.</p>
            <Link
              to="/quote"
              className="btn-primary inline-flex items-center gap-2"
            >
              Request Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;