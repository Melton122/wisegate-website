// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Wrench,
  Shield,
  Clock,
  Zap,
  Check,
  ArrowRight,
  Star,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  MapPin,
  Award,
  Users,
  TrendingUp,
  Settings,
  Smartphone,
  DoorOpen,
  ArrowRightLeft,
  Replace,
  Quote,
} from 'lucide-react';

/* ────────────────────────────  CONSTANTS  ──────────────────────────── */
const PHONE_NUMBER = '+27781656621';
const PHONE_DISPLAY = '078 165 6621';
const WHATSAPP_NUMBER = '27781656621';
const WHATSAPP_MESSAGE = 'Hi WiseGate, I need help with my gate';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* ────────────────────────────  HERO  ──────────────────────────── */
const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-dark-950 pt-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://kimi-web-img.moonshot.cn/img/www.vdsautomation.com/e07709bc8c95367781fdf708005e935ac1016968.jpeg"
          alt="Modern automated gate with intercom system"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/30" />
      </div>

      <div className="relative section-padding w-full pt-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-6 border border-primary-500/20 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4" />
              South Africa's #1 Gate Specialists
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Professional Gate{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                Repair & Installation
              </span>
            </h1>

            <p className="text-dark-300 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
              Expert gate motor repairs, new installations, and automation services across 
              Gauteng. Same-day emergency response. Licensed & insured technicians.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary-500/20 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Shield, text: 'Licensed & Insured' },
                { icon: Clock, text: '24/7 Emergency' },
                { icon: Award, text: '15+ Years Experience' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-dark-300">
                  <item.icon className="w-5 h-5 text-primary-400" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-700/20 rounded-3xl blur-2xl" />
              <div className="relative bg-dark-900/80 backdrop-blur-xl rounded-3xl p-8 border border-dark-800">
                <img
                  src="https://kimi-web-img.moonshot.cn/img/livfuture.com/75d45dc8ef21f15f3e0b0a15cc4717ed03576d7b.png"
                  alt="Modern automatic sliding gate"
                  className="w-full h-56 object-cover rounded-2xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Same-Day Service</p>
                      <p className="text-dark-400 text-sm">Emergency repairs available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">500+ Happy Clients</p>
                      <p className="text-dark-400 text-sm">Across Gauteng province</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <Award className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Certified Technicians</p>
                      <p className="text-dark-400 text-sm">Centurion, ET & Gemini experts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-dark-400" />
      </motion.div>
    </section>
  );
};

/* ────────────────────────────  SERVICES  ──────────────────────────── */
const ServicesSection = () => {
  const { ref, inView } = useScrollAnimation(0.1);

  const services = [
    {
      icon: Wrench,
      image: 'https://kimi-web-img.moonshot.cn/img/progatemotorrepairs.co.za/09574656209c570dd4a1f533c8a9b2b11247c3d6.jpg',
      title: 'Gate Motor Repair',
      desc: 'Expert diagnosis and repair of all gate motor brands including Centurion, ET Systems, DACE, Gemini, and Hansa.',
      color: 'from-blue-600 to-blue-700',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
    },
    {
      icon: Replace,
      image: 'https://kimi-web-img.moonshot.cn/img/cdn.prod.website-files.com/0f2a6c6b6ed5ded1e643abc27e8cb62e7f2f6f60.webp',
      title: 'Motor Replacement',
      desc: 'Complete motor replacement with premium quality units. Old motor eco-disposal included.',
      color: 'from-emerald-600 to-emerald-700',
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
    },
    {
      icon: Smartphone,
      image: 'https://kimi-web-img.moonshot.cn/img/www.homeautomat.in/5e1ceeb7977bd2140856532c5afab7ecf1c6f864.jpeg',
      title: 'Remote Programming',
      desc: 'Programming of new and existing remotes. Smartphone app integration available.',
      color: 'from-violet-600 to-violet-700',
      bg: 'bg-violet-50',
      text: 'text-violet-600',
    },
    {
      icon: DoorOpen,
      image: 'https://kimi-web-img.moonshot.cn/img/mlcv1fdwbhqx.i.optimole.com/2bc8e719cfc7a88021f405272be17c7346e1405e.jpg',
      title: 'New Installation',
      desc: 'Complete gate automation installation from scratch. Free site assessment included.',
      color: 'from-amber-600 to-amber-700',
      bg: 'bg-amber-50',
      text: 'text-amber-600',
    },
    {
      icon: ArrowRightLeft,
      image: 'https://kimi-web-img.moonshot.cn/img/static.wixstatic.com/3a0caa6f1b56ff68fa483f2a1176c31157d6d925.jpg',
      title: 'Sliding & Swing Gates',
      desc: 'Installation and repair of sliding and swing gate systems for residential and commercial.',
      color: 'from-rose-600 to-rose-700',
      bg: 'bg-rose-50',
      text: 'text-rose-600',
    },
    {
      icon: Settings,
      image: 'https://kimi-web-img.moonshot.cn/img/images.caxton.co.za/5d72eb45e2ada005cd547483d08072ab7b73e9dd.jpg',
      title: 'Maintenance Plans',
      desc: 'Regular maintenance to prevent costly breakdowns. Monthly and quarterly plans.',
      color: 'from-teal-600 to-teal-700',
      bg: 'bg-teal-50',
      text: 'text-teal-600',
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Complete Gate Solutions
            </h2>
            <p className="text-dark-500 text-lg max-w-2xl mx-auto">
              From emergency repairs to full installations, we handle every aspect of gate automation 
              with precision and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-dark-100"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className={`inline-flex p-2.5 rounded-xl ${service.bg} mb-4`}>
                    <service.icon className={`w-6 h-6 ${service.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">{service.title}</h3>
                  <p className="text-dark-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <Link
                    to="/services"
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${service.text} hover:gap-3 transition-all`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ────────────────────────────  WHY CHOOSE US  ──────────────────────────── */
const WhyChooseUs = () => {
  const { ref, inView } = useScrollAnimation(0.1);

  const reasons = [
    {
      icon: Clock,
      title: 'Same-Day Service',
      desc: 'Emergency repairs completed within hours, not days. We understand that a broken gate is a security risk.',
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      desc: 'Fully certified technicians with comprehensive insurance coverage for your peace of mind.',
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      desc: 'Over a decade of specialising in gate automation across Johannesburg, Pretoria, and surrounding areas.',
    },
    {
      icon: Users,
      title: '500+ Happy Clients',
      desc: 'Trusted by homeowners, estates, and businesses throughout Gauteng for reliable gate solutions.',
    },
    {
      icon: TrendingUp,
      title: 'Transparent Pricing',
      desc: 'No hidden fees. Get a detailed estimate before any work begins. Free quotes with no obligation.',
    },
    {
      icon: MapPin,
      title: 'Gauteng Wide Coverage',
      desc: 'Servicing Johannesburg, Pretoria, Sandton, Midrand, Centurion, and all surrounding suburbs.',
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/3 rounded-full blur-3xl" />

      <div className="relative section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-500/20">
                Why WiseGate?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                South Africa's Most Trusted{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                  Gate Specialists
                </span>
              </h2>
              <p className="text-dark-300 text-lg mb-8 leading-relaxed">
                We don't just fix gates — we deliver peace of mind. Our team of certified 
                technicians brings expertise, professionalism, and genuine care to every job, 
                whether it's a quick remote programming or a full motor replacement.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '500+', label: 'Jobs Completed' },
                  { value: '24/7', label: 'Emergency Support' },
                  { value: '100%', label: 'Satisfaction Rate' },
                ].map((stat, i) => (
                  <div key={i} className="bg-dark-900/50 border border-dark-800 rounded-xl p-5">
                    <p className="text-3xl font-bold text-primary-400 mb-1">{stat.value}</p>
                    <p className="text-dark-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-dark-900/50 backdrop-blur-sm border border-dark-800 rounded-2xl p-6 hover:border-primary-500/30 transition-colors duration-300"
                >
                  <div className="p-3 bg-primary-500/10 rounded-xl w-fit mb-4">
                    <reason.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ────────────────────────────  PORTFOLIO  ──────────────────────────── */
const PortfolioSection = () => {
  const { ref, inView } = useScrollAnimation(0.1);

  const projects = [
    {
      image: 'https://kimi-web-img.moonshot.cn/img/mlcv1fdwbhqx.i.optimole.com/2bc8e719cfc7a88021f405272be17c7346e1405e.jpg',
      title: 'Custom Sliding Gate',
      location: 'Sandton, Johannesburg',
      type: 'New Installation',
    },
    {
      image: 'https://kimi-web-img.moonshot.cn/img/static.wixstatic.com/3a0caa6f1b56ff68fa483f2a1176c31157d6d925.jpg',
      title: 'Modern Wood-Finish Gate',
      location: 'Pretoria East',
      type: 'Motor Replacement',
    },
    {
      image: 'https://kimi-web-img.moonshot.cn/img/www.vdsautomation.com/e07709bc8c95367781fdf708005e935ac1016968.jpeg',
      title: 'Smart Intercom Integration',
      location: 'Midrand',
      type: 'Access Control',
    },
    {
      image: 'https://kimi-web-img.moonshot.cn/img/progatemotorrepairs.co.za/09574656209c570dd4a1f533c8a9b2b11247c3d6.jpg',
      title: 'Swing Gate Automation',
      location: 'Centurion',
      type: 'Full Automation',
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-dark-500 text-lg max-w-2xl mx-auto">
              Real results for real homes and businesses across Gauteng.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full mb-2">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <div className="flex items-center gap-1 text-dark-300 text-sm">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ────────────────────────────  TESTIMONIALS  ──────────────────────────── */
const TestimonialsSection = () => {
  const { ref, inView } = useScrollAnimation(0.1);

  const testimonials = [
    {
      name: 'Thabo Mokoena',
      role: 'Homeowner, Sandton',
      text: 'WiseGate replaced our Centurion D5 motor in under 3 hours. Professional, clean, and the gate works better than ever. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Sarah van der Merwe',
      role: 'Estate Manager, Pretoria',
      text: 'We use WiseGate for all 40 homes in our estate. Their maintenance plan saves us thousands in emergency repairs. Reliable and responsive.',
      rating: 5,
    },
    {
      name: 'David Nkosi',
      role: 'Business Owner, Midrand',
      text: 'Called at 8 PM for an emergency — technician arrived within the hour. Fair pricing and quality work. These guys know their stuff.',
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-dark-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-dark-500 text-lg max-w-2xl mx-auto">
              Don't just take our word for it — hear from homeowners and businesses across Gauteng.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-dark-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-dark-600 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-dark-900">{t.name}</p>
                    <p className="text-sm text-dark-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ────────────────────────────  QUOTE ESTIMATOR  ──────────────────────────── */
const QuoteEstimator = () => {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-primary-900 to-primary-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />

      <div className="relative section-padding">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request a Free Quote
            </h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-10">
              No phone calls needed. Fill in your details and send your request 
              directly via WhatsApp or email. We'll confirm and schedule within 2 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transform hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
              >
                <Quote className="w-5 h-5" />
                Get Free Estimate
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Now
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {['No Hidden Fees', 'Free On-Site Assessment', 'Price Match Guarantee'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-primary-100">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ────────────────────────────  CTA  ──────────────────────────── */
const CTASection = () => {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6 leading-tight">
                Gate Broken?{' '}
                <span className="text-primary-600">We're On Our Way.</span>
              </h2>
              <p className="text-dark-500 text-lg mb-8 leading-relaxed">
                Don't let a faulty gate compromise your security. Our emergency team is 
                standing by 24/7 across Johannesburg, Pretoria, and all of Gauteng. Average 
                response time: under 90 minutes.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Emergency repairs with rapid response',
                  'New installations with 2-year warranty',
                  'All major brands: Centurion, ET, Gemini, DACE, Hansa',
                  'Free quotes — no obligation',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-1 bg-primary-100 rounded-full">
                      <Check className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-dark-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Emergency Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-100 text-dark-900 font-semibold rounded-xl hover:bg-dark-200 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call {PHONE_DISPLAY} Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-primary-700/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://kimi-web-img.moonshot.cn/img/cdn.prod.website-files.com/0f2a6c6b6ed5ded1e643abc27e8cb62e7f2f6f60.webp"
                  alt="Professional gate technician at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                    <div className="p-3 bg-green-500 rounded-full">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-dark-900">Available Now</p>
                      <p className="text-sm text-dark-500">Average response: 90 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ────────────────────────────  FAQ  ──────────────────────────── */
const FAQSection = () => {
  const { ref, inView } = useScrollAnimation(0.1);
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      q: 'How much does gate motor repair cost?',
      a: 'Repair costs depend on the specific issue and parts required. Simple fixes like remote programming or limit switch calibration are more affordable, while PCB board replacements or gear repairs require more extensive work. We always provide a detailed estimate before starting any work.',
    },
    {
      q: 'Which gate motor brands do you service?',
      a: 'We service all major brands including Centurion (D5, D10, D20, V-Series), ET Systems, DACE, Gemini, Hansa, Nice, and FAAC. Our technicians are factory-trained and carry common spare parts for faster repairs.',
    },
    {
      q: 'How long does a motor replacement take?',
      a: 'Most motor replacements are completed within 2-4 hours. This includes removing the old motor, installing the new unit, safety compliance checks, programming up to 5 remotes, and user training. We also dispose of your old motor responsibly.',
    },
    {
      q: 'Do you offer emergency same-day service?',
      a: 'Yes, we offer 24/7 emergency gate repair across Gauteng. For same-day service, we typically arrive within 90 minutes in Johannesburg, Pretoria, Sandton, and surrounding areas. Emergency call-outs carry a small surcharge.',
    },
    {
      q: 'What areas do you cover?',
      a: 'We cover all of Gauteng including Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park, Benoni, and surrounding suburbs. Contact us to confirm service in your specific area.',
    },
    {
      q: 'Is there a warranty on your work?',
      a: 'Absolutely. All repairs come with a 6-month workmanship warranty. New motor installations include a 2-year warranty on the motor unit and our installation work. Maintenance plan members get priority support and extended coverage.',
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-dark-50">
      <div className="section-padding">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Common Questions
            </h2>
            <p className="text-dark-500 text-lg">
              Everything you need to know before booking your gate service.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-dark-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-dark-50 transition-colors"
                >
                  <span className="font-semibold text-dark-900 pr-4">{faq.q}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-dark-400 shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-dark-500 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-10"
          >
            <p className="text-dark-500 mb-4">Still have questions?</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:underline"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with us on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ────────────────────────────  FLOATING WHATSAPP  ──────────────────────────── */
const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

/* ────────────────────────────  HOME PAGE  ──────────────────────────── */
const Home = () => {
  return (
    <>
      <Helmet>
        <title>WiseGate | Professional Gate Repair & Installation Services</title>
        <meta name="description" content="South Africa's leading gate repair and installation specialists. Motor repairs, new installations, sliding & swing gates, intercoms, and access control. Free quotes available." />
        <meta name="keywords" content="gate repair, gate installation, gate motor, sliding gate, swing gate, intercom, access control, Johannesburg, Pretoria, Gauteng, Centurion, ET Systems, Gemini" />
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioSection />
      <TestimonialsSection />
      <QuoteEstimator />
      <CTASection />
      <FAQSection />
      <FloatingWhatsApp />
    </>
  );
};

export default Home;