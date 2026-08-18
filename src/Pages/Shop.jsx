import { useState, useEffect } from "react";
import { Loading } from "../components/Loading.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import { useCart } from "../context/CartContext.jsx";

export function Shop() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchProduct();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (product.length === 0) {
    return <Loading message="Fetching products..." />;
  }

  return (
    <section>
      <div>
        <h2 className="sub-heading text-primary text-2xl font-bold md:text-3xl">
          Shop All Products
        </h2>

        <div className="grid gap-6 p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
