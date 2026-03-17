import NavigationBarr from './NavigationBar';
import { useEffect } from "react";
import EndingPart from './EndingPart';
import { Link } from 'react-router-dom';
import TextSlider from './TextSlider';
import AOS from "aos";
import "aos/dist/aos.css";
const Aboutt = () => {

            useEffect(() => {
            AOS.init({
              duration: 1000,
              once: true
            });
          }, []);
    

      

      




    return ( 
        
      <div className="about-t">
                                <div className="relative  h-[30rem] ">
             <NavigationBarr />
            <div className="relative  h-[30rem] md:h-[25rem] flex justify-center items-center ">

    <h1 className='text-white relative  w-fit z-10 playfairDisplay mx-auto text-5xl mt-10 
    md:text-6xl lack lg:text-7xl lg:leading-[1.2] xl:text-8xl ' data-aos="fade-in">About Us</h1>


    <img src='bookImage.webp' alt='a'  className="absolute bottom-0 md:top-0 w-full h-[89%] md:h-full  object-cover object-right-bottom"/>

</div>
        </div>


  <div className="lower1 grid mt-14
    md:grid-cols-2 md:mt-5 mb-3  overflow-x-hidden
  ">
  <img src='redlips.webp' data-aos="fade-right"
   className=' h-80 md:h-96 text-center mx-auto   imgSet
   md:my-auto lg:h-[450px]  xl:h-[520px]'
   alt='a' 
    />
    <div className="textBelowLower1  text-left w-[90%] mx-5 md:mx-0 mustUseColor">
    <p className= 'aboutUs font-thin mb-3 ' data-aos="fade-left">Background</p>
    <p className=' mb-3 demLat lineee' data-aos="fade-left" >
  At Mhidey Beauty & Lashes, we believe every woman deserves to look and feel effortlessly beautiful.
  Mhidey specializes in professional makeup artistry and luxury lash enhancements that elevate your natural beauty with precision and care.</p>


<p className='mb-3 demLat sm:text- lineee   ' data-aos="fade-left">
Our services include soft glam and bridal makeup, classic, hybrid, and volume 
lash extensions, as well as lash lifts and tints.
 With a passion for detail and a commitment to excellence, 
 we focus on enhancing your features in a way that feels authentic, 
 elegant, and uniquely tailored to you.</p>

 <p className= 'mb-3 demLat sm:text- lineee  '   data-aos="fade-left">
Every appointment is designed to be more than just a beauty service, 
it is a personalized experience. From skin preparation to the final touch,
 we use high-quality products and advanced techniques to ensure flawless, 
 long-lasting results. Whether you desire a subtle everyday glow or a statement
  look for a special occasion, our artistry is centered on balance, sophistication, 
  and confidence..</p>


  <p className=' mb-3 demLat sm:text- lineee  '   data-aos="fade-left">
At Mhidey Beauty & Lashes, beauty is not about transformation—it’s about refinement. We enhance what you already have, bringing harmony to your features and creating a polished finish that radiates grace, poise, and undeniable charm.</p>

<Link to="/about"> <button data-aos="fade-left" className=  'justify-center items-center bg-pink-300 px-14 py-2 mt-8  hover:bg-black transition-colors duration-500 rounded-sm '>
  <p className='text-center text-white theFont '>Contact Us</p>
 </button>  </Link>
    </div>
    </div>

    <TextSlider />
  <div className="team mx-auto w-[75%] md:w-[60%] lg:w-[50%] xl:w-[40%] mb-10 mt-32" >
<p className='text-center aboutUs font-thin text-2xl mb-3 md:text-3xl'>Team</p>
<p className='welcome font-bold text-3xl text-center mb-3 md:text-4xl'>Meet Expert</p>


    <div className="experrt mx-auto   h-[500px] bg-slate-600 longie" data-aos="zoom-in">
    <img src='expert.webp' alt='a'  className='w-full h-[85%] md:h-[85%]  mt-5 object-cover md:object-center'/>
    <div className="mt-3 md:mt-4">
   <p className='text-white playfairDisplay text-center text-xl '>Rebecca Paollo</p>
    <p className='text-white text-center LATO text-[14px] '>Professional Beauty Artist</p>
    </div>
 
    </div>
    </div>


    <EndingPart />


      </div>        
        
     );
}
 
export default Aboutt;