import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Images = () => {
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
        
        const images = [
        "/wis1.webp",
        "/wis2.webp",
        "/wis3.webp",
        "/wis4.webp",
        "/wis5.webp",
        "/wis6.webp",
        "/wis7.webp",
        "/wis8.webp",
        "/wis9.webp",
        "/wis10.webp",
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
    return ( 
        <div className="image-s">
    <div className='mt-12'>
       <p className='aboutUs font-thin text-2xl mb-1 text-center'>Photos</p>
       <h1 className='text-4xl welcome font-bold mb-6 text-center'>Gallery</h1>
      {/* Image Grid */}
<div 
className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  px-7 '
>
  {images.map((src, index) => (
    <div  class="aos-init aos-animate
    " 
      data-aos="fade-in"

     key={index} className='items-center hover:opacity-80 relative group h-[400px]   md:p-12 transition-opacity duration-700 bg-transparent'
     >
      <img
      loading="lazy" 
        src={src}
        alt="gallery"
        className=" cursor-pointer  transition w-full h-full object-cover "
        onClick={() => openLightbox(index)}
      />
      <p className="mt-2 text-center text-2xl  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700  text-white">
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


        </div>

     );
}
 
export default Images;