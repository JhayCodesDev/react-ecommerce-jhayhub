import { useEffect, useState } from "react";
import { Hero } from "../components/Hero.jsx";
import { CategoryCard } from "../components/CategoryCard.jsx";
import { FeaturedProduct } from "./FeaturedProduct.jsx";
import { Loading } from "../components/Loading.jsx";
import { SearchBar } from "../components/SearchBar.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import { WhyChooseUs } from "./WhyChooseUs.jsx";

export function Home() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Can't fetch products at the moment.");
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

  const filteredProduct = product.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {searchTerm.trim() !== "" ? (
        <section className="px-6 py-8">
          <p className="search-message text-secondary mb-6">
            Search Results: {filteredProduct.length}
          </p>

          {filteredProduct.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProduct.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="not-found py-16">
              <div className="text-center">
                <h2 className="text-primary text-2xl font-bold">
                  No products found
                </h2>

                <p className="text-secondary mt-2">
                  Try searching for something else.
                </p>
              </div>
            </div>
          )}
        </section>
      ) : (
        <>
          <Hero />
          <CategoryCard />
          <FeaturedProduct />
          <WhyChooseUs />
        </>
      )}
    </main>
  );
}
