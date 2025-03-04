import React from "react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
        ></motion.div>
        <p className="mt-2 text-lg text-blue-500 font-semibold">Loading...</p>
      </div>
    </Html>
  );
};

export default Loader;
