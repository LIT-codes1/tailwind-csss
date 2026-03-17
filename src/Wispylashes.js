import NavigationBarr from './NavigationBar';
import Image from './Image';
import EndingPart from './EndingPart';
import TextSlider from './TextSlider';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import { Link } from 'react-router-dom';






const Wispylashes = () => {
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
    md:text-6xl lack lg:text-7xl lg:leading-[1.2] xl:text-8xl ' data-aos="fade-in">Wispy Lashes</h1>


    <img src='bookImage.webp' alt='a'  className="absolute bottom-0 md:top-0 w-full h-[89%] md:h-full  object-cover object-right-bottom"/>

</div>

   <div className="wispy mt-16">
    <p className='text-center aboutUs font-thin text-2xl mb-3 md:text-3xl 'data-aos="fade-up">Wispy Lashes</p>
    <p className='welcome font-bold text-3xl text-center mb-3 md:text-4xl' data-aos="fade-up">Wispy Lashes</p>
 <Link to='/appoint'> <div className="bt" data-aos="fade-up">
<button className="flex mx-auto items-center justify-center bg-pink-300 px-11 py-2 mt-5  hover:bg-black transition-colors duration-300 z-50">
  <p className="text-white theFont uppercase">Book Treatment Now</p>
</button></div> </Link>

  <div className="mx-auto px-7 xl:px-20 mt-7" data-aos="fade-up">
    <p
    className='z-50 demDem mt-5 text-left '
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
    className='z-50 demDem mt-5 text-left '
         >Known for their versatility, wispy lashes complement all eye shapes and can be
           customized to achieve anything from a subtle everyday look to a glamorous, photo-ready 
           finish. They provide the perfect blend of fullness and texture, making the eyes appear 
           brighter, lifted, and more defined. Lightweight and comfortable to wear, wispy lashes 
           are ideal for clients seeking a refined yet striking lash style that delivers elegance,
            softness, and effortless beauty.</p>
    
   
      
        <p className='font-bold mt-5 demDem'>Difference Between Wispy Lashes and Other Lash Styles</p>
    <p className='demDem font-bold mt-3'>1. Texture & Dimension</p>
    <p className='demDem'>Wispy lashes are designed with a mix of varying lash lengths layered strategically to create texture and depth. This variation gives a soft, fluttery appearance that mimics natural lash growth. Other lash styles, such as classic or volume sets, tend to use more uniform lengths, resulting in a flatter or more structured look.</p>

<p className='demDem font-bold mt-3'>2. Overall Look</p>
<p className='demDem'>Wispy lashes create an airy, effortless finish that enhances the eyes without appearing heavy. They strike a balance between natural and glamorous. In contrast, other lash styles often lean clearly toward either a very natural look (classic lashes) or a bold, dramatic effect (volume lashes).</p>

<p className='demDem font-bold mt-3'>3. Eye-Opening Effect</p>
<p className='demDem'>
    The longer “spikes” in wispy lash sets help lift and elongate the eyes, making them appear more open and awake. Other lash styles generally focus on fullness or density rather than lift, which may not provide the same eye-opening illusion.
</p>

<p className='demDem font-bold mt-3'>4. Customization & Styling</p>
<p className='demDem'>
    Wispy lashes are highly customizable and can be tailored to suit different eye shapes, preferences, and occasions. Lash artists can adjust the placement and length of spikes for a personalized finish. Other lash styles usually follow a more consistent pattern, offering less flexibility in design.
</p>
</div>
       </div>




  <Image />
<div className="space-y-16">
  <TextSlider />
  <EndingPart />
</div>
        </div>
     );
}
 
export default Wispylashes;