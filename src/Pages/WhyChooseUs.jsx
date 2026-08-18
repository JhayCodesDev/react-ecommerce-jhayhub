import { Truck, ShieldCheck, Star, RotateCcw } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Fast and reliable delivery on selected orders.",
    iconClass: "text-accent",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description:
      "Shop safely with trusted and encrypted payment methods.",
    iconClass: "text-success",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description:
      "Carefully selected products that meet high quality standards.",
    iconClass: "text-warning",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "Hassle-free returns to make your shopping experience worry-free.",
    iconClass: "text-danger",
  },
];

export function WhyChooseUs() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-primary mb-4 text-center text-3xl font-bold md:text-4xl">
          Why Choose Us?
        </h2>

        <p className="text-secondary mx-auto mb-12 max-w-2xl text-center text-base leading-7 md:text-lg">
          We are committed to providing quality products, secure shopping, and
          fast delivery so you can enjoy the best online shopping experience.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="surface border-custom flex h-full flex-col items-center rounded-xl p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon
                  size={48}
                  strokeWidth={1.8}
                  className={`mb-4 ${benefit.iconClass}`}
                />

                <h3 className="text-primary mb-2 text-xl font-semibold">
                  {benefit.title}
                </h3>

                <p className="text-secondary text-sm leading-6">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}