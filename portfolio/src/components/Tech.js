import React from "react";
import { useState,useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../contstants";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
       {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} skill={technology}/>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");