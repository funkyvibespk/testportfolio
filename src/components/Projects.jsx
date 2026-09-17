import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, X, Monitor, Layers, Sparkles } from 'lucide-react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Web-Apps',
    category: 'Web-Apps',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    desc: 'Full-stack dynamic web applications featuring modern dashboard interfaces, fluid responsive design, server-side rendering, and seamless API integrations.',
    liveUrl: 'https://kamrankhan.vercel.app',
    githubUrl: 'https://github.com/funkyvibespk',
    showcase: {
      tagline: 'Modern Agency & Web App Interface',
      features: ['Server-Side Rendering (SSR)', 'Dynamic Glassmorphism UI', 'Responsive Across All Devices']
    }
  },
  {
    id: 2,
    title: 'e-Commerce',
    category: 'e-Commerce',
    tech: ['Next.js', 'React', 'Supabase', 'Tailwind'],
    desc: 'High-performance e-commerce store with real-time product database management, interactive cart systems, dynamic product filtering, and fast checkout flow.',
    liveUrl: '#',
    githubUrl: 'https://github.com/funkyvibespk',
    showcase: {
      tagline: 'High-Conversion Storefront Platform',
      features: ['Real-Time Inventory Database', 'Instant Search & Filter', 'Secure Checkout UI']
    }
  },
  {
    id: 3,
    title: 'Logo-Design',
    category: 'Logo-Design',
    tech: ['Illustrator', 'SVG', 'Branding & Identity'],
    desc: 'Modern visual identity designs, vector logos, dark neon graphics, and complete visual branding guidelines engineered for web and apparel.',
    liveUrl: '#',
    githubUrl: 'https://github.com/funkyvibespk',
    showcase: {
      tagline: 'DFV & Digital Brand Identity System',
      features: ['Vector Scalable SVG Graphics', 'Dark Neon Theme Palettes', 'Typography & Mockup Assets']
    }
  },
  {
    id: 4,
    title: 'Online-Games',
    category: 'Online-Games',
    tech: ['React', 'JavaScript Canvas', 'Algorithms'],
    desc: 'Interactive browser-based games including Tic-Tac-Toe and Maze Pathfinding built with pure state logic, custom canvas rendering, and win-condition algorithms.',
    liveUrl: '#',
    githubUrl: 'https://github.com/funkyvibespk',
    showcase: {
      tagline: 'Interactive Canvas Browser Experience',
      features: ['Pathfinding Algorithms', 'Real-Time Score Tracking', 'Smooth Canvas Animations']
    }
  }
];

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

      {/* 3D Glassmorphism Cards Container */}
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

      {/* Interactive Modal Popup */}
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
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal-btn" onClick={() => setSelectedProject(null)}>
                <X size={20} />
              </button>
              
              {/* Interactive Showcase Preview Header */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(6, 182, 212, 0.2))',
                borderRadius: '16px',
                padding: '2rem',
                margin: '1.5rem 1.5rem 0 1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#06b6d4', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
                  <Monitor size={18} />
                  <span>Interactive Showcase</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', margin: '0 0 0.5rem 0', color: '#fff' }}>
                  {selectedProject.showcase.tagline}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem' }}>
                  {selectedProject.showcase.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d4d4d8', fontSize: '0.88rem' }}>
                      <Sparkles size={14} color="#c084fc" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details & Tech Stack */}
              <div className="modal-details" style={{ padding: '1.5rem 2rem 2rem 2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{selectedProject.title}</h2>
                <p style={{ color: '#a1a1aa', lineHeight: 1.6, fontSize: '0.95rem' }}>{selectedProject.desc}</p>
                
                <div className="tech-stack" style={{ margin: '1.2rem 0' }}>
                  {selectedProject.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                
                <div className="modal-actions" style={{ marginTop: '1.5rem' }}>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="primary-btn">
                    <ExternalLink size={18} /> View Live Demo
                  </a>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="secondary-btn">
                    <Code size={18} /> View Source Code
                  </a>
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