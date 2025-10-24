import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React from 'react'
import LineBtn from '../buttons/LineBtn';
import { RiArrowRightUpLine } from '@remixicon/react';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);

const serviceData = [
    {
        number: "01",
        title: "Brand Strategy & Go-to-Market",
        desc: "Before you can win, you need a plan. This is where we define your unique position in the market and craft the roadmap to launch and grow effectively.",
        img: "/images/servicesHomepage/1.webp",
        servs: [
            "Go-to-Market (GTM) Strategy",
            "Brand Positioning & Narrative",
            "Audience Profiling & Segmentation",
            "Market Research & Competitive Intelligence",
        ],
    },
    {
        number: "02",
        title: "Brand Identity & Packaging",
        desc: "We design the complete sensory experience of your brand—what people see, touch, and feel. It’s more than a logo; it’s your entire visual world.",
        img: "/images/servicesHomepage/2.webp",
        servs: [
            "Brand Guidelines",
            "Packaging Design",
            "Logo & Brand Mark Design",
            "Visual Identity Systems (Colors, Typography, Imagery)",
        ],
    },
    {
        number: "03",
        title: "Social Media & Performance Marketing",
        desc: "We find your audience where they are and give them a reason to engage. This is about building a community and driving measurable growth online.",
        img: "/images/servicesHomepage/3.webp",
        servs: [
            "SEO & Content Strategy",
            "Social Media Strategy & Management",
            "Community Architecture & Engagement",
            "Performance Marketing (PPC, Paid Social)",
        ],
    },
    {
        number: "04",
        title: "Website Design & Development",
        desc: "Your website is your home base. We design and build beautiful, intuitive, and high-performing websites that serve as the core of your digital presence.",
        img: "/images/servicesHomepage/4.webp",
        servs: [
            "E-commerce Solutions",
            "UX/UI Research & Design",
            "Landing Page Optimization",
            "Website & App Development",
        ],
    },
    {
        number: "05",
        title: "Political & National Strategy",
        desc: "We apply our strategic and data-driven approach to campaigns of national importance, helping candidates and causes shape public opinion and drive action.",
        img: "/images/servicesHomepage/5.webp",
        servs: [
            "Digital Campaign Execution",
            "eGovernance & National Strategy Consulting",
            "Data & Communications Strategy for Elections",
        ],
    },
    {
        number: "06",
        title: "AI-Led Design & Photoshoots",
        desc: "Why be limited by reality? We use cutting-edge AI to create stunning, original visuals, from conceptual art to entire photoshoots, with unparalleled speed and creative freedom.",
        img: "/images/servicesHomepage/6.webp",
        servs: [
            "Generative Visual Assets",
            "AI Concept Art & Moodboarding",
            "Virtual Photoshoots & Product Renders",
        ],
    },
    {
        number: "07",
        title: "Creative & Production",
        desc: "This is where ideas become reality. Our team manages the entire production process to create compelling content that captures attention.",
        img: "/images/servicesHomepage/7.webp",
        servs: [
            "Photography",
            "Content Creation",
            "Video & Film Production",
            "Campaign Creative Development",
        ],
    },
    {
        number: "08",
        title: "Business Decks, Brochures & Collateral",
        desc: "We arm your team with the tools they need to communicate effectively. From investor pitches to sales materials, we design documents that are clear, compelling, and beautifully crafted.",
        img: "/images/servicesHomepage/8.webp",
        servs: [
            "Bespoke Presentations",
            "Sales & Marketing Collateral",
            "Investor & Pitch Deck Design",
            "Corporate Brochures & Reports",
        ],
    },
];

const Services = () => {

    useGSAP(() => {
        if (window.innerWidth >= 1024) {
            gsap.from(".serv_slide", {
                scrollTrigger: {
                    trigger: ".serv_paren",
                    start: "top bottom",
                    end: "top top",
                    scrub: .4,
                    // markers:true
                },
                x: 400,
                ease: "linear",
            })
        }
        if (window.innerWidth >= 1024) {
            gsap.to(".right_serv", {
                scrollTrigger: {
                    trigger: ".serv_paren",
                    start: "top top",
                    end: "bottom 80%",
                    scrub: .4,
                    // markers:true
                },
                opacity: 0,
                ease: "linear",
            })
        }

        if (window.innerWidth >= 1024) {
            gsap.to(".serv_slide", {
                scrollTrigger: {
                    trigger: ".serv_paren",
                    start: "top top",
                    pin: true,
                    end: "+400% top",
                    anticipatePin: 1,
                    scrub: .4,
                    // markers:true
                },
                xPercent: -56.1 * (serviceData.length - 1),
                ease: "linear",
            })

        } else if (window.innerWidth >= 768) {
            gsap.to(".serv_slide", {
                scrollTrigger: {
                    trigger: ".serv_paren",
                    start: "top top",
                    pin: true,
                    end: "+400% top",
                    anticipatePin: 1,
                    scrub: .4,
                    // markers:true
                },
                xPercent: -53 * (serviceData.length - 1),
                ease: "linear",
            })
        } else {
            gsap.to(".serv_slide", {
                scrollTrigger: {
                    trigger: ".serv_paren",
                    start: "top top",
                    pin: true,
                    end: "+400% top",
                    anticipatePin: 1,
                    scrub: .4,
                    // markers:true
                },
                xPercent: -96 * (serviceData.length - 1),
                ease: "linear",
            })
        }
    })


    return (
        <>
            <div className="serv_paren my-14 lg:my-0 w-full relative h-screen overflow-hidden ">

                <div className=" lg:hidden    w-full flex z-[1] items-center  px-3">
                    <div className=" w-full pt-16    flex flex-col justify-between ">
                        <div className="text-4xl mb-4 leading-none w-full  font-semibold uppercase">
                            <h2>What</h2>
                            <h2 className='red'>We Do</h2>
                        </div>
                        {/* <div className="space-y-4">
                            <p className='  text-base lg:text-xl  md:w-[80%] leading-tight '>We’re a full-service agency, which means we can help from the first spark of an idea to the final, polished execution. Our work is broken down into these core areas.</p>
                            <LineBtn text={"explore now"} href={'/about'} />
                        </div> */}
                    </div>
                </div>

                <div className="h-full hidden  w-[30vw] lg:flex z-[1] items-center absolute px-5 top-0 left-0">
                    <div className=" w-full right_serv   flex flex-col justify-between h-[35vw] ">
                        <div className="text-7xl leading-none  font-semibold uppercase">
                            <h2>What</h2>
                            <h2 className='red'>We Do</h2>
                        </div>
                        <div className="space-y-4">
                            <p className='text-xl  leading-tight '>We’re a full-service agency, which means we can help from the first spark of an idea to the final, polished execution. Our work is broken down into these core areas.</p>
                            <Link href="/services">
                                <button className=' group relative red flex items-center gap-1'>
                                    <div className="w-full origin-right group-hover:w-0 transition-all duration-300  h-[1px] bgred absolute bottom-0 right-0"></div>
                                    <h3 className=' text-sm lg:text-lg  group-hover:italic uppercase '>Explore Now</h3>
                                    <RiArrowRightUpLine size={20} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className=" serv_slide  px-3 mt-5 lg:mt-0  w-full h-[75vh]  lg:h-full gap-x-5 lg:gap-x-10 flex items-center ">
                    <div className="hidden lg:block w-[30vw] shrink-0 h-full"></div>
                    {serviceData.map((item, index) => (
                        <>
                            <div key={index} className=" lg:hidden w-[90vw] md:w-[55vw] bg-[#0e0e0e5d] p-5  flex flex-col lg:justify-between shrink-0  h-full lg:h-[35vw] border border-[#e5e7eb44]">
                                <div className="flex justify-between ">
                                    <div className=" text-2xl lg:text-5xl  leading-none font-semibold uppercase ">
                                        <div className=" red">
                                            <h3 className=' font-normal'>{item.title.split(" & ")[0]} & </h3>
                                            <div className="flex items-center w-full justify-between">
                                                <h3 className=' font-normal'>{item.title.split(" & ")[1]} </h3>
                                                <h2 className=' text-white lg:hidden text-2xl lg:text-5xl'>{item.number}</h2>
                                            </div>
                                        </div>
                                        <p className=' text-base lg:text-xl  mt-7  normal-case font-light leading-none w[90%] lg:w-[75%]'>{item.desc}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col-reverse justify-between h-full lg:h-fit lg:flex-row gap-4 lg:gap-8">
                                    <div className="aspect-video shrink-0  h-[50%] lg:h-full w-full lg:w-[60%] ">
                                        <img className='w-full h-full object-cover' src={item.img} alt="" />
                                    </div>
                                    <div className=" flex w-full flex-col justify-between  font-semibold">
                                        <div className=" mt-5 lg:mt-0 space-y-1 lg:space-y-3 ">
                                            {item?.servs.map((ser, i) => (
                                                <div key={i} className=" group  flex transition-all duration-300 gap-3 hover:px-2">
                                                    <div className='size-1.5 shrink-0 group-hover:bg-[#FB0401]  transition-all duration-300 translate-y-1 bg-white' ></div>
                                                    <p className=' text-base lg:text-xl  group-hover:text-[#FB0401] transition-all duration-300 leading-none ' > {ser}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className=" hidden lg:block w-full text-end">
                                            <h2 className=' text-2xl lg:text-5xl'>{item.number}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div key={index} className=" hidden lg:flex  w-[90vw] md:w-[55vw] bg-[#0e0e0e5d] p-5 flex-col lg:justify-between shrink-0  h-full lg:h-[37vw] border border-[#e5e7eb44]">
                                <div className="flex ">
                                    <div className=" text-2xl lg:text-5xl w-[60%]    leading-none font-semibold uppercase ">
                                        <div className=" red">
                                            <h3 className=' font-normal'>{item.title.split(" & ")[0]} & </h3>
                                            <div className="flex items-center w-full justify-between">
                                                <h3 className=' font-normal'>{item.title.split(" & ")[1]} </h3>
                                                <h2 className=' text-white lg:hidden text-2xl lg:text-5xl'>{item.number}</h2>
                                            </div>
                                        </div>
                                        <p className=' text-base lg:text-xl  mt-[2vw]  normal-case font-light leading-tight w[90%] lg:w-[90%]'>{item.desc}</p>
                                    </div>
                                    <div className=" pl-5 w-[40%] space-y-1 lg:space-y-3 ">
                                        {item?.servs.map((ser, i) => (
                                            <div key={i} className=" group  flex transition-all duration-300 gap-3 hover:px-2">
                                                <div className='size-1.5 shrink-0 bg-white group-hover:bg-[#FB0401]  transition-all duration-300 translate-y-1.5 ' ></div>
                                                <p className=' text-base lg:text-xl  group-hover:text-[#FB0401] transition-all duration-300 leading-none ' > {ser}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col-reverse justify-between h-full lg:h-fit lg:flex-row gap-4 lg:gap-8">
                                    <div className=" shrink-0  h-[50%] lg:h-[16vw] w-full lg:w-[60%] ">
                                        <img className='w-full h-full object-cover' src={item.img} alt="" />
                                    </div>
                                    <div className=" flex w-full flex-col justify-between  font-semibold">
                                        <div className=""></div>
                                        <div className=" hidden lg:block w-full text-end">
                                            <h2 className=' text-2xl lg:text-7xl'>{item.number}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Services