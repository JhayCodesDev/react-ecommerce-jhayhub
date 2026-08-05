import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";
import { useCart } from "../context/CartContext";
import { FaCartPlus } from "react-icons/fa";

export function Shop() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
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
        <h2 className="sub-heading text-light-page-primary text-2xl font-bold md:text-3xl">
          Shop All Products
        </h2>

        <div className="grid gap-6 p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {product.map((product) => (
            <div
              key={product.id}
              className="surface border-custom justify-around rounded-xl shadow-md"
            >
              <img
                className="product-img"
                src={product.image}
                alt={product.title}
              />

              <h2 className="cust-spacing text-primary m-4 text-lg font-semibold">
                {product.title}
              </h2>

              <h3 className="cust-spacing text-secondary m-4 text-xl font-bold">
                Price: <strong>${product.price}</strong>
              </h3>

              <p className="cust-spacing text-secondary m-4 text-sm font-normal">
                ⭐<strong>{product.rating.rate}</strong>
              </p>

              <p className="cust-spacing text-secondary m-4 text-sm font-normal">
                Reviews: {product.rating.count}
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
          ))}
        </div>
      </div>
    </section>
  );
}
