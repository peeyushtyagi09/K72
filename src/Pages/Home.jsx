import React from 'react'
import Video from '../components/Home/Video'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeMiddleText from '../components/Home/HomeMiddleText'
import HomeBottomText from '../components/Home/HomeBottomText'
import Navbar from '../components/Navigation/Navbar'

const Home = () => {
  return (
    <div className=''>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>
        <div className='h-screen w-screen relative flex flex-col justify-between'>
            <Navbar/>
            <HomeHeroText/>
            <HomeMiddleText/>
            <HomeBottomText/>
        </div>
    </div>
  )
}

export default Home
