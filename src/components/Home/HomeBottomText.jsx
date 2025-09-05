import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-8 '>
      <div className='text-[6.5vw] leading-[6.5vw] border-5 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-8 mb-2 uppercase'>
        <Link className='text-[6vw] mt-6 ' to='/projects'>Projets</Link>  
      </div>
      <div className='text-[6.5vw] leading-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-5 border-white rounded-full px-8 mb-2 uppercase'>
      <Link className='text-[6vw] mt-6 ' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
