import { RiArrowRightUpLine } from '@remixicon/react'
import React, { useEffect } from 'react'
import AOS from "aos";
import { ProjectsData } from '@/store/ProjectsData';
import RedBtn from '../buttons/RedBtn';
import Link from 'next/link';

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
            <div className="w-full py-14 lg:py-32 ">
                <div className="w-full  flex-col gap-y-5 text-center center">
                    <div className="flex   uppercase text-4xl lg:text-7xl gap-4 font-semibold">
                        <h2 className=''>Case</h2>
                        <h2 className='red '>Studies</h2>
                    </div>
                    <p className='  uppercase text-base lg:text-xl  leading-tight'>Brand Identity & Packaging / Campaigns  <br /> / Digital / Experience Design</p>
                </div>

                <div className="w-full pt-14 px-3  md:hidden">

                    <div className="w-full grid">
                        {ProjectsData.slice(0, 6).map((item, index) => {
                            const layoutType = index % 3;

                            // Layout A — full-width image with overlay text
                            if (layoutType === 0) {
                                return (
                                    <Link href={`/projects/${item.id}`} key={index}>
                                        <div key={index} className="w-full border border-[#8585855b] relative">
                                            <div className="w-full aspect-square overflow-hidden">
                                                <img
                                                    src={item.coverImg}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="w-full p-3 space-y-2 absolute left-0 bottom-0 bg-black text-white">
                                                <h3 className="text-lg uppercase leading-none">{item.title}</h3>
                                                <p className="text-sm opacity-70 leading-none">{item.industry}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            }

                            // Layout B (even index, e.g., 2nd)
                            if (layoutType === 1) {
                                return (
                                    <Link href={`/projects/${item.id}`} key={index}>
                                        <div className="w-full flex flex-row-reverse">
                                            <div className="w-1/2 overflow-hidden border border-[#8585855b] aspect-square">
                                                <img
                                                    src={item.coverImg}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="w-1/2 border border-[#8585855b] aspect-square p-3 flex flex-col justify-end">
                                                <h3 className="text-lg uppercase leading-none">{item.title}</h3>
                                                <p className="text-sm opacity-70 leading-none">{item.industry}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            }

                            // Layout C (odd index, e.g., 3rd)
                            return (
                                <Link href={`/projects/${item.id}`} key={index}>
                                    <div className="w-full flex">
                                        <div className="w-1/2 overflow-hidden border border-[#8585855b] aspect-square">
                                            <img
                                                src={item.coverImg}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-1/2 border border-[#8585855b] aspect-square p-3 flex flex-col justify-end">
                                            <h3 className="text-lg uppercase leading-none">{item.title}</h3>
                                            <p className="text-sm opacity-70 leading-none">{item.industry}</p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="w-full mt-10 center">
                        <RedBtn text={"explore all"} href={'/projects'} />
                    </div>
                </div>



                <div className=" hidden  w-full md:grid-cols-4 pt-14 lg:pt-32 md:grid px-3 lg:px-5">

                    <Link href='/projects/4' className=" group  border border-[#8585855b] relative col-span-4 flex items-end">
                        <div className="flex w-1/2 px-3 lg:px-5 py-3 lg:py-5 items-center justify-between group-hover:text-[#FB0401] group-hover:font-semibold transition-colors duration-300">
                            <div className="">
                                <h2 className=' text-xl lg:text-3xl    leading-tight'>PROOST</h2>
                                <p className=' text-base lg:text-xl '> Alcohol Beverages</p>
                            </div>
                            <RiArrowRightUpLine size={32} />
                        </div>
                        <div className="aspect-[16/12] border border-[#8585855b]  relative w-1/2">
                            <img className='w-full  transition-all duration-300 group-hover:scale-90 h-full object-cover' src="/images/projects/Proost/coverImg.webp" alt="" />
                        </div>
                    </Link>


                    <Link href='/projects/8'
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-3 lg:px-5 py-3 lg:py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <div className="">
                                <h2 className=' text-xl lg:text-3xl   leading-tight font-semibold uppercase'>Imagine</h2>
                                <p className=' text-base lg:text-xl '>Plant-Based Meat</p>
                            </div>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full  transition-all duration-300 group-hover:scale-90 h-full object-cover ' src="/images/projects/Imagine/coverImg.webp" alt="" />
                        </div>
                    </Link>


                    <Link href='/projects/9'
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-3 lg:px-5 py-3 lg:py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <div className="">
                                <h2 className=' text-xl lg:text-3xl   leading-tight font-semibold uppercase'>SuperYou</h2>
                                <p className=' text-base lg:text-xl '>Retail and Health & Nutrition</p>
                            </div>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full  transition-all duration-300 group-hover:scale-90 h-full object-cover object-top ' src="/images/projects/superYou/coverImg.webp" alt="" />
                        </div>
                    </Link>

                    <Link href='/projects/1' className=" group  border border-[#8585855b] relative col-span-4 flex items-end">
                        <div className="aspect-[16/12] border border-[#8585855b]  relative w-1/2">
                            <img className='w-full  transition-all duration-300 group-hover:scale-90 h-full object-cover object-bottom' src="/images/projects/devgan/coverImg.webp" alt="" />
                        </div>
                        <div className="flex w-1/2 px-3 lg:px-5 py-3 lg:py-5 items-center justify-between group-hover:text-[#FB0401] group-hover:font-semibold transition-colors duration-300">
                            <div className="">
                                <h2 className=' text-xl lg:text-3xl  font-semibold uppercase  leading-tight'>Devgn CinEx</h2>
                                <p className=' text-base lg:text-xl '>Entertainment</p>
                            </div>
                            <RiArrowRightUpLine size={32} />
                        </div>
                    </Link>

                    <Link href='/projects/6'
                        className=" group  border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[25%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex aspect-square w-1/2 px-3 lg:px-5 py-3 lg:py-5 items-end justify-between group-hover:text-[#FB0401] ont-semibold transition-colors duration-300">
                            <div className="">
                                <h2 className=' text-xl lg:text-3xl   leading-tight font-semibold uppercase'>Punjab Kings</h2>
                                <p className=' text-base lg:text-xl '>Sports</p>
                            </div>
                            <RiArrowRightUpLine size={26} />
                        </div>
                        <div
                            className="aspect-square border w-1/2 border-[#8585855b]  relative ">
                            <img className='w-full  transition-all duration-300 group-hover:scale-90 h-full object-cover ' src="/images/projects/punjabKings/coverImg.webp" alt="" />
                        </div>
                    </Link>


                    <Link href='/projects' className=" group cursor-pointer border border-[#8585855b]  relative col-span-2 flex items-end">
                        {/* <div className="w-full group-hover:h-[19%] ease-in-out transition-all duration-300 h-0 absolute bg-[#FB0401] z-[-1] bottom-0 left-0"></div> */}
                        <div className="flex w-full px-3 lg:px-5 py-3 lg:py-5 items-center justify-between group-hover:text-[#FB0401] group-hover:font-semibold transition-colors duration-300">
                            <div className="relative">
                                <div className="w-0 group-hover:w-[100%] transition-all duration-300  h-[2px] bg-[#FB0401] absolute bottom-0 left-0"></div>
                                <h2 className=' text-xl lg:text-3xl  group-hover:italic uppercase '>view all our works</h2>
                            </div>
                            <RiArrowRightUpLine size={32} />
                        </div>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Projects