import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import Marquee from 'react-fast-marquee'

const Clients = () => {

    const clientsData = [
        {
            img: "https://images.prismic.io/inertia-website/Z6Y-S5bqstJ9-YBt_LouisVuitton.jpg?auto=format,compress&rect=424,0,1072,1080&w=412&h=415",
            icon: "/images/clients/candor.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y-wZbqstJ9-YCa_PARAMOUNT.png?auto=format%2Ccompress&rect=4%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/dalhouse.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y5ppbqstJ9-X-K_PUMA.jpg?auto=format%2Ccompress&rect=657%2C0%2C1430%2C1440&w=412&h=415",
            icon: "/images/clients/dc.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y605bqstJ9-X_I_CLINIQUE.png?auto=format%2Ccompress&rect=841%2C49%2C688%2C693&w=412&h=415",
            icon: "/images/clients/disney.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8tpbqstJ9-YA6_AXELARIGATO.png?auto=format%2Ccompress&rect=234%2C454%2C979%2C986&w=412&h=415",
            icon: "/images/clients/ellementary.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/flipkart.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/fyi.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/golden.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/guyana.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/imagine.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/kuwait.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/marvel.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/mevejars.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/piramal.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/prominance.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/proost.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/punjab.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/rupay.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/sdaf.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/superyou.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/tata.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/tlh.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/vishwa.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "/images/clients/devgn.svg"
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
                gsap.to(icon, { filter: "invert(0%)", duration: 0.15, ease: "power3.in" });
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
                        className="w-full border border-[#8585855b] grid grid-cols-3 lg:grid-cols-6"
                    >
                        {clientsData
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className="client-box aspect-square border border-[#8585855b] overflow-hidden relative flex items-center justify-center"
                                >
                                    <img
                                        className="client-icon absolute z-[1] w-[60%] "
                                        src={item.icon}
                                        alt=""
                                    />
                                    <img
                                        className="client-img absolute w-full h-full object-contain opacity-0 scale-105 brightness-[.8]"
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