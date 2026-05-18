// src/pages/Guarantee.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Shield,
  Award,
  Check,
  Clock,
  Wrench,
  Zap,
  RefreshCw,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Star,
  ThumbsUp,
  Ban,
  FileCheck,
} from 'lucide-react';

const Guarantee = () => {
  const { ref, inView } = useScrollAnimation(0.05);

  const warranties = [
    {
      icon: Wrench,
      title: 'Repair Workmanship',
      duration: '6 Months',
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      items: [
        'All electrical repairs including PCB board work, wiring fixes, and component replacements.',
        'Mechanical repairs such as gear replacements, chain repairs, and limit switch calibration.',
        'Safety beam alignment, sensor adjustments, and remote control troubleshooting.',
        'If the same issue recurs within 6 months due to our workmanship, we fix it free of charge.',
      ],
    },
    {
      icon: Zap,
      title: 'New Motor Installation',
      duration: '2 Years',
      color: 'from-emerald-500 to-emerald-600',
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      items: [
        'Full coverage on the motor unit itself against manufacturing defects.',
        'Our installation workmanship including mounting, wiring, and programming.',
        'Remote programming for up to 5 remotes included in the installation.',
        'Battery backup system integration and testing covered under warranty.',
        'On-site re-calibration if the motor drifts or loses settings within the warranty period.',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Motor Replacement',
      duration: '2 Years',
      color: 'from-violet-500 to-violet-600',
      bg: 'bg-violet-50',
      text: 'text-violet-600',
      items: [
        'Replacement motor unit covered against factory defects and premature failure.',
        'Removal of old motor and professional installation of the new unit.',
        'Full safety compliance verification and testing post-installation.',
        '30-day post-installation support call included at no extra charge.',
        'Eco-disposal of the old motor handled responsibly at no cost to you.',
      ],
    },
    {
      icon: Shield,
      title: 'Maintenance Plan Members',
      duration: 'Ongoing',
      color: 'from-amber-500 to-amber-600',
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      items: [
        'Priority emergency support with guaranteed same-day response.',
        '20% discount on all repair services and parts replacements.',
        'Annual comprehensive system health report provided in writing.',
        'Proactive wear-part replacements covered under your plan tier.',
        'Extended warranty on all work performed while your plan is active.',
      ],
    },
  ];

  const notCovered = [
    'Damage caused by lightning strikes, power surges, or electrical storms — surge protection devices are available at additional cost.',
    'Misuse, vandalism, or accidental damage to the gate, motor, or control systems.',
    'Unauthorized modifications or repairs performed by WiseGate technicians.',
    'Normal wear and tear including remote control batteries, external paint fading, and mechanical wear on high-traffic gates.',
    'Issues arising from failure to follow manufacturer operating instructions or recommended maintenance schedules.',
    'Damage caused by pests, rodents, or environmental factors (flooding, extreme heat, corrosion in coastal areas).',
  ];

  const process = [
    {
      step: '1',
      title: 'Report the Issue',
      desc: 'Contact us via WhatsApp, Email, or Phone within the warranty period. Describe the problem clearly and reference your original job number.',
    },
    {
      step: '2',
      title: 'We Assess',
      desc: 'Our technician will diagnose the fault on-site or remotely to determine if it falls under warranty coverage.',
    },
    {
      step: '3',
      title: 'We Fix It',
      desc: 'If covered, we repair or replace the faulty component at no charge. If not covered, we provide a transparent quote before proceeding.',
    },
    {
      step: '4',
      title: 'Follow-Up',
      desc: 'We test the repair thoroughly and follow up within 7 days to ensure everything is working perfectly.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Guarantee & Warranty | WiseGate - Gate Repair & Installation</title>
        <meta name="description" content="WiseGate's workmanship guarantee and warranty policy. 6-month repair warranty, 2-year motor installation warranty, and ongoing maintenance plan coverage across Gauteng." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-dark-950" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />

        <div className="relative section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-500/20">
              <Award className="w-4 h-4" />
              Our Promise to You
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-amber-300">
                Guarantee
              </span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              We stand behind every job we do. From a simple remote programming to a full motor 
              replacement, your satisfaction and security are our top priorities.
            </p>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto"
            >
              {[
                { value: '6', label: 'Month Repair Warranty', suffix: '' },
                { value: '2', label: 'Year Motor Warranty', suffix: '' },
                { value: '30', label: 'Day Post-Install Support', suffix: '' },
                { value: '100', label: 'Satisfaction Rate', suffix: '%' },
              ].map((stat, i) => (
                <div key={i} className="bg-dark-900/50 border border-dark-800 rounded-2xl p-5">
                  <p className="text-3xl font-bold text-primary-400">
                    {stat.value}<span className="text-lg">{stat.suffix}</span>
                  </p>
                  <p className="text-dark-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Warranty Cards */}
      <section ref={ref} className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
                Warranty Coverage
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
                What's Covered
              </h2>
              <p className="text-dark-500 text-lg max-w-2xl mx-auto">
                Transparent warranty terms for every service we offer. No fine print, no surprises.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {warranties.map((warranty, index) => (
                <motion.div
                  key={warranty.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white rounded-2xl border border-dark-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`bg-gradient-to-r ${warranty.color} p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-xl">
                          <warranty.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{warranty.title}</h3>
                          <p className="text-white/80 text-sm">{warranty.duration} Warranty</p>
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <Shield className="w-12 h-12 text-white/20" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {warranty.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`p-1 rounded-full ${warranty.bg} shrink-0 mt-0.5`}>
                          <Check className={`w-4 h-4 ${warranty.text}`} />
                        </div>
                        <p className="text-dark-600 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not Covered */}
      <section className="py-24 lg:py-32 bg-dark-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-amber-600 text-sm font-semibold rounded-full mb-4 border border-amber-100">
                <AlertTriangle className="w-4 h-4" />
                Important Exclusions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
                What's Not Covered
              </h2>
              <p className="text-dark-500 text-lg">
                Being upfront about exclusions helps us serve you better. Here's what falls outside our warranty.
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl border border-dark-100 shadow-lg p-8">
              <div className="space-y-5">
                {notCovered.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 bg-red-50 rounded-lg shrink-0">
                      <Ban className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-dark-600 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-amber-50 border border-amber-100 rounded-xl">
                <div className="flex items-start gap-3">
                  <ThumbsUp className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-dark-600 text-sm leading-relaxed">
                    <strong>Tip:</strong> Many exclusions can be avoided with a WiseGate Maintenance Plan. 
                    Regular inspections catch issues before they become costly problems. 
                    <Link to="/services" className="text-primary-600 font-semibold hover:underline ml-1">
                      Learn more about our maintenance plans.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Process */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
                Simple & Fast
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
                How to Claim Your Warranty
              </h2>
              <p className="text-dark-500 text-lg max-w-2xl mx-auto">
                We make the warranty claim process hassle-free. Four simple steps and you're back to a working gate.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-100" />
                  )}
                  <div className="bg-white rounded-2xl border border-dark-100 shadow-lg p-6 text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg shadow-primary-500/20">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-dark-900 mb-2">{step.title}</h3>
                    <p className="text-dark-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Promise */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-3xl" />

        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-4 bg-white/10 rounded-full mb-6">
                <Star className="w-10 h-10 text-amber-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                100% Satisfaction Guarantee
              </h2>
              <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                If you're not completely satisfied with our work, we'll return and make it right — 
                free of charge. No arguments, no excuses. Your security and peace of mind are 
                non-negotiable.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
                {[
                  { icon: FileCheck, text: 'Written warranty certificate provided after every job' },
                  { icon: Clock, text: 'Fast warranty claims — average resolution within 48 hours' },
                  { icon: ThumbsUp, text: 'No charge for warranty-related call-backs' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                    <item.icon className="w-8 h-8 text-primary-300 mx-auto mb-3" />
                    <p className="text-white text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transform hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
                >
                  Book a Service
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/27781956621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 bg-dark-950">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-900 rounded-2xl p-8 border border-dark-800">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Need to Make a Warranty Claim?</h3>
                  <p className="text-dark-400">
                    Have your job number ready and reach out via any channel below. 
                    We'll prioritize your case and get a technician to you fast.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+27781956621"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    078 195 6621
                  </a>
                  <a
                    href="mailto:wisegate@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dark-800 text-white font-semibold rounded-xl hover:bg-dark-700 transition-colors border border-dark-700"
                  >
                    <Mail className="w-5 h-5" />
                    wisegate@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Guarantee;
