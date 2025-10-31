import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const index = () => {
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
            width: "100vw",
            duration: 1,
            ease: "in-out-quint",
        });

        tl.to(".clip_paren", {
            height: "100%",
            duration: 1,
            ease: "in-out-quint",
        }, "<");
    });
    return (
        <>
        <div className="w-full h-screen overflow-hidden">
            <div className="w-full fixed h-screen center  overflow-hidden pointer-events-none">
                <div className=" h-[0%]  clip_paren_1 clip_paren">
                    <div style={{ clipPath: "polygon(0 0, 0% 100%, 90% 0)" }} className="size-14 clip_rd -translate-y-7 translate-x-1/2 shrink-0 bgred"></div>
                </div>
                <div
                    className="w-[0%] shrink-0 clip_vid h-[0%] "></div>
                <div className="h-[0%]  clip_paren_2 clip_paren flex w-14 justify-end items-end">
                    <div style={{ clipPath: "polygon(100% 0, 10% 100%, 100% 100%)" }} className="size-14 clip_rd translate-y-7 -translate-x-1/2 shrink-0 bgred"></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default index