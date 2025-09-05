import React from 'react'

const ProjectCards = (props) => {
  return (
    <div className='w-full h-full flex -pt-28'>
        <div className=' relative  h-[98%] w-1/2 bg-green-200 mr-1 hover:rounded-[5vw] transition-all ease-in-out duration-300 overflow-hidden'>
        <img className='w-full h-[100%] object-cover' src={props.image1} alt="" />
        <div className=" opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/50 transition-all ease-in-out duration-500">
            <h1 className="text-[4vw] border-4 border-white rounded-4xl  fount-bold uppercase p-1">&nbsp; Voir le projet &nbsp;</h1>
        </div>
        </div>
        <div className=' relative  h-[98%] w-1/2 bg-green-200 mr-1 hover:rounded-[5vw] transition-all ease-in-out duration-300 overflow-hidden'>
        <img className='w-full h-[100%] object-cover' src={props.image2} alt="" />
        <div className=" opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/50 transition-all ease-in-out duration-500">
            <h1 className="text-[4vw] border-4 border-white rounded-4xl  fount-bold uppercase p-1">&nbsp; Voir le projet &nbsp;</h1>
        </div>
        </div>
    </div>
  )
}

export default ProjectCards
