import {
  Truck,
  ShieldCheck,
  Star,
  RotateCcw,
} from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Why Choose Us?
        </h2>

        <p className="text-primary mx-auto mb-12 max-w-2xl text-center">
          We are committed to providing quality
          products, secure shopping, and fast
          delivery so you can enjoy the best
          online shopping experience.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="surface border-custom rounded-xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
            <Truck
              size={50}
              className="mx-auto mb-4 text-blue-600"
            />

            <h3 className="mb-2 text-xl font-semibold">
              Free Shipping
            </h3>

            <p className="text-light-page-primary">
              Fast and reliable delivery on
              selected orders.
            </p>
          </div>

          <div className="surface border-custom rounded-xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
            <ShieldCheck
              size={50}
              className="mx-auto mb-4 text-green-600"
            />

            <h3 className="mb-2 text-xl font-semibold">
              Secure Payment
            </h3>

            <p className="text-light-page-primary">
              Shop safely with trusted and
              encrypted payment methods.
            </p>
          </div>

          <div className="surface border-custom rounded-xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
            <Star
              size={50}
              className="mx-auto mb-4 text-yellow-500"
            />

            <h3 className="mb-2 text-xl font-semibold">
              Premium Quality
            </h3>

            <p className="text-light-page-primary">
              Carefully selected products that
              meet high quality standards.
            </p>
          </div>

          <div className="surface border-custom rounded-xl p-6 text-center shadow-lg transition-all duration-300 hover:scale-105">
            <RotateCcw
              size={50}
              className="mx-auto mb-4 text-red-500"
            />

            <h3 className="mb-2 text-xl font-semibold">
              Easy Returns
            </h3>

            <p className="text-light-page-primary">
              Hassle-free returns to make your
              shopping experience worry-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
