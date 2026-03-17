import EndingPart from './EndingPart';
import NavigationBarr from './NavigationBar';
import TextSlider from './TextSlider';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from 'react-router-dom';



const Pricing = () => {
              useEffect(() => {
              AOS.init({
                duration: 1000,
                once: true
              });
            }, []);
    return ( 
        <div className="pricin-g">

                        <div className="relative  h-[30rem] ">
              <NavigationBarr />
            <div className="relative  h-[30rem] md:h-[25rem] flex justify-center items-center ">

    <h1 className='text-white relative  w-fit z-10 playfairDisplay mx-auto text-5xl mt-10 
    md:text-6xl lack lg:text-7xl lg:leading-[1.2] xl:text-8xl ' data-aos="fade-in">Pricing</h1>


    <img src='bookImage.webp' alt='a'  className="absolute bottom-0 md:top-0 w-full h-[89%] md:h-full  object-cover object-right-bottom"/>

</div>
</div>
     <div className="pricingPart mt-16 md:mt-0   lg:px-5 xl:px-10">
      <p className='text-center aboutUs text-2xl'data-aos="fade-up">Pricing</p>
      <p className='welcome font-bold text-3xl text-center'data-aos="fade-up">Pricing Plans</p>


<div className="flex flex-col md:flex-row   items-center mt-5 p-5">
      <div data-aos="zoom-in" className="box1 w-[100%] h-[400px]  bg-slate-600 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-[14px]">
        <img src='model.webp' alt='a'  className='w-44  text-center mx-auto p-5 mt-5'/>
        <p className='Playfair Display  text-2xl text-center text-white  font-bold'>Wispy Lashes</p>
        <div className="mt-10  px-7  mx-auto">
        <p className='Poppins2 text-white '>Wispy Lashes ............................... $210</p>
        <p className='LATO Display text-white mt-1'>This is a rough estimate each client will be assessed individual</p>
        <p className=' LATO text-white mt-1'>Service Duration 1 hour</p>
</div>
      </div>
      <div data-aos="zoom-in"  className="box1 w-[100%] h-[380px] bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.12),0_20px_40px_rgba(0,0,0,0.10)] text-[14px]">
            <img src='model2.webp' alt='a'  className='w-44  text-center mx-auto p-5 mt-5'/>
        <p className='Playfair Display  text-2xl text-center text-black  font-bold'>Nude Makeup</p>
        <div className="mt-10  px-7  mx-auto">
        <p className='Poppins2 text-black '>Wispy Lashes ............................... $295</p>
        <p className='LATO Display text-black mt-1'>This is a rough each estimate client will be assessed individual</p>
        <p className=' LATO text-black mt-1'>Service Duration 3 hour</p>
</div>
      </div>
</div>

<div className="flex flex-col  md:flex-row-reverse  items-center mt-5 p-5">
      <div data-aos="zoom-in"  className="box1 w-[100%] h-[400px]  bg-slate-600 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-[14px]">
        <img src='model.webp' alt='a'  className='w-44  text-center mx-auto p-5 mt-5'/>
        <p className='Playfair Display  text-2xl text-center text-white  font-bold'>Matte Makeup</p>
        <div className="mt-10  px-7  mx-auto">
        <p className='Poppins2 text-white '>Wispy Lashes ............................... $200</p>
        <p className='LATO Display text-white mt-1'>This is a rough estimate each client will be assessed individual</p>
        <p className=' LATO text-white mt-1'>Service Duration 1 hour</p>
</div>
      </div>
      <div data-aos="zoom-in"  className="box1 w-[100%] h-[380px] bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.12),0_20px_40px_rgba(0,0,0,0.10)] text-[14px]">
            <img src='model2.webp' alt='a'  className='w-44  text-center mx-auto p-5 mt-5'/>
        <p className='Playfair Display  text-2xl text-center text-black  font-bold'>Micro Shading</p>
        <div className="mt-10  px-7  mx-auto">
        <p className='Poppins2 text-black '>Wispy Lashes ............................... $280</p>
        <p className='LATO Display text-black mt-1'>This is a rough estimate each client will be assessed individual</p>
        <p className=' LATO text-black mt-1'>Service Duration 2 hour</p>
</div>
      </div>
</div>
    </div>

<Link to='/appoint'>
<div className="bt" data-aos="fade-up" >
 <button className="flex mx-auto items-center justify-center bg-pink-300 px-11 py-3 w-56 h-11 mt-9 hover:bg-black transition-colors duration-300 z-50">
  <p className="text-white theFont">Book Now</p>
</button></div></Link>

<div className="space-y-16">
  <TextSlider/>
  <EndingPart />
</div>

        </div>
     );
}
 
export default Pricing;