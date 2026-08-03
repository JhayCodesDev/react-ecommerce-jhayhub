import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useCart } from "../context/CartContext";

function NavBar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();

  const LogoDark = "./src/assets/jhay-hub-dark-logo.png";
  const LogoLight = "./src/assets/jhay-hub-light-logo.png";

  return (
    <div className="surface border-custom">
      <nav className="flex-con hidden p-5 md:block">
        <div>
          <img
            className="jhay-hub-logo"
            src={theme === "dark" ? LogoDark : LogoLight}
            alt="Jhay Hub Logo"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <ul className="desktop-nav text-primary text-base font-medium">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/products">
              Shop
            </Link>
            <Link className="nav-link" to="/">
              Login
            </Link>
            <Link className="nav-link" to="/">
              Signup
            </Link>
            <Link className="nav-link" to="/cart">
              <div className="cart-con nav-link">
                <FaShoppingCart className="text-2xl" />
                <p className="cart-msg text-l">{totalItems}</p>
              </div>
            </Link>
          </ul>
        </div>

        <button
          className="btn-collapse text-primary md:hidden"
          onClick={() => setOpen(!open)}
        >
          ⩸
        </button>

        <button
          onClick={toggleTheme}
          className="btn-neutral hidden rounded-full p-2 hover:cursor-pointer md:block"
        >
          {theme === "light" ? (
            <MdDarkMode size={22} />
          ) : (
            <MdLightMode size={22} />
          )}
        </button>
      </nav>

      {/* {Mobile Nav} */}

      <div className="mobile-nav-con">
        {open && (
          <div className="block p-3 md:hidden">
            <ul className="mobile-nav text-primary text-sm font-medium">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/products">
                Shop
              </Link>
              <Link className="nav-link" to="/">
                Login
              </Link>
              <Link className="nav-link" to="/">
                Signup
              </Link>
              <Link className="nav-link" to="/cart">
                <div className="cart-con nav-link">
                  <FaShoppingCart className="text-2xl" />
                  <p className="cart-msg text-l">{totalItems}</p>
                </div>
              </Link>
              <button
                onClick={toggleTheme}
                className="btn-neutral rounded-full p-2 hover:cursor-pointer"
              >
                {theme === "light" ? (
                  <MdDarkMode size={22} />
                ) : (
                  <MdLightMode size={22} />
                )}
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
