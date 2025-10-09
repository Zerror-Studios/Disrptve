import { useGSAP } from '@gsap/react';
import { RiArrowDownLine } from '@remixicon/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React from 'react'
gsap.registerPlugin(ScrollTrigger);

const serviceData = [
    {
        number: "01",
        title: "Strategy & Insight",
        desc: "Find your brand’s sharpest edge through data-driven insight, defining opportunities that make your brand stand out.",
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format"
    },
    {
        number: "02",
        title: "Brand & GTM Strategy",
        desc: "From brand strategy to go-to-market execution, we align your message, audience, and momentum for measurable growth.",
        img: "https://monogrid.com/api/optimized-image/e32166e7d556dad3533d59dbb53300a7820197cba0d57d1c1f609e45d70823f6.jpg?max-w=1200&auto=compress,format"
    },
    {
        number: "03",
        title: "Market Research",
        desc: "We uncover consumer behavior, category dynamics, and cultural signals to shape confident brand decisions.",
        img: "https://monogrid.com/api/optimized-image/86f80aa4b47e80d36eb41a880d55aafd51f4bd4e0f9a201710a3bc9dfe8871c9.jpg?max-w=1200&auto=compress,format"
    },
    {
        number: "04",
        title: "Audience Profiling",
        desc: "Go beyond demographics. We build detailed audience personas that reveal motivations, pain points, and untapped potential.",
        img: "https://monogrid.com/api/optimized-image/48ed0eba27fbe9cf0ecee3f5b0dd4d4a6efbf7fff007d4be30dea9950a11a3eb.jpg?max-w=1200&auto=compress,format"
    },
];


const Services = () => {

    useGSAP(() => {
        gsap.from(".serv_slide", {
            scrollTrigger: {
                trigger: ".serv_paren",
                start: "top bottom",
                end: "top top",
                scrub: .4,
            },
            x: 400,
            ease: "linear",
        })

        gsap.to(".right_serv", {
            scrollTrigger: {
                trigger: ".serv_paren",
                start: "top top",
                end: "bottom 40%",
                scrub: .4,
            },
            opacity: 0,
            ease: "linear",
        })
        gsap.to(".serv_slide", {
            scrollTrigger: {
                trigger: ".serv_paren",
                start: "top top",
                pin: true,
                end: "+=2000",
                scrub: .4,
            },
            xPercent: -162,
            ease: "linear",
        })
    })


    return (
        <>
            <div className="serv_paren w-full relative h-screen overflow-hidden ">
                <div className="h-full w-[20vw] flex items-center absolute px-5 top-0 left-0">
                    <div className=" w-full right_serv   flex flex-col justify-between h-[65%] ">
                        <div className="text-4xl font-semibold uppercase">
                            <h2>Our</h2>
                            <h2 className='red'>services</h2>
                        </div>
                        <button className=' h-fit w-fit group mt-5 relative flex items-center gap-1'>
                            <div className="w-0 group-hover:w-[97%] transition-all duration-300  h-[1px] bg-white absolute bottom-0 left-0"></div>
                            <p className=' text-base group-hover:italic uppercase '>explore now</p>
                            <RiArrowDownLine size={18} />
                        </button>
                        <p>From startups to global mandates, we deliver impact-driven campaigns, bold identities, and market-leading growth.</p>
                    </div>
                </div>

                <div className=" serv_slide   w-full h-full  gap-x-10 flex items-center ">
                    <div className="w-[30vw] shrink-0 h-full"></div>
                    {serviceData.map((item, index) => (
                        <div key={index} className="w-[55vw] bg-[#0e0e0e5d] p-5 flex flex-col justify-between shrink-0 h-[65%] border border-[#e5e7eb44]">
                            <div className="flex justify-between ">
                                <div className=" text-5xl font-semibold uppercase ">
                                    <p>{item.title.split(" & ")[0]} </p>
                                    <p>{item.title.split(" & ")[1]}</p>
                                </div>
                                <div className="w-[35%] flex justify-end text-sm">
                                    <div className="">
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="aspect-video w-[60%] bg-cyan-300">
                                    <img className='w-full h-full object-cover' src={item.img} alt="" />
                                </div>
                                <div className="text-5xl font-semibold">
                                    <p>{item.number}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Services