import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge glass-panel" style={{ cursor: 'pointer' }} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            <Terminal size={16} />
            <span>Available for new projects</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Kamran Ahmed Khan</span>
          </h1>
          <h2 className="hero-subtitle">Digital Solutions & Web Developer</h2>
          
          <p className="hero-description">
            Results-driven Full-Stack JavaScript Developer specializing in building modern web applications, 
            high-performance e-commerce platforms, dynamic browser games, and responsive portfolios.
          </p>
          
          <div className="hero-actions">
            <button className="glass-btn primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View Work <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
