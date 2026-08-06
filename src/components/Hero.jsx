import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export function Hero() {
  const {theme} = useTheme();
  return (
    <div>
      <header>
        <h1 className="hero-message text-primary text-xs font-extrabold md:text-5xl">
          Welcome To <strong className="hero-strong">JHAY HUB</strong>
        </h1>

        <p className="hero-p text-primary text-2xl">
          Fashion | Electronics | Jewelry
        </p>

        <p className="hero-p text-secondary text-lg font-normal">
          Find amazing products at unbeatable prices.
        </p>

        <Link to="/shop" className="link-btn btn-primary">
          Shop Now
        </Link>

        <img src={theme === "light" ? "/Hero-image-light.jpg" : "/Hero-image-dark.jpg"} alt="hero-image"/>
      </header>
    </div>
  );
}
