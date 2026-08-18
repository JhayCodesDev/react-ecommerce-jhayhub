import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { useCart } from "../context/CartContext";

export function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch product.");
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

  if (!product) {
    return <Loading message="Fetching products..." />;
  }

  return (
    <section>
      <div>
        <h2 className="sub-heading text-primary text-2xl font-bold md:text-3xl">
          Product Details
        </h2>

        <div className="grid grid-cols-1 p-6">
          <div className="product-card surface text-center border-custom justify-around rounded-xl p-4 shadow-md">
            <img
              className="relative mx-auto h-80 w-80 object-contain"
              src={product.image}
              alt={product.title}
            />

            <h2 className="text-primary m-4 font-semibold sm:text-sm md:text-lg">
              {product.title}
            </h2>

            <p className="text-secondary m-4 text-sm font-normal">
              {product.description}
            </p>

            <p className="text-secondary m-4 text-sm font-normal">
              {product.category}
            </p>

            <h3 className="text-primary m-4 text-xl font-bold">
              Price: <strong>${product.price.toFixed(2)}</strong>
            </h3>

            <p className="text-secondary m-4 text-sm font-normal">
              ⭐ <strong>{product.rating.rate}</strong>
            </p>

            <button
              className="link-btn btn-primary mx-0 text-base font-semibold"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
