import {React, useEffect, useState} from 'react';
import { socialLinks } from '../contstants';
import { styles } from '../style';
import '../styles/SocialLink.css';
import {SectionWrapper} from '../hoc';
import Divider from '@mui/material/Divider';

export const SociaLink = () => {
    const [link,updateLink]=useState([]);
    useEffect(()=>{
    updateLink([...socialLinks.map(ele=> ele.isDownload==false && ele)]);
    },[])
    return (
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
            <p className="text-2xl font-semibold text-left">Social Links</p>
            <div className="flex gap-5 mt-3">
                {link.map((item, index) => (
                   item && <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                   <img alt="social-icon" src={item.icon} className="w-8 h-8 md:w-8 md:h-8" />
                  </a>    
                ))
                }
            </div>
        </div>
    );
};

export const LeftIntroduction = () => {
    return (
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-4xl font-bold">Shiv Soni</p>
            <p className="mt-3 text-sm md:text-base">
                A Frontend-focused Web Developer building the Frontend of Websites and Web Applications that lead to the success of the overall product.
            </p>
        </div>
    );
};

export const CopyRightSection=()=>{
    return(
        <div>
            <div className=' mt-20'>
            <Divider sx={{ bgcolor: "white" }} />
            </div>
            <div className='text-center mt-5'>
                <span className='text text-sm text-secondary'>@Copyright 2025. </span><span className='text text-sm'>Made By <a className='font-bold' href='https://www.linkedin.com/in/Shiv3923' target="_blank">ShivSoni</a></span>
            </div>
        </div>
    )
}
const FooterContent=()=>{
    return(
        <div>
            <div className='flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-6 md:gap-12'>
            <LeftIntroduction />
            <SociaLink />
            </div>
            <CopyRightSection />
        </div>
    )
}

const WrappedLeftIntroduction = SectionWrapper(FooterContent, "");

const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-around md:flex-nowrap  bg-black-100 p-6">
        <WrappedLeftIntroduction />
        </footer>
    );
};

export default Footer;