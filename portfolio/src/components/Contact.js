import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import ThankyouPage from "./ThankyouPage";
import {formik} from 'formik';
import * as yup from 'yup';

const ContactSchema=yup.object().shape({
  name : yup.string().required('Name is Required').min(2,'Enter a Valid Name').max(30,'Name must be atmost 30 characters long'),
  email : yup.string().email('Enter a Valid Email').min(8).max(30,'Enter a Valid Email').required('Email is required'),
  message:yup.string().min(1,'Enter a Valid Message').max(200,'Message must be at most 200 characters long').required('Message is Required')
})
const Contact = () => {
  const [opendialog,setDialog]=useState(false);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_4s9tmna',
        "template_1g5ezgs",
        {
          from_name: form.name,
          to_name: "Shiv Soni",
          from_email: form.email,
          to_email: "shiv@leadangel.com",
          message: form.message,
        },
        'X02TohsSx34c95i8q'
      )
      .then(
        () => {
          setLoading(false);
          setDialog(true);
        }
      ).catch(err=>{
        setLoading(false);
        console.error(err);
        alert("Ahh, something went wrong. Please try again.");
      })
  };

  const ThankyoupageClose=(event)=>{
    console.log('event--------->',event);
    setDialog(false);
    setForm({
      name: "",
      email: "",
      message: "",
    });
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

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              maxLength={'30'}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              maxLength={'30'}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
            <div className="flex justify-end lg:pr-2 md:pr-2 text-sm">
            <span>{form.message.length}/200</span>
            </div>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              maxLength='200'
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      
     <ThankyouPage 
     isOpen={opendialog}
     name={form.name}
     onClose={ThankyoupageClose}
     />
    </div>

    
  );
};




export default SectionWrapper(Contact, "contact");