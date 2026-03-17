import NavigationBarr from './NavigationBar';
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble  } from '@fortawesome/free-solid-svg-icons'
import EndingPart from './EndingPart';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


const Services = () => {
  
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
        <div className="service-s">

    <NavigationBarr />
<div className="relative  h-[30rem] md:h-[25rem] flex justify-center items-center ">
    <h1 className='text-white relative  w-fit z-10 playfairDisplay mx-auto text-5xl mt-10 
    md:text-6xl lack lg:text-7xl lg:leading-[1.2] xl:text-8xl  
    ' data-aos="fade-in">Services</h1>


    <img src='bookImage.webp' alt='a' className="absolute bottom-0 md:top-0 w-full h-[89%] md:h-full  object-cover object-right-bottom"/>

</div>


<div className="demServices text-center mt-16">
      <p className='text-center aboutUs font-thin text-2xl mb-3' data-aos="fade-up">Services</p>
      <p className=' welcome font-bold text-3xl mb-3' data-aos="fade-up">Best Services For You</p>
      <p className='demLat ' data-aos="fade-up">Rejuvenated beauty and lashes - Where innovation meets experience flawless perfection</p>
</div>

  <div className="demIcons grid grid-cols-2 md:grid-cols-4 mx-auto text-center mt-10 " data-aos="fade-up">
    <div className="icon1 m-2 ">
      <FontAwesomeIcon
       icon={faCheckDouble}
       className='text-pink-400 text-5xl md:text-6xl'
       />
       <p className='Poppins mt-2 md:text-xl'>Matte Makeup</p>
    </div>
    <div className="icon1  m-2">
      <FontAwesomeIcon
       icon={faCheckDouble}
       className='text-pink-400 text-5xl md:text-6xl'
       />
       <p className='Poppins mt-2 md:text-xl'>Wispy Lashes</p>
    </div>
    <div className="icon1  m-2">
      <FontAwesomeIcon
       icon={faCheckDouble}
       className='text-pink-400 text-5xl md:text-6xl'
       />
       <p className='Poppins mt-2 md:text-xl'>Micro Shading</p>
    </div>
    <div className="icon1  m-2">
      <FontAwesomeIcon
       icon={faCheckDouble}
       className='text-pink-400 text-5xl md:text-6xl'
       />
       <p className='Poppins mt-2 md:text-xl'>Nude Makeup</p>
    </div>
  </div>


  <div className="innerBeauty relative h-auto w-full  mt-28 overflow-hidden ">
    <img alt='a' src='leafs.webp' className='absolute  w-full h-full object-cover object-left-top  bottom-0 z-0' />

    <div className= "  wi grid grid-cols-1 md:grid-cols-2  text-left z-50 px-5 gap-5 md:px-10 md:gap-7  lg:px-20 lg:gap-10 overflow-x-hidden">
    <img  alt='a' src='wis8.webp'
        className='w-[17rem]  z-50 thebord md:w-auto object-cover  ' data-aos="fade-right"
    />

     <div className="textBeneath z-50  my-auto ">
    <p 
    className='z-50 welcome font-bold text-3xl  ' data-aos="fade-left"
     >Wispy Lashes</p>
    <p
    className='z-50 demLat mt-5' data-aos="fade-left"
    >Wispy lashes are a modern lash enhancement
       style designed to create a soft, fluttery, 
       and naturally elegant look. This technique 
       involves applying varying lash lengths in a 
       carefully structured pattern, creating light 
       spikes and airy layers that add depth, dimension,
        and movement to the eyes. The result is a balanced
        , eye-opening effect that enhances your natural beauty
         without appearing heavy or overdone.</p>
         <p
    className='z-50 demLat mt-5' data-aos="fade-left"
         >Known for their versatility, wispy lashes complement all eye shapes and can be
           customized to achieve anything from a subtle everyday look to a glamorous, photo-ready 
           finish. They provide the perfect blend of fullness and texture, making the eyes appear 
           brighter, lifted, and more defined. Lightweight and comfortable to wear, wispy lashes 
           are ideal for clients seeking a refined yet striking lash style that delivers elegance,
            softness, and effortless beauty.</p>
             <div className="bt" data-aos="fade-left">
            <Link to='/appoint'>                <button  className=  'justify-center items-center bg-pink-300 w-56 h-11 mt-8  hover:bg-black transition-colors duration-500 z-50'>
  <p className='text-center text-white theFont '>Book Now</p>
 </button> </Link>  
 </div>
                 </div>

    </div>
  </div>



  <div className="innerBeauty relative h-auto w-full  mt-24 overflow-hidden ">
    <img alt='a' src='leafs.webp' className='absolute  w-full h-full object-cover object-left-top  bottom-0 z-0'/>

    <div className= "  wi grid grid-cols-1 md:grid-cols-2 md:bg-yellow-400 text-left z-50 px-5 gap-5 md:px-10 md:gap-7  lg:px-20 lg:gap-10 overflow-x-hidden">


     <div className="textBeneath z-50  my-auto">
    <p 
    className='z-50 welcome font-bold text-3xl  '  data-aos="fade-right" 
     >Nude Makeup</p>
     <p   className='z-50 demLat mt-5' data-aos="fade-right" 
    >
    Nude makeup is a timeless beauty technique focused on enhancing natural 
    features while maintaining a soft, effortless, and flawless appearance. 
    Rather than masking the skin, this style works to perfect it—using neutral
     tones, lightweight products, and seamless blending to create a fresh, radiant
      complexion that looks naturally beautiful.</p>
         <p
    className='z-50 demLat mt-5' data-aos="fade-right" 
         >Known for their versatility, wispy lashes complement all eye shapes
          and can be customized to achieve anything from a subtle everyday look
           to a glamorous, photo-ready finish. They provide the perfect blend of
            fullness and texture, making the eyes appear brighter, lifted, and more 
            defined. Lightweight and comfortable to wear, wispy lashes are ideal for
             clients seeking a refined yet striking lash style that delivers elegance,
              softness, and effortless beauty.</p>
             <div className="bt" data-aos="fade-right">
            <Link to='/appoint'>                <button  className=  'justify-center items-center bg-pink-300 w-56 h-11 mt-8  hover:bg-black transition-colors duration-500 z-50'>
  <p className='text-center text-white theFont '>Book Now</p>
 </button> </Link>  
 </div>
                 </div>

                     <img alt='a'  src='nn9.webp' data-aos="fade-left" 
        className='w-[17rem]  z-50 thebord md:w-full  '
    />

    </div>
  </div>



 <div className="innerBeauty relative h-auto w-full  mt-24 overflow-hidden ">
    <img alt='a' src='leafs.webp' className='absolute  w-full h-full object-cover object-left-top  bottom-0 z-0'/>

    <div className= "  wi grid grid-cols-1 md:grid-cols-2 md:bg-yellow-400 text-left z-50 px-5 gap-5 md:px-10 md:gap-7  lg:px-20 lg:gap-10 overflow-x-hidden">
    <img alt='a'  src='sh8.webp'
        className='w-[17rem]  z-50 thebord md:w-full  ' data-aos="fade-right" 
    />

     <div className="textBeneath z-50  my-auto">
    <p 
    className='z-50 welcome font-bold text-3xl  ' data-aos="fade-left" 
     >Micro Shading</p>
    <p
    className='z-50 demLat mt-5' data-aos="fade-left" 
    >Microshading is a semi-permanent eyebrow enhancement technique designed to create soft
    , fuller-looking brows with a smooth, powdery finish. Unlike traditional microblading,
     microshading uses a gentle shading method to deposit pigment into the skin, resulting 
     in a natural, makeup-like effect that mimics softly filled-in brows.</p>
         <p
    className='z-50 demLat mt-5' data-aos="fade-left" 
         >This technique is ideal for clients who prefer a more defined yet subtle brow appearance,
          especially those with oily or sensitive skin. Microshading enhances brow shape, adds depth,
           and corrects sparse areas while maintaining a soft, even look. With long-lasting results and
            minimal downtime, microshading offers beautifully shaped, low-maintenance brows that elevate
             facial balance and overall appearance.</p>
             <div className="bt" data-aos="fade-left">
            <Link to='/appoint'>                <button  className=  'justify-center items-center bg-pink-300 w-56 h-11 mt-8  hover:bg-black transition-colors duration-500 z-50'>
  <p className='text-center text-white theFont '>Book Now</p>
 </button> </Link>  
 </div>
                 </div>

    </div>
  </div>





  <div className="innerBeauty relative h-auto w-full  mt-24 overflow-hidden ">
    <img alt='a' src='leafs.webp' className='absolute  w-full h-full object-cover object-left-top  bottom-0 z-0'/>

    <div className= "  wi grid grid-cols-1 md:grid-cols-2 md:bg-yellow-400 text-left z-50 px-5 gap-5 md:px-10 md:gap-7 lg:px-20 lg:gap-10 overflow-x-hidden">


     <div className="textBeneath z-50  my-auto">
    <p 
    className='z-50 welcome font-bold text-3xl  ' data-aos="fade-right"
     >Matte Makeup</p>
   <p
    className='z-50 demLat mt-5' data-aos="fade-right"
    >Matte makeup is a flawless beauty technique designed to deliver a smooth,
     shine-free finish that enhances natural features while controlling excess oil.
      This style focuses on creating an even complexion with a soft, velvety texture,
       making it ideal for long wear and high-definition looks.</p>
         <p
    className='z-50 demLat mt-5' data-aos="fade-right"
         >Perfect for events, photoshoots, and all-day occasions, 
         matte makeup minimizes the appearance of pores and imperfections 
         while maintaining a refined, elegant appearance. With expert product 
         selection and precise application, matte makeup provides a long-lasting,
          polished look that remains fresh, confident, and beautifully balanced throughout the day.</p>
          <p className="demLat z-50 mt-5" data-aos="fade-right" >
            In addition to its oil-control benefits, matte makeup creates a sophisticated canvas that allows facial
             structure, contour, and color to stand out with clarity and definition. Whether you prefer a subtle, natural 
             enhancement or a bold, statement finish, this technique adapts seamlessly to complement every skin tone and style 
             preference. Carefully blended layers ensure comfort without heaviness, allowing your skin to breathe while maintaining
              a flawless presentation.
          </p>
             <div className="bt" data-aos="fade-right">
            <Link to='/appoint'>                <button  className=  'justify-center items-center bg-pink-300 w-56 h-11 mt-8  hover:bg-black transition-colors duration-500 z-50'>
  <p className='text-center text-white theFont '>Book Now</p>
 </button> </Link>  
 </div>
                 </div>

                     <img alt='a'  src='mmm8.webp'
        className='w-[17rem]  z-50 thebord  md:w-full ' data-aos="fade-left" 
    />

    </div>
  </div>




    <div className="pricingPart mt-20 lg:px-5 xl:px-10">
      <p className='text-center aboutUs text-2xl'>Pricing</p>
      <p className='welcome font-bold text-3xl text-center'>Pricing Plans</p>


<div className="flex flex-col md:flex-row   items-center mt-5 p-5">
      <div data-aos="zoom-in" className="box1 w-[100%] h-[400px]  bg-slate-600 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-[14px]">
        <img alt='a' src='model.webp' className='w-44  text-center mx-auto p-5 mt-5'/>
        <p className='Playfair Display  text-2xl text-center text-white  font-bold'>Wispy Lashes</p>
        <div className="mt-10  px-7  mx-auto">
        <p className='Poppins2 text-white '>Wispy Lashes ............................... $210</p>
        <p className='LATO Display text-white mt-1'>This is a rough estimate each client will be assessed individual</p>
        <p className=' LATO text-white mt-1'>Service Duration 1 hour</p>
</div>
      </div>
      <div data-aos="zoom-in" className="box1 w-[100%] h-[380px] bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.12),0_20px_40px_rgba(0,0,0,0.10)] text-[14px]">
            <img alt='a' src='model2.webp' className='w-44  text-center mx-auto p-5 mt-5'/>
        <p className='Playfair Display  text-2xl text-center text-black  font-bold'>Nude Makeup</p>
        <div className="mt-10  px-7  mx-auto">
        <p className='Poppins2 text-black '>Wispy Lashes ............................... $295</p>
        <p className='LATO Display text-black mt-1'>This is a rough each estimate client will be assessed individual</p>
        <p className=' LATO text-black mt-1'>Service Duration 3 hour</p>
</div>
      </div>
</div>

<div className="flex flex-col  md:flex-row-reverse  items-center mt-5 p-5">
      <div data-aos="zoom-in" className="box1 w-[100%] h-[400px]  bg-slate-600 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-[14px]">
        <img alt='a' src='model.webp' className='w-44  text-center mx-auto p-5 mt-5'/>
        <p className='Playfair Display  text-2xl text-center text-white  font-bold'>Matte Makeup</p>
        <div className="mt-10  px-7  mx-auto">
        <p className='Poppins2 text-white '>Wispy Lashes ............................... $200</p>
        <p className='LATO Display text-white mt-1'>This is a rough estimate each client will be assessed individual</p>
        <p className=' LATO text-white mt-1'>Service Duration 1 hour</p>
</div>
      </div>
      <div data-aos="zoom-in" className="box1 w-[100%] h-[380px] bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.12),0_20px_40px_rgba(0,0,0,0.10)] text-[14px]">
            <img alt='a' src='model2.webp' className='w-44  text-center mx-auto p-5 mt-5'/>
        <p className='Playfair Display  text-2xl text-center text-black  font-bold'>Micro Shading</p>
        <div className="mt-10  px-7  mx-auto">
        <p className='Poppins2 text-black '>Wispy Lashes ............................... $280</p>
        <p className='LATO Display text-black mt-1'>This is a rough estimate each client will be assessed individual</p>
        <p className=' LATO text-black mt-1'>Service Duration 2 hour</p>
</div>
      </div>
</div>
    </div>








<EndingPart /> 











        </div>

     );
}
 
export default Services;