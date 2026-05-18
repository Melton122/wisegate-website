import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  X, 
  ZoomIn, 
  MapPin, 
  Calendar, 
  Wrench,
  Check,
  ArrowRight,
  Filter
} from 'lucide-react';

const Portfolio = () => {
  const { ref, inView } = useScrollAnimation(0.05);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'repair', label: 'Repairs' },
    { id: 'installation', label: 'Installations' },
    { id: 'automation', label: 'Automation' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Residential Sliding Gate Automation',
      category: 'installation',
      subCategory: 'residential',
      location: 'Sandton, Johannesburg',
      date: 'March 2024',
      client: 'Private Residence',
      description: 'Complete installation of a 4-meter sliding gate with Centurion D5 Evo motor, safety beams, and remote access. The client wanted a quiet, reliable system for their family home.',
      challenges: 'Limited space for motor housing and need for ultra-quiet operation due to proximity to bedrooms.',
      solution: 'Installed Centurion D5 Evo with custom mounting bracket and added rubber dampeners for noise reduction.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      ],
      tags: ['Sliding Gate', 'Centurion D5', 'Remote Access', 'Safety Beams'],
      duration: '1 day',
      price: 'R4,200',
    },
    {
      id: 2,
      title: 'Commercial Swing Gate Motor Replacement',
      category: 'repair',
      subCategory: 'commercial',
      location: 'Midrand, Gauteng',
      date: 'February 2024',
      client: 'Office Park Complex',
      description: 'Emergency motor replacement for a commercial property. The existing ET Drive 600 had failed after 8 years of service, causing security concerns for the office park.',
      challenges: 'Heavy 200kg double swing gates required a powerful motor. Client needed minimal downtime.',
      solution: 'Replaced with new ET Drive 600 and upgraded to include battery backup. Reprogrammed all 12 existing remotes.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      ],
      tags: ['Motor Replacement', 'ET Drive', 'Commercial', 'Battery Backup'],
      duration: '3 hours',
      price: 'R3,800',
    },
    {
      id: 3,
      title: 'Estate Intercom & Access Control',
      category: 'automation',
      subCategory: 'residential',
      location: 'Pretoria East',
      date: 'January 2024',
      client: 'Willow Creek Estate',
      description: 'Installed video intercom system with keypad entry and biometric access for 24-unit estate. Integrated with existing gate motor for seamless visitor management.',
      challenges: 'Multi-unit system requiring individual access codes and visitor logging for security compliance.',
      solution: 'Installed IP-based intercom with cloud management, biometric readers at main gate, and individual keypads for each unit.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      ],
      tags: ['Intercom', 'Biometric', 'Access Control', 'Cloud Management'],
      duration: '3 days',
      price: 'R18,500',
    },
    {
      id: 4,
      title: 'Double Swing Gate Installation',
      category: 'installation',
      subCategory: 'residential',
      location: 'Randburg, Johannesburg',
      date: 'December 2023',
      client: 'Private Residence',
      description: 'Custom fabricated double swing gates with DACE Italian motors. Client requested solar charging option for load shedding resilience.',
      challenges: 'Uneven ground required custom hinge posts. Solar panel positioning for optimal charging.',
      solution: 'Custom steel posts with adjustable hinges. Installed 100W solar panel with charge controller and dual battery system.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      ],
      tags: ['Swing Gate', 'DACE', 'Solar Backup', 'Custom Fabrication'],
      duration: '2 days',
      price: 'R8,500',
    },
    {
      id: 5,
      title: 'Gate Motor PCB Repair',
      category: 'repair',
      subCategory: 'residential',
      location: 'Centurion, Pretoria',
      date: 'November 2023',
      client: 'Private Residence',
      description: 'Diagnosed and repaired faulty PCB board on Centurion D5 motor. Motor was intermittently stopping and remotes were unresponsive.',
      challenges: 'Intermittent fault made diagnosis difficult. PCB had water damage from recent rains.',
      solution: 'Replaced damaged PCB components, sealed housing against moisture, and installed rain cover.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      ],
      tags: ['PCB Repair', 'Centurion D5', 'Water Damage', 'Full Service'],
      duration: '2 hours',
      price: 'R1,200',
    },
    {
      id: 6,
      title: 'Smart Home Gate Integration',
      category: 'automation',
      subCategory: 'residential',
      location: 'Fourways, Johannesburg',
      date: 'October 2023',
      client: 'Tech Executive',
      description: 'Upgraded existing gate system with smart home integration. Control via phone app, voice commands, and geofencing for automatic opening.',
      challenges: 'Integrating with existing smart home ecosystem (Google Home) while maintaining security.',
      solution: 'Installed WiFi module with encrypted connection, set up Google Home integration, and configured geofencing with 50m radius.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      ],
      tags: ['Smart Home', 'App Control', 'Geofencing', 'Voice Control'],
      duration: '4 hours',
      price: 'R2,800',
    },
    {
      id: 7,
      title: 'Industrial Sliding Gate System',
      category: 'installation',
      subCategory: 'commercial',
      location: 'Kempton Park',
      date: 'September 2023',
      client: 'Logistics Warehouse',
      description: 'Heavy-duty 8-meter sliding gate for industrial warehouse with high-traffic truck access. Required robust motor and safety systems.',
      challenges: 'Extremely heavy gate (450kg) with frequent operation (200+ cycles/day).',
      solution: 'Installed industrial-grade FAAC motor with heavy-duty rack, loop detectors for vehicle safety, and backup power system.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      ],
      tags: ['Industrial', 'FAAC', 'Loop Detector', 'Heavy Duty'],
      duration: '3 days',
      price: 'R15,000',
    },
    {
      id: 8,
      title: 'Complex Remote System Overhaul',
      category: 'repair',
      subCategory: 'commercial',
      location: 'Rosebank, Johannesburg',
      date: 'August 2023',
      client: 'Apartment Complex',
      description: 'Complete remote system overhaul for 32-unit apartment complex. Old remotes were failing and residents needed new, secure access.',
      challenges: 'Mix of old and new remotes, need for master remote for management, and budget constraints.',
      solution: 'Replaced all remotes with new rolling code units, programmed master remote for management office, and provided spare remotes for each unit.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      ],
      tags: ['Remote Programming', 'Rolling Code', 'Multi-Unit', 'Security'],
      duration: '1 day',
      price: 'R4,500',
    },
    {
      id: 9,
      title: 'Pedestrian Gate Automation',
      category: 'installation',
      subCategory: 'residential',
      location: 'Bryanston, Johannesburg',
      date: 'July 2023',
      client: 'Private Residence',
      description: 'Added pedestrian gate automation alongside existing vehicle gate. Included intercom and keypad for visitor access.',
      challenges: 'Limited space for motor installation and need for independent operation from vehicle gate.',
      solution: 'Compact motor installation with independent control panel. Integrated with main intercom system.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      ],
      tags: ['Pedestrian Gate', 'Intercom', 'Keypad', 'Compact Motor'],
      duration: '1 day',
      price: 'R3,200',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter || p.subCategory === activeFilter);

  return (
    <>
      <Helmet>
        <title>Our Portfolio | WiseGate - Completed Projects</title>
        <meta name="description" content="Browse our portfolio of completed gate repair and installation projects across South Africa. Residential, commercial, and industrial solutions." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-dark-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

        <div className="relative section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-semibold rounded-full mb-4 border border-primary-500/20">
              Our Work
            </span>
            <h1 className="heading-xl text-white mb-6">
              Project <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl">
              Browse through our completed projects. Each one represents our commitment to quality, 
              reliability, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={ref} className="py-24 lg:py-32 bg-dark-50">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <Filter className="w-5 h-5 text-dark-400 mr-2" />
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-white text-dark-600 hover:bg-dark-100 border border-dark-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full capitalize">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-white/90 text-dark-700 text-xs font-semibold rounded-full capitalize">
                          {project.subCategory}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-dark-500 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-dark-400 mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {project.date}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-dark-50 text-dark-600 text-xs font-medium rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-dark-500 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-dark-950/50 text-white rounded-full hover:bg-dark-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Hero Image */}
              <div className="relative h-72 sm:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full capitalize">
                      {selectedProject.category}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full capitalize">
                      {selectedProject.subCategory}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-dark-50 rounded-xl">
                    <p className="text-xs text-dark-400 uppercase tracking-wider">Client</p>
                    <p className="font-semibold text-dark-900">{selectedProject.client}</p>
                  </div>
                  <div className="p-4 bg-dark-50 rounded-xl">
                    <p className="text-xs text-dark-400 uppercase tracking-wider">Duration</p>
                    <p className="font-semibold text-dark-900">{selectedProject.duration}</p>
                  </div>
                  <div className="p-4 bg-dark-50 rounded-xl">
                    <p className="text-xs text-dark-400 uppercase tracking-wider">Project Value</p>
                    <p className="font-semibold text-dark-900">{selectedProject.price}</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-dark-900 mb-2">Project Overview</h3>
                    <p className="text-dark-600 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">Challenges</h3>
                      <p className="text-dark-600 leading-relaxed">{selectedProject.challenges}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark-900 mb-2">Our Solution</h3>
                      <p className="text-dark-600 leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/quote"
                    className="btn-primary inline-flex items-center justify-center gap-2 flex-1"
                    onClick={() => setSelectedProject(null)}
                  >
                    <Wrench className="w-5 h-5" />
                    Get Similar Quote
                  </a>
                  <div className="flex items-center gap-4 text-sm text-dark-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
