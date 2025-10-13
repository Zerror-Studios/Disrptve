import { useGSAP } from '@gsap/react'
import { RiArrowRightUpLine } from '@remixicon/react'
import gsap from 'gsap'
import ShowReel from './ShowReel'
import { RiCloseLine, RiPlayFill } from "@remixicon/react";
import { motion, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from "react";

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

    const videoRef = useRef(null);

    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1,
    }
    const mousePosition = {
        x: useSpring(0, spring),
        y: useSpring(0, spring)
    }
    const mouseMove = (e) => {
        gsap.to(".cursor-box", { opacity: 1, duration: .3 })
        const { clientX, clientY } = e;
        const el = document.querySelector(".cursor-box");
        if (el) {
            const { width, height } = el.getBoundingClientRect();
            mousePosition.x.set(clientX - width / 2);
            mousePosition.y.set(clientY - height / 2);
        }
    };
    const mouseLeave = () => {
        gsap.to(".cursor-box", { opacity: 0, duration: .3 })
    }

    const openVideo = () => {
        const video = videoRef.current;
        gsap.to(".hero_video", {
            filter: "brightness(0)",
            duration: 1,
        })
        gsap.to(".reel_txt", {
            y: -100,
            duration: 1,
            onComplete: () => {
                gsap.set(".reel_txt", {
                    y: 100,
                    duration: 1,
                }
                )
            }
        })
        gsap.fromTo(".play_vid_sec", {
            rotate: -20,
            autoAlpha: 0,
            scale: .2,
            clipPath: " polygon(35% 30%, 65% 30%, 65% 60%, 35% 60%)",
        }, {
            scale: 1,
            autoAlpha: 1,
            rotate: 0,
            ease: "expo.inOut",
            duration: 1.5,
            clipPath: " polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            onStart: () => {
                if (window.lenis) lenis.stop();
                if (video) {
                    video.play();
                    video.currentTime = 0;
                    video.muted = false;
                }
            },
        })
    }
    const closeVideo = () => {
        const video = videoRef.current;
        gsap.to(".hero_video", {
            filter: "brightness(1)",
            duration: 1.2,
        })
        gsap.to(".reel_txt", {
            delay: .5,
            y: 0,
            duration: 1,
        })
        gsap.to(".play_vid_sec", {
            rotate: -20,
            scale: .2,
            autoAlpha: 0,
            ease: "expo.inOut",
            duration: 1.5,
            clipPath: "polygon(35% 30%, 65% 30%, 65% 60%, 35% 60%)",
            onComplete: () => {
                if (window.lenis) lenis.start();
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            },
        })
    }

    return (
        <>
            <div
                onClick={closeVideo}
                onMouseMove={mouseMove}
                onMouseEnter={mouseMove}
                onMouseLeave={mouseLeave}
                style={{ clipPath: "polygon(35% 30%, 65% 30%, 65% 60%, 35% 60%)" }}
                className=" play_vid_sec cursor-pointer bg-[#000000] center w-full scale-0 h-screen fixed z-[99] top-0 left-0 ">
                <motion.div
                    className="cursor-box z-[4] opacity-0 fixed top-1/2 lg:top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:left-0 pointer-events-none mix-blend-difference  flex items-center gap-1 "
                    style={{ x: mousePosition.x, y: mousePosition.y }}>
                    <RiCloseLine size={16} />
                    <p className="capitalize font-semibold">close sound</p>
                </motion.div>
                <video ref={videoRef} className="w-[80%] h-[90%] object-cover" loop autoPlay muted controls src="/video/logo_loop.mp4"></video>
            </div>
            <div className=" hero_video_parent w-full h-screen center relative">
                <div className=" absolute font-medium top-1/2 -translate-y-1/2 left-5 uppercase text-sm left_txt">
                    <h2>Disruption</h2>
                </div>
                <div className=" absolute font-medium top-1/2 -translate-y-1/2 right-5 uppercase text-sm right_txt">
                    <h2>by design.</h2>
                </div>

                <div
                    onClick={openVideo} onMouseMove={mouseMove} onMouseEnter={mouseMove} onMouseLeave={mouseLeave}
                    style={{ clipPath: "polygon(15% 20%, 85% 20%, 85% 90%, 15% 90%)" }}
                    className="hero_video brightness-100 w-full h-full ">
                    <ShowReel />
                </div>

            </div>



            <div className="w-full px-5 pt-44 pb-32 items-center flex ">
                <div className="w-[60%] uppercase text-7xl font-semibold ">
                    <h2>a strategy-led </h2>
                    <h2 className='red'>
                        marketing
                    </h2>
                    <h2 className='red'>
                        agency.
                    </h2>
                </div>
                <div className="w-[40%] ">
                    <p className='text-xl leading-tight'>Our process blends rigorous research, bold creativity, and precise execution. From brand strategy to campaigns, digital growth, and even AI - powered agents — we build the next generation of market leaders.</p>

                    <button className=' group mt-5 relative flex items-center gap-1'>
                        <div className="w-0 group-hover:w-[97%] transition-all duration-300  h-[1px] bg-white absolute bottom-0 left-0"></div>
                        <p className=' text-xl group-hover:italic uppercase '>explore now</p>
                        <RiArrowRightUpLine size={20} />
                    </button>

                </div>
            </div >
        </>
    )
}

export default Hero