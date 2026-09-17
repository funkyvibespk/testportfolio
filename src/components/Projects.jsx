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

// Pre-configured floating isometric angles per card
const cardAngles = [
  { rotateX: 28, rotateY: -14, rotateZ: 4, translateY: 0 },
  { rotateX: 28, rotateY: -14, rotateZ: 2, translateY: 8 },
  { rotateX: 28, rotateY: -14, rotateZ: 0, translateY: 16 },
  { rotateX: 28, rotateY: -14, rotateZ: -3, translateY: 24 }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container" style={{ position: 'relative', zIndex: 10 }}>
      <h2 className="section-title">
        Featured <span className="text-gradient">Projects</span>
      </h2>

      {/* 3D Glassmorphism Scene */}
      <div 
        className="projects-isometric-container"
        style={{
          perspective: '1200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '450px',
          padding: '2rem 0'
        }}
      >
        <div 
          className="isometric-wrapper"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            maxWidth: '680px',
            transformStyle: 'preserve-3d'
          }}
        >
          {projectData.map((project, index) => {
            const angle = cardAngles[index] || cardAngles[0];
            return (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.04,
                  translateY: angle.translateY - 12,
                  boxShadow: '0 15px 35px rgba(168, 85, 247, 0.35)',
                  borderColor: 'rgba(168, 85, 247, 0.7)',
                  background: 'rgba(255, 255, 255, 0.07)'
                }}
                style={{
                  transform: `rotateX(${angle.rotateX}deg) rotateY(${angle.rotateY}deg) rotateZ(${angle.rotateZ}deg) translateY(${angle.translateY}px)`,
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '50px',
                  padding: '1.2rem 2.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.6rem', color: '#ffffff', margin: 0, fontStyle: 'italic', fontWeight: '700' }}>
                    {project.title}
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>{project.tech.join(' • ')}</span>
                </div>

                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c084fc',
                  fontWeight: 'bold'
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