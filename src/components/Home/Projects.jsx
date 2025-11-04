import { RiArrowRightUpLine } from '@remixicon/react'
import React, { useEffect } from 'react'
import AOS from "aos";
import { ProjectsData } from '@/store/ProjectsData';
import RedBtn from '../buttons/RedBtn';
import Link from 'next/link';

const Projects = () => {

    const pattern = (i) => (i % 6) + 1;

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

                {ProjectsData.length === 0 ? (
                    <p className="text-lg text-gray-400 text-center mt-10">
                        No projects found.
                    </p>
                ) : (
                    <>
                        {/* /for mobile/ */}
                        <div className="w-full pt-14 pb-10 px-3 md:hidden grid">
                            {ProjectsData.slice(0, 10).map((item, index) => {
                                const layoutType = index % 3;

                                if (layoutType === 0) {
                                    return (
                                        <Link title='link' href={`/case-studies/${item.slug}`} key={index}>
                                            <div key={index} className="w-full border border-[#8585855b] relative">
                                                <div className="w-full aspect-[16/12] overflow-hidden">
                                                    <img
                                                        src={item.coverImg}
                                                        alt={item.title}
                                                        title={item.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="w-full p-3 space-y-2  bg-black text-white">
                                                    <h3 className="text-lg uppercase leading-none">{item.title}</h3>
                                                    <p className="text-sm opacity-70 leading-none">{item.industry}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                }

                                if (layoutType === 1) {
                                    return (
                                        <Link title='link' href={`/case-studies/${item.slug}`} key={index}>
                                            <div className="w-full flex flex-row-reverse">
                                                <div className="w-1/2 overflow-hidden border border-[#8585855b] aspect-square">
                                                    <img
                                                        src={item.coverImg}
                                                        alt={item.title}
                                                        title={item.title}
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
                                    <Link title='link' href={`/case-studies/${item.slug}`} key={index}>
                                        <div className="w-full flex">
                                            <div className="w-1/2 overflow-hidden border border-[#8585855b] aspect-square">
                                                <img
                                                    src={item.coverImg}
                                                    alt={item.title}
                                                    title={item.title}
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


                        {/* /for desktop/ */}
                        <div className=" hidden md:block w-full pt-12 px-5 md:pb-12 lg:pb-32">
                            {ProjectsData.slice(0, 10).map((project, i) => {
                                const layout = pattern(i);

                                // 1st layout (1st, 7th, 13th, ...)
                                if (layout === 1)
                                    return (
                                        <div key={project.id} className="w-full">
                                            <Link
                                            title='link'
                                                href={`/case-studies/${project.slug}`}
                                                className="group border border-[#8585855b] relative w-full flex items-end"
                                            >
                                                <div className="flex  w-1/2   px-3 lg:px-5 py-5 items-end justify-between   transition-colors duration-300">
                                                    <div className="absolute group-hover:h-full w-full transition-all duration-300  z-[-1] h-0 bg-[#D70000]  left-0 bottom-0"></div>
                                                    <div>
                                                        <h3 className="  text-xl lg:text-3xl  font-semibold leading-none uppercase">
                                                            {project.title}
                                                        </h3>
                                                        <p className=" text-base  lg:text-xl ">{project?.industry || ""}</p>
                                                    </div>
                                                    <RiArrowRightUpLine size={32} />
                                                </div>
                                                <div

                                                    className="aspect-[16/12] border border-[#8585855b] relative w-1/2"
                                                >
                                                    {project.coverImg === "" ? (
                                                        <img
                                                            className="w-full transition-all duration-300 group-hover:scale-90 h-full object-contain"
                                                            src={project.logo}
                                                            alt={project.title}
                                                            title={project.title}
                                                        />
                                                    ) : (

                                                        <img
                                                            className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                            src={project.coverImg}
                                                            alt={project.title}
                                                            title={project.title}
                                                        />
                                                    )}
                                                </div>
                                            </Link>
                                        </div>
                                    );

                                // 2nd & 3rd layout (paired grid)
                                if (layout === 2 || layout === 3) {
                                    // Render pair only once (on even index in pattern 2)
                                    if (layout === 3) return null;
                                    const pair = ProjectsData[i + 1] ? [project, ProjectsData[i + 1]] : [project];
                                    return (
                                        <div key={project.id} className="w-full flex">
                                            {pair.map((p) => (
                                                <Link
                                                title='link'
                                                    key={p.id}
                                                    href={`/case-studies/${p.slug}`}

                                                    className="group border border-[#8585855b] relative w-1/2 flex items-end"
                                                >
                                                    <div className="flex   w-1/2 px-3 lg:px-5 py-5 items-end justify-between  transition-colors duration-300">
                                                        <div className="absolute group-hover:h-full w-full transition-all duration-300  z-[-1] h-0 bg-[#D70000]  left-0 bottom-0"></div>
                                                        <div>
                                                            <h3 className="  text-xl lg:text-3xl   leading-none font-semibold uppercase">
                                                                {p.title}
                                                            </h3>
                                                            <p className=" text-base  lg:text-xl  leading-none mt-2 ">{p.industry || ""}</p>
                                                        </div>
                                                        <RiArrowRightUpLine size={26} />
                                                    </div>
                                                    <div
                                                        className="aspect-square border w-1/2 border-[#8585855b] relative"
                                                    >
                                                        {p.coverImg === "" ? (
                                                            <img
                                                                className="w-full transition-all duration-300 group-hover:scale-90 h-full object-contain"
                                                                src={p.logo}
                                                                alt={p.title}
                                                                title={p.title}
                                                            />
                                                        ) : (

                                                            <img
                                                                className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                                src={p.coverImg}
                                                                alt={p.title}
                                                                title={p.title}
                                                            />
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    );
                                }

                                // 4th layout (mirrored full-width)
                                if (layout === 4)
                                    return (
                                        <div key={project.id} className="w-full">
                                            <Link
                                            title='link'
                                                href={`/case-studies/${project.slug}`}
                                                className="group border border-[#8585855b] relative w-full flex items-end"
                                            >
                                                <div

                                                    className="aspect-[16/12] border border-[#8585855b] relative w-1/2"
                                                >
                                                    {project.coverImg === "" ? (
                                                        <img
                                                            className="w-full transition-all duration-300 group-hover:scale-90 h-full object-contain"
                                                            src={project.logo}
                                                            alt={project.title}
                                                            title={project.title}
                                                        />
                                                    ) : (

                                                        <img
                                                            className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                            src={project.coverImg}
                                                            alt={project.title}
                                                            title={project.title}
                                                        />
                                                    )}
                                                </div>
                                                <div className="flex  w-1/2 px-3 lg:px-5 py-5 items-center justify-between   transition-colors duration-300">
                                                    <div className="absolute group-hover:h-full w-full transition-all duration-300  z-[-1] h-0 bg-[#D70000]  left-0 bottom-0"></div>
                                                    <div>
                                                        <h3 className="  text-xl lg:text-3xl  font-semibold leading-none uppercase">
                                                            {project.title}
                                                        </h3>
                                                        <p className=" text-base  lg:text-xl ">{project?.industry || ""}</p>
                                                    </div>
                                                    <RiArrowRightUpLine size={32} />
                                                </div>
                                            </Link>
                                        </div>
                                    );

                                // 5th & 6th layout (same as 2nd & 3rd)
                                if (layout === 5 || layout === 6) {
                                    if (layout === 6) return null;
                                    const pair = ProjectsData[i + 1] ? [project, ProjectsData[i + 1]] : [project];
                                    return (
                                        <div key={project.id} className="w-full flex">
                                            {pair.map((p) => (
                                                <Link
                                                title='link'
                                                    key={p.id}
                                                    href={`/case-studies/${p.slug}`}

                                                    className="group border border-[#8585855b] relative w-1/2 flex items-end"
                                                >
                                                    <div className="flex  w-1/2 px-3 lg:px-5 py-5 items-end justify-between   transition-colors duration-300">
                                                        <div className="absolute group-hover:h-full w-full transition-all duration-300  z-[-1] h-0 bg-[#D70000]  left-0 bottom-0"></div>
                                                        <div>
                                                            <h3 className="  text-xl lg:text-3xl   leading-none font-semibold uppercase">
                                                                {p.title}
                                                            </h3>
                                                            <p className=" text-base  lg:text-xl   leading-none mt-2 ">{p.industry || ""}</p>
                                                        </div>
                                                        <RiArrowRightUpLine size={26} />
                                                    </div>
                                                    <div
                                                        className="aspect-square border w-1/2 border-[#8585855b] relative"
                                                    >
                                                        {p.coverImg === "" ? (
                                                            <img
                                                                className="w-full transition-all duration-300 group-hover:scale-90 h-full object-contain"
                                                                src={p.logo}
                                                                alt={p.title}
                                                                title={p.title}
                                                            />
                                                        ) : (

                                                            <img
                                                                className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                                src={p.coverImg}
                                                                alt={p.title}
                                                                title={p.title}
                                                            />
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </>
                )}
                <div className="w-full center">

                    <Link title='link' href="/case-studies">
                        <button className={`  bgred group  px-6 py-2  uppercase `}>
                            <div className="relative flex items-center gap-1">
                                <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
                                <h2 className=" text-sm md:text-base group-hover:italic uppercase"> view all our work</h2>
                                <RiArrowRightUpLine size={20} />
                            </div>
                        </button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Projects