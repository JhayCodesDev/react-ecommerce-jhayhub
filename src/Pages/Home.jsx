import { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { CategoryCard } from "../components/CategoryCard";
import { FeaturedProduct } from "./FeaturedProduct";
import { Loading } from "../components/Loading";
import { Shop } from "./Shop";
import { SearchBar } from "../components/SearchBar";
import { ProductCard } from "../components/ProductCard";
import { WhyChooseUs } from "./WhyChooseUs";
import { useAuth } from "../context/AuthContext";

export function Home() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [id, setId] = useState([]);
  const { currentUser, isAuthenticated, logout } = useAuth();

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
        return (
          <section>
            <div>
              <h1 className="not-found text-primary min-h-svh text-4xl font-extrabold md:text-5xl">
                {setError(error.message)}
              </h1>
            </div>
          </section>
        );
      }
    }
    FetchProduct();
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
    );
  }

  if (product.length === 0) {
    <Loading message="Fetching product..." />;
  }

  const filteredProduct = product.filter((product) =>
    product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      {isAuthenticated ? (
        <main>
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
            <section>
              <div>
                <Hero />
                <CategoryCard />
                <FeaturedProduct />
                <WhyChooseUs />
              </div>
            </section>
          )}
        </main>
      ) : (
        <section className="not-found min-h-screen">
          <div className="">
            <h1 className="hero-message text-primary text-3xl font-extrabold md:text-5xl">
              Welcome To <strong className="hero-strong">JHAY HUB</strong>
            </h1>

            <p className="text-primary mx-auto mb-12 max-w-2xl text-center">
              Kindly Login/Signup to enjoy our seamless products and services.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
