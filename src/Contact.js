import NavigationBarr from './NavigationBar';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {  faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import EndingPart from './EndingPart';
import {  faClock } from '@fortawesome/free-solid-svg-icons'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
      const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        lname2: "",
        country: "",
        message: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // send to backend / email / WhatsApp here
      };

              useEffect(() => {
              AOS.init({
                duration: 1000,
                once: true
              });
            }, []);
    return ( 
        <div className="contacts">
              <NavigationBarr />
            <div className="relative  h-[30rem] md:h-[25rem] flex justify-center items-center ">

    <h1 className='text-white relative  w-fit z-10 playfairDisplay mx-auto text-5xl mt-10 
    md:text-6xl lack lg:text-7xl lg:leading-[1.2] xl:text-8xl 'data-aos="fade-in">Contact</h1>


    <img src='bookImage.webp' alt='a'  className="absolute bottom-0 md:top-0 w-full h-[89%] md:h-full  object-cover object-right-bottom"/>

</div>

<div className="innerBeauty relative w-full h-auto overflow-hidden bg-white   lg:px-14  ">
            <img src='model2.webp' alt='a'  className='w-40 relative text-center mx-auto p-10 mt-5 z-50 ' data-aos="fade-up"/>

  <img
    src="leafs.webp"
    alt="background"
    className="absolute inset-0 w-full lg:w-[50%] h-full object-cover object-left-top  z-0 lg:scale-125 lg:object-left lg:left-20"
  />

  <div className="relative z-50">

    <p className="text-center aboutUs text-2xl md:text-3xl"data-aos="fade-up">Location</p>
    <p data-aos="fade-up" className="playfairDisplay text-black text-3xl md:text-4xl text-center">
      Mhidey Beauty and Lashes
    </p>



    
    <div data-aos="fade-up"
     className="lines  border border-green-800 mx-auto p-5 mt-5 md:flex md:gap-5 lg:mb-20 w-[80%] lg:w-full justify-around  items-center  ">

  <div className="addr md:w-[30%] xl:w-[25%] mb-5 ">
      <FontAwesomeIcon 
    icon={faLocationDot} 
    className="text-pink-400 text-[14px] "
  />
  
        <p className='Poppins   text-[14px] lg:text-[15px]  '>Address</p>
        <p className='Petrona  text-xl lg:text-2xl'>Victoria Island Crescent Visit By Appointment Only</p> </div>
      

<div className="tiem  mb-5">
    <FontAwesomeIcon 
    icon={faClock} 
    className="text-pink-400 text-[14px]"
  />
    <p className='Poppins text-[14px] lg:text-[15px]'> Monday-Saturday </p>
    <p className='Petrona text-xl  lg:text-2xl'>10.00 AM - 19.00 PM</p>
</div>

<div className="phone ">
    <FontAwesomeIcon 
    icon={faClock} 
    className="text-pink-400 text-[14px]"
  />
<p className='Poppins text-[14px] lg:text-[15px]'>Phone</p>
<p className='Petrona text-xl  lg:text-2xl'>09077277666</p>
</div>
    </div>


  </div>
</div>
    <div className="inTouch px-5 mt-20 grid md:grid-cols-2 gap-5 lg:px-20 overflow-x-hidden">
      <div data-aos="fade-right"
       className="info">
        <p className=' aboutUs text-2xl mb-5 md:text-3xl'>Feel the difference</p>
        <p className='playfairDisplay mb-3 text-black text-3xl font-semibold md:text-4xl'>Get In Touch With Us!</p>
        <p className='demLat mb-6'>Feel free to contact us. we are just one click away.</p>
        <p className='demLat mb-3'>
                         <FontAwesomeIcon
     icon={faLocationDot}
     className="text-pink-300 text-[14px] lg:text-[19px] hover:scale-110 transition me-1"
   /> 
            Victoria Island Crescent </p>
   <p className='demLat mb-3'>
                      <FontAwesomeIcon
          icon={faEnvelope}
          className="text-pink-300 text-[14px] lg:text-[19px]  hover:scale-110 transition me-1"
        /> 
    litmails7@gmail.com</p>

 <p className='demLat'>
                        <FontAwesomeIcon
            icon={faPhone}
            className="text-pink-300 text-[14px] lg:text-[19px] hover:scale-110 transition me-1"
          /> 
    09077277666</p>
 </div>
       <form onSubmit={handleSubmit} className=" flex flex-wrap p-3 inter " data-aos="fade-left" >
      <label htmlFor="fname inputCloser" className='demLat'>Your name</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={formData.fname}
        onChange={handleChange}
        placeholder=""
        className='bg-[#FAFAFA] w-[95%] md:w-[100%] h-12 borDer inputCloser text-[#666666] p-2 demLat3'
      />

      <label htmlFor="lname" className='demLat'>Your email</label>
      <input
        type="email"
        id="lname"
        name="lname"
        value={formData.lname}
        onChange={handleChange}
        placeholder=""
        className='bg-[#FAFAFA] w-[95%] md:w-[100%] h-12 borDer inputCloser text-[#666666] p-2 demLat3'

      />



            <label htmlFor="lname2" className='demLat'>Subject</label>
      <input
        type="text"
        id="lname2"
        name="lname2"
        value={formData.lname2}
        onChange={handleChange}
        placeholder=""
        className='bg-[#FAFAFA] w-[95%] md:w-[100%] h-12 borDer inputCloser text-[#666666] p-2 demLat3'

      />



      <label htmlFor="message" className='demLat'>Your Message (optional)</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder=""
      
        className='bg-[#FAFAFA] w-[95%] md:w-[100%] h-36 borDer p-2 demLat'
      />

      <input type="submit" value="SUBMIT" 
      className='bg-[#0F172A] text-white p-2  w-28 text-[12px] hover:bg-[#FFFFFF] hover:text-[#0F172A] transition-colors duration-300 borDer2  ' 
      />
    </form>
    </div>

    <EndingPart />
        </div>
     );
}
 
export default Contact;