import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'

const index = () => {
    return (
        <>
            <div className="w-full h-screen center flex-col">
                <h2 className='uppercase text-7xl'>social media manager</h2>
                <button className="mt-12 group px-6 py-2 border center border-white">
                    <div className="relative flex items-center gap-1">
                        <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
                        <p className="text-lg group-hover:italic uppercase">apply now</p>
                        <RiArrowRightUpLine size={20} />
                    </div>
                </button>

            </div>
            <div className="w-full  gap-24 px-5 border-t pt-10 pb-20 border-white/10 flex">
                <div className="w-[50%] h-full text-2xl leading-tight">
                    <p className='w-[80%]'>At Disrptve, we don’t just run social  we create conversations that stick. If you’re obsessed with culture, trends, and building communities that matter, this one’s for you.</p>
                </div>
                <div className="w-[50%] h-full grid grid-cols-[60%_40%]">
                    <div className="w-full space-y-5">
                        <div className="">
                            <h2 className='text-lg uppercase opacity-60' >type</h2>
                            <p className='' >Full Time, Hybrid</p>
                        </div>
                        <div className="">
                            <h2 className='text-lg uppercase opacity-60' >location</h2>
                            <p className='' >Mumbai, India</p>
                        </div>
                        <div className="">
                            <h2 className='text-lg uppercase opacity-60' >Experience</h2>
                            <p className='' >2+ Years</p>
                        </div>
                    </div>
                    <div className="w-full space-y-5">
                        <div className="">
                            <h2 className='text-lg uppercase opacity-60' >Working Hours</h2>
                            <p className='' >8 Hours</p>
                        </div>
                        <div className="">
                            <h2 className='text-lg uppercase opacity-60' >salary</h2>
                            <p className='' >To Be Discussed..</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full  gap-24 px-5 border-t pt-10 pb-20 border-white/10 flex">
                <div className="w-[50%] h-full text-2xl leading-tight">
                    <h2 className=' text-4xl uppercase'>What We’re Looking For</h2>
                </div>
                <div className="w-[50%] h-full space-y-4 text-xl">
                    <p>• 2–4 years of experience managing social media for brands.</p>
                    <p>• Strong grasp of Instagram, LinkedIn, Twitter/X, and emerging platforms.</p>
                    <p>• Creative mindset with the ability to write engaging, on-trend copy.</p>
                    <p>• Skilled in planning campaigns and building content calendars.</p>
                    <p>• Familiarity with analytics tools to track, measure, and optimize performance.</p>
                    <p>• A proactive self-starter who thrives in fast-paced environments.</p>
                    <p>• Bonus: experience with design tools (Canva, Figma, Adobe Suite).</p>
                </div>
            </div>
            <div className="w-full  gap-24 px-5 border-t pt-10 pb-20 border-white/10 flex">
                <div className="w-[50%] h-full text-2xl leading-tight">
                    <h2 className=' text-4xl uppercase'>What You’ll Do</h2>
                </div>
                <div className="w-[50%] h-full space-y-4 text-xl">
                    <p>• Own and grow brand voices across social platforms</p>
                    <p>• Create scroll-stopping content & campaigns</p>
                    <p>• Track, analyze, and optimize for performance</p>
                    <button className="mt-20 group px-6 py-2 border center border-white">
                        <div className="relative flex items-center gap-1">
                            <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
                            <p className="text-lg group-hover:italic uppercase">apply now</p>
                            <RiArrowRightUpLine size={20} />
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default index