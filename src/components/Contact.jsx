import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formsubmit.co/ajax/funkyvibespk@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.name}`,
        })
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="contact-container">
      <h2 className="section-title">
        Let's <span className="text-gradient">Connect</span>
      </h2>
      
      <div className="contact-wrapper glass-panel">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!</p>
          <div className="contact-details">
            <p><strong>Email:</strong> funkyvibespk@gmail.com</p>
            <p><strong>Location:</strong> Karachi, Pakistan</p>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
            ></textarea>
          </div>

          {status === 'success' && (
            <div className="form-status success">
              <CheckCircle size={18} /> Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="form-status error">
              <AlertCircle size={18} /> Something went wrong. Please try again.
            </div>
          )}

          <button
            type="submit"
            className="glass-btn primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : <>Send Message <Send size={18} /></>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
