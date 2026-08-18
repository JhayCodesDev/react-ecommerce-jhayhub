import { Link } from "react-router-dom";

const categories = [
  {
    name: "Electronics",
    image: "/black-headphone.png",
    alt: "Electronics",
    path: "/electronics",
  },
  {
    name: "Jewelry",
    image: "/jewelry.png",
    alt: "Jewelry",
    path: "/jewelry",
  },
  {
    name: "Men's Clothing",
    image: "/men's-clothing.png",
    alt: "Men's Clothing",
    path: "/mens",
  },
  {
    name: "Women's Clothing",
    image: "/women's-clothing.png",
    alt: "Women's Clothing",
    path: "/womens",
  },
];

export function CategoryCard() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-primary mb-8 text-center text-2xl font-bold md:text-3xl">
          Categories
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.name}
              className="surface border-custom flex h-full flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Category Image */}
              <div className="surface-muted flex aspect-square items-center justify-center p-6">
                <img
                  className="h-full w-full object-contain"
                  src={category.image}
                  alt={category.alt}
                />
              </div>

              {/* Category Content */}
              <div className="flex flex-1 flex-col items-center p-5">
                <h3 className="text-primary mb-4 text-lg font-semibold">
                  {category.name}
                </h3>

                <Link
                  to={category.path}
                  className="btn-primary mt-auto flex min-h-11 w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}