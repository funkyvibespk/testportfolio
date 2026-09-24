import { useState } from 'react';
import { Menu, X, Home, Briefcase, Code, Star } from 'lucide-react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Background Glows and Particles */}
      <ParticlesBackground />
      <div className="bg-glow" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="bg-glow" style={{ bottom: '10%', right: '-10%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 60%)' }}></div>

      <nav className="floating-nav glass-panel">
        <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
          <Menu size={24} />
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {isMobileMenuOpen && (
            <button className="mobile-close-btn" onClick={toggleMenu}>
              <X size={28} />
            </button>
          )}
          <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollTo('home')}>
            {isMobileMenuOpen && <Home size={20} className="nav-icon" />}
            <span>Home</span>
          </a>
          <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollTo('projects')}>
            {isMobileMenuOpen && <Briefcase size={20} className="nav-icon" />}
            <span>Projects</span>
          </a>
          <a className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollTo('skills')}>
            {isMobileMenuOpen && <Code size={20} className="nav-icon" />}
            <span>Skills</span>
          </a>
          <a className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`} onClick={() => scrollTo('testimonials')}>
            {isMobileMenuOpen && <Star size={20} className="nav-icon" />}
            <span>Reviews</span>
          </a>
        </div>

        {!isMobileMenuOpen && (
          <button className="cta-btn" onClick={() => scrollTo('contact')}>
            <span className="status-dot"></span>
            <span className="cta-text">Available for New Projects</span>
          </button>
        )}
      </nav>

      <main>
        <section id="home"><Hero /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
