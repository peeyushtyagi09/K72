import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { use } from "react"
import { useNavigate } from "react-router-dom";

const FullScreenNav = ({ onClose }) => {
  const navigation = useNavigate()

  const stairParentRef = useRef(null)
  const main = useRef(null)  
  const tlRef = useRef(null);
  const handlecontect = () => {
    navigation('/contact')
  }
  const handleAgence = () => {
    navigation('/agence')
  }
  const handleProject = () => {
    navigation('/projects')
  }

  useGSAP(function() {
    const tl = gsap.timeline({ paused: true }); 

    tl.to(main.current, {
      display:'block',
      backgroundColor:'white'
      })
    tl.from('.stair', {
      height: 0,
      stagger:{
          amount:-0.4
      }
      })
      tl.to(main.current, { 
        backgroundColor:'black'
        })

    tl.from('.link', {
      rotateX: 90,
      scale: 2,
      stagger:{
        amount:0.5
    }
    })
    tl.play(); // play forward on mount
    tlRef.current = tl;
}, []) 



const HandleClose = () => {
  if (tlRef.current) {
    tlRef.current.reverse();
    tlRef.current.eventCallback("onReverseComplete", () => {
      onClose();
    });
  } else {
    onClose();
  }
};

  return (
    <div ref={main} id="fullscreennav" className="fixed inset-0 z-50  bg-black text-white h-screen w-screen overflow-hidden">
       <div ref={stairParentRef} className="h-screen w-screen fixed overflow-x-hidden">
        <div className='h-screen w-full flex '>
              <div className=' stair h-full w-1/5 bg-black'></div>
              <div className=' stair h-full w-1/5 bg-black'></div>
              <div className=' stair h-full w-1/5 bg-black'></div>
              <div className=' stair h-full w-1/5 bg-black'></div>
              <div className=' stair h-full w-1/5 bg-black'></div>
          </div>
       </div>
       <div className="relative">
       <div className='p-5 md:pt-5 pt-20 '> <div className='w-36 '>
         <svg className=' w-full ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44"> <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg> 
         </div>
       </div>
      {/* Close button */} 
      <button 
        onClick={HandleClose}
        className="absolute right-4  xl:-top-20 -top-7 p-2 md:text-[10vw] text-[18vw]  text-white hover:text-[#d2fc51]  transition-colors"
      >
        ×
      </button> 

      <div className="md:py-5 py-28">
        <div className="link origin-top relative border-y-2 border-white ">
          <h1 className="font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
            Project
          </h1>
          <div onClick={handleProject} className="moveLink absolute text-black flex top-0 h-full w-full bg-[#d2fc51] overflow-x-hidden">
            <div className="moveX flex items-center">
              <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714449/Qmd1M7FM9mMSxQXMRNfmitBjUZk4AFqBHsjkxrWu1c3xUq_dt3p7l.avif"
                alt=""
              />
                 <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase ">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714427/QmXR1Jrsk2c6F4HRr9XUtZJL2bxQCoH8iu35dGrWYDbnRv_xzmhgf.avif"
                alt=""
              /> 
            </div>
            <div className="moveX flex items-center">
              <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714449/Qmd1M7FM9mMSxQXMRNfmitBjUZk4AFqBHsjkxrWu1c3xUq_dt3p7l.avif"
                alt=""
              />
                 <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase ">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714427/QmXR1Jrsk2c6F4HRr9XUtZJL2bxQCoH8iu35dGrWYDbnRv_xzmhgf.avif"
                alt=""
              /> 
            </div>
            
          </div>
        </div>

        <div className="link  origin-top relative border-y-2 border-white">
          <h1 className="font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
            Agence
          </h1>
          <div onClick={handleAgence} className="moveLink absolute text-black flex top-0 h-full w-full bg-[#d2fc51] overflow-x-hidden">
            <div className="moveX flex items-center">
              <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714449/Qmd1M7FM9mMSxQXMRNfmitBjUZk4AFqBHsjkxrWu1c3xUq_dt3p7l.avif"
                alt=""
              />
                 <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase ">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714427/QmXR1Jrsk2c6F4HRr9XUtZJL2bxQCoH8iu35dGrWYDbnRv_xzmhgf.avif"
                alt=""
              /> 
            </div>
            <div className="moveX flex items-center">
              <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714449/Qmd1M7FM9mMSxQXMRNfmitBjUZk4AFqBHsjkxrWu1c3xUq_dt3p7l.avif"
                alt=""
              />
                 <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase ">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714427/QmXR1Jrsk2c6F4HRr9XUtZJL2bxQCoH8iu35dGrWYDbnRv_xzmhgf.avif"
                alt=""
              /> 
            </div>
            
          </div>
        </div>

        <div className="link origin-top relative border-y-2 border-white">
          <h1  className="font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
            Contact
          </h1>
          <div onClick={handlecontect} className="moveLink absolute text-black flex top-0 h-full w-full bg-[#d2fc51] overflow-x-hidden">
            <div className="moveX flex items-center">
              <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714449/Qmd1M7FM9mMSxQXMRNfmitBjUZk4AFqBHsjkxrWu1c3xUq_dt3p7l.avif"
                alt=""
              />
                 <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase ">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714427/QmXR1Jrsk2c6F4HRr9XUtZJL2bxQCoH8iu35dGrWYDbnRv_xzmhgf.avif"
                alt=""
              /> 
            </div>
            <div className="moveX flex items-center">
              <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714449/Qmd1M7FM9mMSxQXMRNfmitBjUZk4AFqBHsjkxrWu1c3xUq_dt3p7l.avif"
                alt=""
              />
                 <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase ">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714427/QmXR1Jrsk2c6F4HRr9XUtZJL2bxQCoH8iu35dGrWYDbnRv_xzmhgf.avif"
                alt=""
              /> 
            </div>
            
          </div>
        </div>
        
        <div className="link origin-top relative border-y-2 border-white">
          <h1 className="font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
            Blogue
          </h1>
          <div className="moveLink absolute text-black flex top-0 h-full w-full bg-[#d2fc51] overflow-x-hidden">
            <div className="moveX flex items-center">
              <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714449/Qmd1M7FM9mMSxQXMRNfmitBjUZk4AFqBHsjkxrWu1c3xUq_dt3p7l.avif"
                alt=""
              />
                 <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase ">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714427/QmXR1Jrsk2c6F4HRr9XUtZJL2bxQCoH8iu35dGrWYDbnRv_xzmhgf.avif"
                alt=""
              /> 
            </div>
            <div className="moveX flex items-center">
              <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714449/Qmd1M7FM9mMSxQXMRNfmitBjUZk4AFqBHsjkxrWu1c3xUq_dt3p7l.avif"
                alt=""
              />
                 <h1 className="whitespace-nowrap font-[font1] text-[7vw] text-center leading-[8vw] p-2 pt-3 uppercase ">
                Lorem ipsum dolor
              </h1>
              <img
                className="h-16 w-40 rounded-full shrink-0 object-cover"
                src="https://res.cloudinary.com/djlcf4ix9/image/upload/v1756714427/QmXR1Jrsk2c6F4HRr9XUtZJL2bxQCoH8iu35dGrWYDbnRv_xzmhgf.avif"
                alt=""
              /> 
            </div>
            
          </div>
        </div>


        {/* repeat your other link sections here */}
      </div>
       </div>
    </div>
  );
};

export default FullScreenNav;
