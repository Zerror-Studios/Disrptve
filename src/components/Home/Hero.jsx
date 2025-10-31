import React, { useEffect } from 'react'
import LineBtn from '../buttons/LineBtn'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { RiArrowRightUpLine } from '@remixicon/react'
import Link from 'next/link'

const Hero = () => {

    useEffect(() => {
        const videos = document.querySelectorAll("video");

        // ✅ Attempt to autoplay all videos on mount (for iOS)
        videos.forEach(video => {
            video.muted = true; // ensure muted
            video.playsInline = true; // allow inline playback on iOS
            video.currentTime = 0;
            // try autoplay programmatically
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // if autoplay is blocked, wait for first user interaction
                    const handleUserGesture = () => {
                        video.play();
                        window.removeEventListener('touchstart', handleUserGesture);
                        window.removeEventListener('click', handleUserGesture);
                    };
                    window.addEventListener('touchstart', handleUserGesture, { once: true });
                    window.addEventListener('click', handleUserGesture, { once: true });
                });
            }
        });
    }, [])


    useGSAP(() => {
        var tl = gsap.timeline()
        tl.to(".clip_paren_1", {
            y: 6,
            x: -5,
            duration: 0.5,
            delay: 0.5,
            ease: "in-out-quint",
        })
        tl.to(".clip_paren_2", {
            y: -6,
            x: 5,
            duration: 0.5,
            ease: "in-out-quint",
        }, "<")


        tl.to(".clip_vid", {
            height: "100%",
            width: "100%",
            duration: 1,
            ease: "in-out-quint",
        });

        tl.to(".clip_paren", {
            height: "100%",
            duration: 1,
            ease: "in-out-quint",
        }, "<");

        tl.to(".clip_paren ,.clip_rd", {
            width: 0,
            duration: 0.5,
            ease: "in-out-quint",
        }, "<+=0.5");

        tl.to(".opa_hero", {
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "in-out-quint",
        })

        if (window.innerWidth <= 768) return
        gsap.to(".clip_vid", {
            y: 200,
            ease: "linear",
            scrollTrigger: {
                trigger: ".hero_paren",
                start: "top top",
                end: "bottom top",
                // markers: true,
                scrub: .4
            }
        })


    });

    return (
        <>
            <div className=" hero_paren mt-[60px] lg:mt-0 w-full aspect-video overflow-hidden md:h-screen relative flex items-end md:items-center ">
                <div className="w-full  h-full flex justify-center items-center">
                    <div className=" h-[0%] clip_paren_1 clip_paren">
                        <div style={{ clipPath: "polygon(0 0, 0% 100%, 90% 0)" }} className="size-14 clip_rd -translate-y-7 translate-x-1/2 shrink-0 bgred"></div>
                    </div>
                    <video
                        className="w-[0%] clip_vid h-[0%] contrast-[.9] object-cover"
                        loop
                        muted
                        playsInline
                        id="heroVideo"
                        src="/video/show_reel.mp4"
                    ></video>
                    <div className="h-[0%] clip_paren_2 clip_paren flex items-end">
                        <div style={{ clipPath: "polygon(100% 0, 10% 100%, 100% 100%)" }} className="size-14 clip_rd translate-y-7 -translate-x-1/2 shrink-0 bgred"></div>
                    </div>
                </div>
            </div>
            <div className=" w-full px-3 md:px-5 pt-10 gap-5 md:gap-0 md:pt-44 md:pb-32 items-center flex flex-col md:flex-row ">
                <div className=" opa_hero opacity-0 w-full md:w-[60%]   uppercase leading-none text-4xl lg:text-7xl font-semibold ">
                    <h2> A Strategy Led </h2>
                    <h2 className='red'>
                        Integrated Growth
                    </h2>
                    <h2 className='red'>
                        Marketing Agency.
                    </h2>
                </div>
                <div className=" w-full md:w-[40%] space-y-8 ">
                    <h2 className=' opa_hero opacity-0 text-xl  lg:w-[80%] leading-none lg:text-3xl md:leading-tight '>Attention is the new currency. <br /> And most brands are overdrawn.</h2>
                    <p className=' opa_hero opacity-0 text-base   leading-none lg:text-xl md:leading-tight'>We build brands that earn it back, with interest.</p>
                    <Link scroll={false} href="/about">
                        <button className=' opa_hero opacity-0 group relative red flex items-center gap-1'>
                            <div className="w-full origin-right group-hover:w-0 transition-all duration-300  h-[1px] bgred absolute bottom-0 right-0"></div>
                            <h3 className=' text-sm lg:text-lg  group-hover:italic uppercase '>about us</h3>
                            <RiArrowRightUpLine size={20} />
                        </button>
                    </Link>
                </div>
            </div >
        </>
    )
}

export default Hero