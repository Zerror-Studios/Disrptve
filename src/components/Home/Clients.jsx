import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import Marquee from 'react-fast-marquee'

const Clients = () => {

    const clientsData = [
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/vishwa.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/rupay.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/devgn.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/flipkart.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/golden.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/imagine.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/kuwait.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/tata.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/piramal.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/prominance.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/proost.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/punjab.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/fyi.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/sdaf.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/superyou.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/tlh.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/candor.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/guyana.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/ellementary.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/dalhouse.svg"
        },
        {
            img: "/images/clients/clientsBg.jpg",
            icon: "/images/clients/mevejars.svg"
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
                                        className="client-icon grayscale-100 absolute z-[1] w-[60%] "
                                        src={item.icon}
                                        alt=""
                                    />
                                    <img
                                        className="client-img absolute w-full h-full object-cover opacity-0 "
                                        src={item.img}
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