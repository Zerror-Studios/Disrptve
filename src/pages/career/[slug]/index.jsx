import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useState } from 'react'
import { useGSAP } from '@gsap/react';
import CareerForm from '@/components/ui/CareerForm';
import { JobOpenings } from '@/store/JobOpenings';
import { RiArrowRightUpLine } from '@remixicon/react';
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
            <div className="px-3 lg:px-5 pt-32">
                <h2 className='uppercase  text-4xl  lg:text-7xl'>{job?.title}</h2>
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
                                    <p className='' >Full Time, Hybrid</p>
                                </div>
                                <div className="">
                                    <h3 className=' uppercase opacity-50' >location</h3>
                                    <p className='' >Mumbai, India</p>
                                </div>
                                <div className="">
                                    <h3 className=' uppercase opacity-50' >Experience</h3>
                                    <p className='' >2+ Years</p>
                                </div>
                                <div className="">
                                    <h3 className=' uppercase opacity-50' >Working Hours</h3>
                                    <p className='' >8 Hours</p>
                                </div>
                                <div className="">
                                    <h3 className=' uppercase opacity-50' >salary</h3>
                                    <p className='' >To Be Discussed..</p>
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
                                <div className="  flex gap-2">
                                    <div className=' size-1.5 md:size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                                    <p>2–4 years of experience managing social media for brands.</p>
                                </div>
                                <div className="  flex gap-2">
                                    <div className=' size-1.5 md:size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                                    <p>Strong grasp of Instagram, LinkedIn, Twitter/X, and emerging platforms.</p>
                                </div>
                                <div className="  flex gap-2">
                                    <div className=' size-1.5 md:size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                                    <p>Creative mindset with the ability to write engaging, on-trend copy.</p>
                                </div>
                                <div className="  flex gap-2">
                                    <div className=' size-1.5 md:size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                                    <p>Skilled in planning campaigns and building content calendars.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full   ">
                            <div className="  w-full h-full   leading-tight">
                                <h2 className='  text-xl  lg:text-3xl mb-2 md:mb-3 red uppercase'>What You’ll Do</h2>
                            </div>
                            <div className=" mt-3 leading-tight md:mt-0 space-y-2  w-full h-full text-base lg:text-xl">
                                <div className="  flex gap-2">
                                    <div className=' size-1.5 md:size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                                    <p>Own and grow brand voices across social platforms</p>
                                </div>
                                <div className="  flex gap-2">
                                    <div className=' size-1.5 md:size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                                    <p>Create scroll-stopping content & campaigns</p>
                                </div>
                                <div className="  flex gap-2">
                                    <div className=' size-1.5 md:size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                                    <p>Track, analyze, and optimize for performance</p>
                                </div>
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