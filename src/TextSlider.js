import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef,  } from "react";
import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
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

const TextSlider = () => {

      const fadeUp9 = useInView(0.3);
      const fadeUp10 = useInView(0.3);

        useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 150
        });
      
        window.addEventListener("load", () => {
          AOS.refresh();
        });
      }, []);


  return (


    <div className="allow testimony mt-36 mb-24  h-[30rem] ccc text-center ">

              <p ref={fadeUp9.ref}
      className= {`text-center aboutUs font-thin text-2xl 
        transition-all duration-700 ease-out mb-3
         ${fadeUp9.isVisible ? "tilt-in-left-1" : "opacity-0"}
      `}
      >What Clients Say </p>
   <h1 ref={fadeUp10.ref}
   className={`text-4xl welcome font-bold mb-5
        transition-all duration-700 ease-out
         ${fadeUp10.isVisible ? "tilt-in-left-1" : "opacity-0"}
      `}
   >Testimonials</h1>
    
    <div className="relative w-full h-[400px] ">
      {/* Background image */}
      <img
        src="blurblur.webp"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-left-top"
      />




      {/* Text content / slider */}
      <div                   data-aos="fade-up"

      className="relative z-10  items-center justify-center h-full px-4 md:px-32 lg:px- my-auto">

  <Swiper
    modules={[Pagination, Navigation]}
    slidesPerView={1}
    pagination={{ clickable: true }}
navigation={{
  nextEl: ".custom-next",
  prevEl: ".custom-prev",
}}
    loop={true}
    spaceBetween={20}
  >
              <SwiperSlide>
  <div className="relative  ccc mt-16 md:mt-24 mb-16 md:mb-24 uppercase" >
    <h1 className='font-bold mt-5 lisaFont'>ELIZABETH</h1>
    <p className='serviceFont mb-5 uppercase'>Precision Brow Microshading</p>
    <p className='lato mt-3 italic font-thin'>“I had my microshading done at Mhidey Beauty & Lashes and I couldn’t be happier! My brows look fuller, perfectly shaped, and so natural. The process was explained clearly, and I felt completely at ease the entire time. The results are stunning — it’s honestly one of the best beauty decisions I’ve made!”</p>
  </div>
          </SwiperSlide>

    <SwiperSlide>
      <div className="relative ccc mt-16 md:mt-24 mb-16 md:mb-24 uppercase">
        <h1 className="font-bold mt-5 lisaFont">PORSH DAMMY</h1>
        <p className="serviceFont mb-5 uppercase">Delicate Wispy Perfection</p>
        <p className="lato mt-3 italic font-thin">
          “Absolutely in love with my wispy lashes from Mhidey Beauty & Lashes! 
          They look so soft, fluttery, and natural while still giving that full glam effect.”
        </p>
      </div>
    </SwiperSlide>

          <SwiperSlide>
  <div className="relative   ccc mt-16 md:mt-24 mb-16 md:mb-24 uppercase" >
    <h1 className='font-bold mt-5 lisaFont'>VERONICA</h1>
    <p className='serviceFont mb-5 uppercase'>Full Glam Matte Finish</p>
    <p className='lato mt-3 italic font-thin'>“My matte makeup session at Mhidey Beauty & Lashes was everything! The finish was smooth, flawless, and lasted all day without feeling heavy. It enhanced my features beautifully while keeping that elegant, shine-free look. The service was professional and relaxing — I felt so confident stepping out!”</p>
  </div>
          </SwiperSlide>



                    <SwiperSlide>
  <div className="relative  ccc mt-16 md:mt-24 mb-16 md:mb-24 uppercase" >
    <h1 className='font-bold mt-5 lisaFont'>LISA</h1>
    <p className='serviceFont mb-5 uppercase'>The Nude Luxe Experience</p>
    <p className='lato mt-3 italic font-thin'>“Loved my experience at Mhidey Beauty & Lashes! The nude makeup was flawless, soft, and perfectly enhanced my features. The artist was professional and made me feel so comfortable — I got tons of compliments! Definitely my go-to from now on.”</p>
  </div>
          </SwiperSlide>
        </Swiper>
{/* LEFT ARROW */}
<div className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 text-black text-2xl cursor-pointer z-50 hidden md:flex">
  <FontAwesomeIcon icon={faAnglesLeft} />
</div>

{/* RIGHT ARROW */}
<div className="custom-next absolute right-5 top-1/2 -translate-y-1/2 text-black text-2xl cursor-pointer z-50 hidden md:flex">
  <FontAwesomeIcon icon={faAnglesRight} />
</div>
      </div>
    </div>
    </div>
  );
};

export default TextSlider;
