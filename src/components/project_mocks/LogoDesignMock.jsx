import { useState } from 'react';
import { motion } from 'framer-motion';

const LogoDesignMock = () => {
  const [selectedColor, setSelectedColor] = useState('#2dd4bf'); // Default accent neon
  
  const colors = ['#2dd4bf', '#6366f1', '#fbbf24', '#f43f5e', '#a855f7'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem', background: 'var(--glass-bg, rgba(255,255,255,0.05))', borderRadius: '12px', minHeight: '350px', alignItems: 'center' }}>
      <h3 style={{ marginBottom: '2rem' }}>Interactive Logo Showcase</h3>
      
      <motion.div 
        animate={{ color: selectedColor, textShadow: `0 0 20px ${selectedColor}` }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: '4rem', fontWeight: '900', fontFamily: 'sans-serif', marginBottom: '3rem' }}
      >
        SYNAPSE
      </motion.div>
      
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Select Brand Color</p>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        {colors.map(color => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: color,
              border: selectedColor === color ? '3px solid white' : 'none',
              cursor: 'pointer',
              boxShadow: selectedColor === color ? `0 0 15px ${color}` : 'none',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoDesignMock;
