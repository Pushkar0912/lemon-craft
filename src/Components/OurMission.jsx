import React from 'react'
import cycler from "../assets/cycler.png"

const OurMission = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} id="ourmission" className='min-h-screen flex flex-col justify-end m-2 px-28 pb-8 relative '>
      <div className="w-[350px] space-y-4 animate-slide-up delay-200">
        <img className='w-[310px] h-[120px]' src={cycler} alt="" />
        <p className='w-full'>
          Interweaving scientific accuracy, high quality visualizations, and engaging storytelling to pioneer the uncharted metaverse frontier.
        </p>
      </div>
    </div>
  )
});

export default OurMission;
