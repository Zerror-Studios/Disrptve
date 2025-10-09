import { RiArrowRightUpLine } from '@remixicon/react'
import React, { useEffect } from 'react'
import AOS from "aos";

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="w-full py-32 ">
                <div className="w-full flex-col gap-y-5 text-center center">
                    <div className="flex uppercase text-6xl gap-4 font-semibold">
                        <h2>Case</h2>
                        <h2 className='red'>Studies</h2>
                    </div>
                    <p className='uppercase leading-tight'>Brand Identity & Packaging <br /> / Campaigns  / Digital / Experience <br /> Design</p>
                </div>
                <div className="w-full grid-cols-4 pt-32 grid px-5">
                    <a href='/project/1' data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className="aspect-[16/12] border border-[#e5e7eb44] col-span-2 flex items-end">
                        <div className="flex w-full px-10 py-5 items-center justify-between">
                            <p className='text-3xl w-[40%] leading-tight'>PROOST – Craft Beer Brand Refresh</p>
                            <RiArrowRightUpLine size={32} />
                        </div>
                    </a>
                    <div data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className="aspect-[16/12] border border-[#e5e7eb44] col-span-2">
                        <img className='w-full h-full object-cover' src="https://images.prismic.io/rejouice-2024/Z1r5YJbqstJ98aaA_ov-loop.jpg?auto=format,compress&w=2560&h=1472&fm=avif" alt="" />
                    </div>
                    <a href='/project/2' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className="aspect-square border border-[#e5e7eb44] col-span-1 flex items-end">
                        <div className="flex w-full px-5 py-5 items-center justify-between">
                            <p className='text-xl w-[60%] leading-tight'>Proost – Craft Beer Brand Refresh</p>
                            <RiArrowRightUpLine size={26} />
                        </div>
                    </a>
                    <div data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className="aspect-square border border-[#e5e7eb44] col-span-1">
                        <img className='w-full h-full object-cover' src="https://www.rejouice.com/_vercel/image?url=https:%2F%2Fimages.prismic.io%2Frejouice-2024%2FZ1m0HZbqstJ98VgZ_oura-abdul-ovaice-3d-cd-031.png?auto=format,compress?auto=compress,format&w=1439&q=80" alt="" />
                    </div>
                    <a href='/project/3' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className="aspect-square border border-[#e5e7eb44] col-span-1 flex items-end">
                        <div className="flex w-full px-5 py-5 items-center justify-between">
                            <p className='text-xl w-[60%] leading-tight'>Proost – Craft Beer Brand Refresh</p>
                            <RiArrowRightUpLine size={26} />
                        </div>
                    </a>
                    <div data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className="aspect-square border border-[#e5e7eb44] col-span-1">
                        <img className='w-full h-full object-cover' src="https://images.prismic.io/rejouice-2024/Z3xV4pbqstJ99GIi_Duchateau-Cover.jpg?auto=format,compress&w=2560&h=1580&fm=avif" alt="" />
                    </div>
                    <div data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className="aspect-[16/12] border border-[#e5e7eb44] col-span-2">
                        <img className='w-full h-full object-cover' src="https://images.prismic.io/rejouice-2024/Z1r5W5bqstJ98aZ2_intreprid.jpg?auto=format,compress&w=2560&h=1472&fm=avif" alt="" />
                    </div>
                    <a href='/project/4' data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className="aspect-[16/12] border border-[#e5e7eb44] col-span-2 flex items-end">
                        <div className="flex w-full p-5  items-center justify-between">
                            <p className='text-3xl w-[40%] leading-tight'>Proost – Craft Beer Brand Refresh</p>
                            <RiArrowRightUpLine size={32} />
                        </div>
                    </a>
                    <a href='/project/5' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className="aspect-square border border-[#e5e7eb44] col-span-1 flex items-end">
                        <div className="flex w-full p-5   items-center justify-between">
                            <p className='text-xl w-[60%] leading-tight'>Proost – Craft Beer Brand Refresh</p>
                            <RiArrowRightUpLine size={26} />
                        </div>
                    </a>
                    <div data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className="aspect-square border border-[#e5e7eb44] col-span-1">
                        <img className='w-full h-full object-cover' src="https://images.prismic.io/rejouice-2024/Z3xV4pbqstJ99GIi_Duchateau-Cover.jpg?auto=format,compress&w=2560&h=1580&fm=avif" alt="" />
                    </div>
                    <a href='/project/6' className=" group cursor-pointer border border-[#e5e7eb44] col-span-2 flex items-end">
                        <div className="  flex w-full p-5  items-center justify-between">
                            <div className="relative">
                                <div className="w-0 group-hover:w-[97%] transition-all duration-300  h-[1px] bg-white absolute bottom-0 left-0"></div>
                                <p className=' text-xl group-hover:italic uppercase '>view all our works</p>
                            </div>
                            <RiArrowRightUpLine size={32} />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projects