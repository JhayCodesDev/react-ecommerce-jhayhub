import { Link } from "react-router-dom";
import {
  FaUsers,
  FaBullseye,
  FaEye,
  FaShoppingBag,
  FaSmile,
  FaGlobe,
  FaStar,
} from "react-icons/fa";

export function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Heading */}

      <div className="mb-16 text-center">
        <h1 className="text-primary mb-5 text-5xl font-bold">About Us</h1>

        <p className="text-secondary mx-auto max-w-3xl leading-8">
          Welcome to <span className="font-bold">JHAYHUB</span>, your trusted
          destination for quality products at affordable prices. We believe
          online shopping should be simple, secure, and enjoyable.
        </p>
      </div>

      {/* Mission Section */}

      <div className="mb-20 grid gap-8 md:grid-cols-3">
        <div className="surface border-custom rounded-xl p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2">
          <FaUsers size={45} className="mx-auto mb-5 text-blue-500" />

          <h2 className="mb-4 text-2xl font-bold">Who We Are</h2>

          <p className="text-secondary leading-7">
            We are passionate about connecting customers with premium products
            while delivering outstanding service and unforgettable shopping
            experiences.
          </p>
        </div>

        <div className="surface border-custom rounded-xl p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2">
          <FaBullseye size={45} className="mx-auto mb-5 text-green-500" />

          <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>

          <p className="text-secondary leading-7">
            To provide quality products, secure transactions, and reliable
            delivery while ensuring customer satisfaction every single day.
          </p>
        </div>

        <div className="surface border-custom rounded-xl p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2">
          <FaEye size={45} className="mx-auto mb-5 text-orange-500" />

          <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>

          <p className="text-secondary leading-7">
            To become one of the world's most trusted online shopping
            destinations known for quality and innovation.
          </p>
        </div>
      </div>

      {/* Statistics */}

      <div className="mb-20 grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        <div>
          <FaShoppingBag size={40} className="mx-auto mb-3 text-blue-500" />

          <h2 className="text-4xl font-bold">500+</h2>

          <p>Products</p>
        </div>

        <div>
          <FaSmile size={40} className="mx-auto mb-3 text-green-500" />

          <h2 className="text-4xl font-bold">10K+</h2>

          <p>Happy Customers</p>
        </div>

        <div>
          <FaStar size={40} className="mx-auto mb-3 text-yellow-500" />

          <h2 className="text-4xl font-bold">4.9</h2>

          <p>Average Rating</p>
        </div>

        <div>
          <FaGlobe size={40} className="mx-auto mb-3 text-purple-500" />

          <h2 className="text-4xl font-bold">50+</h2>

          <p>Countries Served</p>
        </div>
      </div>

      {/* CTA */}

      <div className="text-center">
        <h2 className="mb-5 text-4xl font-bold">Ready to Start Shopping?</h2>

        <p className="text-secondary mx-auto mb-8 max-w-2xl">
          Explore our carefully selected collection of products and enjoy a
          seamless shopping experience from start to finish.
        </p>

        <Link to="/products" className="link-btn btn-primary">
          Shop Now
        </Link>
      </div>
    </section>
  );
}
