// src/pages/Privacy.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Shield,
  Lock,
  Eye,
  Database,
  Share2,
  Cookie,
  Mail,
  Phone,
  ArrowRight,
  MessageCircle,
  Check,
  AlertCircle,
  Trash2,
  UserCheck,
} from 'lucide-react';

const Privacy = () => {
  const { ref, inView } = useScrollAnimation(0.05);

  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Personal Information: Name, email address, phone number, and physical address provided when requesting a quote or booking a service.',
        'Service Details: Gate type, motor brand, issue descriptions, and property access information necessary to perform our work.',
        'Technical Data: IP address, browser type, device information, and pages visited on our website via standard analytics cookies.',
        'Communication Records: WhatsApp messages, emails, and phone call logs related to your service requests and inquiries.',
      ],
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        'To provide accurate quotes and schedule service appointments at your property.',
        'To communicate with you regarding your booking, arrival times, and service updates.',
        'To process payments and maintain financial records in compliance with South African tax laws.',
        'To improve our services through internal analytics and customer feedback analysis.',
        'To send occasional service reminders, maintenance plan renewals, and promotional offers (you may opt out at any time).',
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'All personal data is stored on secure, encrypted servers with access limited to authorized WiseGate staff only.',
        'We use industry-standard SSL/TLS encryption for all data transmitted through our website and quote forms.',
        'Payment information is processed through PCI-compliant payment gateways. WiseGate  does not store your full credit card details.',
        'We conduct regular security audits and staff training to maintain data protection standards aligned with POPIA requirements.',
      ],
    },
    {
      icon: Share2,
      title: 'Information Sharing',
      content: [
        'WiseGate does not sell, rent, or trade your personal information to third parties for marketing purposes.',
        'We may share limited information with trusted suppliers (e.g., Centurion, ET Systems) solely for warranty registration or parts ordering.',
        'If required by law, court order, or to protect our legal rights, we may disclose information to relevant authorities.',
        'In the event of a business sale or merger, client data may be transferred under strict confidentiality agreements.',
      ],
    },
    {
      icon: Cookie,
      title: 'Cookies & Tracking',
      content: [
        'Our website uses essential cookies to ensure proper functionality (e.g., form submissions, session management).',
        'Analytics cookies help us understand how visitors use our site so we can improve user experience.',
        'You can disable non-essential cookies through your browser settings. This will not affect your ability to request quotes.',
        'We do not use third-party advertising cookies or retargeting pixels.',
      ],
    },
    {
      icon: UserCheck,
      title: 'Your Rights (POPIA Compliance)',
      content: [
        'Right to Access: You may request a copy of all personal information we hold about you.',
        'Right to Correction: You may request that we correct inaccurate or incomplete information.',
        'Right to Deletion: You may request deletion of your personal data, subject to legal retention requirements (e.g., tax records).',
        'Right to Object: You may opt out of marketing communications at any time by replying STOP or emailing us.',
        'Right to Complain: If you believe we have violated your privacy rights, you may lodge a complaint with the Information Regulator of South Africa.',
      ],
    },
    {
      icon: Trash2,
      title: 'Data Retention',
      content: [
        'Quote requests and service records are retained for 5 years to support warranty claims and service history.',
        'Marketing contact lists are refreshed annually. Inactive contacts are removed after 2 years of no engagement.',
        'Financial records are retained for 7 years in compliance with the South African Tax Administration Act.',
        'Upon request, we will delete your personal data within 30 days unless legally required to retain it.',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | WiseGate - Gate Repair & Installation</title>
        <meta name="description" content="WiseGate's privacy policy. Learn how we collect, use, and protect your personal information. POPIA compliant gate automation services in South Africa." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-dark-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

        <div className="relative section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-500/20">
              <Shield className="w-4 h-4" />
              Your Data, Protected
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Privacy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                Policy
              </span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl">
              WiseGate is committed to protecting your personal information. This policy explains 
              how we collect, use, and safeguard your data in compliance with South Africa's 
              Protection of Personal Information Act (POPIA).
            </p>
            <p className="text-dark-400 text-sm mt-4">
              Last updated: May 2026 | POPIA Compliant
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section ref={ref} className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 mb-12"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500 rounded-xl shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-900 mb-2">Our Commitment</h3>
                  <p className="text-dark-600 leading-relaxed">
                    WiseGate  respects your privacy. We only collect information necessary 
                    to provide our gate repair and installation services. We will never sell your data, 
                    and we take every reasonable step to protect it from unauthorized access, loss, 
                    or misuse.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-primary-50 rounded-xl">
                      <section.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-dark-900">{section.title}</h2>
                  </div>
                  <div className="pl-16 space-y-3">
                    {section.content.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                        <p className="text-dark-600 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact for Privacy Concerns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-16 bg-dark-950 rounded-2xl p-10"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Privacy Concerns or Requests?</h3>
                  <p className="text-dark-300 mb-6 leading-relaxed">
                    If you would like to access, correct, or delete your personal information, 
                    or if you have any questions about this privacy policy, please contact our 
                    data protection officer directly.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-dark-300">
                      <Mail className="w-5 h-5 text-primary-400" />
                      <span>wisegate@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-dark-300">
                      <Phone className="w-5 h-5 text-primary-400" />
                      <span>078 195 6621</span>
                    </div>
                  </div>
                </div>
                <div className="bg-dark-900 rounded-xl p-6 border border-dark-800">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-5 h-5 text-amber-400" />
                    <h4 className="font-bold text-white">Information Regulator</h4>
                  </div>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    If you are unsatisfied with our response, you may escalate your complaint to 
                    the South African Information Regulator at 
                    <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline ml-1">
                      justice.gov.za/inforeg
                    </a>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-12 text-center"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/27781956621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
