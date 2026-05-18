import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  Calculator, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Wrench,
  DoorOpen,
  ArrowRightLeft,
  ArrowLeftRight,
  Cpu,
  Lock,
  Settings,
  Globe,
  Zap,
  Shield,
  Home,
  Building2,
  Factory,
  Warehouse
} from 'lucide-react';

const QuoteEstimator = () => {
  const { ref, inView } = useScrollAnimation(0.1);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    gateType: '',
    propertyType: '',
    motorBrand: '',
    urgency: '',
    extras: [],
  });
  const [estimate, setEstimate] = useState(null);

  const services = [
    { id: 'repair', label: 'Gate Motor Repair', icon: Wrench, basePrice: 800, description: 'Diagnosis & repair of existing motor' },
    { id: 'replacement', label: 'Motor Replacement', icon: Zap, basePrice: 2500, description: 'Supply & install new motor unit' },
    { id: 'remote', label: 'Remote Programming', icon: Globe, basePrice: 200, description: 'Program new or existing remotes' },
    { id: 'installation', label: 'New Installation', icon: DoorOpen, basePrice: 0, description: 'Complete new gate automation' },
    { id: 'sliding', label: 'Sliding Gate', icon: ArrowRightLeft, basePrice: 3500, description: 'Sliding gate system install' },
    { id: 'swing', label: 'Swing Gate', icon: ArrowLeftRight, basePrice: 3000, description: 'Swing gate system install' },
    { id: 'intercom', label: 'Intercom System', icon: Cpu, basePrice: 1500, description: 'Audio/video intercom install' },
    { id: 'access', label: 'Access Control', icon: Lock, basePrice: 2000, description: 'Keypad/card/biometric system' },
    { id: 'maintenance', label: 'Maintenance Plan', icon: Settings, basePrice: 350, description: 'Monthly maintenance package' },
  ];

  const gateTypes = [
    { id: 'single-swing', label: 'Single Swing', icon: Warehouse },
    { id: 'double-swing', label: 'Double Swing', icon: Warehouse },
    { id: 'sliding', label: 'Sliding', icon: ArrowRightLeft },
    { id: 'telescopic', label: 'Telescopic', icon: ArrowRightLeft },
    { id: 'cantilever', label: 'Cantilever', icon: ArrowRightLeft },
    { id: 'pedestrian', label: 'Pedestrian', icon: DoorOpen },
  ];

  const propertyTypes = [
    { id: 'residential', label: 'Residential Home', icon: Home },
    { id: 'complex', label: 'Residential Complex', icon: Building2 },
    { id: 'commercial', label: 'Commercial Property', icon: Building2 },
    { id: 'industrial', label: 'Industrial/Estate', icon: Factory },
  ];

  const motorBrands = [
    { id: 'centurion', label: 'Centurion', priceMultiplier: 1.0 },
    { id: 'et', label: 'ET Systems', priceMultiplier: 1.0 },
    { id: 'dace', label: 'DACE', priceMultiplier: 1.1 },
    { id: 'gemini', label: 'Gemini', priceMultiplier: 0.9 },
    { id: 'hansa', label: 'Hansa', priceMultiplier: 1.0 },
    { id: 'other', label: 'Other/Unknown', priceMultiplier: 1.0 },
  ];

  const urgencyLevels = [
    { id: 'standard', label: 'Standard (3-5 days)', multiplier: 1.0 },
    { id: 'priority', label: 'Priority (1-2 days)', multiplier: 1.15 },
    { id: 'emergency', label: 'Emergency (Same day)', multiplier: 1.3 },
  ];

  const extras = [
    { id: 'safety-beams', label: 'Safety Beams', price: 450 },
    { id: 'battery-backup', label: 'Battery Backup', price: 850 },
    { id: 'solar-kit', label: 'Solar Charging Kit', price: 1200 },
    { id: 'keypad', label: 'Keypad Entry', price: 650 },
    { id: 'extra-remote', label: 'Extra Remote (each)', price: 250 },
    { id: 'gsm-module', label: 'GSM/WiFi Module', price: 950 },
    { id: 'pedestrian-gate', label: 'Pedestrian Gate Motor', price: 1800 },
    { id: 'loop-detector', label: 'Loop Detector', price: 550 },
  ];

  const calculateEstimate = () => {
    const service = services.find(s => s.id === formData.serviceType);
    const urgency = urgencyLevels.find(u => u.id === formData.urgency);
    const brand = motorBrands.find(b => b.id === formData.motorBrand);

    let basePrice = service.basePrice;

    // Apply property type multiplier
    if (formData.propertyType === 'commercial') basePrice *= 1.2;
    if (formData.propertyType === 'industrial') basePrice *= 1.4;
    if (formData.propertyType === 'complex') basePrice *= 1.3;

    // Apply brand multiplier
    if (brand) basePrice *= brand.priceMultiplier;

    // Apply urgency multiplier
    if (urgency) basePrice *= urgency.multiplier;

    // Add extras
    const extrasTotal = formData.extras.reduce((sum, extraId) => {
      const extra = extras.find(e => e.id === extraId);
      return sum + (extra ? extra.price : 0);
    }, 0);

    const total = basePrice + extrasTotal;
    const minTotal = Math.round(total * 0.85);
    const maxTotal = Math.round(total * 1.15);

    setEstimate({
      service: service.label,
      range: `R${minTotal.toLocaleString()} - R${maxTotal.toLocaleString()}`,
      breakdown: [
        { label: 'Base Service', amount: `R${Math.round(basePrice).toLocaleString()}` },
        { label: 'Extras', amount: `R${extrasTotal.toLocaleString()}` },
      ],
      notes: [
        'Final price depends on site assessment',
        'Labour included in estimate',
        '6-month warranty on repairs',
        '2-year warranty on new motors',
      ],
    });

    setStep(5);
  };

  const handleExtraToggle = (extraId) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.includes(extraId)
        ? prev.extras.filter(id => id !== extraId)
        : [...prev.extras, extraId],
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-bold text-dark-900 mb-2">What service do you need?</h3>
            <p className="text-dark-500 mb-6">Select the primary service you're looking for.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, serviceType: service.id }));
                    setStep(2);
                  }}
                  className={`p-5 rounded-xl border-2 text-left transition-all duration-300 ${
                    formData.serviceType === service.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-dark-100 hover:border-primary-300 hover:bg-dark-50'
                  }`}
                >
                  <service.icon className={`w-8 h-8 mb-3 ${
                    formData.serviceType === service.id ? 'text-primary-600' : 'text-dark-400'
                  }`} />
                  <p className="font-semibold text-dark-900 text-sm">{service.label}</p>
                  <p className="text-xs text-dark-500 mt-1">{service.description}</p>
                  <p className="text-sm font-bold text-primary-600 mt-2">
                    {service.basePrice === 0 ? 'Free Quote' : `From R${service.basePrice.toLocaleString()}`}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-bold text-dark-900 mb-2">What type of gate do you have?</h3>
            <p className="text-dark-500 mb-6">This helps us determine the right solution for you.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gateTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, gateType: type.id }));
                    setStep(3);
                  }}
                  className={`p-5 rounded-xl border-2 text-left transition-all duration-300 ${
                    formData.gateType === type.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-dark-100 hover:border-primary-300 hover:bg-dark-50'
                  }`}
                >
                  <type.icon className={`w-8 h-8 mb-3 ${
                    formData.gateType === type.id ? 'text-primary-600' : 'text-dark-400'
                  }`} />
                  <p className="font-semibold text-dark-900">{type.label}</p>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-6 flex items-center gap-2 text-dark-500 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-bold text-dark-900 mb-2">Property & Urgency</h3>
            <p className="text-dark-500 mb-6">Tell us about your property and how urgent the service is.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-3">Property Type</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setFormData(prev => ({ ...prev, propertyType: type.id }))}
                      className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all duration-300 ${
                        formData.propertyType === type.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-dark-100 hover:border-primary-300'
                      }`}
                    >
                      <type.icon className={`w-5 h-5 ${
                        formData.propertyType === type.id ? 'text-primary-600' : 'text-dark-400'
                      }`} />
                      <span className="font-medium text-sm">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-3">Motor Brand (if known)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {motorBrands.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => setFormData(prev => ({ ...prev, motorBrand: brand.id }))}
                      className={`p-3 rounded-xl border-2 text-center transition-all duration-300 ${
                        formData.motorBrand === brand.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-dark-100 hover:border-primary-300'
                      }`}
                    >
                      <span className="font-medium text-sm">{brand.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-3">Service Urgency</label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {urgencyLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setFormData(prev => ({ ...prev, urgency: level.id }))}
                      className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                        formData.urgency === level.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-dark-100 hover:border-primary-300'
                      }`}
                    >
                      <span className="font-medium text-sm block">{level.label}</span>
                      <span className="text-xs text-dark-500">
                        {level.multiplier === 1.0 ? 'Standard rate' : `+${Math.round((level.multiplier - 1) * 100)}%`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-2 text-dark-500 hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!formData.propertyType || !formData.urgency}
                className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-bold text-dark-900 mb-2">Additional Options</h3>
            <p className="text-dark-500 mb-6">Select any extras you'd like to include.</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {extras.map((extra) => (
                <button
                  key={extra.id}
                  onClick={() => handleExtraToggle(extra.id)}
                  className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all duration-300 ${
                    formData.extras.includes(extra.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-dark-100 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      formData.extras.includes(extra.id)
                        ? 'bg-primary-600 border-primary-600'
                        : 'border-dark-300'
                    }`}>
                      {formData.extras.includes(extra.id) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="font-medium text-sm">{extra.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-primary-600">+R{extra.price.toLocaleString()}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setStep(3)}
                className="flex items-center gap-2 text-dark-500 hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={calculateEstimate}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                Calculate Estimate
              </button>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="inline-flex p-4 bg-primary-100 rounded-full mb-6">
              <Calculator className="w-10 h-10 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-dark-900 mb-2">Your Estimate</h3>
            <p className="text-dark-500 mb-8">Based on your selections, here's an estimated price range.</p>

            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white mb-8">
              <p className="text-primary-200 text-sm uppercase tracking-wider mb-2">Estimated Range</p>
              <p className="text-4xl sm:text-5xl font-bold">{estimate.range}</p>
              <p className="text-primary-200 mt-2">{estimate.service}</p>
            </div>

            <div className="bg-dark-50 rounded-xl p-6 mb-8 text-left">
              <h4 className="font-semibold text-dark-900 mb-4">Price Breakdown</h4>
              {estimate.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-dark-100 last:border-0">
                  <span className="text-dark-600">{item.label}</span>
                  <span className="font-semibold text-dark-900">{item.amount}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8 text-left">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Important Notes
              </h4>
              <ul className="space-y-2">
                {estimate.notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-amber-700">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setStep(1);
                  setFormData({
                    serviceType: '',
                    gateType: '',
                    propertyType: '',
                    motorBrand: '',
                    urgency: '',
                    extras: [],
                  });
                  setEstimate(null);
                }}
                className="btn-secondary"
              >
                Start Over
              </button>
              <a
                href="/quote"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Get Final Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              Price Estimator
            </span>
            <h2 className="heading-lg text-dark-900 mb-4">
              Get an <span className="text-gradient">Instant Estimate</span>
            </h2>
            <p className="body-lg">
              Answer a few quick questions and we'll provide an estimated price range for your gate service needs.
            </p>
          </motion.div>

          {/* Progress Bar */}
          {step < 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-dark-600">Step {step} of 4</span>
                <span className="text-sm font-medium text-primary-600">{Math.round((step / 4) * 100)}%</span>
              </div>
              <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          )}

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl border border-dark-100 shadow-lg shadow-dark-900/5 p-6 sm:p-10"
          >
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteEstimator;