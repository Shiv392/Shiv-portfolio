import {React, useEffect, useState} from 'react';
import { socialLinks } from '../contstants';
import { styles } from '../style';
import '../styles/SocialLink.css';
import {SectionWrapper} from '../hoc';

export const SociaLink = () => {
    const [link,updateLink]=useState([]);
    useEffect(()=>{
    updateLink([...socialLinks.map(ele=> ele.isDownload==false && ele)]);
    console.log(link)
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
            <p className="text-3xl font-bold">Shiv Soni</p>
            <p className="mt-3 text-sm md:text-base">
                A Frontend-focused Web Developer building the Frontend of Websites and Web Applications that lead to the success of the overall product.
            </p>
        </div>
    );
};

const FooterContent=()=>{
    return(
        <div className='flex items-center justify-around md:flex-nowrap'>
            <LeftIntroduction />
            <SociaLink />
        </div>
    )
}

const WrappedLeftIntroduction = SectionWrapper(FooterContent, "");

const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-around    md:flex-nowrap  bg-black-100 p-6">
        <WrappedLeftIntroduction />
        </footer>
    );
};

export default Footer;