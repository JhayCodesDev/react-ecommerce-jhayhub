import { useEffect, useState } from "react";
import { Loading } from "../components/Loading.jsx";
import { ProductCard } from "../components/ProductCard.jsx";

export function FeaturedProduct() {
  const selectedId = [1, 3, 7, 8, 11, 20];

  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
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

  const featuredProducts = product.filter((product) =>
    selectedId.includes(product.id)
  );

  return (
    <section className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-primary mb-8 text-center text-2xl font-bold md:text-3xl">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
