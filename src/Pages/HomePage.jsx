import { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { CategoryCard } from "../components/CategoryCard";
import { FeaturedProduct } from "./FeaturedProduct";
import { Loading } from "../components/Loading";
import { Shop } from "./Shop";
import { SearchBar } from "../components/SearchBar";
import { ProductCard } from "../components/ProductCard";
import { h1 } from "motion/react-client";
import { WhyChooseUs } from "./WhyChooseUs";

export function HomePage() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [id, setId] = useState([]);

  useEffect(() => {
    async function FetchProduct() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new error("Can't fetch product at the moment");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      }
    }
    FetchProduct();
  }, []);

  if (error) {
    return <h1>{error} products.</h1>;
  }

  if (product.length === 0) {
    <Loading message="Fetching product..." />;
  }

  const filteredProduct = product.filter((product) =>
    product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {searchTerm.toLocaleLowerCase() !== "" ? (
        filteredProduct.map((product) => (
          <div key={product.id} className="grid grid-cols-1 p-6">
            <p className="search-message" id="jhay">
              Search Result: {filteredProduct.length}
            </p>
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <div>
          <Hero />

          <CategoryCard />

          <FeaturedProduct />

          <WhyChooseUs />
        </div>
      )}
    </div>
  );
}
