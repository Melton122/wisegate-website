import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const { ref, inView } = useScrollAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John van der Merwe',
      role: 'Homeowner',
      location: 'Sandton, Johannesburg',
      rating: 5,
      text: 'WiseGate saved the day when our gate motor failed on a Sunday evening. Their technician arrived within an hour and had it fixed before bedtime. Professional, fast, and fairly priced. Highly recommend!',
      avatar: 'JM',
    },
    {
      id: 2,
      name: 'Sarah Nkosi',
      role: 'Property Manager',
      location: 'Midrand, Gauteng',
      rating: 5,
      text: 'We manage 12 residential complexes and WiseGate has been our go-to for all gate-related issues for 3 years now. Their maintenance plans have reduced our emergency callouts by 80%. Exceptional service.',
      avatar: 'SN',
    },
    {
      id: 3,
      name: 'Michael Peters',
      role: 'Business Owner',
      location: 'Pretoria East',
      rating: 5,
      text: 'Had a complete sliding gate installation done for our warehouse. The team was punctual, clean, and the quality of work is outstanding. The motor runs whisper quiet. Worth every rand.',
      avatar: 'MP',
    },
    {
      id: 4,
      name: 'Lisa Govender',
      role: 'Estate Manager',
      location: 'Randburg, Johannesburg',
      rating: 5,
      text: 'Upgraded our estate intercom and access control system. The biometric integration works flawlessly and the residents love the new mobile app feature. WiseGate understands modern security needs.',
      avatar: 'LG',
    },
    {
      id: 5,
      name: 'David Mokoena',
      role: 'Homeowner',
      location: 'Centurion, Pretoria',
      rating: 5,
      text: 'Called for a motor replacement quote and they beat everyone else\'s price. Installation was done the next day and they even programmed all our old remotes for free. Great customer service!',
      avatar: 'DM',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="heading-lg text-dark-900 mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="body-lg">
              Don't just take our word for it. Here's what homeowners, businesses, and estate managers say about our service.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative bg-dark-950 rounded-3xl p-8 sm:p-12 overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 text-primary-500" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-8">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonials[currentIndex].name}</p>
                      <p className="text-dark-400 text-sm">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-primary-500 w-8'
                          : 'bg-dark-700 hover:bg-dark-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-dark-800 text-white hover:bg-primary-600 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-dark-800 text-white hover:bg-primary-600 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
