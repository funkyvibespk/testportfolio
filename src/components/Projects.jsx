import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Full-Stack E-Commerce',
    category: 'E-Commerce',
    image: '/images/ecommerce.jpg',
    tech: ['Next.js', 'React', 'Supabase', 'Node.js'],
    desc: 'High-performance e-commerce platform with SSR, dynamic routing, and real-time database.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Interactive Maze Solver',
    category: 'Games',
    image: '/images/game.jpg',
    tech: ['React', 'HTML5 Canvas', 'Firebase', 'Algorithms'],
    desc: 'Dynamic browser game featuring pathfinding algorithms and global score persistence.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Synapse Digital Agency',
    category: 'Web Apps',
    image: '/images/agency.jpg',
    tech: ['Next.js', 'React', 'Framer Motion'],
    desc: 'SEO-optimized agency portfolio with fluid responsive layouts and dynamic integrations.',
    liveUrl: '#',
    githubUrl: '#'
  }
];

const categories = ['All', 'Web Apps', 'E-Commerce', 'Games'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projectData.filter(p => filter === 'All' || p.category === filter);

  return (
    <div className="projects-container">
      <h2 className="section-title">
        Featured <span className="text-gradient">Projects</span>
      </h2>

      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="project-card glass-panel"
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href={project.liveUrl} className="overlay-btn"><ExternalLink size={20} /> Live Demo</a>
                  <a href={project.githubUrl} className="overlay-btn"><Code size={20} /> Code</a>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                
                <div className="tech-stack">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
