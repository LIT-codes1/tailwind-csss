import NavigationBarr from './NavigationBar';
import EndingPart from './EndingPart';
import TextSlider from './TextSlider';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Images4 from './Images4';


const NudeMakeup = () => {
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
    md:text-6xl lack lg:text-7xl lg:leading-[1.2] xl:text-8xl ' data-aos="fade-in">Nude Makeup</h1>


    <img src='bookImage.webp' alt='a'  className="absolute bottom-0 md:top-0 w-full h-[89%] md:h-full  object-cover object-right-bottom"/>

</div>

   <div className="wispy mt-16   ">
    <p className='text-center aboutUs font-thin text-2xl mb-3 md:text-3xl' data-aos="fade-up">Nude Makeup</p>
    <p className='welcome font-bold text-3xl text-center mb-3 md:text-4xl' data-aos="fade-up">Nude Makeup</p>

<div className="btn" 
data-aos="fade-up">
<button
  
  className="flex mx-auto items-center justify-center bg-pink-300 px-11 py-2 mt-5 hover:bg-black transition-all duration-500 z-50"
>
  <p className="text-white theFont uppercase">
    Book Treatment Now
  </p>
</button>
</div>

  <div className="mx-auto px-7 xl:px-20 mt-7" data-aos="fade-up">
    <p
    className='z-50 demDem mt-5 text-left '
    >Nude makeup is a timeless beauty technique focused on enhancing natural 
    features while maintaining a soft, effortless, and flawless appearance. 
    Rather than masking the skin, this style works to perfect it—using neutral
     tones, lightweight products, and seamless blending to create a fresh, radiant
      complexion that looks naturally beautiful.</p>
         <p
    className='z-50 demDem mt-5 text-left '
         >Designed to complement every skin tone, nude makeup emphasizes balance and harmony. Subtle contouring defines the face without harsh lines, soft earth-toned shadows gently enhance the eyes, and delicate lip shades bring warmth without overpowering your natural beauty. The result is a polished look that feels breathable, comfortable, and confidently understated.</p>
    
   
      
        <p className='font-bold mt-5 demDem'>Difference Between Nude Makeup and Other Makeup Styles</p>
    <p className='demDem font-bold mt-3'>1. Soft, Skin-Like Finish</p>
    <p className='demDem'>Nude makeup typically uses lightweight formulas that mimic natural skin texture, creating a fresh and breathable look. In contrast, other makeup styles often rely on full-coverage foundations and heavier products that prioritize perfection and intensity over a natural finish.</p>

<p className='demDem font-bold mt-3'>2. Natural Enhancement</p>
<p className='demDem'>Nude makeup focuses on enhancing your natural features rather than altering them. It evens out the skin tone and subtly defines the face without looking heavy. Other makeup styles tend to emphasize transformation, using stronger colors and techniques to dramatically change the overall appearance.</p>

<p className='demDem font-bold mt-3'>3. Neutral Color Palette</p>
<p className='demDem'>
Nude makeup uses neutral shades such as beige, brown, soft peach, and muted pinks that closely match natural skin tones. Other makeup styles explore a wider range of colors, including bold, vibrant, or dark shades that make a stronger visual statement.</p>

<p className='demDem font-bold mt-3'>4. Everyday Versatility</p>
<p className='demDem'>
Nude makeup is highly versatile and suitable for daily wear, work settings, and casual outings. Other makeup styles are often more occasion-specific, designed for events, photoshoots, or nights out rather than everyday use.</p>
</div>
       </div>




  <Images4/>
<div className="space-y-16">
  <TextSlider />
  <EndingPart />
</div>
        </div>
     );
}
 
export default NudeMakeup;