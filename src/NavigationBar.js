import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  useState } from 'react'
import { Link } from 'react-router-dom'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const NavigationBarr = () => {

const [open, setOpen] = useState(false);
const [render, setRender] = useState(false);
const [open2, setOpen2] = useState(false);
const [open3, setOpen3] = useState(false);

const [hovered, setHovered] = useState(false);

const visible = open3 || hovered;
const [render2, setRender2] = useState(false);




const toggleMenu = () => {
  if (!render) {
    setRender(true);   // mount first
    setOpen(true);    // then animate in
  } else {
    setOpen(false);   // animate out
  }
};



const toggleMenu2 = () => {
  if (!render2) {
    setRender2(true)

    // wait for mount before animating
    requestAnimationFrame(() => {
      setOpen2(true)
    })
  } else {
    setOpen2(false)
  }
}




const handleAnimationEnd = () => {
  if (!open) {
    setRender(false); 
    // remove after slide-out
  }

  if(!open2) {
 setRender2(false);
  }

  
  if(!open3) {
 setRender3(false);
  }
};


      
        
    return (
        <div className="Navigation-Bar text-center absolute w-full">

          <div className="relative   w-full h-auto z-30 ">
          
          
          <div className="relative bg-black/20 z-50 text-white">
          
            {/* content */}
            <div className="relative flex items-center md:justify-around lg:justify-between xl:justify-around">
              <img alt='a'
                src="cutie.webp"
                className="w-36 h-36 p-3 xl:w-20 xl:h-20
                 md:w-16 md:h-16 md:p-2 md:ml:0
                   lg:p-1 xl:p-2
                 rounded-full object-cover
                  "
              />
              <div className="beside space-x-5 lg:space-x-6 xl:space-x-7 hidden md:flex Poppins2 ">
       <Link to='/'>     <p>Home</p>  </Link>  


       <div className="park
       "     onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}
       >
          <Link to='/service'>    <p>Service   
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className=" right-3 cursor-pointer"
                      //  onClick={toggleMenu3}
                      onClick={() => setOpen3(prev => !prev)}

                  />  
                 
<div
  className={`
    absolute z-100 bg-white h-auto w-auto 
    transition-all duration-1000 ease-in-out
        ${visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6 pointer-events-none"}
  `}>
    <div className='servicesBox1 hover:bg-black transition-color duration-300 border-2 border-white'>
   <Link to='/wispy'>   <p className='text-left text-black px-9 py-3 hover:text-white  Poppins'>Wispy Lashes</p> </Link>
    </div>

        <div className='servicesBox1 hover:bg-black transition-color duration-300 border-2 border-white'>
    <Link to='/matte'>    <p className='text-left text-black px-9 py-3 hover:text-white  Poppins'>Matte Makeup</p> </Link>
    </div>

    <div className='servicesBox1 hover:bg-black transition-color duration-300 border-2 border-white'>
   <Link to='/micro'>   <p className='text-left text-black px-9 py-3 hover:text-white  Poppins'>Micro Shading</p> </Link>
    </div>

        <div className='servicesBox1 hover:bg-black  transition-color duration-300 border-2 border-white'>
   <Link to='/nude'>    <p className='text-left text-black px-9 py-3 hover:text-white  Poppins z-50'>Nude Makeup</p> </Link>
    </div>

</div>
 </p> </Link>
              </div>

         <Link to='/appoint'> <p>Book Now</p> </Link>  
         <Link to='/price'> <p>Pricing</p> </Link>
         <Link to='/about'> <p>About Us</p> </Link>
         <Link to='/contact'> <p>Contact</p> </Link>
              </div>
          
               <button className=" justify-center items-center   px-8 py-2   bor border-[2px] border-white
               hidden md:flex lg:me-10 hover:bg-pink-300 transition-colors duration-500
               ">
           <Link to='/appoint'><p className='text-center text-white Poppins2 '>Book  Appointment <FontAwesomeIcon icon={faAngleRight} /></p> </Link>
           </button>
          
            </div>
          </div>
          
          
          
          </div>
                <div className="absolute top-14 right-5 z-50 cursor-pointer" >

<div className="  md:hidden z-50 " >

  <button onClick={toggleMenu} >
    <FontAwesomeIcon
      icon={open ? faBars : faBars}
      className="text-2xl text-white cursor-pointer z-50"
    />
  </button>


</div>

</div>
{render &&(


<div     
    className= 'h-auto  p-2 md:hidden  absolute top-24   z-100  flex justify-center  items-center w-full inter imp'
    >
<div 
  onAnimationEnd={handleAnimationEnd}
    className={`
      execute
      ${open ? "fade-in-top" : "fade-out-top"}
w-[100%] bg-white/90 z-50   text-gray-700  demLat `}>

   
,<Link to='/'><p className="p-3 bg--400 hover:bg-green-600 transition-colors duration-300 hover:text-white mt-[-24px]">
  Home
</p> </Link>

<p className="p-3 bg--400 hover:bg-green-600 transition-colors duration-300 hover:text-white relative">
 <Link to='/service'> Services </Link> 
<FontAwesomeIcon
  icon={faCaretDown}
  className="absolute right-3 cursor-pointer"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu2();
  }}
/>
</p>

{render2 && (
  <div
    onAnimationEnd={handleAnimationEnd}
    className={`
      execute
      innerDiv
      bg-white
      text-[14px]
      ${open2 ? 'slide-in' : 'slide-out'}
    `}
  >
   <Link to='/wispy'><p className='p-2  hover:bg-green-600 transition-colors duration-300 hover:text-white'>Wispy Lashes</p></Link> 
   <Link to='/matte'> <p className='p-2  hover:bg-green-600 transition-colors duration-300 hover:text-white'>Matte Makeup</p> </Link>
  <Link to='/micro'> <p className='p-2  hover:bg-green-600 transition-colors duration-300 hover:text-white'>Micro Shading</p>  </Link> 
  <Link to='/nude'> <p className='p-2  hover:bg-green-600 transition-colors duration-300 hover:text-white'>Nude Makeup</p>  </Link> 


  </div>
    )}
<Link to='/appoint'> <p className="p-3 bg--400 hover:bg-green-600 transition-colors duration-300 hover:text-white demLat">Book Now</p> </Link> 
<Link to='/price'>  <p className="p-3 bg--400 hover:bg-green-600 transition-colors duration-300 hover:text-white ">Pricing</p> </Link>
<Link to='/about'> <p className="p-3 bg--400 hover:bg-green-600 transition-colors duration-300 hover:text-white">About Us</p> </Link> 
<Link to='/contact'> <p className="p-3 bg--400 hover:bg-green-600 transition-colors duration-300 hover:text-white "   >Contact</p> </Link> 
</div>
</div>
)}
        </div>
      );
}
 
export default NavigationBarr;
