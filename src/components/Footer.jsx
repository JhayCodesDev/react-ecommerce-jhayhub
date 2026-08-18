import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import LogoDark from "../assets/jhay-hub-dark-logo.png";
import LogoLight from "../assets/jhay-hub-light-logo.png";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="footer surface border-custom text-primary">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" aria-label="JHAYHUB home">
            <img
              className="footer-logo"
              src={theme === "light" ? LogoLight : LogoDark}
              alt="JHAYHUB Logo"
            />
          </Link>

          <p className="footer-description text-secondary">
            Shop with confidence. We provide premium products, secure payments
            and fast delivery to customers worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-heading">Quick Links</h3>

          <ul className="footer-links">
            <li>
              <Link className="footer-link" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="footer-link" to="/products">
                Products
              </Link>
            </li>

            <li>
              <Link className="footer-link" to="/cart">
                Cart
              </Link>
            </li>

            <li>
              <Link className="footer-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="footer-heading">Customer Support</h3>

          <ul className="footer-links">
            <li>
              <span>Help Center</span>
            </li>

            <li>
              <span>Shipping</span>
            </li>

            <li>
              <span>Returns</span>
            </li>

            <li>
              <span>Privacy Policy</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-heading">Contact Us</h3>

          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt aria-hidden="true" />
              <span>Lagos, Nigeria</span>
            </p>

            <a
              href="mailto:jhaycodes.dev@gmail.com"
              className="footer-contact-link"
            >
              <FaEnvelope aria-hidden="true" />
              <span>jhaycodes.dev@gmail.com</span>
            </a>

            <p>
              <FaPhoneAlt aria-hidden="true" />
              <span>+234 811 575 6385</span>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2026 JHAYHUB. All rights reserved.</p>

        <div className="footer-socials">
          <a
            href="https://github.com/JhayCodesDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JHAYHUB GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href="https://www.instagram.com/jhaycodes_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JHAYHUB Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>

          <a
            href="https://www.twitter.com/JhayCodes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JHAYHUB Twitter"
          >
            <FaTwitter aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/joshua-odusanya-9b67aa292"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JHAYHUB LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
