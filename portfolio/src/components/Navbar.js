import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../contstants";
import { logo, menu, close } from "../assets";
import {IconMenu2,IconX} from '@tabler/icons-react';
import { motion, useScroll, useSpring } from 'framer-motion';
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

      // 1. Use the useScroll hook to track scroll progress
  const { scrollYProgress } = useScroll();

      // 2. Use useSpring for smooth animation
  const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
      });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${styles.paddingX
          } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
          }`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
              Shiv Soni &nbsp;
              <span className='sm:block hidden'> | Software Development Engineer</span>
            </p>
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
            <li
            key={nav.id}
            className={`relative ${
              active === nav.title ? "text-white before:scale-x-100" : "text-secondary before:scale-x-0"
            } hover:text-white text-[18px] font-medium cursor-pointer 
            before:absolute before:bottom-[-5px] before:left-0 before:w-full 
            before:h-[2px] before:bg-white  
            before:origin-left before:transition-transform before:duration-300 
            hover:before:scale-x-100`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            {
              toggle ? <IconX className="cursor-pointer" onClick={() => setToggle(!toggle)} size={25} /> :
                <IconMenu2 className="cursor-pointer" onClick={() => setToggle(!toggle)} size={25} />
            }

            <div
              className={`${!toggle ? "hidden" : "flex"
                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                      }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50'
        style={{ scaleX }} // Connect the progress bar to scroll progress
      />
    </>
  );
};

export default Navbar;