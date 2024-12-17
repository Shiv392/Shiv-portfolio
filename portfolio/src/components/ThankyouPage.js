import React from 'react';
import Dialog  from '@mui/material/Dialog';
import DialogContent  from '@mui/material/DialogContent';
import DialogTitle  from '@mui/material/DialogTitle';
import { IconX } from '@tabler/icons-react';
import IconButton from '@mui/material/IconButton';
import { thankyoupage } from '../assets/index.js';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
const ThankyouPage=({isOpen,name,onClose})=>{
    const handleClose=()=>{
        onClose(false);
    }
return(
  <Dialog
  open={isOpen}
  TransitionComponent={Transition}
  keepMounted
  sx={{
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        width: "100%",
        maxWidth: "450px", // Set your width here
      },
    },
  }}
>
  {/* Title Section */}
  <DialogTitle>
    <div className="flex justify-end">
      <IconButton onClick={handleClose}>
        <IconX />
      </IconButton>
    </div>
  </DialogTitle>

  {/* Content Section */}
  <DialogContent>
    <div className="flex justify-center mb-6"> {/* Adjust gap here */}
      <img src={thankyoupage} width="350px" />
    </div>
    <p className="text-center">For connecting me, I will connect with you shortly.</p>
  </DialogContent>
</Dialog>

)
}
export default ThankyouPage;