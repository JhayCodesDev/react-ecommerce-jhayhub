import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";

export function Electronics() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        return (
      <section>
          <div>
            <h1 className="not-found text-primary min-h-svh text-4xl font-extrabold md:text-5xl">
              {setError(error.message)}
            </h1>
          </div>
        </section>
    )
      }
    }
    fetchProduct();
  }, []);

  if (error) {
    return (
      <section>
          <div>
            <h1 className="not-found text-primary min-h-svh text-4xl font-extrabold md:text-5xl">
              {error} products.
            </h1>
          </div>
        </section>
    )
  }
  if (product.length === 0) {
    return <Loading message="Fetching products..." />;
  }

  return (
    <section>
      <div>
        <h2 className="sub-heading text-primary text-2xl font-bold md:text-3xl">
          Elecctronics
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
