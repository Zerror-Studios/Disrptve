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
                className="show_reel_paren relative  overflow-hidden w-full h-full flex items-center cursor-pointer justify-center"
            >

                {/* <div className="block absolute z-[1] overflow-hidden">
                    <p className=" reel_txt uppercase text-5xl ">Showreel</p>
                </div> */}

                <video
                    className="w-full h-full object-cover "
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
