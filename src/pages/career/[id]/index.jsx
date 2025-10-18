import RedBtn from '@/components/buttons/RedBtn'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useHeadingAnimation from '@/components/ui/useHeadingAnimation'
import useTextYAnimation from '@/components/ui/useTextYAnimation'
import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const index = () => {
    useHeadingAnimation()
    useTextYAnimation()

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
            <div className="w-full h-screen center text-center space-y-10 flex-col">
                <h2 className='uppercase animate-heading text-4xl lg:text-7xl'>social media manager</h2>
                <RedBtn text="apply now" />
            </div>
            <div className="w-full  gap-24  px-3 lg:px-5  pb-14 lg:pb-20  ">
                <div className=" carr_anim_border w-0 pt-10 border-t border-white "></div>
                <h2 className='  text-xl  lg:text-3xl red anim-tx-y uppercase'>About</h2>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="  mt-5 w-full md:w-[50%] h-full  leading-tight">
                        <p className='w-[80%] text-base lg:text-xl'>At Disrptve, we don’t just run social  we create conversations that stick. If you’re obsessed with culture, trends, and building communities that matter, this one’s for you.</p>
                    </div>
                    <div className="  mt-5 md:mt-0 w-full md:w-[50%]  text-base lg:text-xl gap-y-8 h-full grid grid-cols-2">
                        <div className="">
                            <h3 className=' uppercase' >type</h3>
                            <p className='' >Full Time, Hybrid</p>
                        </div>
                        <div className="">
                            <h3 className=' uppercase' >location</h3>
                            <p className='' >Mumbai, India</p>
                        </div>
                        <div className="">
                            <h3 className=' uppercase' >Experience</h3>
                            <p className='' >2+ Years</p>
                        </div>
                        <div className="">
                            <h3 className=' uppercase' >Working Hours</h3>
                            <p className='' >8 Hours</p>
                        </div>
                        <div className="">
                            <h3 className=' uppercase' >salary</h3>
                            <p className='' >To Be Discussed..</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full  gap-24  px-3 lg:px-5 pb-14 lg:pb-20 ">
                <div className=" carr_anim_border w-0 pt-10 border-t border-white "></div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="  w-full md:w-[50%] h-full  leading-tight">
                        <h2 className='  text-xl  lg:text-3xl red anim-tx-y uppercase'>What We’re Looking For</h2>
                    </div>
                    <div className="  mt-5 md:mt-0 w-full md:w-[50%] h-full space-y-4 text-base lg:text-xl">
                        <div className="  flex gap-2">
                            <div className='size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                            <p>2–4 years of experience managing social media for brands.</p>
                        </div>
                        <div className="  flex gap-2">
                            <div className='size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                            <p>Strong grasp of Instagram, LinkedIn, Twitter/X, and emerging platforms.</p>
                        </div>
                        <div className="  flex gap-2">
                            <div className='size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                            <p>Creative mindset with the ability to write engaging, on-trend copy.</p>
                        </div>
                        <div className="  flex gap-2">
                            <div className='size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                            <p>Skilled in planning campaigns and building content calendars.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full  gap-24  px-3 lg:px-5  pb-14 lg:pb-20 ">
                <div className=" carr_anim_border w-0 pt-10 border-t border-white "></div>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="  w-full md:w-[50%] h-full  leading-tight">
                        <h2 className='  text-xl  lg:text-3xl red uppercase'>What You’ll Do</h2>
                    </div>
                    <div className=" mt-5 md:mt-0  w-full md:w-[50%] h-full space-y-4 text-base lg:text-xl">
                        <div className="  flex gap-2">
                            <div className='size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                            <p>Own and grow brand voices across social platforms</p>
                        </div>
                        <div className="  flex gap-2">
                            <div className='size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                            <p>Create scroll-stopping content & campaigns</p>
                        </div>
                        <div className="  flex gap-2">
                            <div className='size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                            <p>Track, analyze, and optimize for performance</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index