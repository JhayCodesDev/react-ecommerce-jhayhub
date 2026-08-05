import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function NavBar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const LogoDark = "../assets/jhay-hub-dark-logo.png";
  const LogoLight = "../assets/jhay-hub-light-logo.png";
  const { currentUser, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    const result = logout();
    toast.success(result.message);
    navigate("/");
  }

  return (
    <section>
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
              {isAuthenticated ? (
                <div className="hidden md:block">
                  <section className="flex gap-5">
                    <Link className="nav-link" to="/products">
                      Shop
                    </Link>
                    <Link className="nav-link" to="/cart">
                      <div className="cart-con nav-link">
                        <FaShoppingCart className="text-2xl" />
                        <div className="cart-msg">
                          <p className="text-l">{totalItems}</p>
                        </div>
                      </div>
                    </Link>
                    <span className="text-primary text-sm md:text-xl">
                      Hi, {currentUser.name}
                    </span>

                    <button
                      className="nav-link hover:cursor-pointer"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </section>
                </div>
              ) : (
                <div className="hidden md:block">
                  <section className="flex gap-5">
                    <Link to="/login" className="btn-primary cust-btn">
                      Login
                    </Link>

                    <Link to="/signup" className="btn-primary cust-btn">
                      Signup
                    </Link>
                  </section>
                </div>
              )}
            </ul>
          </div>

          {isAuthenticated ? (
            <div className="md:hidden">
              <section className="flex-col">
                <span className="text-primary md:text-l text-xs">
                  Hi, {currentUser.name}
                </span>
              </section>
            </div>
          ) : null}

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
                {isAuthenticated ? (
                  <div>
                    <section className="flex-col gap-5">
                      <Link className="nav-link" to="/products">
                        Shop
                      </Link>
                      <Link className="nav-link" to="/cart">
                        <div className="cart-con nav-link">
                          <FaShoppingCart className="text-2xl" />
                          <div className="cart-msg">
                            <p className="text-l">{totalItems}</p>
                          </div>
                        </div>
                      </Link>
                      <button
                        className="nav-link hover:cursor-pointer"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </section>
                  </div>
                ) : (
                  <div className="block md:hidden">
                    <section className="mobile-nav gap-9">
                      <Link to="/login" className="btn-primary cust-btn">
                        Login
                      </Link>

                      <Link to="/signup" className="btn-primary cust-btn">
                        Signup
                      </Link>
                    </section>
                  </div>
                )}
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
    </section>
  );
}

export default NavBar;
