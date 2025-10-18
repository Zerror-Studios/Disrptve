import React from 'react'
import LineBtn from '../buttons/LineBtn'
import useHeadingAnimation from '../ui/useHeadingAnimation'
import useTextYAnimation from '../ui/useTextYAnimation'

const Hero = () => {
    useHeadingAnimation()
    useTextYAnimation()
    return (
        <>
            <div className=" w-full h-[50vh] md:h-screen relative flex items-end md:items-center ">
                <div className="absolute text-sm md:text-base -translate-y-6 md:translate-y-0 mix-blend-difference uppercase flex px-3 md:px-5 font-semibold w-full z-[1] justify-between">
                    <h3 className='animate-heading'>disruption</h3>
                    <h3 className='animate-heading'>by design</h3>
                </div>
                <video className='w-full h-full object-cover' loop autoPlay muted playsInline src="/video/logo_loop.mp4"></video>
            </div>
            <div className="w-full px-3 md:px-5 py-14 gap-5 md:gap-0 md:pt-44 md:pb-32 items-center flex flex-col md:flex-row ">
                <div className=" w-full md:w-[60%] animate-heading uppercase leading-none text-4xl lg:text-7xl font-semibold ">
                    <h2>a strategy-led </h2>
                    <h2 className='red'>
                        marketing
                    </h2>
                    <h2 className='red'>
                        agency.
                    </h2>
                </div>
                <div className=" w-full md:w-[40%] space-y-8 ">
                    <h2 className=' text-xl  lg:w-[80%] leading-none lg:text-3xl md:leading-tight '>Attention is the new currency. <br /> And most brands are overdrawn</h2>
                    <p className=' text-base   leading-none lg:text-xl md:leading-tight'>We build brands that earn it back, with interest.</p>
                    <LineBtn text={"explore now"} href={'/about'} />
                </div>
            </div >
        </>
    )
}

export default Hero