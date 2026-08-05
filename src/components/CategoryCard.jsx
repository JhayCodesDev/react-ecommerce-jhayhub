import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function CategoryCard() {
  return (
    <div>
      <h2 className="sub-heading text-primary text-2xl font-bold md:text-3xl">
        Categories
      </h2>
      <div className="grid gap-6 p-3 sm:grid-cols-1 md:grid-cols-2">
        <div className="surface border-custom justify-around rounded-xl shadow-md">
          <img
            className="product-img category-img"
            src="/black-headphone.png"
            alt="Headphone"
          />

          <h2 className="cust-spacing text-primary text-lg font-semibold">
            Electronics
          </h2>

          <Link
            className="link-btn btn-primary text-base font-semibold"
            to="/electronics"
          >
            Explore
          </Link>
        </div>

        <div className="surface border-custom justify-around rounded-xl shadow-md">
          <img
            className="product-img category-img"
            src="/jewelry.png"
            alt="Headphone"
          />

          <h2 className="cust-spacing text-primary text-lg font-semibold">
            Jewelry
          </h2>

          <Link
            className="link-btn btn-primary text-base font-semibold"
            to="/jewelry"
          >
            Explore
          </Link>
        </div>

        <div className="surface border-custom justify-around rounded-xl shadow-md">
          <img
            className="product-img category-img"
            src="/men's-clothing.png"
            alt="Headphone"
          />

          <h2 className="cust-spacing text-primary text-lg font-semibold">
            Men's Clothing
          </h2>

          <Link
            className="link-btn btn-primary text-base font-semibold"
            to="/mens"
          >
            Explore
          </Link>
        </div>

        <div className="surface border-custom justify-around rounded-xl shadow-md">
          <img
            className="product-img category-img"
            src="/women's-clothing.png"
            alt="Headphone"
          />

          <h2 className="cust-spacing text-primary text-lg font-semibold">
            Women's Clothing
          </h2>

          <Link
            className="link-btn btn-primary text-base font-semibold"
            to="/womens"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
