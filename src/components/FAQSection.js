import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const { ref, inView } = useScrollAnimation(0.1);
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How much does gate motor repair cost?',
      answer: 'Gate motor repair typically starts from R800, depending on the issue. Simple fixes like remote programming or limit switch adjustments cost less, while PCB board repairs or gear replacements may cost more. We provide a detailed quote after diagnosis so there are no surprises.',
    },
    {
      question: 'How long does a gate motor replacement take?',
      answer: 'A standard motor replacement usually takes 2-4 hours. This includes removing the old motor, installing the new one, setting up safety features, and programming remotes. For complex installations or custom gates, it may take longer. We always aim to complete the job in a single visit.',
    },
    {
      question: 'Do you offer emergency gate repair services?',
      answer: 'Yes, we offer 24/7 emergency gate repair services across Gauteng. For emergency callouts, we aim to respond within 2 hours. Emergency services carry a surcharge of approximately 30% over standard rates, but we prioritize getting your property secure as quickly as possible.',
    },
    {
      question: 'What brands of gate motors do you work with?',
      answer: 'We work with all major brands including Centurion, ET Systems, DACE, Gemini, Hansa, Nice, FAAC, and Beninca. We can repair, replace, and service motors from any manufacturer. If you\'re unsure of your motor brand, our technician will identify it during the site visit.',
    },
    {
      question: 'How often should I service my gate motor?',
      answer: 'We recommend servicing your gate motor every 6 months for residential properties and every 3 months for commercial or high-traffic gates. Regular maintenance includes lubrication, safety check, limit adjustment, and wear inspection. Our maintenance plans start from R350/month and include priority support.',
    },
    {
      question: 'Can you install a gate motor on an existing manual gate?',
      answer: 'Absolutely! We can automate most existing manual gates, whether swing or sliding. The feasibility depends on the gate\'s condition, weight, and design. We offer free site assessments to determine the best automation solution for your specific gate.',
    },
    {
      question: 'What warranty do you offer on repairs and installations?',
      answer: 'All repairs come with a 6-month workmanship warranty. New motor installations include a 2-year manufacturer warranty plus our installation guarantee. We only use genuine parts, and any defects in our workmanship are covered at no additional cost.',
    },
    {
      question: 'Do you provide free quotes?',
      answer: 'Yes, we provide free on-site quotes for all new installations and major repairs. For simple repairs, we can often provide a ballpark estimate over the phone. There is no obligation to proceed after receiving a quote, and we pride ourselves on transparent, competitive pricing.',
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-dark-50">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h2 className="heading-lg text-dark-900 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="body-lg">
              Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
            </p>
          </motion.div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-primary-200 shadow-lg shadow-primary-500/5' 
                    : 'border-dark-100 hover:border-dark-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${
                      openIndex === index ? 'bg-primary-100 text-primary-600' : 'bg-dark-50 text-dark-400'
                    }`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className={`font-semibold transition-colors ${
                      openIndex === index ? 'text-primary-700' : 'text-dark-900'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-dark-400 transition-transform duration-300 shrink-0 ${
                      openIndex === index ? 'rotate-180 text-primary-600' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-16">
                        <p className="text-dark-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
