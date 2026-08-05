import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
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
  }, [id]);

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
          Product Details
        </h2>

        <div className="grid grid-cols-1 p-6">
          <div className="product-bg product-card justify-around rounded-xl p-4 shadow-md">
            <img
              className="product-img"
              src={product.image}
              alt={product.title}
            />

            <h2 className="cust-spacing text-light-page-primary m-4 font-semibold sm:text-sm md:text-lg">
              {product.title}
            </h2>

            <p className="cust-spacing cust-width text-light-page-secondary m-4 text-sm font-normal">
              {product.description}
            </p>

            <p className="cust-spacing text-light-page-secondary m-4 text-sm font-normal">
              {product.category}
            </p>

            <h3 className="cust-spacing text-light-page-accent m-4 text-xl font-bold">
              Price: <strong>${product.price}</strong>
            </h3>

            <p className="cust-spacing text-light-page-secondary m-4 text-sm font-normal">
              ⭐<strong>{product.rating.rate}</strong>
            </p>

            <Link className="link-btn mx-0 text-base font-semibold">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
