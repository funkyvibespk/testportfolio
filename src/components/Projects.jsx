import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, X } from 'lucide-react';
import TicTacToe from './project_mocks/TicTacToe';
import EcommerceMock from './project_mocks/EcommerceMock';
import AgencyMock from './project_mocks/AgencyMock';
import LogoDesignMock from './project_mocks/LogoDesignMock';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Web-Apps',
    category: 'Web-Apps',
    image: '/images/agency.jpg',
    tech: ['Next.js', 'React', 'Framer Motion'],
    desc: 'SEO-optimized agency portfolio with fluid responsive layouts and dynamic integrations.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'e-Commerce',
    category: 'e-Commerce',
    image: '/images/ecommerce.jpg',
    tech: ['Next.js', 'React', 'Supabase'],
    desc: 'High-performance e-commerce platform with SSR, dynamic routing, and real-time database.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Logo-Design',
    category: 'Logo-Design',
    image: '/images/ecommerce.jpg', // Dummy, will be covered by CSS in 3D view
    tech: ['Illustrator', 'Figma', 'SVG'],
    desc: 'Modern brand identities and vector graphics with interactive color explorations.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Online-Games',
    category: 'Online-Games',
    image: '/images/game.jpg',
    tech: ['React', 'Canvas', 'Algorithms'],
    desc: 'Dynamic browser game featuring pathfinding algorithms and global score persistence.',
    liveUrl: '#',
    githubUrl: '#'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container">
      <h2 className="section-title">
        Featured <span className="text-gradient">Projects</span>
      </h2>

      <div className="projects-isometric-container">
        <div className="isometric-wrapper">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className={`isometric-card card-${index + 1} glass-panel`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="iso-card-content">
                <h3 className="iso-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal-content glass-panel"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal-btn" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-interactive-container" style={{ padding: '2rem 2rem 0 2rem' }}>
                {selectedProject.id === 1 && <AgencyMock />}
                {selectedProject.id === 2 && <EcommerceMock />}
                {selectedProject.id === 3 && <LogoDesignMock />}
                {selectedProject.id === 4 && <TicTacToe />}
              </div>
              
              <div className="modal-details">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.desc}</p>
                <div className="tech-stack" style={{ margin: '1rem 0' }}>
                  {selectedProject.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="modal-actions">
                  <a href={selectedProject.liveUrl} className="primary-btn"><ExternalLink size={20} /> View Live</a>
                  <a href={selectedProject.githubUrl} className="secondary-btn"><Code size={20} /> Source Code</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
