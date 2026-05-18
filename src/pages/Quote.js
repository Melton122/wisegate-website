import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Wrench,
  Check,
  Clock,
  Shield,
  Star,
  MessageCircle,
  FileText,
  Camera,
  Building2,
  AlertCircle,
  ThumbsUp,
  ChevronRight
} from 'lucide-react';

const Quote = () => {
  const { ref, inView } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    serviceType: '',
    gateType: '',
    gateSize: '',
    motorBrand: '',
    issueDescription: '',
    urgency: 'standard',
    contactMethod: 'whatsapp',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const serviceTypes = [
    { label: 'Gate Motor Repair', icon: Wrench, description: 'Diagnosis and repair of faulty gate motors' },
    { label: 'Motor Replacement', icon: Wrench, description: 'Complete motor replacement with new unit' },
    { label: 'Remote Programming', icon: FileText, description: 'Programming new or existing remotes' },
    { label: 'New Gate Installation', icon: Building2, description: 'Full automation from scratch' },
    { label: 'Sliding Gate Service', icon: Wrench, description: 'Sliding gate repair and installation' },
    { label: 'Swing Gate Service', icon: Wrench, description: 'Swing gate repair and installation' },
    { label: 'Intercom System', icon: Camera, description: 'Audio/video intercom solutions' },
    { label: 'Access Control', icon: Shield, description: 'Security and access management' },
    { label: 'Maintenance Plan', icon: Clock, description: 'Regular maintenance packages' },
    { label: 'Other Service', icon: AlertCircle, description: 'Custom gate service requirements' },
  ];

  const gateTypes = [
    'Single Swing',
    'Double Swing',
    'Sliding',
    'Telescopic',
    'Cantilever',
    'Pedestrian Gate',
    'Estate/Complex Gate',
    'Industrial Gate',
    'Not Sure - Need Assessment',
  ];

  const motorBrands = [
    'Centurion',
    'ET Systems (ET Nice)',
    'DACE',
    'Gemini',
    'Hansa',
    'FAAC',
    'BFT',
    'Came',
    'Other Brand',
    'Not Sure',
  ];

  const gateSizes = [
    'Small (Up to 2m)',
    'Standard (2m - 3m)',
    'Medium (3m - 5m)',
    'Large (5m - 8m)',
    'Extra Large (8m+)',
    'Not Sure - Need Measurement',
  ];

  const urgencies = [
    { 
      id: 'standard', 
      label: 'Standard Service', 
      desc: 'Within 3-5 business days',
      icon: Clock,
      color: 'bg-blue-50 border-blue-200 text-blue-700'
    },
    { 
      id: 'priority', 
      label: 'Priority Service', 
      desc: 'Within 1-2 business days',
      icon: Star,
      color: 'bg-amber-50 border-amber-200 text-amber-700'
    },
    { 
      id: 'emergency', 
      label: 'Emergency Service', 
      desc: 'Same day response',
      icon: AlertCircle,
      color: 'bg-red-50 border-red-200 text-red-700'
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUrgencyChange = (urgencyId) => {
    setFormData(prev => ({ ...prev, urgency: urgencyId }));
  };

  const handleContactMethodChange = (method) => {
    setFormData(prev => ({ ...prev, contactMethod: method }));
  };

  const handleServiceSelect = (serviceLabel) => {
    setFormData(prev => ({ ...prev, serviceType: serviceLabel }));
    setCurrentStep(2);
  };

  const generateQuoteMessage = () => {
    let message = `*WiseGate Quote Request*\n\n`;
    message += `━━━━━━━━━━━━━━━\n\n`;
    message += `👤 *Customer Details*\n`;
    message += `• Name: ${formData.name}\n`;
    message += `• Phone: ${formData.phone}\n`;
    message += `• Email: ${formData.email}\n`;
    message += `• Location: ${formData.location}\n\n`;
    
    message += `🔧 *Service Information*\n`;
    message += `• Service: ${formData.serviceType}\n`;
    message += `• Gate Type: ${formData.gateType || 'Not specified'}\n`;
    message += `• Gate Size: ${formData.gateSize || 'Not specified'}\n`;
    message += `• Motor Brand: ${formData.motorBrand || 'Not specified'}\n`;
    
    const selectedUrgency = urgencies.find(u => u.id === formData.urgency);
    message += `• Urgency: ${selectedUrgency?.label}\n\n`;
    
    if (formData.issueDescription) {
      message += `📝 *Issue/Requirements*\n`;
      message += `${formData.issueDescription}\n\n`;
    }
    
    message += `━━━━━━━━━━━━━━━\n`;
    message += `📞 *Contact Preference:* ${formData.contactMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}\n`;
    message += `📍 *Service Area:* ${formData.location}\n\n`;
    message += `_A WiseGate specialist will review your request and provide a detailed quote shortly._`;

    return message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    const message = generateQuoteMessage();
    const encodedMessage = encodeURIComponent(message);

    if (formData.contactMethod === 'whatsapp') {
      window.open(`https://wa.me/27781956621?text=${encodedMessage}`, '_blank');
    } else {
      const subject = encodeURIComponent(`Quote Request: ${formData.serviceType} - ${formData.name}`);
      const body = encodeURIComponent(message.replace(/\n/g, '\r\n'));
      window.open(`mailto:wisegate@gmail.com?subject=${subject}&body=${body}`, '_blank');
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Request a Free Quote | WiseGate - Professional Gate Services</title>
        <meta name="description" content="Get a free, no-obligation quote for gate repair, installation, or automation services. Fast response via WhatsApp or email. Professional gate technicians ready to help." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-dark-950 to-dark-950" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-500/3 rounded-full blur-3xl" />

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
              <FileText className="w-4 h-4" />
              Free Quote Request
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Request Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                Free Quote
              </span>
            </h1>
            <p className="text-dark-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Complete the form below and receive a detailed, no-obligation quote for your 
              gate service needs. Our experts will assess your requirements and provide 
              transparent pricing with no hidden costs.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 mt-8"
            >
              <div className="flex items-center gap-2 text-dark-200">
                <Shield className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium">No Obligation</span>
              </div>
              <div className="flex items-center gap-2 text-dark-200">
                <Clock className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium">Fast Response</span>
              </div>
              <div className="flex items-center gap-2 text-dark-200">
                <ThumbsUp className="w-5 h-5 text-primary-400" />
                <span className="text-sm font-medium">Free Assessment</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section ref={ref} className="py-24 lg:py-32 bg-dark-50">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              
              {/* Main Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                {isSubmitted ? (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl p-12 text-center shadow-xl border border-dark-100"
                  >
                    <div className="inline-flex p-5 bg-emerald-100 rounded-full mb-6">
                      <Check className="w-12 h-12 text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-dark-900 mb-4">
                      Quote Request Sent Successfully!
                    </h2>
                    <p className="text-dark-500 text-lg mb-8 max-w-md mx-auto">
                      Thank you for reaching out. Your quote request has been sent via{' '}
                      <strong>{formData.contactMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}</strong>. 
                      One of our gate specialists will review your requirements and respond 
                      with a detailed quote shortly.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            location: '',
                            serviceType: '',
                            gateType: '',
                            gateSize: '',
                            motorBrand: '',
                            issueDescription: '',
                            urgency: 'standard',
                            contactMethod: 'whatsapp',
                          });
                          setCurrentStep(1);
                        }}
                        className="btn-primary inline-flex items-center justify-center gap-2"
                      >
                        <FileText className="w-5 h-5" />
                        Request Another Quote
                      </button>
                      <a
                        href="tel:+27781956621"
                        className="btn-secondary inline-flex items-center justify-center gap-2"
                      >
                        <Phone className="w-5 h-5" />
                        Call Us Directly
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* Quote Form */
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-dark-100">
                    
                    {/* Progress Indicator */}
                    <div className="flex items-center gap-2 mb-10">
                      {[1, 2, 3].map((step) => (
                        <div key={step} className="flex items-center gap-2 flex-1">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            currentStep >= step 
                              ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25' 
                              : 'bg-dark-100 text-dark-400'
                          }`}>
                            {currentStep > step ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              step
                            )}
                          </div>
                          {step < 3 && (
                            <div className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                              currentStep > step ? 'bg-primary-600' : 'bg-dark-100'
                            }`} />
                          )}
                        </div>
                      ))}
                    </div>

                    <h2 className="text-2xl font-bold text-dark-900 mb-2">
                      {currentStep === 1 ? 'Select Your Service' : 
                       currentStep === 2 ? 'Service Details' : 
                       'Your Contact Information'}
                    </h2>
                    <p className="text-dark-500 mb-8">
                      {currentStep === 1 ? 'Choose the service you need and we\'ll customize your quote.' : 
                       currentStep === 2 ? 'Help us understand your specific requirements.' : 
                       'Tell us how to reach you with your personalized quote.'}
                    </p>

                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-3"
                      >
                        {serviceTypes.map((service) => (
                          <button
                            key={service.label}
                            type="button"
                            onClick={() => handleServiceSelect(service.label)}
                            className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                              formData.serviceType === service.label
                                ? 'border-primary-500 bg-primary-50 shadow-md'
                                : 'border-dark-100 hover:border-primary-300 hover:shadow-md'
                            }`}
                          >
                            <div className={`p-2.5 rounded-lg transition-colors ${
                              formData.serviceType === service.label
                                ? 'bg-primary-500 text-white'
                                : 'bg-dark-50 text-dark-400 group-hover:bg-primary-100 group-hover:text-primary-600'
                            }`}>
                              <service.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-dark-900">{service.label}</p>
                              <p className="text-sm text-dark-500">{service.description}</p>
                            </div>
                            <ChevronRight className={`w-5 h-5 transition-colors ${
                              formData.serviceType === service.label
                                ? 'text-primary-500'
                                : 'text-dark-300'
                            }`} />
                          </button>
                        ))}
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        {/* Gate Type */}
                        <div>
                          <label className="block text-sm font-semibold text-dark-700 mb-2">
                            Gate Type
                          </label>
                          <select
                            name="gateType"
                            value={formData.gateType}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-dark-50 border-2 border-dark-200 rounded-xl text-dark-900 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                          >
                            <option value="">Select gate type</option>
                            {gateTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>

                        {/* Gate Size */}
                        <div>
                          <label className="block text-sm font-semibold text-dark-700 mb-2">
                            Approximate Gate Size
                          </label>
                          <select
                            name="gateSize"
                            value={formData.gateSize}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-dark-50 border-2 border-dark-200 rounded-xl text-dark-900 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                          >
                            <option value="">Select approximate size</option>
                            {gateSizes.map(size => (
                              <option key={size} value={size}>{size}</option>
                            ))}
                          </select>
                        </div>

                        {/* Motor Brand */}
                        <div>
                          <label className="block text-sm font-semibold text-dark-700 mb-2">
                            Current Motor Brand (if known)
                          </label>
                          <select
                            name="motorBrand"
                            value={formData.motorBrand}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-dark-50 border-2 border-dark-200 rounded-xl text-dark-900 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                          >
                            <option value="">Select brand or "Not Sure"</option>
                            {motorBrands.map(brand => (
                              <option key={brand} value={brand}>{brand}</option>
                            ))}
                          </select>
                        </div>

                        {/* Issue Description */}
                        <div>
                          <label className="block text-sm font-semibold text-dark-700 mb-2">
                            Describe Your Requirements *
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-dark-400" />
                            <textarea
                              name="issueDescription"
                              rows={4}
                              required
                              value={formData.issueDescription}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3.5 bg-dark-50 border-2 border-dark-200 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all resize-none"
                              placeholder="Describe the issue you're experiencing or what you need. Include any relevant details like symptoms, when it started, or specific requirements..."
                            />
                          </div>
                        </div>

                        {/* Urgency */}
                        <div>
                          <label className="block text-sm font-semibold text-dark-700 mb-3">
                            Service Urgency
                          </label>
                          <div className="grid grid-cols-3 gap-3">
                            {urgencies.map((option) => (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => handleUrgencyChange(option.id)}
                                className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                                  formData.urgency === option.id
                                    ? `${option.color} border-current shadow-md`
                                    : 'border-dark-100 hover:border-dark-300'
                                }`}
                              >
                                <option.icon className={`w-5 h-5 mx-auto mb-2 ${
                                  formData.urgency === option.id ? '' : 'text-dark-400'
                                }`} />
                                <p className="font-semibold text-sm">{option.label}</p>
                                <p className="text-xs mt-1 opacity-75">{option.desc}</p>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(1)}
                            className="btn-secondary flex-1"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={() => setCurrentStep(3)}
                            disabled={!formData.issueDescription}
                            className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Continue
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                      >
                        {/* Name & Email */}
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-dark-700 mb-2">
                              Full Name *
                            </label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                              <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-dark-50 border-2 border-dark-200 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                                placeholder="John Smith"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-dark-700 mb-2">
                              Email Address *
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                              <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-dark-50 border-2 border-dark-200 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                                placeholder="john@example.com"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Phone & Location */}
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-dark-700 mb-2">
                              Phone Number *
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                              <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-dark-50 border-2 border-dark-200 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                                placeholder="0781956621"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-dark-700 mb-2">
                              Area/Suburb *
                            </label>
                            <div className="relative">
                              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                              <input
                                type="text"
                                name="location"
                                required
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-dark-50 border-2 border-dark-200 rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                                placeholder="e.g. Sandton, Johannesburg"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Contact Method */}
                        <div>
                          <label className="block text-sm font-semibold text-dark-700 mb-3">
                            How would you like to receive your quote? *
                          </label>
                          <div className="grid grid-cols-2 gap-4">
                            <button
                              type="button"
                              onClick={() => handleContactMethodChange('whatsapp')}
                              className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-300 ${
                                formData.contactMethod === 'whatsapp'
                                  ? 'border-green-500 bg-green-50 shadow-md'
                                  : 'border-dark-100 hover:border-green-300'
                              }`}
                            >
                              <div className={`p-3 rounded-xl ${
                                formData.contactMethod === 'whatsapp' ? 'bg-green-500' : 'bg-green-100'
                              }`}>
                                <MessageCircle className={`w-6 h-6 ${
                                  formData.contactMethod === 'whatsapp' ? 'text-white' : 'text-green-600'
                                }`} />
                              </div>
                              <div className="text-left">
                                <p className="font-semibold text-dark-900">WhatsApp</p>
                                <p className="text-sm text-dark-500">Fastest response</p>
                              </div>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleContactMethodChange('email')}
                              className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-300 ${
                                formData.contactMethod === 'email'
                                  ? 'border-primary-500 bg-primary-50 shadow-md'
                                  : 'border-dark-100 hover:border-primary-300'
                              }`}
                            >
                              <div className={`p-3 rounded-xl ${
                                formData.contactMethod === 'email' ? 'bg-primary-500' : 'bg-primary-100'
                              }`}>
                                <Mail className={`w-6 h-6 ${
                                  formData.contactMethod === 'email' ? 'text-white' : 'text-primary-600'
                                }`} />
                              </div>
                              <div className="text-left">
                                <p className="font-semibold text-dark-900">Email</p>
                                <p className="text-sm text-dark-500">Detailed quote</p>
                              </div>
                            </button>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(2)}
                            className="btn-secondary flex-1"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg disabled:opacity-70 ${
                              formData.contactMethod === 'whatsapp'
                                ? 'bg-gradient-to-r from-green-500 to-green-600 hover:shadow-green-500/30'
                                : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-primary-500/30'
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending Quote Request...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5" />
                                Send Quote Request
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                )}
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* How It Works */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-dark-100">
                  <h3 className="text-xl font-bold text-dark-900 mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary-500" />
                    How It Works
                  </h3>
                  <div className="space-y-6">
                    {[
                      { step: '01', title: 'Submit Your Request', desc: 'Fill in your details and describe your gate service needs' },
                      { step: '02', title: 'We Review & Assess', desc: 'Our specialists analyze your requirements and prepare a tailored solution' },
                      { step: '03', title: 'Receive Your Quote', desc: 'Get a detailed, transparent quote via WhatsApp or email' },
                      { step: '04', title: 'Schedule & Service', desc: 'Approve the quote and we\'ll schedule your service at your convenience' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-sm shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <p className="font-semibold text-dark-900">{item.title}</p>
                          <p className="text-sm text-dark-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-dark-100">
                  <h3 className="text-xl font-bold text-dark-900 mb-6 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary-500" />
                    Need Immediate Help?
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/27781956621?text=Hello%20WiseGate%2C%20I%20need%20assistance%20with%20a%20quote."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                    >
                      <div className="p-3 bg-green-500 rounded-xl">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-400">WhatsApp Chat</p>
                        <p className="font-semibold text-dark-900 group-hover:text-green-600 transition-colors">
                          +27 78 195 6621
                        </p>
                      </div>
                    </a>
                    <a
                      href="mailto:wisegate@gmail.com"
                      className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group"
                    >
                      <div className="p-3 bg-primary-500 rounded-xl">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-400">Email Us</p>
                        <p className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                          wisegate@gmail.com
                        </p>
                      </div>
                    </a>
                    <a
                      href="tel:+27781956621"
                      className="flex items-center gap-4 p-4 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors group"
                    >
                      <div className="p-3 bg-dark-700 rounded-xl">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-400">Call Us</p>
                        <p className="font-semibold text-dark-900 group-hover:text-dark-600 transition-colors">
                          +27781956621
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl p-8 text-white">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary-400" />
                  <h3 className="text-xl font-bold mb-2 text-center">Why Choose WiseGate?</h3>
                  <ul className="space-y-3 mt-4">
                    {[
                      'Free, no-obligation quotes',
                      'Licensed & insured technicians',
                      'Transparent pricing policy',
                      'All major brands serviced',
                      'Same-day emergency response',
                      'Satisfaction guaranteed',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-dark-300">
                        <Check className="w-4 h-4 text-primary-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;