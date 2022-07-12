import React from 'react'
import RightHero from './heroComponents/RightHero'
import SimpleSlider from './heroComponents/SimpleSlider'

const Hero = () => {
  return (
      <div className="Hero flex justify-between p-4 space-x-4 bg-gray-100 py-8">
          <SimpleSlider />
          <RightHero/>
      </div>
  )
}

export default Hero