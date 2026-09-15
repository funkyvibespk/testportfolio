import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: 'React.js & Next.js', level: 95 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'Node.js & Express', level: 85 },
  { name: 'Supabase & Firebase', level: 88 },
  { name: 'Modern CSS / Tailwind', level: 92 },
  { name: 'HTML5 Canvas Game Logic', level: 80 }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="section-title">
        Technical <span className="text-gradient">Arsenal</span>
      </h2>

      <div className="skills-grid">
        <div className="skills-card glass-panel">
          <h3 className="skills-card-title">Core Competencies</h3>
          <p className="skills-desc">
            Focused on clean code architectures, real-time database management, web performance optimization, and intuitive user experiences.
          </p>
          
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-visual glass-panel">
          <div className="orb-container">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            <div className="glass-sphere">
              <span>Full-Stack</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
