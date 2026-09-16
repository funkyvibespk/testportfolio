import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const AgencyMock = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem', background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,0,0,0.2))', borderRadius: '12px', minHeight: '350px', alignItems: 'center', textAlign: 'center' }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', background: 'linear-gradient(to right, var(--accent-primary), var(--accent-neon))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Synapse Digital
      </h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px' }}>
        We build fluid, interactive experiences that elevate your brand to the next level. Let's create something amazing together.
      </p>
      
      {!submitted ? (
        <form 
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '300px' }}
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            required 
            style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.5)', color: 'white', outline: 'none' }} 
          />
          <button 
            type="submit"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.8rem', background: 'white', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            <Mail size={18} /> Request Demo
          </button>
        </form>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem', background: 'rgba(0,255,204,0.1)', borderRadius: '8px', width: '100%', maxWidth: '300px' }}>
          <CheckCircle size={48} color="var(--accent-primary)" />
          <h4 style={{ margin: 0, color: 'var(--accent-primary)' }}>Request Sent!</h4>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>We will be in touch shortly.</p>
        </div>
      )}
    </div>
  );
};

export default AgencyMock;
