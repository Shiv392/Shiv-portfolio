import React from 'react';
import '../styles/SocialLink.css';
import {socialLinks} from '../contstants/index.js';
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'framer-motion';

const FloatingSocialLinks = () => {
  return (
   <motion.div
   layoutRoot
   initial={{ opacity:0,position:"fixed"}}
   animate={{  opacity:1}}
   exit={{ opacity: 0 }}
   transition={{
       duration: 2,
   }} 
   >
    <div  className="fixed social-icons right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-2 bg-tertiary rounded-l-lg shadow-lg">
      {
        socialLinks.map((item,index)=>(
        <Tooltip key={index} title={item.title} placement='left-start'>
          {
            item.isDownload ? <a href='/resume/ShivSoni_SoftwareDev_Resume.pdf' target="_blank" download="ShivSoni_SoftwareDev_Resume.pdf" key={index} rel="noopener noreferrer">
            <img alt='link-img' src={item.icon} />
            </a>  : 
            <a href={item.link} target="_blank" key={index} rel="noopener noreferrer">
            <img alt='link-img' src={item.icon} />
            </a>
          }
        </Tooltip>
        ))
    }
    </div>
   </motion.div>
  );
};

export default FloatingSocialLinks;
