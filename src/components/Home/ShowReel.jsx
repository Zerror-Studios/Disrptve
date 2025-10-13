import { useGSAP } from "@gsap/react";
import { RiCloseLine, RiPlayFill } from "@remixicon/react";
import { motion, useSpring } from 'framer-motion';
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const ShowReel = () => {
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



    return (
        <>

            <div
                 onMouseMove={mouseMove} onMouseEnter={mouseMove} onMouseLeave={mouseLeave}
                className="show_reel_paren relative  overflow-hidden w-full h-[100vh] flex items-center cursor-pointer justify-center"
            >

                <motion.div
                    className="cursor-box z-[4] opacity-0 fixed top-1/2 lg:top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:left-0 pointer-events-none mix-blend-difference  flex items-center gap-1 "
                    style={{ x: mousePosition.x, y: mousePosition.y }}>
                    <RiPlayFill size={16} />
                    <p className="capitalize font-semibold">play sound</p>
                </motion.div>
                {/* <div className="block absolute z-[1] overflow-hidden">
                    <p className=" reel_txt uppercase text-5xl ">Showreel</p>
                </div> */}

                <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    src="/video/logo_loop.mp4"
                ></video>
            </div>
        </>
    );
};

export default ShowReel;
