import React from "react";
import { useState,useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../contstants";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Tech = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for demonstration (you can adjust based on actual logic)
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
       {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {loading ? (
            // Skeleton Loader
            // <div className="w-full h-full rounded-full bg-gray-300 animate-pulse" />
            <Stack>
            <Skeleton variant="circular" sx={{ bgcolor: 'grey' }} className="w-full h-full rounded-full bg-gray-300 animate-pulse" width={100} height={100} />
            </Stack>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");