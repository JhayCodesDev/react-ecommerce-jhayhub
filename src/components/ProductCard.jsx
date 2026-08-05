import { useState, useEffect } from "react";
import { data, Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <section>
      <div
        key={product.id}
        className="surface border-custom justify-around rounded-xl shadow-md"
      >
        <img className="product-img" src={product.image} alt={product.title} />

        <h2 className="cust-spacing text-primary m-4 font-semibold sm:text-sm md:text-lg">
          {product.title}
        </h2>

        <h3 className="cust-spacing text-secondary m-4 text-xl font-bold">
          Price: <strong>${product.price}</strong>
        </h3>

        <p className="cust-spacing text-secondary m-4 text-sm font-normal">
          ⭐<strong>{product.rating.rate}</strong>
        </p>

        <p className="cust-spacing text-secondary m-4 text-sm font-normal">
          Reviews: <strong>{product.rating.count}</strong>
        </p>

        <div className="link-flex">
          <Link
            onClick={() => addToCart(product)}
            className="link-btn btn-primary mx-0 text-base font-semibold"
          >
            <FaCartPlus className="icon-pos" /> Add to Cart
          </Link>
          <Link
            className="link-btn btn-primary mx-0 text-base font-semibold"
            to={`/products/${product.id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
}
