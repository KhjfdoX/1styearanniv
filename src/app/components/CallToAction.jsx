// import { Button } from 'flowbite-react';
// export default function CallToAction() {
//   return (
//     <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
//         <div className="flex-1 justify-center flex flex-col">
//             <h2 className='text-2xl'>
//                 You are all the things that make me, you are what keeps me going.
//             </h2>
//             <p className='text-gray-500 my-2'>
//                 Thank you for enduring me for a whole goddamn year.
//             </p>
//         </div>
//         <div className="p-7 flex-1 ml-8">
//             <img src="us123.jpg" />
//         </div>
//     </div>
//   )
// }

// import { Button } from 'flowbite-react';

// export default function CallToAction() {
//   return (
//     <div className='relative flex flex-col lg:flex-row p-8 border-2 border-teal-400 justify-center items-center rounded-3xl shadow-2xl shadow-teal-200/50 text-center bg-gradient-to-br from-white to-blue-50 hover:shadow-teal-300/60 transition-all duration-500 transform hover:-translate-y-1'>
      
//       {/* Background decorative elements */}
//       <div className='absolute -top-4 -left-4 w-8 h-8 bg-pink-400 rounded-full opacity-20 animate-pulse'></div>
//       <div className='absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000'></div>
      
//       {/* Text Content */}
//       <div className="flex-1 justify-center flex flex-col p-6">
//         <h2 className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight'>
//           You are all the things that make me, you are what keeps me going.
//         </h2>
//         <p className='text-gray-600 my-4 text-xl font-light italic'>
//           Thank you for enduring me for a whole goddamn year.
//         </p>
        
//         {/* Optional button */}
//         <div className='mt-6'>
//           <Button gradientDuoTone="purpleToPink" size="lg" className='rounded-full px-8 py-3 font-semibold'>
//             💖 Our Story
//           </Button>
//         </div>
//       </div>
      
//       {/* Image Container */}
//       <div className="flex-1 p-6 lg:ml-8 flex justify-center">
//         <div className='relative'>
//           <div className='absolute -inset-4 bg-gradient-to-r from-teal-400 to-purple-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000'></div>
//           <img 
//             src="us123.jpg" 
//             alt="Our beautiful moment"
//             className='relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500'
//           />
//           {/* Decorative heart */}
//           <div className='absolute -top-4 -right-4 text-4xl animate-bounce'>💕</div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';

export default function CallToAction() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Replace these with your actual image paths
  const images = [
    "us123.jpg",
    "us124.jpg", 
    "us125.jpg",
    "us126.jpg",
    "us127.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='relative flex flex-col lg:flex-row p-8 border-2 border-teal-400 justify-center items-center rounded-3xl shadow-2xl shadow-teal-200/50 text-center bg-gradient-to-br from-white to-blue-50 hover:shadow-teal-300/60 transition-all duration-500 transform hover:-translate-y-1'>
      
      {/* Background decorative elements */}
      <div className='absolute -top-4 -left-4 w-8 h-8 bg-pink-400 rounded-full opacity-20 animate-pulse'></div>
      <div className='absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000'></div>
      
      {/* Text Content */}
      <div className="flex-1 justify-center flex flex-col p-6">
        <h2 className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight'>
          You are all the things that make me, you are what keeps me going.
        </h2>
        <p className='text-gray-600 my-4 text-xl font-light italic'>
          Thank you for enduring me for a whole goddamn year.
        </p>
        
        <div className='mt-6'>
          <Button gradientDuoTone="purpleToPink" size="lg" className='rounded-full px-8 py-3 font-semibold'>
            💖 Our Story
          </Button>
        </div>
      </div>
      
      {/* Image Carousel Container */}
      <div className="flex-1 p-6 lg:ml-8 flex justify-center">
        <div className='relative'>
          {/* Stacked images effect */}
          <div className='relative'>
            {/* Background stacked images */}
            {images.map((_, index) => {
              if (index === currentImageIndex) return null;
              return (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index > currentImageIndex ? 'z-0' : 'z-10'
                  }`}
                  style={{
                    transform: `rotate(${(index - currentImageIndex) * 2}deg) translateX(${(index - currentImageIndex) * 10}px)`,
                    opacity: 0.3 - (Math.abs(index - currentImageIndex) * 0.1)
                  }}
                >
                  <img 
                    src={images[index]}
                    alt={`Memory ${index + 1}`}
                    className='w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-white'
                  />
                </div>
              );
            })}
            
            {/* Main current image */}
            <div className='relative z-20 transform transition-all duration-1000'>
              <div className='absolute -inset-4 bg-gradient-to-r from-teal-400 to-purple-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000'></div>
              <img 
                src={images[currentImageIndex]}
                alt="Our beautiful moment"
                className='relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105'
              />
            </div>
          </div>

          {/* Navigation dots */}
          <div className='flex justify-center mt-6 space-x-2'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-pink-500 scale-120' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Decorative heart */}
          <div className='absolute -top-6 -right-8 text-4xl animate-bounce'>💕</div>
        </div>
      </div>
    </div>
  );
}