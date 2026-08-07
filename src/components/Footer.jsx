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
    <footer className="surface border-custom text-primary mt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-4 text-3xl font-bold">
            <img
              className="jhay-hub-logo"
              src={theme === "light" ? LogoLight : LogoDark}
              alt="Jhay Hub Logo"
            />
          </h2>

          <p className="text-light-page-primary leading-7">
            Shop with confidence. We provide premium products, secure payments
            and fast delivery to customers worldwide.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>

          <ul className="space-y-3">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-semibold">Customer Support</h3>

          <ul className="space-y-3">
            <li>Help Center</li>

            <li>Shipping</li>

            <li>Returns</li>

            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-semibold">Contact Us</h3>

          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt size={18} />
              Lagos, Nigeria
            </p>

            <a
              href="mailto:jhaycodes.dev@gmail.com"
              className="flex items-center gap-2 transition duration-300 hover:text-blue-500"
            >
              <FaEnvelope />
              jhaycodes.dev@gmail.com
            </a>

            <p className="flex items-center gap-2">
              <FaPhoneAlt size={18} />
              +234 811 575 6385
            </p>
          </div>
        </div>
      </div>

      <hr className="text-light-page-secondary" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-6 md:flex-row">
        <p>© 2026 JhayHub. All rights reserved.</p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/JhayCodesDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="transition duration-300 hover:text-gray-400" />
          </a>

          <a
            href="https://www.instagram.com/jhaycodes_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="transition duration-300 hover:text-pink-500" />
          </a>

          <a
            href="https://www.twitter.com/JhayCodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="transition duration-300 hover:text-sky-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/joshua-odusanya-9b67aa292"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="transition duration-300 hover:text-blue-500" />
          </a>
        </div>
      </div>
    </footer>
  );
}
