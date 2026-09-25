import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <Menu size={24} />
        </button>

        <div className="nav-links desktop-only">
          <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollTo('home')}>
            Home
          </a>
          <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollTo('projects')}>
            Projects
          </a>
          <a className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollTo('skills')}>
            Skills
          </a>
          <a className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`} onClick={() => scrollTo('testimonials')}>
            Reviews
          </a>
        </div>

        <button className="cta-btn" onClick={() => scrollTo('contact')}>
          <span className="status-dot"></span>
          <span className="cta-text">Available</span>
        </button>
      </nav>

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-close-btn" onClick={toggleMenu}>
          <X size={28} />
        </button>
        <div className="mobile-nav-links">
          <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollTo('home')}>
            Home
          </a>
          <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollTo('projects')}>
            Projects
          </a>
          <a className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollTo('skills')}>
            Skills
          </a>
          <a className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`} onClick={() => scrollTo('testimonials')}>
            Reviews
          </a>
        </div>
      </div>

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
