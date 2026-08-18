export function ErrorMessage({
  message = "We couldn't load the products right now.",
}) {
  function handleRefresh() {
    window.location.reload();
  }

  return (
    <section className="not-found min-h-svh">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h1 className="text-primary text-3xl font-extrabold md:text-5xl">
          Oops! Something went wrong.
        </h1>

        <p className="text-secondary mt-4 text-base leading-7 md:text-lg">
          {message}
        </p>

        <p className="text-secondary mt-2 text-sm">
          Please check your internet connection and try again.
        </p>

        <button
          type="button"
          onClick={handleRefresh}
          className="btn-primary mt-8"
        >
          Refresh Page
        </button>
      </div>
    </section>
  );
}
