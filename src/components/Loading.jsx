export function Loading({ message = "Loading..." }) {
  return (
    <section className="not-found min-h-svh">
      <div className="flex flex-col items-center justify-center">
        <div
          className="border-custom h-12 w-12 animate-spin rounded-full border-4 border-t-(--color-primary)"
          aria-label="Loading"
        ></div>

        <p className="text-secondary mt-4 text-lg">{message}</p>
      </div>
    </section>
  );
}
