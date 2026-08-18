import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import LogoDark from "../assets/jhay-hub-dark-logo.png";
import LogoLight from "../assets/jhay-hub-light-logo.png";

function NavBar() {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const { currentUser, isAuthenticated, logout } = useAuth();

  const closeMenu = () => setOpen(false);

  function handleLogout() {
    const result = logout();
    toast.success(result.message);
    closeMenu();
  }

  return (
    <header className="surface border-custom">
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} aria-label="JHAYHUB home">
          <img
            className="jhay-hub-logo"
            src={theme === "dark" ? LogoDark : LogoLight}
            alt="JHAYHUB Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-desktop">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/products">
            Shop
          </Link>

          <Link
            className="nav-cart"
            to="/cart"
            aria-label={`Cart with ${totalItems} items`}
          >
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="cart-msg">{totalItems}</span>
            )}
          </Link>

          {isAuthenticated ? (
            <>
              <span className="nav-user text-primary">
                Hi, {currentUser.name}
              </span>

              <button
                type="button"
                className="nav-action"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="nav-action" to="/login">
                Login
              </Link>

              <Link className="nav-action nav-action-primary" to="/signup">
                Sign Up
              </Link>
            </>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? (
              <MdDarkMode size={22} />
            ) : (
              <MdLightMode size={22} />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="navbar-mobile-controls">
          <Link
            className="nav-cart"
            to="/cart"
            onClick={closeMenu}
            aria-label={`Cart with ${totalItems} items`}
          >
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="cart-msg">{totalItems}</span>
            )}
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? (
              <MdDarkMode size={21} />
            ) : (
              <MdLightMode size={21} />
            )}
          </button>

          <button
            type="button"
            className="btn-collapse"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="navbar-mobile">
            <Link className="nav-link" to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link className="nav-link" to="/products" onClick={closeMenu}>
              Shop
            </Link>

            <Link className="nav-link" to="/cart" onClick={closeMenu}>
              Cart
            </Link>

            {isAuthenticated ? (
              <>
                <span className="nav-user text-center mobile-user text-primary">
                  Hi, {currentUser.name}
                </span>

                <button
                  type="button"
                  className="nav-action mobile-action"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  className="nav-action mobile-action"
                  to="/login"
                  onClick={closeMenu}
                >
                  Login
                </Link>

                <Link
                  className="nav-action nav-action-primary mobile-action"
                  to="/signup"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;