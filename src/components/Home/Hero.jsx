import { useGSAP } from '@gsap/react'
import { RiArrowRightUpLine } from '@remixicon/react'
import gsap from 'gsap'
import ShowReel from './ShowReel'
import { RiCloseLine, RiPlayFill } from "@remixicon/react";
import { motion, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from "react";
import LineBtn from '../buttons/LineBtn';
import useHeadingAnimation from '../ui/useHeadingAnimation';

const Hero = () => {

    useHeadingAnimation();

    useGSAP(() => {
        gsap.from(".left_txt", {
            x: -200,
            duration: .5,
            ease: "ease-secondary",
            delay: .5
        })
        gsap.from(".right_txt", {
            x: 200,
            duration: .5,
            ease: "ease-secondary",
            delay: .5
        })

        gsap.to(".hero_video", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: .5,
            ease: "ease-secondary",
            delay: .5
        })
        gsap.to(".hero_video", {
            scrollTrigger: {
                trigger: ".hero_video_parent",
                start: "top top",
                pin: true,
                end: "bottom 50%",
                scrub: true,
            },
            width: "100%",
            height: "100%",
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
            <motion.div
                className="cursor-box z-[4] opacity-0 fixed top-1/2 lg:top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:left-0 pointer-events-none mix-blend-difference  flex items-center gap-1 "
                style={{ x: mousePosition.x, y: mousePosition.y }}>
                <RiPlayFill size={16} />
                <p className="capitalize font-semibold">play sound</p>
            </motion.div>
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

            <div className=" hero_video_parent  w-full h-screen center relative">
                <div className=" absolute  top-1/2 -translate-y-1/2 left-3 md:left-5 uppercase text-xl left_txt">
                    <p>Disruption</p>
                </div>
                <div className=" absolute  top-1/2 -translate-y-1/2 right-3 md:right-5 uppercase text-xl right_txt">
                    <p>by design.</p>
                </div>

                <div
                    style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
                    onClick={openVideo} onMouseMove={mouseMove} onMouseEnter={mouseMove} onMouseLeave={mouseLeave}
                    className="hero_video w-[95%] lg:w-[60%] h-[50%] lg:h-[70%] brightness-100 ">
                    <ShowReel />
                </div>

            </div>



            <div className="w-full px-3 md:px-5 pt-16 pb-12 gap-5 md:gap-0 md:pt-44 md:pb-32 items-center flex flex-col md:flex-row ">
                <div className=" w-full md:w-[60%] animate-heading uppercase leading-none text-3xl md:text-7xl font-semibold ">
                    <h2>a strategy-led </h2>
                    <h2 className='red'>
                        marketing
                    </h2>
                    <h2 className='red'>
                        agency.
                    </h2>
                </div>
                <div className=" w-full md:w-[40%] space-y-8 ">
                    <p className=' text-base w-[80%] leading-none md:text-3xl md:leading-none '>Attention is the new currency. <br /> And most brands are overdrawn</p>
                    <p className=' text-base leading-none md:text-xl md:leading-tight'>We build brands that earn it back, with interest.</p>
                    <LineBtn text={"explore now"} />

                </div>
            </div >
        </>
    )
}

export default Hero