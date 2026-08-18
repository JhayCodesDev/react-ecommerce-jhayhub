import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed right-5 bottom-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-(--color-primary) text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-(--color-primary-hover)"
      aria-label="Scroll to top"
      title="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}
