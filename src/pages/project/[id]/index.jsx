import { RiArrowRightUpLine } from '@remixicon/react'
import React, { useEffect } from 'react'
import AOS from "aos";

const index = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="w-full center h-[50vh] flex-col ">
                <h2 className='text-6xl uppercase font-bold'>Proost</h2>
                <p className='uppercase text-lg '>Brand Identity & Packaging </p>
            </div>
            <div className=" w-full h-[50vh]  flex px-5 py-10 border-b border-t border-white/10">
                <div className="w-[26%] h-full flex flex-col">
                    <h2 className='uppercase h-1/2' >client</h2>
                    <div className=" w-full">
                        <img className='w-[60%]  ' src="/projects/proostimg.webp" alt="" />
                    </div>
                </div>
                <div className="w-[24%] h-full flex flex-col ">
                    <h2 className='uppercase h-1/2' >DURATION</h2>
                    <p>3 Months</p>
                </div>
                <div className="w-[24%] h-full flex flex-col ">
                    <h2 className='uppercase h-1/2' >services</h2>
                    <div className="capitalize space-y-1    ">
                        <p>brand identity</p>
                        <p>Packaging</p>
                        <p>production</p>
                    </div>
                </div>
                <div className="w-[26%] h-full flex flex-col ">
                    <h2 className='uppercase h-1/2' >Overview</h2>
                    <p>We created a bold, ownable brand
                        identity. Packaging moved to a
                        cohesive family with clear
                        hierarchy. Specs were optimized
                        for recall and efficient production.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 py-20  px-5">
                <div
                    data-aos-anchor-placement="top-bottom"
                    data-aos="clip" className="w-full h-screen  col-span-2">
                    <img className='w-full h-full object-cover' src="/projects/proostimg1.webp" alt="" />
                </div>
                <div
                    data-aos-anchor-placement="top-bottom"
                    data-aos="clip" className="w-full h-screen ">
                    <img className='w-full h-full object-cover' src="/projects/proostimg2.webp" alt="" />
                </div>
                <div
                    data-aos-anchor-placement="top-bottom"
                    data-aos="clip" className="w-full h-screen">
                    <img className='w-full h-full object-cover' src="/projects/proostimg3.webp" alt="" />
                </div>
                <div
                    data-aos-anchor-placement="top-bottom"
                    data-aos="clip" className="w-full h-screen col-span-2">
                    <img className='w-full h-full object-cover' src="/projects/proostimg4.webp" alt="" />
                </div>
                <div
                    data-aos-anchor-placement="top-bottom"
                    data-aos="clip" className="w-full h-screen">
                    <img className='w-full h-full object-cover' src="/projects/proostimg1.webp" alt="" />
                </div>
                <div
                    data-aos-anchor-placement="top-bottom"
                    data-aos="clip" className="w-full h-screen">
                    <img className='w-full h-full object-cover' src="/projects/proostimg2.webp" alt="" />
                </div>
            </div>

            <div className=" w-full  flex px-5 py-10 border-b border-t border-white/10">
                <div className="w-full flex justify-between">
                    <div className="w-[60%] space-y-32">
                        <div className="w-full">
                            <h2 className='uppercase font-semibold'>project info</h2>
                        </div>
                        <div className="space-y-2 text-xl">
                            <p>We crafted a fresh identity system and a robust communication strategy that redefined how Proost presented itself. From typography to visual language, every element was carefully curated to give the brand a bold, contemporary edge while staying true to its roots. The design direction ensured that Proost stood out instantly on crowded shelves and conveyed a sense of authenticity and celebration. </p>
                            <p>Beyond visuals, the tonality of the brand voice was developed to resonate with its audience on an emotional level—energetic, approachable, and full of character. Every touchpoint, from packaging to campaigns, reinforced this personality, making Proost not just a beverage but an experience. </p>
                            <p> This strategic and design overhaul helped Proost build stronger recall, strengthen customer connections, and carve a distinctive space in the highly competitive beverage market. The result was a brand that looked iconic, communicated with clarity, and created lasting impressions with every interaction.</p>
                        </div>
                    </div>
                    <div className="w-[20%] space-y-32">
                        <div className="w-full">
                            <h2 className='uppercase font-semibold'>FULL CASE STUDY</h2>
                        </div>
                        <button className=" group px-4 py-2 border center border-white">
                            <div className="relative flex items-center gap-1">
                                <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
                                <p className="text-lg group-hover:italic uppercase">Download</p>
                                <RiArrowRightUpLine size={20} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>


            {/* /////// other case studies section /////// */}
            <div className=" w-full px-5 py-32">
                <div className=" text-5xl mb-20 uppercase flex-col font-semibold w-full text-center center">
                    <h2>other case</h2>
                    <h2>studies</h2>
                </div>

                <div className="w-full grid  grid-cols-4">
                    <a href='/project/2' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className="aspect-square col-span-1 flex items-end">
                        <div className="flex w-full pr-10 py-5 items-center justify-between">
                            <p className='text-xl w-[60%] leading-tight'>Proost – Craft Beer Brand Refresh</p>
                            <RiArrowRightUpLine size={26} />
                        </div>
                    </a>
                    <div data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className="aspect-square col-span-1">
                        <img className='w-full h-full object-cover' src="https://www.rejouice.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Frejouice-2024%2FZ1m0HZbqstJ98VgZ_oura-abdul-ovaice-3d-cd-031.png?auto=format,compress?auto=compress,format&w=1439&q=80" alt="" />
                    </div>
                    <a href='/project/3' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className="aspect-square col-span-1 flex items-end">
                        <div className="flex w-full pr-10 pl-5 py-5 items-center justify-between">
                            <p className='text-xl w-[60%] leading-tight'>Proost – Craft Beer Brand Refresh</p>
                            <RiArrowRightUpLine size={26} />
                        </div>
                    </a>
                    <div data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className="aspect-square col-span-1">
                        <img className='w-full h-full object-cover' src="https://images.prismic.io/rejouice-2024/Z3xV4pbqstJ99GIi_Duchateau-Cover.jpg?auto=format,compress&w=2560&h=1580&fm=avif" alt="" />
                    </div>
                    <a href='/project/1' data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className="aspect-[16/12] col-span-2 flex items-end">
                        <div className="flex w-full pr-10 py-5 items-center justify-between">
                            <p className='text-3xl w-[40%] leading-tight'>PROOST – Craft Beer Brand Refresh</p>
                            <RiArrowRightUpLine size={32} />
                        </div>
                    </a>
                    <div data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className="aspect-[16/12] col-span-2">
                        <img className='w-full h-full object-cover' src="https://images.prismic.io/rejouice-2024/Z1r5YJbqstJ98aaA_ov-loop.jpg?auto=format,compress&w=2560&h=1472&fm=avif" alt="" />
                    </div>

                </div>

            </div>



        </>
    )
}

export default index