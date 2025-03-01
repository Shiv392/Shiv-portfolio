import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ThankyouPage from "./ThankyouPage";
import {Field, Form, Formik,ErrorMessage} from 'formik';
import * as yup from 'yup';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const ContactFormValidationSchema=yup.object().shape({
  name : yup.string().required('Name is Required').min(2,'Enter a Valid Name').max(30,'Name must be atmost 30 characters long'),
  email : yup.string().email('Enter a Valid Email').min(8).max(30,'Enter a Valid Email').required('Email is required'),
  message:yup.string().min(1,'Enter a Valid Message').max(200,'Message must be at most 200 characters long').required('Message is Required')
})
const Contact = () => {
  const [opendialog,setDialog]=useState(false);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (values) => {
    handleOpen();
    emailjs
      .send(
        'service_4s9tmna',
        "template_1g5ezgs",
        {
          from_name: values.name,
          to_name: "Shiv Soni",
          from_email: values.email,
          to_email: "sonishiv309@gmail.com",
          message: values.message,
        },
        'X02TohsSx34c95i8q'
      )
      .then(
        () => {
          handleClose();
          setDialog(true);
        }
      ).catch(err=>{
        handleClose();
        console.error(err);
        alert("Ahh, something went wrong. Please try again.");
      })
  };

  const ThankyoupageClose=(event)=>{
    console.log('event--------->',event);
    setDialog(false);
    
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        
        <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={ContactFormValidationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form Submitted:", values);
        handleSubmit(values);
        resetForm(); // Reset form after submission
      }}
    >
      {({ errors, touched, values }) => (
        <Form className="mt-12 flex flex-col gap-8">
          {/* Name Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <Field
              type="text"
              name="name"
              maxLength="30"
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <ErrorMessage name="name" component="span" className="text-red-500 mt-2 text-sm" />
          </label>

          {/* Email Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <Field
              type="email"
              name="email"
              maxLength="30"
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <ErrorMessage name="email" component="span" className="text-red-500 mt-2 text-sm" />
          </label>

          {/* Message Field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <div className="flex justify-end lg:pr-2 md:pr-2 text-sm">
              <span>{values.message.length}/200</span>
            </div>
            <Field
              as="textarea"
              rows="7"
              name="message"
              maxLength="200"
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <ErrorMessage name="message" component="span" className="text-red-500 mt-2 text-sm" />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={errors.name || errors.email || errors.message}
          >
            Submit
          </button>
        </Form>
      )}
       </Formik>
       
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      
     <ThankyouPage 
     isOpen={opendialog}
     name={'shivsoni'}
     onClose={ThankyoupageClose}
     />

     <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>

    
  );
};




export default SectionWrapper(Contact, "contact");