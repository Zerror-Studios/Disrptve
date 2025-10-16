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
                    <div className="flex uppercase text-7xl gap-4 font-semibold">
                        <h2>Case</h2>
                        <h2 className='red'>Studies</h2>
                    </div>
                    <p className='uppercase text-xl leading-tight'>Brand Identity & Packaging <br /> / Campaigns  / Digital / Experience <br /> Design</p>
                </div>

                <div className="w-full grid-cols-4 pt-32 grid px-5">

                    <a href='/project/1' data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className=" group  border border-[#8585855b] relative col-span-4 flex items-end">
                        <div className="flex w-1/2 px-6 py-5 items-center justify-between group-hover:text-[#FB0401] group-hover:font-semibold transition-colors duration-300">
                            <div className="">
                                <p className='text-3xl font-semibold  leading-tight'>PROOST</p>
                                <p className='text-lg'> Alcohol Beverages</p>
                            </div>
                            <RiArrowRightUpLine size={32} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip" className="aspect-[16/12] border border-[#8585855b]  relative w-1/2">
                            <img className='w-full scale-105 transition-all duration-300 group-hover:scale-100 h-full object-cover' src="/images/projects/Proost/img5.webp" alt="" />
                        </div>
                    </a>


                    <a href='/project/2' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-5 py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <div className="">
                                <p className='text-xl w-[60%] leading-tight font-semibold uppercase'>Imagine</p>
                                <p className='text-lg'>Plant-Based Meat</p>
                            </div>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip"
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full scale-105 transition-all duration-300 group-hover:scale-100 h-full object-cover ' src="/images/projects/Imagine/img3.webp" alt="" />
                        </div>
                    </a>


                    <a href='/project/3' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-5 py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <div className="">
                                <p className='text-xl w-[60%] leading-tight font-semibold uppercase'>SuperYou</p>
                                <p className='text-lg'>Retail and Health & Nutrition</p>
                            </div>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip"
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full scale-105 transition-all duration-300 group-hover:scale-100 h-full object-cover ' src="/images/projects/superYou/heroImg.jpg" alt="" />
                        </div>
                    </a>


                    <a href='/project/4' data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className=" group  border border-[#8585855b] relative col-span-4 flex items-end">
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip" className="aspect-[16/12] border border-[#8585855b]  relative w-1/2">
                            <img className='w-full scale-105 transition-all duration-300 group-hover:scale-100 h-full object-cover' src="/images/projects/guyana/heroImg.jpg" alt="" />
                        </div>
                        <div className="flex w-1/2 px-6 py-5 items-center justify-between group-hover:text-[#FB0401] group-hover:font-semibold transition-colors duration-300">
                            <div className="">
                                <p className='text-3xl font-semibold  leading-tight'>Guyana</p>
                                <p className='text-lg'>Political</p>
                            </div>
                            <RiArrowRightUpLine size={32} />
                        </div>
                    </a>

                    <a href='/project/5' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-5 py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <div className="">
                                <p className='text-xl  leading-tight font-semibold uppercase'>Punjab Kings</p>
                                <p className='text-lg'>Sports</p>
                            </div>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip"
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full scale-105 transition-all duration-300 group-hover:scale-100 h-full object-cover ' src="/images/projects/punjabKings/heroImg.jpg" alt="" />
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
            </div>
        </>
    )
}

export default Projects