// src/pages/Terms.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  FileText,
  Shield,
  Clock,
  AlertTriangle,
  Check,
  ArrowRight,
  Scale,
  RefreshCw,
  Ban,
  CreditCard,
  Truck,
  MessageCircle,
} from 'lucide-react';

const Terms = () => {
  const { ref, inView } = useScrollAnimation(0.05);

  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        'By accessing or using the WiseGate website and services, you agree to be bound by these Terms and Conditions.',
        'These terms apply to all visitors, users, and others who access or use our services.',
        'If you disagree with any part of these terms, you may not access our services or request quotes.',
        'We reserve the right to modify these terms at any time. Changes are effective immediately upon posting.',
      ],
    },
    {
      icon: Scale,
      title: 'Service Agreements',
      content: [
        'All service bookings are subject to availability and confirmation by WiseGate.',
        'Quotes provided via WhatsApp, Email, or our online form are estimates based on the information supplied by the client.',
        'Final pricing is determined only after an on-site inspection and assessment of the actual work required.',
        'WiseGate reserves the right to refuse service if the scope of work differs significantly from the original quote, or if safety conditions are not met.',
      ],
    },
    {
      icon: CreditCard,
      title: 'Pricing & Payment',
      content: [
        'All prices are quoted in South African Rand (ZAR) and include VAT where applicable.',
        'A 50% deposit is required for all new installations and major motor replacements before work commences.',
        'Payment for repair services is due upon completion of work, unless otherwise agreed in writing.',
        'We accept cash, EFT, and all major credit/debit cards. No cheques accepted.',
        'Outstanding invoices older than 30 days may incur a late payment fee of 1.5% per month.',
      ],
    },
    {
      icon: Truck,
      title: 'Cancellations & Rescheduling',
      content: [
        'Clients may reschedule appointments free of charge if notice is given at least 24 hours in advance.',
        'Cancellations made less than 24 hours before the scheduled appointment may incur a call-out fee of R450.',
        'No-shows (where our technician arrives and the client is unavailable) will be charged the full call-out fee.',
        'Emergency call-outs cancelled after dispatch will incur the full emergency call-out charge.',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Warranty & Returns',
      content: [
        'Repair workmanship is guaranteed for 6 months from the date of service.',
        'New motor installations carry a 2-year warranty on the motor unit and our installation work.',
        'Warranty covers manufacturing defects and installation faults only. It does not cover damage caused by misuse, power surges, lightning, or unauthorized modifications.',
        'Warranty claims must be reported within the warranty period. WiseGate will assess and repair or replace at our discretion.',
        'Replacement parts installed during repairs carry the manufacturer\'s standard warranty (typically 6–12 months).',
      ],
    },
    {
      icon: Ban,
      title: 'Limitation of Liability',
      content: [
        'WiseGate is not liable for any pre-existing damage to gates, motors, or surrounding property that is discovered during service.',
        'We are not responsible for delays caused by circumstances beyond our control, including severe weather, load shedding, or supplier stock shortages.',
        'Our maximum liability for any single job is limited to the total amount paid for that specific service.',
        'Clients are responsible for ensuring safe access to the work area. WiseGate reserves the right to halt work if safety conditions are inadequate.',
      ],
    },
    {
      icon: Shield,
      title: 'Insurance & Safety',
      content: [
        'WiseGate carries comprehensive public liability insurance and all technicians are covered by workmen\'s compensation.',
        'Clients must inform us of any hazardous conditions (e.g., exposed wiring, aggressive pets, unsafe structures) before our arrival.',
        'We comply with all South African safety regulations including SANS 60335-2-103 for gate automation systems.',
        'Safety beam and anti-crush devices must remain operational. Disabling safety features voids warranty and may result in service refusal.',
      ],
    },
    {
      icon: MessageCircle,
      title: 'Dispute Resolution',
      content: [
        'Any disputes arising from our services will first be addressed through direct communication with our management team.',
        'If a resolution cannot be reached, disputes will be mediated in good faith before escalating further.',
        'These terms are governed by the laws of the Republic of South Africa.',
        'Any legal proceedings shall be brought exclusively in the Magistrate\'s Court or High Court of South Africa, Gauteng Division.',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | WiseGate - Gate Repair & Installation</title>
        <meta name="description" content="Read WiseGate's terms and conditions for gate repair, installation, and automation services in South Africa. Pricing, warranty, cancellations, and liability policies." />
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
              <Scale className="w-4 h-4" />
              Legal
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Terms &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                Conditions
              </span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl">
              Please read these terms carefully before booking our services. By using WiseGate, 
              you agree to the conditions outlined below.
            </p>
            <p className="text-dark-400 text-sm mt-4">
              Last updated: May 2026
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
              className="bg-primary-50 border border-primary-100 rounded-2xl p-8 mb-12"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-500 rounded-xl shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-900 mb-2">Important Notice</h3>
                  <p className="text-dark-600 leading-relaxed">
                    These Terms & Conditions govern all gate repair, installation, maintenance, 
                    and automation services provided by WiseGate , South Africa. 
                    All prices are estimates until confirmed after on-site inspection. A deposit may be 
                    required for major works.
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

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-16 bg-dark-950 rounded-2xl p-10 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h3>
              <p className="text-dark-300 mb-8 max-w-lg mx-auto">
                If you have any questions or concerns about these terms, our team is happy to clarify 
                before you book.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/27781956621?text=Hi%20WiseGate%2C%20I%20have%20a%20question%20about%20your%20terms%20and%20conditions"
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

export default Terms;
