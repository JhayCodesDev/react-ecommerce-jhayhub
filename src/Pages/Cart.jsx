import { useCart } from "../context/CartContext.jsx";
import { FaCartPlus, FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete, MdShoppingCartCheckout } from "react-icons/md";

export function Cart() {
  const {
    cart,
    totalPrice,
    totalItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    checkOut,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h1 className="not-found text-primary min-h-svh text-2xl font-extrabold md:text-5xl">
          <FaCartPlus /> Your Cart is Empty
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h2 className="sub-heading text-primary text-2xl font-bold md:text-3xl">
        Shopping Cart
      </h2>

      {cart.map((product) => (
        <div key={product.id} className="grid grid-cols-1 p-6">
          <div className="product-card surface text-center border-custom justify-around rounded-xl p-4 shadow-md">
            <img
              className="relative my-auto mx-auto h-80 w-80 object-contain"
              src={product.image}
              alt={product.title}
            />

            <h2 className="text-primary m-4 font-semibold sm:text-sm md:text-lg">
              {product.title}
            </h2>

            <h3 className="text-secondary m-4 text-xl font-bold">
              Price: <strong>${product.price}</strong>
            </h3>

            <div className="link-flex text-secondary m-4 text-sm font-normal">
              <button
                className="link-btn btn-decrease"
                onClick={() => decreaseQuantity(product.id)}
              >
                <FaMinus className="iconID-pos" />
              </button>

              <span className="span-text">
                <strong>{product.quantity}</strong>
              </span>

              <button
                className="link-btn btn-increase"
                onClick={() => increaseQuantity(product.id)}
              >
                <FaPlus className="iconID-pos" />
              </button>
            </div>

            <p className="text-secondary m-4 text-sm font-normal">
              Subtotal:{" "}
              <strong>${(product.price * product.quantity).toFixed(2)}</strong>
            </p>

            <button
              className="link-btn btn-danger"
              onClick={() => removeFromCart(product.id)}
            >
              <MdDelete className="icon-pos" /> Remove
            </button>
          </div>
        </div>
      ))}

      <div className="checkout-con p-2">
        <h3 className="text-secondary m-4 font-normal sm:text-sm md:text-3xl">
          Total Items: <strong>{totalItems}</strong>
        </h3>

        <h3 className="text-secondary m-4 font-normal sm:text-sm md:text-3xl">
          Total Price: <strong>${totalPrice.toFixed(2)}</strong>
        </h3>

        <button className="checkout-btn btn-primary flex flex-col" onClick={checkOut}>
          <MdShoppingCartCheckout className="iconID-pos text-4xl " /> Checkout
        </button>
      </div>
    </div>
  );
}