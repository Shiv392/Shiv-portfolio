import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../style.js';
import {navLinks} from '../contstants';
import { logo,menu,close} from '../assets/index.js';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed z-20 top-0 bg-primary `}>
    <div className='w-full flex items-center justify-between max-w-7xl max-autos'>
     <Link to='/' className='w-full flex items-center gap-2' onClick={()=>{
      setActive("");
      window.scrollTo(0,0);
     }}>
      <img src={logo} alt='logo' className='w-9 h-9 object-contain ' />
      <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Shiv Soni &nbsp;
            <span className='sm:block hidden'> | Full-stack Software Engineer</span>
          </p>
     </Link>
     <ul className='list-none hidden sm:flex flex-row gap-10'>
    {
      navLinks.map((items)=>(
        <li
        key={items.id}
        className={`${active===items.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
        onClick={()=>setActive(items.title)}
        >
          {items.title}
        </li>
      ))
    }
     </ul>
    </div>
    </nav>
  )
}

export default Navbar