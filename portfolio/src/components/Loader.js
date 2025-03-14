import React from "react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import '../styles/Loader.css';

const Loader = () => {
  return (
    <Html center>
      {/* <div className="flex flex-col items-center justify-center">
        <motion.div
          className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
        ></motion.div>
        <p className="mt-2 text-lg text-blue-500 font-semibold">Loading...</p>
      </div> */}

     <div className="pyramid-loader">
     <div className="wrapper">
      <span className="side side1"></span>
      <span className="side side2"></span>
      <span className="side side3"></span>
      <span className="side side4"></span>
      <span className="shadow"></span>
     </div>  
     <p className="text-lg text-blue-500 font-semibold text-center">Loading...</p>
    </div>
    </Html>
  );
};

export default Loader;
