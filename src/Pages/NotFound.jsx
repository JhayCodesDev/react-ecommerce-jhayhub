import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="not-found min-h-svh px-6">
      <div className="text-center">
        <h1 className="text-primary text-4xl font-extrabold md:text-6xl">
          🔍 Page Not Found
        </h1>

        <p className="text-secondary mt-4 text-base md:text-lg">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          to="/"
          className="btn-primary mt-8 inline-flex rounded-lg px-6 py-3 font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}