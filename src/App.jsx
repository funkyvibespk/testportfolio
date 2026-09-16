import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="app-container">
      {/* Background Glows and Particles */}
      <ParticlesBackground />
      <div className="bg-glow" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="bg-glow" style={{ bottom: '10%', right: '-10%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 60%)' }}></div>

      <nav className="floating-nav glass-panel">
        <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollTo('home')}>Home</a>
        <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollTo('projects')}>Projects</a>
        <a className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollTo('skills')}>Skills</a>
        <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollTo('contact')}>Contact</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      <main>
        <section id="home"><Hero /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
