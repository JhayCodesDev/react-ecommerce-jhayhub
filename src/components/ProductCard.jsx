import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";

export function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="surface border-custom flex h-full flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Product Image */}
      <div className="surface-muted flex aspect-square items-center justify-center border-b border-(--color-border) p-4">
        <img
          className="h-full w-full object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-5">
        
        {/* Category */}
        <p className="text-secondary mb-2 text-xs font-medium uppercase">
          {product.category}
        </p>

        {/* Product Title */}
        <h2 className="text-primary line-clamp-2 min-h-14 text-lg font-semibold">
          {product.title}
        </h2>

        {/* Price */}
        <p className="text-primary mt-3 text-xl font-bold">
          ${product.price}
        </p>

        {/* Rating */}
        <div className="text-secondary mt-2 flex items-center gap-2 text-sm">
          <span className="text-warning">⭐</span>
          <span className="font-semibold">{product.rating.rate}</span>
          <span>({product.rating.count} reviews)</span>
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row">
          <button
            onClick={() => addToCart(product)}
            className="btn-primary flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaCartPlus />
            Add to Cart
          </button>

          <Link
            to={`/products/${product.id}`}
            className="btn-primary flex min-h-11 flex-1 items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}