import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useState } from 'react'
import { useGSAP } from '@gsap/react';
import CareerForm from '@/components/ui/CareerForm';
import { JobOpenings } from '@/store/JobOpenings';
import { RiArrowRightUpLine } from '@remixicon/react';
import SeoHeader from '@/components/seo/SeoHeader';
gsap.registerPlugin(ScrollTrigger);

const CareerDetail = ({ job }) => {

    useGSAP(() => {
        gsap.utils.toArray(".carr_anim_border").forEach((border) => {
            gsap.to(border, {
                width: "100%",
                ease: "ease-secondary",
                duration: 1,
                scrollTrigger: {
                    trigger: border,
                    start: "top 80%",
                    // toggleActions: "play none none reverse",
                },
            });
        });
    });

    return (
        <>
            <SeoHeader meta={meta} />
            <div className="px-3 lg:px-5 pt-32">
                <h1 className='uppercase  text-4xl  lg:text-7xl'>{job?.title}</h1>
                <div className=" carr_anim_border mt-4  w-0 border-t border-white "></div>
            </div>
            <div className=" flex pt-10 flex-col md:flex-row  md:gap-x-[10vw] px-3 lg:px-5">
                <div className="left_car w-full  md:w-1/2">
                    <div className="w-full mb-12 lg:mb-16 ">
                        <h2 className='  text-xl  lg:text-3xl mb-2 md:mb-3  red  uppercase'>About</h2>
                        <div className="w-full ">
                            <div className="  w-full h-full   ">
                                <p className=' w-full  text-base mb-2 md:mb-3 leading-tight lg:text-xl'>At Disrptve, we don’t just run social  we create conversations that stick. If you’re obsessed with culture, trends, and building communities that matter, this one’s for you.</p>
                            </div>
                            <div className=" w-full  text-base lg:text-xl  h-full grid gap-y-5  grid-cols-2 lg:grid-cols-3">
                                <div className="">
                                    <h3 className=' uppercase opacity-50' >type</h3>
                                    <p className='' >{job?.type}</p>
                                </div>
                                <div className="">
                                    <h3 className=' uppercase opacity-50' >location</h3>
                                    <p className='' >{job?.location}</p>
                                </div>
                                <div className="">
                                    <h3 className=' uppercase opacity-50' >Experience</h3>
                                    <p className='' >{job?.experience}</p>
                                </div>
                                <div className="">
                                    <h3 className=' uppercase opacity-50' >Working Hours</h3>
                                    <p className='' >{job?.workingHours}</p>
                                </div>
                                <div className="">
                                    <h3 className=' uppercase opacity-50' >salary</h3>
                                    <p className='' >{job?.salary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  mb-12 lg:mb-16  ">
                        <div className="w-full   ">
                            <div className="  w-full h-full  leading-tight">
                                <h2 className='  text-xl  lg:text-3xl mb-2 md:mb-3 red   uppercase'>What We’re Looking For</h2>
                            </div>
                            <div className="   w-full h-full leading-tight space-y-2  text-base lg:text-xl">
                                {job?.lookingFor?.map((item, index) => (
                                    <div key={index} className="  flex gap-2">
                                        <div className=' size-1.5 md:size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full   ">
                            <div className="  w-full h-full   leading-tight">
                                <h2 className='  text-xl  lg:text-3xl mb-2 md:mb-3 red uppercase'>What You’ll Do</h2>
                            </div>
                            <div className=" mt-3 leading-tight md:mt-0 space-y-2  w-full h-full text-base lg:text-xl">
                                {job?.responsibilities?.map((item, index) => (
                                    <div key={index} className="  flex gap-2">
                                        <div className=' size-1.5 md:size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right_car w-full  pt-12 md:pt-0 md:w-1/2 ">
                    <CareerForm job={job} />
                </div>
            </div>



        </>
    )
}

export default CareerDetail



export async function getServerSideProps({ params }) {
    const job = JobOpenings.find(
        (job) => job.slug === params.slug
    );

    return { props: { job } };
}


const meta = {
    title: "Careers at DISRPTVE - Join Our Marketing Agency Team",
    description:
        "Join DISRPTVE's creative team in Mumbai. Explore opportunities in brand strategy, digital marketing, design, and social media management.",
    canonical: "https://disrptve.com/career",
    og: {
        title: "Careers at DISRPTVE - Join Our Marketing Agency Team",
        description:
            "Join DISRPTVE's creative team in Mumbai. Explore opportunities in brand strategy, digital marketing, design, and social media management.",
        image: "https://disrptve.com/logo-og.png",
        url: "https://disrptve.com/career",
        type: "website",
        site_name: "DISRPTVE",
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers at DISRPTVE - Join Our Marketing Agency Team",
        description:
            "Join DISRPTVE's creative team in Mumbai. Explore opportunities in brand strategy, digital marketing, design, and social media management.",
        image: "https://disrptve.com/logo-og.png",
        site: "@disrptve",
    },
    robots: "index,follow",
    keywords:
        "marketing careers, agency jobs Mumbai, creative jobs, digital marketing careers, brand strategy jobs",
    author: "DISRPTVE",
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#000000",
};