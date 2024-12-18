import React from 'react';
import '../styles/SocialLink.css';
import {socialLinks} from '../contstants/index.js';
import Tooltip from '@mui/material/Tooltip';

const FloatingSocialLinks = () => {
  return (
    <div  className="fixed social-icons right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-2 bg-tertiary rounded-l-lg shadow-lg">
      {
        socialLinks.map((item,index)=>(
        <Tooltip title={item.title} placement='left-start'>
        <a href={item.link} target="_blank" key={index} rel="noopener noreferrer">
        <img alt='link-img' src={item.icon} />
        </a>
        </Tooltip>
        ))
    }
    </div>
  );
};

export default FloatingSocialLinks;
