import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouse = { x: null, y: null };
    let particles = [];
    
    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        
        // Mouse interaction (repel)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            this.x -= dx / 10;
            this.y -= dy / 10;
          }
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-neon').trim() || '#2dd4bf';
        ctx.globalAlpha = 0.5;
        ctx.fill();
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || '#6366f1';
            ctx.globalAlpha = 1 - (distance / 150);
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      // Connect particles to mouse
      if (mouse.x != null && mouse.y != null) {
        particles.forEach(p => {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-neon').trim() || '#2dd4bf';
            ctx.globalAlpha = 1 - (distance / 150);
            ctx.lineWidth = 1;
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        });
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hero-container">
      <canvas ref={canvasRef} className="hero-canvas" />
      
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
            <button className="glass-btn secondary" onClick={() => document.getElementById('game').scrollIntoView({ behavior: 'smooth' })}>
              Play Mini-Game
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
