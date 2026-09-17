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
    tech: ['Next.js', 'React', 'Framer Motion'],
    desc: 'SEO-optimized web applications with fluid responsive layouts and dynamic integrations.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'e-Commerce',
    category: 'e-Commerce',
    tech: ['Next.js', 'React', 'Supabase'],
    desc: 'High-performance e-commerce platforms with real-time database integrations.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Logo-Design',
    category: 'Logo-Design',
    tech: ['Illustrator', 'SVG', 'Branding'],
    desc: 'Modern brand identities and vector graphics with custom visual themes.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Online-Games',
    category: 'Online-Games',
    tech: ['React', 'Canvas', 'Algorithms'],
    desc: 'Dynamic browser games featuring interactive mechanics and state persistence.',
    liveUrl: '#',
    githubUrl: '#'
  }
];

// Custom 3D positions and tilt degrees for each card
const cardPositions = [
  { rx: 25, ry: -15, rz: 4, offset: 0 },
  { rx: 25, ry: -15, rz: 2, offset: 15 },
  { rx: 25, ry: -15, rz: 0, offset: 30 },
  { rx: 25, ry: -15, rz: -3, offset: 45 }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container" style={{ position: 'relative', zIndex: 10, padding: '4rem 1rem', width: '100%' }}>
      <h2 className="section-title">
        Featured <span className="text-gradient">Projects</span>
      </h2>

      {/* Forced 3D Perspective Scene */}
      <div 
        style={{
          perspective: '1000px',
          perspectiveOrigin: '50% 50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3rem 0',
          width: '100%'
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            width: '100%',
            maxWidth: '550px',
            transformStyle: 'preserve-3d'
          }}
        >
          {projectData.map((project, index) => {
            const pos = cardPositions[index] || cardPositions[0];
            return (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                whileHover={{
                  scale: 1.05,
                  rotateX: 12,
                  rotateY: -5,
                  translateY: -10,
                  boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)',
                  borderColor: 'rgba(168, 85, 247, 0.8)'
                }}
                style={{
                  transform: `rotateX(${pos.rx}deg) rotateY(${pos.ry}deg) rotateZ(${pos.rz}deg) translateY(${pos.offset}px)`,
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '20px',
                  padding: '1.5rem 2rem',
                  cursor: 'pointer',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#ffffff', margin: '0 0 0.3rem 0', fontWeight: '700' }}>
                    {project.title}
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>{project.tech.join(' • ')}</span>
                </div>

                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(168, 85, 247, 0.2)',
                  border: '1px solid rgba(168, 85, 247, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c084fc',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  ➔
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal */}
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
              className="project-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal-btn" onClick={() => setSelectedProject(null)}>
                <X size={20} />
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
                
                <div className="tech-stack" style={{ margin: '1.2rem 0' }}>
                  {selectedProject.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                
                <div className="modal-actions">
                  <a href={selectedProject.liveUrl} className="primary-btn"><ExternalLink size={18} /> View Live</a>
                  <a href={selectedProject.githubUrl} className="secondary-btn"><Code size={18} /> Source Code</a>
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