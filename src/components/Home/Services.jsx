import { useGSAP } from '@gsap/react';
import { RiArrowDownLine } from '@remixicon/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React from 'react'
gsap.registerPlugin(ScrollTrigger);

const serviceData = [
    {
        number: "01",
        title: "Brand Strategy & Go-to-Market",
        desc: "Before you can win, you need a plan. This is where we define your unique position in the market and craft the roadmap to launch and grow effectively.",
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
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
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
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
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
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
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
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
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
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
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
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
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
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
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
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
                end: "+400% top",
                anticipatePin:1,
                scrub: .4,
            },
            xPercent: -56.1 * (serviceData.length - 1),
            ease: "linear",
        })
    })


    return (
        <>
            <div className="serv_paren w-full relative h-screen overflow-hidden ">
                <div className="h-full w-[25vw] flex items-center absolute px-5 top-0 left-0">
                    <div className=" w-full right_serv   flex flex-col justify-between h-[65%] ">
                        <div className="text-4xl font-semibold uppercase">
                            <h2>What</h2>
                            <h2 className='red'>We Do</h2>
                        </div>
                        <button className=' h-fit w-fit group mt-5 relative flex items-center gap-1'>
                            <div className="w-0 group-hover:w-[97%] transition-all duration-300  h-[1px] bg-white absolute bottom-0 left-0"></div>
                            <h2 className=' text-base group-hover:italic uppercase '>explore now</h2>
                            <RiArrowDownLine size={18} />
                        </button>
                        <p>We’re a full-service agency, which means we can help from the first spark of an idea to the final, polished execution. Our work is broken down into these core areas.</p>
                    </div>
                </div>

                <div className=" serv_slide   w-full h-full  gap-x-10 flex items-center ">
                    <div className="w-[30vw] shrink-0 h-full"></div>
                    {serviceData.map((item, index) => (
                        <div key={index} className="w-[55vw] bg-[#0e0e0e5d] p-5  flex flex-col justify-between shrink-0 h-[35vw] border border-[#e5e7eb44]">
                            <div className="flex justify-between ">
                                <div className=" text-4xl w-[90%] leading-none font-semibold uppercase ">
                                    <div className=" ">
                                        <h2>{item.title.split(" & ")[0]} </h2>
                                        <h2>{item.title.split(" & ")[1]}</h2>
                                    </div>
                                    <p className='text-base mt-5 opacity-80 normal-case font-light leading-none w-[75%]'>{item.desc}</p>
                                </div>
                                <div className=" w-[70%]  flex justify-end  leading-none">
                                    <div className=" space-y-2 ">
                                        {item?.servs.map((ser, i) => (
                                            <div key={i} className=" text-base flex gap-2">
                                                <p>»</p>
                                                <p > {ser}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="aspect-video w-[60%] ">
                                    <img className='w-full h-full object-cover' src={item.img} alt="" />
                                </div>
                                <div className="text-5xl  font-semibold">
                                    <h2>{item.number}</h2>
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