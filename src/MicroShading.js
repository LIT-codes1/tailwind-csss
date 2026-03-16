import NavigationBarr from './NavigationBar';
import Image from './Image';
import Testimony from './Testimony';
import EndingPart from './EndingPart';
import Image2 from './Image2';
import Images3 from './Imags3';
import TextSlider from './TextSlider';
import AOS from "aos";
import "aos/dist/aos.css";
import Images4 from './Images4';
import { useEffect, useRef } from "react";


const MicroShading = () => {
          useEffect(() => {
          AOS.init({
            duration: 1000,
            once: true
          });
        }, []);
   return ( 
          <div className="wispy-lashes">
                <NavigationBarr />
              <div className="relative  h-[30rem] md:h-[25rem] flex justify-center items-center ">
  
      <h1 className='text-white relative  w-fit z-10 playfairDisplay mx-auto text-5xl mt-10 
      md:text-6xl lack lg:text-7xl lg:leading-[1.2] xl:text-8xl' data-aos="fade-in">Micro Shading</h1>
  
  
      <img src='bookImage.webp' className="absolute bottom-0 md:top-0 w-full h-[89%] md:h-full  object-cover object-right-bottom"/>
  
  </div>
  
     <div className="wispy mt-16">
      <p className='text-center aboutUs font-thin text-2xl mb-3 md:text-3xl ' data-aos="fade-up">Micro Shading</p>
      <p className='welcome font-bold text-3xl text-center mb-3 md:text-4xl' data-aos="fade-up">Micro Shading</p>
      <div className="bt" data-aos="fade-up">
   <button className="flex mx-auto items-center justify-center bg-pink-300 px-11 py-2 mt-5  hover:bg-black transition-colors duration-300 z-50">
    <p className="text-white theFont uppercase">Book Treatment Now</p>
  </button> </div>
  
    <div className="mx-auto px-7 xl:px-20 mt-7" data-aos="fade-up" >
      <p
      className='z-50 demDem mt-5 text-left '
      >Microshading is a semi-permanent eyebrow enhancement technique designed to create soft
    , fuller-looking brows with a smooth, powdery finish. Unlike traditional microblading,
     microshading uses a gentle shading method to deposit pigment into the skin, resulting 
     in a natural, makeup-like effect that mimics softly filled-in brows.</p>
           <p
      className='z-50 demDem mt-5 text-left '
           >This technique is ideal for clients who prefer a more defined yet subtle brow appearance,
          especially those with oily or sensitive skin. Microshading enhances brow shape, adds depth,
           and corrects sparse areas while maintaining a soft, even look. With long-lasting results and
            minimal downtime, microshading offers beautifully shaped, low-maintenance brows that elevate
             facial balance and overall appearance.</p>
      
     
        
        <p className='font-bold mt-5 demDem'>Difference Between Microshading and Other Eyebrow Techniques</p>
    <p className='demDem font-bold mt-3'>1. Ideal Client Preference</p>
    <p className='demDem'>Microshading is perfect for clients who prefer a soft, polished, and low-maintenance brow look. Other eyebrow techniques are better suited for those who want bold definition, visible hair strokes, or a more dramatic brow style.</p>

<p className='demDem font-bold mt-3'>2. Maintenance & Touch-Ups</p>
<p className='demDem'>Microshading typically requires fewer touch-ups because of its soft, layered pigment application. Other techniques may need more regular maintenance to preserve sharpness and definition.</p>

<p className='demDem font-bold mt-3'>3. Healing Process</p>
<p className='demDem'>
Microshading involves minimal skin trauma, leading to a faster and more comfortable healing process. Other techniques can involve deeper or more defined strokes, which may result in longer healing time and more noticeable peeling.</p>

<p className='demDem font-bold mt-3'>4. Skin Type Suitability</p>
<p className='demDem'>
Microshading is ideal for all skin types, especially oily or sensitive skin, because the pigment is deposited more gently and evenly. Other techniques, such as microblading, may not last as well on oily skin due to faster pigment fading.</p>
  </div>
         </div>
  
  
  
  
    <Images3 />
  <div className="space-y-16">
    <TextSlider />
    <EndingPart />
  </div>
          </div>
       );
}
 
export default MicroShading;