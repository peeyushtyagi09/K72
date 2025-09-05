import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from 'react-router-dom'
import Navbar from '../components/Navigation/Navbar'

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
    const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Marquee movement
      gsap.to(".scroll-text", {
        xPercent: -100,
        repeat: -1,
        ease: "linear",
        duration: 25,
      });

      // Rotation on scroll
      gsap.to(containerRef.current, {
        rotate: -15,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",   // when enters viewport
          end: "bottom top",     // until leaves
          scrub: true,           // smooth sync with scroll
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='w-full text-white bg-black font-[font2] h-screen '>
      <Navbar />
      <div className='overflow-x-hidden'>
      <div className='flex h-fit w-full pb-30 pt-20 md:pt-5 overflow-x-hidden'>
        <div className=' md:text-[1vw] text-[1.5vw] w-[20%]   text-center items-end justify-center flex md:p-13 p-4   md:pb-20'>
            <h1>Dans un écran ou un bureau.
                Chez vous. Chez nous.
                Partout.</h1>
        </div>
        <div className=' text-[10vw] w-[60%]  items-center text-center  justify-center flex uppercase p-3 '>
            <h1 className='leading-[8.5vw]'>
            Pour <br/>
            parler de <br/>
            votre <br/>
            projet <br/>
            </h1>
        </div>
        <div className=' md:text-[1vw] text-[1.5vw] w-[20%] text-center  items-end justify-center flex md:p-13 p-4 md:pb-20'>
            <h1> 
            525 Av. Viger O - Suite 400
            Montréal, QC H2Z 1G6 →
            </h1>
        </div>
      </div>
      <div className=' w-screen h-fit bg-black pb-40'>
      <div  ref={containerRef} className=" h-fit w-screen overflow-x-hidden bg-[#d2fc51] flex items-center rotate-6 pt-5 pb-5 ">
      <div className="flex text-8xl uppercase font-[font2] text-black whitespace-nowrap scroll-text ">
        <p className="pr-10">bonjour@k72.ca</p>
        <p className="pr-10">bonjour@k72.ca</p>
        <p className="pr-10">bonjour@k72.ca</p>
        <p className="pr-10">bonjour@k72.ca</p>
        <p className="pr-10">bonjour@k72.ca</p>
        <p className="pr-10">bonjour@k72.ca</p>
        
        <p className="pr-10">bonjour@k72.ca</p>
        <p className="pr-10">bonjour@k72.ca</p>
        <p className="pr-10">bonjour@k72.ca</p>
        <p className="pr-10">bonjour@k72.ca</p>
        <p className="pr-10">bonjour@k72.ca</p>
      </div>
    </div>
    <div className='items-center mt-30  flex flex-col '>
        <div className='text-2xl items-center justify-center font-[font2] m-4'>
        Suivez-nous
        </div>
   <div className='flex gap-3'>
   <div className='text-[6.5vw] leading-[6.5vw] border-5 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-8 mb-2 uppercase'>
        <Link className='text-[6vw] mt-6 ' to='/projects'>FB</Link>  
      </div>
      <div className='text-[6.5vw] leading-[6.5vw] border-5 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-8 mb-2 uppercase'>
        <Link className='text-[6vw] mt-6 ' to='/projects'>IG</Link>  
      </div>
      <div className='text-[6.5vw] leading-[6.5vw] border-5 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-8 mb-2 uppercase'>
        <Link className='text-[6vw] mt-6 ' to='/projects'>IN</Link>  
      </div>
      <div className='text-[6.5vw] leading-[6.5vw] border-5 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-8 mb-2 uppercase'>
        <Link className='text-[6vw] mt-6 ' to='/projects'>BE</Link>  
      </div>
   </div>
    </div>    
      </div>
      </div>
    </div>
  )
}

export default Contact
