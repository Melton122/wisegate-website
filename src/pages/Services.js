import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Wrench,
  Replace,
  Smartphone,
  DoorOpen,
  ArrowRightLeft,
  Settings,
  Zap,
  Check,
  ArrowRight,
  Clock,
  Shield,
  MessageCircle,
  Mail,
} from 'lucide-react';

const Services = () => {
  const { ref, inView } = useScrollAnimation(0.05);

  const services = [
    {
      id: 'gate-motor-repair',
      icon: Wrench,
      image: 'https://kimi-web-img.moonshot.cn/img/progatemotorrepairs.co.za/d7bb9160d3bd79392fb798df67e9ba6147070111.jpg',
      title: 'Gate Motor Repair',
      shortDesc: 'Expert diagnosis and repair of all gate motor brands and models.',
      fullDescription:
        'Our certified technicians diagnose and repair any gate motor issue with precision. From complex electrical faults and PCB board repairs to mechanical problems like worn gears and broken chains. We service all major brands including Centurion, ET Systems, DACE, Gemini, and Hansa. Same-day emergency service available for critical failures.',
      price: 'From R800',
      turnaround: 'Same day',
      warranty: '6 months',
      features: [
        'Electrical fault diagnosis',
        'PCB board repair/replacement',
        'Gear and chain replacement',
        'Limit switch calibration',
        'Safety beam repair & alignment',
        'Remote control troubleshooting',
        'Battery health assessment',
        'Complete wiring inspection',
      ],
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      gradientBg: 'bg-gradient-to-br from-blue-50 to-blue-100',
    },
    {
      id: 'motor-replacement',
      icon: Replace,
      image: 'https://kimi-web-img.moonshot.cn/img/www.iotrend.co.za/4c4e3ec7e0590a323ec937d5addf0af081f8e55a.jpg',
      title: 'Motor Replacement',
      shortDesc: 'Complete motor replacement with premium quality units.',
      fullDescription:
        'When repairs are no longer cost-effective, we provide seamless motor replacement with industry-leading units. Our experts analyze your gate specifications—size, weight, usage frequency—to recommend the optimal motor. Every installation includes comprehensive safety compliance verification, full programming, and thorough testing.',
      price: 'From R2,500',
      turnaround: '2-4 hours',
      warranty: '2 years',
      features: [
        'Premium motor procurement',
        'Professional removal & installation',
        'Full safety compliance check',
        'Remote programming (up to 5)',
        'Battery backup integration',
        'Comprehensive user training',
        'Old motor eco-disposal',
        '30-day post-installation support',
      ],
      color: 'from-emerald-600 to-emerald-700',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      gradientBg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    },
    {
      id: 'remote-programming',
      icon: Smartphone,
      image: 'https://kimi-web-img.moonshot.cn/img/www.iotrend.co.za/2616dc070f29ad03c2f33282bef91ef2d73e9173.jpg',
      title: 'Remote Programming',
      shortDesc: 'Programming of new and existing remotes for all systems.',
      fullDescription:
        'Lost your remote or need additional ones? We program all remote types—fixed code, rolling code, and smart home integrated controllers. Our service includes cloning capabilities, smartphone control setup via WiFi/GSM modules, and comprehensive range optimization for reliable operation.',
      price: 'From R200',
      turnaround: '15-30 min',
      warranty: '3 months',
      features: [
        'Universal brand compatibility',
        'Rolling code encryption',
        'Smartphone app integration',
        'Remote cloning service',
        'Custom button configuration',
        'Extended range optimization',
        'Battery replacement service',
        'Volume discount packages',
      ],
      color: 'from-violet-600 to-violet-700',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600',
      gradientBg: 'bg-gradient-to-br from-violet-50 to-violet-100',
    },
    {
      id: 'new-gate-installation',
      icon: DoorOpen,
      image: 'https://kimi-web-img.moonshot.cn/img/www.centsys.co.za/7adb53cf63d141cb89a71b897587706444f2a565.jpg',
      title: 'New Gate Installation',
      shortDesc: 'Complete gate automation installation from scratch.',
      fullDescription:
        'Transform your manual gate into a sophisticated automated system. We manage every phase—comprehensive site assessment, motor selection, precision installation, safety system integration, and personalized user training. Complimentary no-obligation quotes with custom solutions for unique architectural designs.',
      price: 'Free Quote',
      turnaround: '1-2 days',
      warranty: '2 years',
      features: [
        'Complimentary site assessment',
        'Custom motor specification',
        'Complete automation setup',
        'Safety beam installation',
        'Remote system programming',
        'Full electrical integration',
        'Ground preparation works',
        'Hands-on user training',
      ],
      color: 'from-amber-600 to-amber-700',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      gradientBg: 'bg-gradient-to-br from-amber-50 to-amber-100',
    },
    {
      id: 'sliding-gates',
      icon: ArrowRightLeft,
      image: 'https://kimi-web-img.moonshot.cn/img/securitymart.co.za/cfed35c06031d997d0b086b83199172ea3ffd4c9.jpg',
      title: 'Sliding Gates',
      shortDesc: 'Installation and repair of sliding gate systems.',
      fullDescription:
        'Specialized sliding gate solutions for residential and commercial properties. We install and maintain high-capacity tracks, precision motors, and advanced safety systems. From standard driveway gates to heavy industrial entrances, we ensure whisper-quiet operation with redundant safety mechanisms.',
      price: 'From R3,500',
      turnaround: '1-2 days',
      warranty: '2 years',
      features: [
        'Heavy-duty track installation',
        'Rack and pinion alignment',
        'Motor mounting & calibration',
        'Safety sensor integration',
        'Anti-crush protection systems',
        'Manual override mechanisms',
        'Weatherproofing treatment',
        'Performance optimization',
      ],
      color: 'from-rose-600 to-rose-700',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-600',
      gradientBg: 'bg-gradient-to-br from-rose-50 to-rose-100',
    },
    {
      id: 'maintenance-plans',
      icon: Settings,
      image: 'https://kimi-web-img.moonshot.cn/img/www.centurionsystemsuk.co.uk/925bc7aed4880c375c3f376214dd6f01901f3f57.jpg',
      title: 'Maintenance Plans',
      shortDesc: 'Regular maintenance to prevent costly breakdowns.',
      fullDescription:
        'Proactive maintenance programs designed to maximize your gate system longevity. Our comprehensive monthly or quarterly plans include thorough inspections, precision lubrication, safety compliance verification, and proactive wear-part replacement. Members enjoy priority emergency support and exclusive discounted rates.',
      price: 'From R350/month',
      turnaround: 'Monthly',
      warranty: 'Ongoing',
      features: [
        'Monthly comprehensive inspections',
        'Full system lubrication',
        'Safety compliance testing',
        'Proactive wear assessment',
        'Remote battery replacement',
        'Priority emergency support',
        '20% repair discount',
        'Annual performance report',
      ],
      color: 'from-teal-600 to-teal-700',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      gradientBg: 'bg-gradient-to-br from-teal-50 to-teal-100',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Professional Gate Services | WiseGate - Installation & Repair Experts</title>
        <meta
          name="description"
          content="Comprehensive gate services including motor repair, replacement, remote programming, new installations, sliding & swing gates, intercoms, and access control. Professional, guaranteed work."
        />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-dark-950 to-dark-950" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/3 rounded-full blur-3xl" />

        <div className="relative section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-6 border border-primary-500/20 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4" />
              Professional Gate Solutions
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our Premium{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                Services
              </span>
            </h1>
            <p className="text-dark-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Delivering excellence in gate automation since 2010. From emergency repairs to
              complete installations, our certified professionals ensure security and convenience
              with every project. All work backed by industry-leading warranties.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <div className="flex items-center gap-2 text-dark-200">
                <Shield className="w-5 h-5 text-primary-400" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-dark-200">
                <Clock className="w-5 h-5 text-primary-400" />
                <span className="text-sm">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-2 text-dark-200">
                <Check className="w-5 h-5 text-primary-400" />
                <span className="text-sm">100% Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section ref={ref} className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex p-3.5 rounded-2xl ${service.gradientBg} mb-6 shadow-lg`}
                  >
                    <service.icon className={`w-8 h-8 ${service.textColor}`} />
                  </motion.div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-dark-500 text-lg mb-8 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Stats Cards */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    <div
                      className={`p-5 ${service.gradientBg} rounded-2xl border border-dark-100`}
                    >
                      <p className="text-xs text-dark-400 uppercase tracking-wider mb-2 font-semibold">
                        Starting At
                      </p>
                      <p className="text-xl lg:text-2xl font-bold text-dark-900">
                        {service.price}
                      </p>
                    </div>
                    <div
                      className={`p-5 ${service.gradientBg} rounded-2xl border border-dark-100`}
                    >
                      <p className="text-xs text-dark-400 uppercase tracking-wider mb-2 font-semibold">
                        Turnaround
                      </p>
                      <p className="text-xl lg:text-2xl font-bold text-dark-900 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary-500" />
                        {service.turnaround}
                      </p>
                    </div>
                    <div
                      className={`p-5 ${service.gradientBg} rounded-2xl border border-dark-100`}
                    >
                      <p className="text-xs text-dark-400 uppercase tracking-wider mb-2 font-semibold">
                        Warranty
                      </p>
                      <p className="text-xl lg:text-2xl font-bold text-dark-900 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary-500" />
                        {service.warranty}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3 py-1">
                        <div className={`p-1 rounded-full ${service.bgColor}`}>
                          <Check className={`w-4 h-4 ${service.textColor}`} />
                        </div>
                        <span className="text-sm text-dark-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/quote"
                      className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300`}
                    >
                      Get Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a
                      href={`https://wa.me/27781956621?text=Hi%20WiseGate%2C%20I'm%20interested%20in%20${encodeURIComponent(
                        service.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:wisegate@gmail.com?subject=${encodeURIComponent(
                        service.title
                      )}%20Inquiry&body=Hello%20WiseGate%2C%0A%0AI'm%20interested%20in%20your%20${encodeURIComponent(
                        service.title
                      )}%20service.%0A%0APlease%20provide%20more%20information.%0A%0AThank%20you.`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-dark-900 text-white font-semibold rounded-xl hover:bg-dark-800 transform hover:-translate-y-0.5 transition-all duration-300 border-2 border-dark-200"
                    >
                      <Mail className="w-5 h-5" />
                      Email Us
                    </a>
                  </div>
                </div>

                {/* Visual Card — REAL IMAGE */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${service.color} p-[2px] shadow-2xl`}
                  >
                    <div className="bg-white rounded-3xl overflow-hidden">
                      <div className="aspect-[4/3] relative overflow-hidden bg-dark-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="h-2.5 bg-dark-100 rounded-full w-3/4" />
                        <div className="h-2.5 bg-dark-100 rounded-full w-1/2" />
                        <div className="h-2.5 bg-dark-100 rounded-full w-2/3" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;