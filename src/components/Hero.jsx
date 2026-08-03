import { useState } from "react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div>
      <header>
        <h1 className="hero-message text-primary text-3xl font-extrabold md:text-5xl">
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

        <img src="public/Hero-image-light.jpg" alt="Hero Image" />
      </header>
    </div>
  );
}
