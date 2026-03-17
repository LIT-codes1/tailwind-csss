import { useState } from 'react';
import { useEffect, useRef } from "react";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ScrollToTopButton from './ScrollToTopButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


export const useInView = (threshold = 0.3) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold } // ✅ MUST be an object
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};



const EndingPart = () => {


  const fadeUp11 = useInView(0.3);
   const fadeUp13 = useInView(0.3);
    const fadeUp12 = useInView(0.3);
  
    return ( 
        <div className="Ending-part pt-28">
            
<div className="consultant relative flex justify-center h-[500px] text-center items-center">
  <img src='consultImage.webp' alt='a' className='object-cover  h-full w-full absolute'/>

      <div className="fff w-[70%] md:w-[50%] ">
      <h1 ref={fadeUp12.ref}
       className= {`playfairDisplay text-2xl  mb-5  font-bold
        md:text-3xl
        transition-all duration-700 ease-out
         ${fadeUp12.isVisible ? "fade-in-bottom " : "opacity-0"}
      `}
       >Get Consultation With Expert</h1>
      <p  ref={fadeUp13.ref}
      className={`poppins reducedText littleBlack mb-10
        transition-all duration-700 ease-out
         ${fadeUp13.isVisible ? "fade-in-bottom " : "opacity-0"}
      `}
      >Everything you need to look healthy and beautiful</p>


      <div ref={fadeUp11.ref}
      className= {`grid grid-cols-1 gap-4 md:grid-cols-2
        transition-all duration-700 ease-out
         ${fadeUp11.isVisible ? "fade-in-bottom " : "opacity-0"}
      `}
      >
   <Link to='/appoint'>   <div className="appointment  bg-pink-300 flex items-center justify-center hover:bg-black transition-colors duration-300 rounded-lg  ">
       <p className='py-3 poppins borderRadius text-white reducedText'>Make an appointment</p> 
      </div></Link> 

 <Link to='/contact'>   <div className="appointment borderRadius2  hover:bg-pink-300 transition-colors duration-300 rounded-lg">
      <p className='py-3 poppins  text-pink-300  hover:text-white transition-colors duration-300 reducedText'>  Consult with Me </p>
      </div> </Link>
            </div>

    </div>
    
</div>

<div className="lowerLInks grid grid-cols-2 mt-14 px-8 text- gap-5 md:grid-cols-4 md:gap-2 ">


   
   <div className='  text-left   col-span-2 md:col-span-1 text-left'>
       <img src='cutie.webp' alt='a' className='w-24 h-24 rounded-full object-cover shadow-[0_0_20px_5px_rgba(255,192,203,0.4)]  '/>
   <p className='demLat text-[#4A4A4A] mt-3 font-medium w-[92%]'>Enhance your natural beauty with Mhidey Beauty and Lashes – Where flawless makeup meets luxurious lashes, giving you radiant skin, defined eyes, and a confidence that shines!</p>
   </div>
   

       <div className="socials1 text-left">
           <h1 className='playfairDisplay  font-semibold mb-4 '>Social Links</h1> 
   <p className='mb-3'><FontAwesomeIcon
     icon={faInstagram}
     className="text-pink-300 text-2xl hover:scale-110 transition xl:text-4xl"
   /> </p>
   <p><FontAwesomeIcon
     icon={faTiktok}
     className="text-pink-300 text-2xl hover:scale-110 transition xl:text-4xl"
   /> </p>
   
       </div>
       <div className="socials1  text-left">
           <h1 className='playfairDisplay  font-semibold mb-4'>Useful Links</h1> 
       <Link to="/appoint"> <p className='demLat mb-3  cursor-pointer'>Book Now</p></Link> 
      <Link to='/contact'>  <p className='demLat mb-3  cursor-pointer'>Contact Us</p> </Link> 
      <Link to='/service'>   <p className='demLat mb-3  cursor-pointer'>Services</p> </Link>
       <Link to='/about'>  <p className='demLat  cursor-pointer'>About Us</p> </Link>  
   
       </div>
       <div className="socials1 text-left">
           <h1 className='playfairDisplay  font-semibold mb-4'>Contact</h1> 
            <p className='mb-3 demLat'>
             <FontAwesomeIcon
     icon={faLocationDot}
     className="text-pink-300  hover:scale-110 transition me-1"
   /> 
         Lagos State, Nigeria.
            </p>
   
                     <p className='mb-3 demLat'>
             <FontAwesomeIcon
     icon={faEnvelope}
     className="text-pink-300  hover:scale-110 transition me-1"
   />  
        litmails7@gmail.com
            </p>
                     <p className='demLat'>
             <FontAwesomeIcon
     icon={faPhone}
     className="text-pink-300  hover:scale-110 transition me-1"
   /> 
           09077277666
            </p>
       </div>
   
   
   </div>
   
      <div className="copyR bg-[#F3F3F3] mt-12  h-32 items-center flex text-center">
   <div className="copyRight Lato w-[90%] mx-auto my-auto   ">
     <h1 className='text-[13px]'> 
                 <FontAwesomeIcon
     icon={faCopyright}
     className="hover:scale-110 transition me-1 "
   /> 
       2025 All Rights Reserved By Mhidey Beauty and Lashes</h1>
     <h1 className='text-[13px] mt-3'>Powered By Readers Digital</h1>
   
   </div>
     </div>
   <ScrollToTopButton />


        </div>
     );
}
 
export default EndingPart;