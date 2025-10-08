import { useGSAP } from '@gsap/react'
import { RiArrowRightUpLine } from '@remixicon/react'
import gsap from 'gsap'
import React from 'react'

const Hero = () => {

    useGSAP(() => {
        gsap.to(".hero_video", {
            scrollTrigger: {
                trigger: ".hero_video_parent",
                start: "top top",
                end: "bottom 50%",
                scrub: true,
            },
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        })
    })

    return (
        <>
            <div className=" hero_video_parent w-full h-screen center relative">
                <div className=" absolute font-medium top-1/2 -translate-y-1/2 left-5 uppercase text-sm left_txt">
                    <p>Disruption</p>
                </div>
                <div className=" absolute font-medium top-1/2 -translate-y-1/2 right-5 uppercase text-sm right_txt">
                    <p>by design.</p>
                </div>
                <div
                    style={{ clipPath: "polygon(15% 20%, 85% 20%, 85% 90%, 15% 90%)" }}
                    className="hero_video w-full h-full bg-red-500">
                    <video loop autoPlay muted playsInline className='w-full h-full object-cover' src="/video/hero_video.mp4"></video>
                </div>
            </div>



            <div className="w-full px-5 py-32 items-center flex ">
                <div className="w-[60%] uppercase text-7xl font-semibold ">
                    <p>a strategy-led </p>
                    <p className='red'>
                        marketing
                    </p>
                    <p className='red'>
                        agency.
                    </p>
                </div>
                <div className="w-[40%] ">
                <p className='text-xl leading-tight'>Our process blends rigorous research, bold creativity, and precise execution. From brand strategy to campaigns, digital growth, and even AI - powered agents — we build the next generation of market leaders.</p>
                <button className=' group mt-5 relative flex items-center gap-1'>
                    <div className="w-0 group-hover:w-[97%] transition-all duration-300  h-[1px] bg-white absolute bottom-0 left-0"></div>
                    <p className=' text-xl group-hover:italic uppercase '>explore now</p>
                    <RiArrowRightUpLine size={20}/>
                </button>

                </div>
            </div >
        </>
    )
}

export default Hero