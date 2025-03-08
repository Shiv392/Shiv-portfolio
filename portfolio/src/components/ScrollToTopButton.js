import { useState, useEffect } from "react";
import {IconChevronsUp} from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";
import { useNavContext } from "../context/NavBarContext";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {active,setActive}=useNavContext();
  const navigate=useNavigate();

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
    setActive('');
    navigate('/')
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Tooltip title="Scroll to Top" placement="left">
    <motion.button
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 lg:bottom-10 lg:right-5 
      bg-blue-500 text-white p-3 rounded-full shadow-md transition-opacity duration-300
      flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 
      ${isVisible ? "opacity-100" : "opacity-0"} focus:outline-none`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? [0, -15, 0] : 0 }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
    >
      <IconChevronsUp size={25} />
    </motion.button>
  </Tooltip>
  );
};

export default ScrollToTopButton;
