import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-message">
          <h1 className="text-primary text-4xl font-extrabold md:text-5xl lg:text-6xl">
            Welcome To <strong className="hero-strong">JHAY HUB</strong>
          </h1>

          <p className="hero-p text-primary text-lg font-semibold md:text-xl">
            Fashion | Electronics | Jewelry
          </p>

          <p className="hero-p text-secondary text-base font-normal md:text-lg">
            Find amazing products at unbeatable prices.
          </p>

          <Link to="/products" className="link-btn btn-primary">
            Shop Now
          </Link>
        </div>

        <div className="hero-image-container">
          <img
            src={
              theme === "light"
                ? "/Hero-image-light.jpg"
                : "/Hero-image-dark.jpg"
            }
            alt="JHAYHUB featured products"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
