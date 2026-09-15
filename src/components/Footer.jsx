import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container glass-panel">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Kamran Ahmed Khan. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
