import React from 'react'
import LineBtn from '../buttons/LineBtn'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {

    useGSAP(() => {

        gsap.from(".vid_ovr_tx", {
            autoAlpha: 0,
            duration: .5,
            ease: "in-out-quint",
            delay: 1.5

        })

        gsap.to(".clip_paren", {
            height: "100%",
            duration: 1,
            ease: "in-out-quint",
            delay: .5
        })
        gsap.to(".clip_paren ,.clip_rd", {
            // scale:0,
            width: 0,
            duration: .5,
            ease: "in-out-quint",
            delay: 1
        })
        gsap.to(".clip_vid", {
            height: "100%",
            width: "100%",
            duration: 1,
            ease: "in-out-quint",
            delay: .5
        })
    })

    return (
        <>
            <div className=" w-full h-[42vh] overflow-hidden md:h-screen relative flex items-end md:items-center ">
                <div className="absolute vid_ovr_tx text-sm md:text-base -translate-y-6 md:translate-y-0 mix-blend-difference uppercase flex px-3 md:px-5 font-semibold w-full z-[1] justify-between">
                    <h3 className=''>disruption</h3>
                    <h3 className=''>by design</h3>
                </div>
                <div className="w-full  h-full flex justify-center items-center">
                    <div className=" h-[0%] clip_paren">
                        <div style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }} className="size-10 clip_rd -translate-y-5 translate-x-1/2 shrink-0 bgred"></div>
                    </div>
                    <video className='w-[0%] clip_vid  h-[0%] object-cover' loop autoPlay muted playsInline src="/video/logo_loop.mp4"></video>
                    <div className="h-[0%] clip_paren flex items-end">
                        <div style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }} className="size-10 clip_rd translate-y-5 -translate-x-1/2 shrink-0 bgred"></div>
                    </div>
                </div>
            </div>
            <div className="w-full px-3 md:px-5 pt-8 gap-5 md:gap-0 md:pt-44 md:pb-32 items-center flex flex-col md:flex-row ">
                <div className=" w-full md:w-[60%]  uppercase leading-none text-4xl lg:text-7xl font-semibold ">
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