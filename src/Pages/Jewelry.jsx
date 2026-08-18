import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";

export function Jewelry() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
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
          Jewelry
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
