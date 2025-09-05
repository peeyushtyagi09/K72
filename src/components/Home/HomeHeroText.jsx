import React from 'react'
import Video from './Video'
const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 md:mt-5  mt-24 text-center space-y-2 '>
      
      <div className='text-[9.5vw] uppercase flex justify-center item-center leading-[8vw]'>
      L'étincelle
        </div>
      <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9vw] gap-4 overflow-hidden '>
      qui
      <div className='h-[7vw] w-[16vw] rounded-2xl object-cover  overflow-hidden transition-all duration-500'>
        <Video />
      </div>

                génère</div>
      <div className='text-[9.5vw]  flex justify-center item-center uppercase leading-[8vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText
