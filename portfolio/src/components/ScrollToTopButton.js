import { useState, useEffect } from "react";
import {IconChevronsUp} from '@tabler/icons-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 lg:bottom-10 lg:right-5 
      bg-blue-500 text-white p-3 rounded-full shadow-md transition-opacity duration-300
      flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 
      ${isVisible ? "opacity-100" : "opacity-0"} focus:outline-none`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <IconChevronsUp />
    </button>
  );
};

export default ScrollToTopButton;
