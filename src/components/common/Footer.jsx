import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-96 bg-black text-white font-bold w-full overflow-x-hidden '>
      <div className='h-[20%] w-full flex justify-center items-center'>
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
      <div className='  border-4 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-2 p-1 mb-2 uppercase'>
        <Link className='text-[2vw] ' to='/projects'>BE</Link>  
      </div>
   </div>
        <div className='bg-pink-200 h-full w-full'>
        <div className='text-[2vw] font-[font2]  border-4 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-4 p-1 mb-2 uppercase'>
        <Link className='text-[2vw] mt-6 ' to='/projects'>Contect</Link>  
      </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
