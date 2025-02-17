import "./Footer.css"; // Assure-toi de créer un fichier CSS pour le footer, ou utilise celui déjà existant

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Browse Categories</li>
            <li>Post an Ad</li>
            <li>Help & Support</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="contact-info">
          <p>Email: contact@company.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Street Name, City, Country</p>
        </div>
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
