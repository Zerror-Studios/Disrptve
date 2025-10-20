import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

const JobOpenings = [
    {
        id: 1,
        title: "Video Editor",
        location: "Mumbai",
        type: "Hybrid",
    },
    {
        id: 2,
        title: "Graphic Designer ",
        location: "Bangalore",
        type: "Remote",
    },
    {
        id: 3,
        title: "Content Writer",
        location: "Delhi",
        type: "On-site",
    },
];

const index = () => {

    useGSAP(() => {
        gsap.to(".prx_img", {
            y: 200,
            ease: "linear",
            scrollTrigger: {
                trigger: ".prx_pren",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        })

    })
    
    return (
        <>
            <div className="w-full h-screen prx_pren overflow-hidden">
                <img className='w-full h-full object-cover brightness-90 prx_img' src="https://images.unsplash.com/photo-1530036846422-afb4b7af2fd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2127" alt="" />
            </div>
            <div id='career' className=" px-3 lg:px-5 py-14 lg:py-20 ">
                <div className="w-full flex flex-col md:flex-row justify-between ">
                    <h2 className='  uppercase text-4xl lg:text-7xl red'>openings</h2>
                    <p className=' leading-tight mt-2 md:mt-0  md:w-[30%] text-base lg:text-xl'>Think you’d be a great fit for what we do? Reach out to us at <span className='uppercase italic underline'> team@disrptve.com,</span> even if a role isn’t listed here.</p>
                </div>
                <div className=" w-full">
                    <div className="mt-10">
                        {JobOpenings.map((item, index) => (
                            <Link href={`/career/${item.id}`} key={index} className=" cursor-pointer hover:px-5 hover:border-b-white/100 transition-all duration-300 w-full h-20 border-b border-white/20 flex items-center justify-between">
                                <p className='  capitalize text-xl lg:text-3xl'>{item.title}</p>
                                <div className="flex text-base lg:text-xl h-full items-center gap-4">
                                    <p className=''>{item.location}</p>
                                    <div className="w-[1px] bg-white h-[20%]"></div>
                                    <p className=''>{item.type}</p>
                                    <img className=' w-4 -rotate-45 invert-100' src="/icons/arrow_small.svg" alt="" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default index