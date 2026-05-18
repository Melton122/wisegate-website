import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X, ZoomIn, ArrowRight, MapPin, Calendar, Wrench } from 'lucide-react';

const PortfolioSection = () => {
  const { ref, inView } = useScrollAnimation(0.1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'repair', label: 'Repairs' },
    { id: 'installation', label: 'Installations' },
    { id: 'automation', label: 'Automation' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Residential Sliding Gate Automation',
      category: 'installation',
      location: 'Sandton, Johannesburg',
      date: 'March 2024',
      description: 'Complete installation of a 4-meter sliding gate with Centurion D5 Evo motor, safety beams, and remote access.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
      tags: ['Sliding Gate', 'Centurion D5', 'Remote Access'],
    },
    {
      id: 2,
      title: 'Commercial Swing Gate Motor Replacement',
      category: 'repair',
      location: 'Midrand, Gauteng',
      date: 'February 2024',
      description: 'Emergency motor replacement for a commercial property. Replaced faulty ET Drive 600 with new unit and reprogrammed 12 remotes.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      tags: ['Motor Replacement', 'ET Drive', 'Commercial'],
    },
    {
      id: 3,
      title: 'Estate Intercom & Access Control',
      category: 'automation',
      location: 'Pretoria East',
      date: 'January 2024',
      description: 'Installed video intercom system with keypad entry and biometric access for 24-unit estate. Integrated with existing gate motor.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      tags: ['Intercom', 'Biometric', 'Access Control'],
    },
    {
      id: 4,
      title: 'Double Swing Gate Installation',
      category: 'installation',
      location: 'Randburg, Johannesburg',
      date: 'December 2023',
      description: 'Custom fabricated double swing gates with DACE Italian motors. Includes battery backup and solar charging option.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      tags: ['Swing Gate', 'DACE', 'Solar Backup'],
    },
    {
      id: 5,
      title: 'Gate Motor Repair & Service',
      category: 'repair',
      location: 'Centurion, Pretoria',
      date: 'November 2023',
      description: 'Diagnosed and repaired faulty PCB board on Centurion D5 motor. Replaced worn gears and performed full service.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      tags: ['PCB Repair', 'Centurion D5', 'Full Service'],
    },
    {
      id: 6,
      title: 'Smart Home Gate Integration',
      category: 'automation',
      location: 'Fourways, Johannesburg',
      date: 'October 2023',
      description: 'Upgraded existing gate system with smart home integration. Control via phone app, voice commands, and geofencing.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
      tags: ['Smart Home', 'App Control', 'Geofencing'],
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-dark-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              Our Work
            </span>
            <h2 className="heading-lg text-dark-900 mb-4">
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <p className="body-lg">
              Browse through our portfolio of completed gate repair and installation projects across South Africa.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
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
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full capitalize">
                        {project.category}
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
                    <div className="flex items-center gap-4 text-xs text-dark-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

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
              className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-dark-950/50 text-white rounded-full hover:bg-dark-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-72 sm:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full capitalize">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <p className="text-dark-600 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-dark-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-xs text-dark-400">Location</p>
                      <p className="text-sm font-semibold text-dark-900">{selectedProject.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-dark-50 rounded-xl">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-xs text-dark-400">Date</p>
                      <p className="text-sm font-semibold text-dark-900">{selectedProject.date}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/quote"
                  className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                  onClick={() => setSelectedProject(null)}
                >
                  <Wrench className="w-5 h-5" />
                  Get Similar Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
