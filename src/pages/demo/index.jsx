import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const index = () => {
    

    useGSAP(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".paeen",
                start: "top top",
                end:"600% top",
                scrub: .4,
                markers: true,
                pin: true,
            }
        });

        tl.from(".box1", {
            width: 0,
            ease: "linear",
        })
        tl.from(".box2,.box3,.box4,.box5,.box6,.box7,.box8", {
            opacity: 0,
            width: "30vw",
            ease: "linear",
            stagger: 0.01
        })
        tl.to(".box1", {
            width: "100vw"
        }, "pa")
        tl.to(".box2", {
            width: "110vw"
        }, "pa")
        tl.to(".box3", {
            width: "120vw"
        }, "pa")
        tl.to(".box4", {
            width: "130vw"
        }, "pa")
        tl.to(".box5", {
            width: "140vw"
        }, "pa")
        tl.to(".box6", {
            width: "150vw"
        }, "pa")
        tl.to(".box7", {
            width: "160vw"
        }, "pa")
        tl.to(".box8", {
            width: "170vw"
        }, "pa")

        tl.to(".expad",{
            height:"auto",
            ease:"linear"
        },)
    })

    return (
        <>
            <div className="paeen w-full h-screen relative flex  items-center justify-center text-center overflow-hidden">
                <div className=" w-full text-center absolute text-4xl  text-white font-semibold z-[10]">
                    <h2>ABOUT</h2>
                    <div className=" expad w-full overflow-hidden flex flex-col space-y-10 h-0 items-center ">
                        <p className='w-[60%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt odio, facere consequuntur commodi repellat quod perferendis reiciendis sed explicabo beatae!</p>
                        <p className='w-[60%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt odio, facere consequuntur commodi repellat quod perferendis reiciendis sed explicabo beatae!</p>
                        <p className='w-[60%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt odio, facere consequuntur commodi repellat quod perferendis reiciendis sed explicabo beatae!</p>
                    </div>
                </div>
                <div className="box1 drop-shadow-2xl  absolute z-[9] aspect-square w-[30vw] bg-green-700 "></div>
                <div className="box2 drop-shadow-2xl  absolute z-[8] aspect-square w-[40vw] bg-green-700 "></div>
                <div className="box3 drop-shadow-2xl  absolute z-[7] aspect-square w-[50vw] bg-green-700 "></div>
                <div className="box4 drop-shadow-2xl  absolute z-[6] aspect-square w-[60vw] bg-green-700 "></div>
                <div className="box5 drop-shadow-2xl  absolute z-[5] aspect-square w-[70vw] bg-green-700 "></div>
                <div className="box6 drop-shadow-2xl  absolute z-[4] aspect-square w-[80vw] bg-green-700 "></div>
                <div className="box7 drop-shadow-2xl  absolute z-[3] aspect-square w-[90vw] bg-green-700 "></div>
                <div className="box8 drop-shadow-2xl  absolute z-[2] aspect-square w-[100vw] bg-green-700 "></div>
            </div>
        </>
    )
}

export default index