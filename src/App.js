import './App.css';
import { useState } from 'react';
import { useEffect, useRef } from "react";
import NavigationBarr from './NavigationBar';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import EndingPart from './EndingPart';
import TextSlider from './TextSlider';








function App() {


    const [isVisible3, setIsVisible3] = useState(false);
  const divRef3 = useRef(null);












 


    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible3(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.3 } 
    );

    if (divRef3.current) observer.observe(divRef3.current);
    return () => observer.disconnect();
  }, []);









    const images = [
    "/make10.webp",
    "/make2.webp",
    "/make1.webp",
    "/make4.webp",
    "/make7.webp",
    "/make3.webp",
    "/make9.webp",
    "/make6.webp",
    "/make8.webp",
    "/make5.webp",

  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

AOS.init({
  duration: 1000,
  
  once: true
});
  return (
    <div className="App overflow-x-hidden">




<NavigationBarr />


<div className="overflow-x-hidden ">
<div className="h-auto w-full absolute top-0  mt-12  md:mt-0">




  <div className=" relative    h-[750px] overflow-hidden
  sm:h-[650px]
    md:h-[510px]
  " style={{backgroundColor: '#f9c7d5', }}>



<img
alt='a'
  src="popp.webp"  
  className="absolute bottom-0 object-contain scale-[1.8] origin-bottom right-0 
   drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]
   sm:w-[520px] sm:right-5
  md:w-[520px] md:right-1 xl:right-4" 
 />



<div  data-aos="fade-up" className=" mt-40 ms-5 
 z-10 topp  
 md:mt-24 md:w-[30rem] lg:w-[38rem] xl:ms-20 xl:w-[45rem] ">
<h1 className=" makeup text-white   text-left
md:text-6xl lack lg:text-7xl lg:leading-[1.2] xl:text-8xl 
">Rejuvenated Beauty & Lashes</h1>
<p className='text-white text-left  theFont mt-5 text-[15px] 
md:text-[16px] 
'>Where Innovation Meets Beauty:Experience Flawless Perfection</p>

<Link to='/appoint'>
 <button className="flex justify-center items-center bg-pink-300 px-10 py-3 mt-6  transition-transform duration-300 hover:scale-95 bor border-[1px] border-white
  md:mt-8
 ">
<p className='text-center text-white theFont shadow-[0_0_20px_5px_rgba(255,192,203,0.4)] '>Book An Appointment</p>
 </button>
 </Link>
 </div>
</div>


  <div className="lower1 grid mt-14
    md:grid-cols-2 md:mt-28 mb-3  overflow-x-hidden
  ">
    <div className="nn" data-aos="fade-right">
  <img src='redlips.webp'  alt='a'
   className=' h-80 md:h-96 text-center mx-auto   imgSet
   md:my-auto lg:h-[450px]  xl:h-[520px]'
   
    />
    </div>

    <div className="textBelowLower1  text-left w-[90%] mx-5 md:mx-0 mustUseColor">
    <p className=' aboutUs font-thin mb-3 'data-aos="fade-left" >About Us</p>
    <h1 className='welcome font-bold text-3xl  mb-5 ' ref={divRef3} data-aos="fade-left" >Welcome to Mhidey Beauty and Lashes</h1>
    <p className= 'mb-3 demLat lineee  '  data-aos="fade-left" >
  At Mhidey Beauty & Lashes, we believe every woman deserves to look and feel effortlessly beautiful.
  Mhidey specializes in professional makeup artistry and luxury lash enhancements that elevate your natural beauty with precision and care.</p>


<p className= 'mb-3 demLat sm:text- lineee '    data-aos="fade-left" >
Our services include soft glam and bridal makeup, classic, hybrid, and volume lash extensions, and lash lifts and tints
With a passion for detail and a commitment to excellence.Trust us to help you shine with a radiant glow that’s undeniably you
</p>
<div className="bt" data-aos="fade-left">
<Link to="/about"> <button   className=' justify-center items-center bg-pink-300 px-14 py-2 mt-8  hover:bg-black transition-colors duration-500 rounded-sm '>
  <p className='text-center text-white theFont '>Read More</p>
 </button>  </Link></div>
    </div>
    </div>

    <div className="services mt-20 mustUseColor">
      <p className=' aboutUs font-thin text-2xl mb-3'>Service</p>
          <h1 className={`${isVisible3? 'tilt-in-right-2': 'opacity-0 translate-y-10' } welcome font-bold text-3xl  mb-5`}     >Best Service For You</h1>




     <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4  px-2">

     <div 
      data-aos="zoom-in"
className='g1 flex flex-col items-center  relative h-[350px] 
  transition-all duration-700 ease-out'
 >      <img  src='nn1.webp' alt='a'
      className=' brightness-75 hover:brightness-100 hover:scale-95 transition-all duration-500 ease-out z-50 relative h-[85%] object-cover w-full'
      />
      <p className='absolute text-white top-[40%] z-50 text-2xl textOnPic' > Nude Makeup </p>
   <Link to='/nude'>    <button className= 'justify-center items-center bg-pink-300 px-9 py-2 mt-4 hover:bg-black transition-colors duration-300'>
  <p className='text-center text-white theFont text-[14px] uppercase'>View More</p>
 </button> </Link>
     </div>



     <div 
      data-aos="zoom-in"
className='g1 flex flex-col items-center  relative h-[350px] 
  transition-all duration-700 ease-out'
 >     <img  src='blabla.webp' alt='a'
      className=' brightness-75 hover:brightness-100 hover:scale-95 transition-all duration-500 ease-out z-50 relative h-[85%] object-cover w-full'
      />
      <p className='absolute text-white top-[40%] z-50 text-2xl textOnPic' > Micro Shading </p>
   <Link to='/micro'>    <button className= 'justify-center items-center bg-pink-300 px-9 py-2 mt-4 hover:bg-black transition-colors duration-300'>
  <p className='text-center text-white theFont text-[14px] uppercase'>View More</p>
 </button> </Link>
     </div>



     <div 
      data-aos="zoom-in"
className='g1 flex flex-col items-center  relative h-[350px] 
  transition-all duration-700 ease-out'
 >       <img  src='mMakeup.webp ' alt='a'
      className=' brightness-75 hover:brightness-100 hover:scale-95 transition-all duration-500 ease-out z-50 relative  h-[85%] object-cover w-full'
      />
      <p className='absolute text-white top-[40%] z-50 text-2xl textOnPic' > Matte Makeup </p>
   <Link to='/matte'>    <button className= 'justify-center items-center bg-pink-300 px-9 py-2 mt-4 hover:bg-black transition-colors duration-300'>
  <p className='text-center text-white theFont text-[14px] uppercase'>View More</p>
 </button> </Link>
     </div>


     <div 
      data-aos="zoom-in"
className='g1 flex flex-col items-center  relative h-[350px] 
  transition-all duration-700 ease-out' 
 >        <img  src='wis8.webp' alt='a'
      className=' brightness-75 hover:brightness-100 hover:scale-95 transition-all duration-500 ease-out z-50 relative  h-[85%] object-cover w-full'
      />
      <p className='absolute text-white top-[40%] z-50 text-2xl textOnPic' > Wispy Lashes </p>
   <Link to='/wispy'>    <button className= 'justify-center items-center bg-pink-300 px-9 py-2 mt-4 hover:bg-black transition-colors duration-300'>
  <p className='text-center text-white theFont text-[14px] uppercase'>View More</p>
 </button> </Link>
     </div>

</div>
    </div>


<div className=" relative whyChoose mt-28 text-left px-9 lg:px-2 xl:px-14
  xl:h-auto 
 grid  grid-cols-1 md:grid-cols-2 gap-5
h-auto   ">
  <img src='leafs.webp' alt='a' className=' absolute object-cover 
  object-left-top  h-full w-full z-0
      
  '/>
  <div className=" relative xl:my-auto">
      <p   data-aos="fade-right"
      className='text-left aboutUs font-thin text-2xl z-50
        transition-all duration-700 ease-out mb-3'
        
      >Mhidey Beauty And Lashes </p>

   <h1 data-aos="fade-right"
   className='text-3xl welcome font-bold 
        transition-all duration-700 ease-out'
        
   >Why Choose Mhidey Beauty and Lashes</h1>

   <p data-aos="fade-right"
   className='mt-5
        transition-all duration-700 ease-out demLat'
        
   > 
   Choose Mhidey Beauty and Lashes because the brand is dedicated specifically to 
    lashes (and beauty around them), you can
     expect products that are tailored to how
      lashes behave: band thickness, curvature, 
      comfort, natural-look vs drama. A broad
       “beauty store brand” might have many categories,
        but less fine-tuning in lashes.
   </p>

   <p data-aos="fade-right"
   className='mt-5
        transition-all duration-700 ease-out demLat'
        
   >     Smaller/independent brands often provide more personal service (faster responses, 
    more flexible returns/exchanges), or better value because they have lower overheads. If MHidey emphasizes things like “locally shipped”, 
    “supporting local business”, that resonates.
   </p>
<div className="tn" data-aos="fade-right">
       <Link to='/contact'>  <button 
           className='justify-center items-center bg-pink-300 px-12 py-2 mt-8  hover:bg-black transition-colors duration-500
         ease-out'>

  <p className='text-center text-white theFont '>Contact Me</p>
 </button>  </Link> </div>
 </div>
 <div className="set overflow-x-hidden " >
 <img alt='a' src='crea.webp' data-aos="fade-left" className=' relative  w-full  object-cover z-50   changes xl:h-[600px] '/>
</div>
</div>


<TextSlider />





    <div className='mt-36'>
       <p className='aboutUs font-thin text-2xl mb-1'>Photos</p>
       <h1 className='text-4xl welcome font-bold mb-6'>Gallery</h1>
      {/* Image Grid */}
<div 
className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  px-7'
>
  {images.map((src, index) => (
    <div 
     key={index} className='items-center hover:opacity-80 relative group h-[400px]   md:p-12 transition-opacity duration-700 '
     >
      <img 
      loading="lazy" 
        src={src}
        alt="gallery" data-aos="fade-in"
        className=" cursor-pointer  transition w-full h-full object-cover "
        onClick={() => openLightbox(index)}
      />
      <p className=" mt-2 text-center text-2xl  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700  text-white ">
        [ ]
      </p>
        

    </div>
  ))}
</div>


      {/* Lightbox Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          
          {/* Close Button */}    
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✖
          </button>

          {/* Image */}
          <img alt='a'
            src={images[currentIndex]}
            className="max-h-[80vh] max-w-[90vw] rounded-lg"
          />

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-4xl"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-4xl"
          >
            ❯
          </button>
        </div>
      )}
    </div>





<EndingPart />


{/* lower? */}
</div>
</div>














    </div>
  );
}

export default App;
