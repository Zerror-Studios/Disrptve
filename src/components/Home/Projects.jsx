import { RiArrowRightUpLine } from '@remixicon/react'
import React, { useEffect } from 'react'
import AOS from "aos";
import useHeadingAnimation from '../ui/useHeadingAnimation';
import useTextYAnimation from '../ui/useTextYAnimation';
import { ProjectsData } from '@/store/ProjectsData';

const Projects = () => {
    useTextYAnimation()
    useHeadingAnimation();

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="w-full py-14 lg:py-32 ">
                <div className="w-full  flex-col gap-y-5 text-center center">
                    <div className="flex   uppercase text-4xl lg:text-7xl gap-4 font-semibold">
                        <h2 className='animate-heading'>Case</h2>
                        <h2 className='red animate-heading'>Studies</h2>
                    </div>
                    <p className=' anim-tx-y uppercase text-base lg:text-xl  leading-tight'>Brand Identity & Packaging / Campaigns  <br /> / Digital / Experience Design</p>
                </div>

                <div className="w-full pt-14 px-3  lg:hidden">
                    {ProjectsData.slice(0, 5).map((item, index) => {
                        return (
                            <div key={index} className={`w-full flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                <div className="w-1/2 overflow-hidden border border-[#8585855b] aspect-square ">
                                    <img className='w-full h-full object-cover' src={item.coverImg} alt={item.title} />
                                </div>
                                <div className="w-1/2 border border-[#8585855b] aspect-square p-3  flex flex-col justify-end ">
                                    <h3 className='text-lg'>{item.title}</h3>
                                    <p className='text-sm opacity-70 leading-none'>{item.industry}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>



                <div className=" hidden  w-full lg:grid-cols-4 pt-14 lg:pt-32 lg:grid px-3 lg:px-5">

                    <a href='/projects/4' data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className=" group  border border-[#8585855b] relative col-span-4 flex items-end">
                        <div className="flex w-1/2 px-3 lg:px-6 py-3 lg:py-5 items-center justify-between group-hover:text-[#FB0401] group-hover:font-semibold transition-colors duration-300">
                            <div className="">
                                <h2 className=' text-lg lg:text-3xl anim-tx-y   leading-tight'>PROOST</h2>
                                <p className=' text-sm lg:text-lg anim-tx-y'> Alcohol Beverages</p>
                            </div>
                            <RiArrowRightUpLine size={32} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip" className="aspect-[16/12] border border-[#8585855b]  relative w-1/2">
                            <img className='w-full  transition-all duration-300 group-hover:scale-90 h-full object-cover' src="/images/projects/Proost/coverImg.webp" alt="" />
                        </div>
                    </a>


                    <a href='/projects/8' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-5 py-3 lg:py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <div className="">
                                <h2 className='text-xl anim-tx-y w-[60%] leading-tight font-semibold uppercase'>Imagine</h2>
                                <p className='text-lg anim-tx-y'>Plant-Based Meat</p>
                            </div>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip"
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full  transition-all duration-300 group-hover:scale-90 h-full object-cover ' src="/images/projects/Imagine/coverImg.webp" alt="" />
                        </div>
                    </a>


                    <a href='/projects/9' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-5 py-3 lg:py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <div className="">
                                <h2 className='text-xl anim-tx-y w-[60%] leading-tight font-semibold uppercase'>SuperYou</h2>
                                <p className='text-lg anim-tx-y'>Retail and Health & Nutrition</p>
                            </div>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip"
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full  transition-all duration-300 group-hover:scale-90 h-full object-cover object-top ' src="/images/projects/superYou/coverImg.webp" alt="" />
                        </div>
                    </a>

                    <a href='/projects/1' data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className=" group  border border-[#8585855b] relative col-span-4 flex items-end">
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip" className="aspect-[16/12] border border-[#8585855b]  relative w-1/2">
                            <img className='w-full  transition-all duration-300 group-hover:scale-90 h-full object-cover object-bottom' src="/images/projects/devgan/coverImg.webp" alt="" />
                        </div>
                        <div className="flex w-1/2 px-3 lg:px-6 py-3 lg:py-5 items-center justify-between group-hover:text-[#FB0401] group-hover:font-semibold transition-colors duration-300">
                            <div className="">
                                <h2 className=' text-lg lg:text-3xl anim-tx-y font-semibold uppercase  leading-tight'>Devgn CinEx</h2>
                                <p className='text-lg anim-tx-y'>Entertainment</p>
                            </div>
                            <RiArrowRightUpLine size={32} />
                        </div>
                    </a>

                    <a href='/projects/6' data-aos-anchor-placement="top-bottom"
                        data-aos="clip"
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-5 py-3 lg:py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <div className="">
                                <h2 className='text-xl anim-tx-y  leading-tight font-semibold uppercase'>Punjab Kings</h2>
                                <p className='text-lg anim-tx-y'>Sports</p>
                            </div>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div data-aos-anchor-placement="top-bottom"
                            data-aos="clip"
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full  transition-all duration-300 group-hover:scale-90 h-full object-cover ' src="/images/projects/punjabKings/coverImg.webp" alt="" />
                        </div>
                    </a>


                    <a href='/projects' className=" group cursor-pointer border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[19%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex w-full px-5 py-3 lg:py-5 items-center justify-between group-hover:text-[#FB0401] group-hover:font-semibold transition-colors duration-300">
                            <div className="relative">
                                <div className="w-0 group-hover:w-[100%] transition-all duration-300  h-[2px] bg-[#FB0401] absolute bottom-0 left-0"></div>
                                <h2 className=' text-xl anim-tx-y group-hover:italic uppercase '>view all our works</h2>
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