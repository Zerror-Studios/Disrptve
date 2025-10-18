import { useGSAP } from '@gsap/react';
import { RiArrowDownLine } from '@remixicon/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React from 'react'
import useHeadingAnimation from '../ui/useHeadingAnimation';
import LineBtn from '../buttons/LineBtn';
import useTextYAnimation from '../ui/useTextYAnimation';
gsap.registerPlugin(ScrollTrigger);

const serviceData = [
    {
        number: "01",
        title: "Brand Strategy & Go-to-Market",
        desc: "Before you can win, you need a plan. This is where we define your unique position in the market and craft the roadmap to launch and grow effectively.",
        img: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
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
        img: "https://images.unsplash.com/photo-1633533451997-8b6079082e3d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1931",
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
        img: "https://images.unsplash.com/photo-1676285437506-3ad6aa7d7cad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
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
        img: "https://images.unsplash.com/photo-1676263813382-bb5ba4b63f91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
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
        img: "https://images.unsplash.com/photo-1744807867611-6e39f5229af6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1112",
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
        img: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
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
        img: "https://images.unsplash.com/photo-1612631656340-ad1e06d3a0de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
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
        img: "https://images.unsplash.com/photo-1659560893493-9b565e1a26a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        servs: [
            "Bespoke Presentations",
            "Sales & Marketing Collateral",
            "Investor & Pitch Deck Design",
            "Corporate Brochures & Reports",
        ],
    },
];



const Services = () => {
    useHeadingAnimation();
    useTextYAnimation()

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
                end: "bottom 80%",
                scrub: .4,
            },
            opacity: 0,
            ease: "linear",
        })

        if(window.innerWidth >= 1024){
            gsap.to(".serv_slide", {
                scrollTrigger: {
                    trigger: ".serv_paren",
                    start: "top top",
                    pin: true,
                    end: "+400% top",
                    anticipatePin: 1,
                    scrub: .4,
                },
                xPercent: -56.1 * (serviceData.length - 1),
                ease: "linear",
            })
        
        }else{
            gsap.to(".serv_slide", {
                scrollTrigger: {
                    trigger: ".serv_paren",
                    start: "top top",
                    pin: true,
                    end: "+400% top",
                    anticipatePin: 1,
                    scrub: .4,
                },
                xPercent: -106 * (serviceData.length - 1),
                ease: "linear",
            })
        }
    })


    return (
        <>
            <div className="serv_paren my-14 lg:my-0 w-full relative h-screen overflow-hidden ">
                <div className=" lg:hidden    w-full flex z-[1] items-center  px-3">
                    <div className=" w-full    flex flex-col justify-between ">
                        <div className="text-3xl mb-4 leading-none w-full animate-heading font-semibold uppercase">
                            <h2>What</h2>
                            <h2 className='red'>We Do</h2>
                        </div>
                        <div className="space-y-4">
                            <p className='  text-base lg:text-xl anim-tx-y leading-tight '>We’re a full-service agency, which means we can help from the first spark of an idea to the final, polished execution. Our work is broken down into these core areas.</p>
                            <LineBtn text={"explore now"} href={'/about'} />
                        </div>
                    </div>
                </div>
                <div className="h-full hidden  w-[30vw] lg:flex z-[1] items-center absolute px-5 top-0 left-0">
                    <div className=" w-full right_serv   flex flex-col justify-between h-[35vw] ">
                        <div className="text-5xl animate-heading font-semibold uppercase">
                            <h2>What</h2>
                            <h2 className='red'>We Do</h2>
                        </div>
                        <div className="space-y-4">
                            <p className='text-xl anim-tx-y leading-tight '>We’re a full-service agency, which means we can help from the first spark of an idea to the final, polished execution. Our work is broken down into these core areas.</p>
                            <LineBtn text={"explore now"} href={'/about'} />
                        </div>
                    </div>
                </div>

                <div className=" serv_slide  px-3 mt-5 lg:mt-0  w-full h-[70vh] lg:h-full gap-x-5 lg:gap-x-10 flex items-center ">
                    <div className="hidden lg:block w-[30vw] shrink-0 h-full"></div>
                    {serviceData.map((item, index) => (
                        <div key={index} className=" w-[100vw] lg:w-[55vw] bg-[#0e0e0e5d] p-3 lg:p-5  flex flex-col lg:justify-between shrink-0  h-full lg:h-[35vw] border border-[#e5e7eb44]">
                            <div className="flex justify-between ">
                                <div className=" text-2xl lg:text-5xl  leading-none font-semibold uppercase ">
                                    <div className=" red">
                                        <h3 className='anim-tx-y font-normal'>{item.title.split(" & ")[0]} & </h3>
                                        <h3 className='anim-tx-y font-normal'>{item.title.split(" & ")[1]} </h3>
                                    </div>
                                    <p className=' text-sm lg:text-lg  mt-7  normal-case font-light leading-none w[90%] lg:w-[75%]'>{item.desc}</p>
                                </div>
                            </div>
                            <div className="flex flex-col-reverse justify-between h-full lg:h-fit lg:flex-row gap-4 lg:gap-8">
                                <div className="aspect-video shrink-0 h-[60%] lg:h-full w-full lg:w-[60%] ">
                                    <img className='w-full h-full object-cover' src={item.img} alt="" />
                                </div>
                                <div className=" flex w-full flex-col justify-between  font-semibold">
                                    <div className=" mt-5 lg:mt-0 space-y-1 lg:space-y-3 ">
                                        {item?.servs.map((ser, i) => (
                                            <div key={i} className=" group  flex transition-all duration-300 gap-3 hover:px-2">
                                                <div className='size-1.5 shrink-0 group-hover:bg-[#FB0401]  transition-all duration-300 translate-y-1.5 bg-white' ></div>
                                                <p className=' text-sm lg:text-lg  group-hover:text-[#FB0401] transition-all duration-300 leading-none ' > {ser}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-full text-end">
                                    <h2 className='anim-tx-y text-3xl lg:text-5xl'>{item.number}</h2>
                                    </div>
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