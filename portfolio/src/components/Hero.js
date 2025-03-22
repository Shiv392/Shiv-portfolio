import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { Typewriter } from "react-simple-typewriter";
import { slideIn } from "../utils/motion";
import { useState,useEffect } from 'react';

const Hero = () => {
  const [showShiv, setShowShiv] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowShiv(true);
    }, 2500); // Delay for "Shiv" to start after 1s
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <motion.div
        layoutRoot
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm
              &nbsp;
                <span className="text-[#915EFF]">
                  <Typewriter
                    words={["Shiv Soni"]}
                    loop={1}
                    cursor={false}
                    cursorStyle="_"
                    typeSpeed={150}
                  />
                </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <span className="text-[#915EFF]">Software Engineer</span> : Turning Coffee into clean <br className="sm:block hidden" />
              architectures
            </p>
          </div>
        </div>
      </motion.div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;