import { useRef, useState, useEffect } from "react";


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


const Testimony = () => {
      const fadeUp9 = useInView(0.3);
      const fadeUp10 = useInView(0.3);
    return (  
        <div className="testi-mony text-center mb-10">

<div className="testimony mt-36 mb-24  h-[30rem] ccc">
      <p ref={fadeUp9.ref}
      className= {`text-center aboutUs font-thin text-2xl 
        transition-all duration-700 ease-out
         ${fadeUp9.isVisible ? "tilt-in-left-1" : "opacity-0"}
      `}
      >What Clients Say </p>
   <h1 ref={fadeUp10.ref}
   className={`text-4xl welcome font-bold mb-5
        transition-all duration-700 ease-out
         ${fadeUp10.isVisible ? "tilt-in-left-1" : "opacity-0"}
      `}
   >Testimonials</h1>
<div className="relative h-full flex items-center justify-center text-2xl   text-white">
 <img src='blurblur.jpg ' className='object-cover object-left-top h-full '
 />



  <div className="absolute the1 p-5 mx-auto ccc " >
    <h1 className='font-bold mt-5 lisaFont'>LISA</h1>
    <p className='serviceFont'>NUDE MAKEUP SERVICE</p>
    <p className='lato mt-3 italic font-thin'>“Loved my experience at Mhidey Beauty & Lashes! The nude makeup was flawless, soft, and perfectly enhanced my features. The artist was professional and made me feel so comfortable — I got tons of compliments! Definitely my go-to from now on.”</p>
  </div>


  <div className="absolute the2 p-5 mx-auto ccc">
    <h1 className='font-bold mt-5 lisaFont'>TERESSA</h1>
    <p className='serviceFont'>LASH EXTENSION SERVICE</p>
    <p className='lato mt-3 italic font-thin'>"My experience with Mhidey Beauty & Lashes was amazing! 
      The lash extension service was gentle, precise, and beautifully done. The results 
      look stunning and lasted so well — highly recommend for anyone who loves quality and elegance"</p>
  </div>
  
  <div className="absolute the3 p-5 mx-auto ccc">
    <h1 className='font-bold mt-5 lisaFont'>EMMA</h1>
    <p className='serviceFont '>HYBRID MAKEUP SERVICE</p>
    <p className='lato mt-3 italic font-thin'>
“I came to Mhidey Beauty and Lashes for a hybrid makeup look, and it turned out absolutely stunning! It was the perfect balance of natural and glam — flawless skin, soft glow, and beautifully blended eyes. I felt so confident and got so many compliments. Definitely coming back!”</p>
  </div></div>

</div>

        </div>
    );
}
 
export default Testimony;