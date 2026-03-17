import NavigationBarr from './NavigationBar';
import EndingPart from './EndingPart';
import Image2 from './Image2';
import TextSlider from './TextSlider';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MatteMakeup = () => {
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
      md:text-6xl lack lg:text-7xl lg:leading-[1.2] xl:text-8xl '  data-aos="fade-in">Matte Makeup</h1>
  
  
      <img src='bookImage.webp' alt='a'  className="absolute bottom-0 md:top-0 w-full h-[89%] md:h-full  object-cover object-right-bottom"/>
  
  </div>
  
     <div className="wispy mt-16">
      <p className='text-center aboutUs font-thin text-2xl mb-3 md:text-3xl ' data-aos="fade-up">Matte Makeup</p>
      <p className='welcome font-bold text-3xl text-center mb-3 md:text-4xl' data-aos="fade-up">Matte Makeup</p>
      <div className="bt" data-aos="fade-up">
   <button className="flex mx-auto items-center justify-center bg-pink-300 px-11 py-2 mt-5  hover:bg-black transition-colors duration-300 z-50">
    <p className="text-white theFont uppercase">Book Treatment Now</p>
  </button></div>
  
    <div className="mx-auto px-7 xl:px-20 mt-7" data-aos="fade-up">
      <p
      className='z-50 demDem mt-5 text-left '
      >Matte makeup is a flawless beauty technique designed to deliver a smooth,
     shine-free finish that enhances natural features while controlling excess oil.
      This style focuses on creating an even complexion with a soft, velvety texture,
       making it ideal for long wear and high-definition looks.</p>
           <p
      className='z-50 demDem mt-5 text-left '
           >Perfect for events, photoshoots, and all-day occasions, 
         matte makeup minimizes the appearance of pores and imperfections 
         while maintaining a refined, elegant appearance. With expert product 
         selection and precise application, matte makeup provides a long-lasting,
          polished look that remains fresh, confident, and beautifully balanced throughout the day.</p>
      
     
        
        <p className='font-bold mt-5 demDem'>Difference Between Matte Makeup and Other Makeup</p>
    <p className='demDem font-bold mt-3'>1. Skin Appearance</p>
    <p className='demDem'>Matte makeup minimizes the appearance of pores and texture, creating a smooth and even complexion. In contrast, dewy or glossy makeup can highlight skin texture, fine lines, or imperfections due to its reflective nature.</p>

<p className='demDem font-bold mt-3'>2. Occasion & Wearability</p>
<p className='demDem'>Matte makeup is ideal for long wear, professional settings, photoshoots, and events where a flawless finish is desired. Other makeup finishes are often preferred for casual wear, editorial looks, or situations where a radiant, glowing effect is the goal.</p>

<p className='demDem font-bold mt-3'>3. Oil Control & Longevity</p>
<p className='demDem'>
Matte makeup helps control excess oil and reduces shine throughout the day, making it especially suitable for oily or combination skin types. Other makeup finishes may require frequent touch-ups, as they can accentuate shine as the day progresses.</p>

<p className='demDem font-bold mt-3'>4. Photography & Lighting Results</p>
<p className='demDem'>
Matte makeup performs exceptionally well under bright lighting and flash photography by reducing unwanted shine and glare. This results in a clean, balanced complexion in photos. Other makeup finishes may reflect light, sometimes causing areas of the face to appear overly shiny or oily on camera.</p>
  </div>
         </div>
  
  
  
  
    <Image2 />
  <div className="space-y-16">
    <TextSlider />
    <EndingPart />
  </div>
          </div>
       );
}
 
export default MatteMakeup;