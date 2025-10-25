import SeoHeader from '@/components/seo/SeoHeader'
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

        gsap.to(".serv_anim_bord", {
            width: "100%",
            ease: "ease-secondary",
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".ser_pren",
                start: "top 60%",
                // markers:true,
            }
        })

        if (window.innerWidth >= 1024) {
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
        }

    })

    return (
        <>
          <SeoHeader meta={meta} />

            <div className="w-full h-[70vh] lg:h-screen prx_pren overflow-hidden">
                <img className='w-full h-full object-cover brightness-90 prx_img' src="/images/career.jpg" alt="" />
            </div>
            <div id='career' className=" px-3 lg:px-5 py-14 lg:py-20 ">
                <div className="w-full flex flex-col md:flex-row justify-between ">
                    <h2 className='  uppercase text-4xl lg:text-7xl red'>openings</h2>
                </div>
                <div className=" w-full">
                    <div className="my-20 ser_pren">
                        {JobOpenings.map((item, index) => (
                            <Link href={`/career/${item.id}`} key={index} className=" group relative cursor-pointer transition-all duration-300  w-full h-24  flex items-center justify-between">
                                <div className=" serv_anim_bord absolute bottom-0 h-full w-0 border-b border-white/30  hover:border-b-white/100 transition-colors duration-300"></div>
                                <p className=' group-hover:pl-5 transition-all duration-300  capitalize text-xl lg:text-3xl'>{item.title}</p>
                                <div className="flex group-hover:pr-5 transition-all duration-300 text-base lg:text-xl h-full items-center gap-4">
                                    <p className=''>{item.location}</p>
                                    <div className="w-[1px] bg-white h-[20%]"></div>
                                    <p className=''>{item.type}</p>
                                    <img className=' w-4 -rotate-45 invert-100' src="/icons/arrow_small.svg" alt="" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="">
                    <p className=' leading-tight mt-2 md:mt-0  md:w-[30%] text-base lg:text-xl'>Think you’d be a great fit for what we do? Reach out to us at <span className='uppercase italic underline'> team@disrptve.com,</span> even if a role isn’t listed here.</p>
                </div>
            </div>
        </>
    )
}

export default index



const meta = {
    title: "Careers at DISRPTVE - Join Our Marketing Agency Team",
    description:
      "Join DISRPTVE's creative team in Mumbai. Explore opportunities in brand strategy, digital marketing, design, and social media management.",
    canonical: "https://disrptve.vercel.app/career",
    og: {
      title: "Careers at DISRPTVE - Join Our Marketing Agency Team",
      description:
        "Join DISRPTVE's creative team in Mumbai. Explore opportunities in brand strategy, digital marketing, design, and social media management.",
      image: "https://disrptve.vercel.app/logo-og.png",
      url: "https://disrptve.vercel.app/career",
      type: "website",
      site_name: "DISRPTVE",
    },
    twitter: {
      card: "summary_large_image",
      title: "Careers at DISRPTVE - Join Our Marketing Agency Team",
      description:
        "Join DISRPTVE's creative team in Mumbai. Explore opportunities in brand strategy, digital marketing, design, and social media management.",
      image: "https://disrptve.vercel.app/logo-og.png",
      site: "@disrptve",
    },
    robots: "index,follow",
    keywords:
      "marketing careers, agency jobs Mumbai, creative jobs, digital marketing careers, brand strategy jobs",
    author: "DISRPTVE",
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#000000",
  };