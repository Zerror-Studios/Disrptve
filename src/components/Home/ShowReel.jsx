import { useGSAP } from "@gsap/react";
import { RiCloseLine, RiPlayFill } from "@remixicon/react";
import { motion, useSpring } from 'framer-motion';
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const ShowReel = () => {
    const videoRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            ".show_reel_video",
            { y: -200 },
            {
                y: 200,
                ease: "linear",
                scrollTrigger: {
                    trigger: ".show_reel_paren",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.4,
                },
            }
        );
    });

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
        gsap.to(".show_reel_video",{
            filter: "brightness(0.2)",
            duration: 1.2,
        })
        gsap.fromTo(".play_vid_sec", {
            rotate: -20,
            autoAlpha:0,
            scale: .2,
            clipPath: " polygon(35% 30%, 65% 30%, 65% 60%, 35% 60%)",
        }, {
            scale: 1,
            autoAlpha:1,
            rotate: 0,
            ease: "expo.inOut",
            duration: 1.5,
            clipPath: " polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            onStart: () => {
                if(window.lenis) lenis.stop();
                if (video) {
                    video.currentTime = 0;
                    video.muted = false;
                    video.play();
                }
            },
        })
    }
    const closeVideo = () => {
        const video = videoRef.current;
        gsap.to(".show_reel_video",{
            filter: "brightness(0.7)",
            duration: 1.2,
        })
        gsap.to(".play_vid_sec", {
            rotate: -20,
            scale: .2,
            autoAlpha:0,
            ease: "expo.inOut",
            duration: 1.5,
            clipPath: "polygon(35% 30%, 65% 30%, 65% 60%, 35% 60%)",
            onComplete: () => {
                if(window.lenis) lenis.start();
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
                className=" play_vid_sec cursor-pointer bg-[#0E0E0E] center w-full scale-0 h-screen fixed z-[9] top-0 left-0 ">
                <motion.div
                    className="cursor-box z-[4] opacity-0 fixed top-1/2 lg:top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:left-0 pointer-events-none mix-blend-difference  flex items-center gap-1 "
                    style={{ x: mousePosition.x, y: mousePosition.y }}>
                    <RiCloseLine size={16} />
                    <p className="capitalize font-semibold">close reel</p>
                </motion.div>
                <video ref={videoRef} className="w-[80%] h-[90%] object-cover brightness-[.8]" loop autoPlay controls src="/video/show_reel.mp4"></video>
            </div>





            <div
                onClick={openVideo} onMouseMove={mouseMove} onMouseEnter={mouseMove} onMouseLeave={mouseLeave}
                className="show_reel_paren relative my-32 overflow-hidden w-full h-[120vh] flex items-center cursor-pointer justify-center"
            >

                <motion.div
                    className="cursor-box z-[4] opacity-0 fixed top-1/2 lg:top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:left-0 pointer-events-none mix-blend-difference  flex items-center gap-1 "
                    style={{ x: mousePosition.x, y: mousePosition.y }}>
                    <RiPlayFill size={16} />
                    <p className="capitalize font-semibold">play reel</p>
                </motion.div>

                <p className="uppercase text-5xl absolute z-[1]">Showreel</p>

                <video
                    className="show_reel_video brightness-[.7]"
                    loop
                    autoPlay
                    muted
                    playsInline
                    src="/video/show_reel.mp4"
                ></video>
            </div>
        </>
    );
};

export default ShowReel;
