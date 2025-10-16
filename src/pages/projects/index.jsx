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
            <div className="w-full h-[70vh] px-5 flex items-end">
                <div className="w-full flex flex-wrap space-y-3 group">
                    {[
                        { label: "All", count: 5 },
                        { label: "Strategic Design", count: 5 },
                        { label: "Digital Products", count: 5 },
                        { label: "Branding", count: 5 },
                        { label: "Consultancy", count: 5 },
                        { label: "Experiences", count: 5 },
                        { label: "Technology", count: 5 },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex cursor-pointer px-2 transition-opacity duration-300 opacity-100 group-hover:opacity-40 hover:!opacity-100"
                        >
                            <p className="text-6xl font-semibold flex items-start">
                                {i === 0 ? (
                                    <>
                                        {item.label}
                                        <sup className="text-base">({item.count})</sup>
                                    </>
                                ) : (
                                    <>
                                        — {item.label} <sup className="text-base">({item.count})</sup>
                                    </>
                                )}
                            </p>
                        </div>
                    ))}
                </div>


            </div>

            <div className="w-full grid-cols-4 pt-12 pb-32 grid px-5">

                    <a href='/project/1' data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className=" group  border border-[#8585855b] relative col-span-4 flex items-end">
                        <div className="flex w-1/2 px-6 py-5 items-center justify-between group-hover:text-[#FB0401] group-hover:font-semibold transition-colors duration-300">
                            <p className='text-3xl font-semibold   w-[40%] leading-tight'>PROOST</p>
                            <RiArrowRightUpLine size={32} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip" className="aspect-[16/12] border border-[#8585855b]  relative w-1/2">
                            <img className='w-full scale-105 transition-all duration-300 group-hover:scale-100 h-full object-cover' src="/images/projects/Proost/heroImg.webp" alt="" />
                        </div>
                    </a>


                    <a href='/project/2' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-5 py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <p className='text-xl w-[60%] leading-tight font-semibold uppercase'>Imagine</p>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip"
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full scale-105 transition-all duration-300 group-hover:scale-100 h-full object-cover ' src="/images/projects/Imagine/img2.webp" alt="" />
                        </div>
                    </a>


                    <a href='/project/3' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-5 py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <p className='text-xl w-[60%] leading-tight font-semibold uppercase'>Imagine</p>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip"
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full scale-105 transition-all duration-300 group-hover:scale-100 h-full object-cover ' src="/images/projects/Imagine/img2.webp" alt="" />
                        </div>
                    </a>


                    <a href='/project/4' data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className=" group  border border-[#8585855b] relative col-span-4 flex items-end">
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip" className="aspect-[16/12] border border-[#8585855b]  relative w-1/2">
                            <img className='w-full scale-105 transition-all duration-300 group-hover:scale-100 h-full object-cover' src="/images/projects/Proost/heroImg.webp" alt="" />
                        </div>
                        <div className="flex w-1/2 px-6 py-5 items-center justify-between group-hover:text-[#FB0401] group-hover:font-semibold transition-colors duration-300">
                            <p className='text-3xl font-semibold   w-[40%] leading-tight'>PROOST</p>
                            <RiArrowRightUpLine size={32} />
                        </div>
                    </a>


                    <a href='/project/5' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-5 py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <p className='text-xl w-[60%] leading-tight font-semibold uppercase'>Imagine</p>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip"
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full scale-105 transition-all duration-300 group-hover:scale-100 h-full object-cover ' src="/images/projects/Imagine/img2.webp" alt="" />
                        </div>
                    </a>


                    <a href='/projects' className=" group cursor-pointer border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[19%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex w-full px-5 py-5 items-center justify-between group-hover:text-[#FB0401] group-hover:font-semibold transition-colors duration-300">
                            <div className="relative">
                                <div className="w-0 group-hover:w-[100%] transition-all duration-300  h-[2px] bg-[#FB0401] absolute bottom-0 left-0"></div>
                                <p className=' text-xl group-hover:italic uppercase '>view all our works</p>
                            </div>
                            <RiArrowRightUpLine size={32} />
                        </div>
                    </a>
                </div>
        </>
    )
}

export default index