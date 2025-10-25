import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import Marquee from 'react-fast-marquee'

const Clients = () => {

    const clientsData = [
        {
            icon: "/images/clients/1_Vishwa_Samudra.png"
        },
        {
            icon: "/images/clients/2_Rupay.png"
        },
        {
            icon: "/images/clients/3_Devgn.png"
        },
        {
            icon: "/images/clients/4_Flipkart.png"
        },
        {
            icon: "/images/clients/5_Golden.png"
        },
        {
            icon: "/images/clients/6_Imagine.png"
        },
        {
            icon: "/images/clients/7_Kuwait.png"
        },
        {
            icon: "/images/clients/8_TATA.png"
        },
        {
            icon: "/images/clients/9_Piramal.png"
        },
        {
            icon: "/images/clients/10_Prominance.png"
        },
        {
            icon: "/images/clients/11_Proost.png"
        },
        {
            icon: "/images/clients/12_Punjab Kings.png"
        },
        {
            icon: "/images/clients/13_Flaunt Your Ink.png"
        },
        {
            icon: "/images/clients/14_SDAF.png"
        },
        {
            icon: "/images/clients/15_Superyou.png"
        },
        {
            icon: "/images/clients/16_TLH.png"
        },
        {
            icon: "/images/clients/17_Candor_Foods.png"
        },
        {
            icon: "/images/clients/18_Guyana.png"
        },
        {
            icon: "/images/clients/19_Ellementry.png"
        },
        {
            icon: "/images/clients/20_Dalhousie.png"
        },
        {
            icon: "/images/clients/21_Meve_Jars.png"
        },
        {
            icon: "/images/clients/22_IMW.png"
        },
        {
            icon: "/images/clients/23_AGP.png"
        },
        {
            icon: "/images/clients/24_Pune United.png"
        },
    ]

    const containerRef = useRef(null);

    useEffect(() => {
        const boxes = containerRef.current.querySelectorAll(".client-box");

        boxes.forEach((box) => {
            const icon = box.querySelector(".client-icon");
            const img = box.querySelector(".client-img");

            box.addEventListener("mouseenter", () => {
                gsap.to(icon, { filter: "invert(100%)", duration: 0.15, ease: "power3.out" });
                gsap.to(img, { opacity: 1, scale: 1, duration: 0.15, ease: "power3.out" });
            });

            box.addEventListener("mouseleave", () => {
                gsap.to(icon, { filter: "invert(0%) grayScale(1)", duration: 0.15, ease: "power3.in" });
                gsap.to(img, { opacity: 0, scale: 1.05, duration: 0.15, ease: "power3.in" });
            });
        });

        return () => {
            boxes.forEach((box) => {
                box.replaceWith(box.cloneNode(true)); // cleanup event listeners
            });
        };
    }, []);

    return (
        <>
            <div className="w-full  lg:pt-20">
                <div className="w-full uppercase overflow-hidden">
                    <Marquee>
                        {[1, 2, 3, 4, 5, 6].map((_, i) => (
                            <div
                                key={i}
                                className=" pl-6 lg:pl-12 gap-6 lg:gap-12 w-fit overflow-hidden flex text-4xl lg:text-7xl whitespace-nowrap justify-between uppercase font-semibold items-center"
                            >
                                <h2 className='block w-fit '>OUR clients</h2>
                                <div className=" size-6 lg:size-12 center ">
                                    <img className="w-full" src="/icons/cut_blocks.svg" alt="" />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div className="w-full my-12 lg:my-32 px-3 lg:px-5">
                    <div
                        ref={containerRef}
                        className="w-full border border-[#8585855b] grid grid-cols-3 md:grid-cols-6"
                    >
                        {clientsData
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className="client-box aspect-square border border-[#8585855b] overflow-hidden relative flex items-center justify-center"
                                >
                                    <img
                                        className="client-icon grayscale-100 absolute z-[1] w-[90%] "
                                        src={item.icon}
                                        alt=""
                                    />
                                    <img
                                        className="client-img absolute w-full h-full object-cover opacity-0 "
                                        src="/images/clients/clientsBg.jpg"
                                        alt=""
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Clients