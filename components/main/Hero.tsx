import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='realtive flex flex-col h-full w-full '>
        <video
        autoPlay 
        muted
        loop
        className='rotate-180 absolute top-[-340px] left-0 right-0 bottom-0 w-full h-full object-cover'

        >
            <source src= 'blackhole.webm' type='video/webm' />
            

        </video>
        <HeroContent />
    </div>
  )
}

export default Hero