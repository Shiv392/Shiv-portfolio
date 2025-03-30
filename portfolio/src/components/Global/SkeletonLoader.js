import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Html } from "@react-three/drei";

const BallSkeletonLoader = () => {
    return (
        <Html>
              <span style={{color:'red'}}>Load..</span>
        </Html>
    )
}
export default BallSkeletonLoader;