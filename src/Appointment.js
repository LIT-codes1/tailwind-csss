import NavigationBarr from './NavigationBar';
import { useState } from 'react';
import { useEffect, useRef } from "react";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ScrollToTopButton from './ScrollToTopButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown, faCopyright, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import EndingPart from './EndingPart';
import AOS from "aos";
import "aos/dist/aos.css";



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
const Appointment = () => {
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
  const fadeUp11 = useInView(0.3);
   const fadeUp13 = useInView(0.3);
    const fadeUp12 = useInView(0.3);
    const [isVisible, setIsVisible] = useState(false);
  
          useEffect(() => {
          AOS.init({
            duration: 1000,
            once: true
          });
        }, []);

    return ( 
        <div className="appoint-ment">
            
              <NavigationBarr />
            <div className="relative  h-[30rem] md:h-[25rem] flex justify-center items-center ">

    <h1 className='text-white relative  w-fit z-10 playfairDisplay mx-auto text-5xl mt-10 
    md:text-6xl lack lg:text-7xl lg:leading-[1.2] xl:text-8xl 'data-aos="fade-in">Book Now</h1>


    <img src='bookImage.webp' className="absolute bottom-0 md:top-0 w-full h-[89%] md:h-full  object-cover object-right-bottom"/>

</div>
   

   <div className="theForm lg:px-32">

<div className="appoint text-center mt-14 md:mt-28 lg:px-16">
        <h1 className='welcome font-bold text-3xl mb-3 md:text-4xl 'data-aos="fade-up">Book your Service Now</h1>
        <p className="aboutUs mt-2 text-2xl md:text-3xl"data-aos="fade-up">Book Now</p>
</div>

   <form onSubmit={handleSubmit} className=" flex flex-wrap p-3 inter" data-aos="fade-up" >
      <label htmlFor="fname inputCloser" className='demLat'>Your name</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={formData.fname}
        onChange={handleChange}
        placeholder=""
        className='bg-[#FAFAFA] w-[100%] h-12 borDer inputCloser text-[#666666] demLat3 p-2 '
      />

      <label htmlFor="lname" className='demLat'>Your email</label>
      <input
        type="email"
        id="lname"
        name="lname"
        value={formData.lname}
        onChange={handleChange}
        placeholder=""
        className='bg-[#FAFAFA] w-[100%] h-12 borDer inputCloser text-[#666666] demLat3 p-2'

      />



            <label htmlFor="lname2" className='demLat'>Subject</label>
      <input
        type="text"
        id="lname2"
        name="lname2"
        value={formData.lname2}
        onChange={handleChange}
        placeholder=""
        className='bg-[#FAFAFA] w-[100%] h-12 borDer inputCloser text-[#666666] demLat3 p-2'

      />

      <label htmlFor="country" className='demLat'>Choose Service</label>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={handleChange}
       
        className='bg-[#FAFAFA] w-[100%] h-12 borDer mb-[35px] text-[#666666] demLat3'
      >
        <option value="'" className='text-[#666666]'>Nude Makeup</option>
        <option value="australia">Micro Shading</option>
        <option value="canada">Mate Makeup</option>
        <option value="usa">Wispy Lashes</option>
      </select>

      <label htmlFor="message" className='demLat'>Your Message (optional)</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder=""
      
        className='bg-[#FAFAFA] w-[100%] h-44 borDer p-2 text-[#666666] demLat3'
      />

      <input type="submit" value="SUBMIT" 
      className='bg-[#0F172A] text-white p-2  w-28 text-[12px] hover:bg-[#FFFFFF] hover:text-[#0F172A] transition-colors duration-300 borDer2 ' 
      />
    </form>

</div>
    


   
   
  <EndingPart />
        </div>
     );
}
 
export default Appointment;