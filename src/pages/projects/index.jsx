import { RiArrowRightUpLine } from '@remixicon/react'
import React, { useEffect, useMemo, useState } from 'react'
import AOS from "aos";
import { ProjectsData } from '@/store/ProjectsData';
import useHeadingAnimation from '@/components/ui/useHeadingAnimation';
import useTextYAnimation from '@/components/ui/useTextYAnimation';

const index = () => {
    useHeadingAnimation();
    useTextYAnimation()
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = useMemo(() => {
        const tagCount = {};

        ProjectsData.forEach((p) => {
            if (p.industry) {
                tagCount[p.industry] = (tagCount[p.industry] || 0) + 1;
            }

            if (p.tags && Array.isArray(p.tags)) {
                p.tags.forEach((t) => {
                    tagCount[t] = (tagCount[t] || 0) + 1;
                });
            }
        });

        const sortedTags = Object.entries(tagCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5) // take top 6 tags
            .map(([label, count]) => ({ label, count }));

        return [{ label: "All", count: ProjectsData.length }, ...sortedTags];
    }, [ProjectsData]);

    const filteredProjects =
        activeFilter === "All"
            ? ProjectsData
            : ProjectsData.filter(
                (p) =>
                    p.industry === activeFilter ||
                    (p.tags && p.tags.includes(activeFilter))
            );

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
            <div className="w-full h-[50vh] lg:h-[70vh] px-3 lg:px-5 flex items-end">

                <div className="w-full flex flex-wrap space-y-3 group mb-10">
                    {filters.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => setActiveFilter(item.label)}
                            className={`flex cursor-pointer px-2 transition-opacity duration-300 ${activeFilter === item.label
                                ? "opacity-100"
                                : "opacity-40 group-hover:opacity-40 hover:!opacity-100"
                                }`}
                        >
                            <h3 className=" text-xl lg:text-5xl uppercase animate-heading flex items-start">
                                {i === 0 ? (
                                    <>
                                        {item.label}
                                        <sup className="text-base leading-none mt-2">({item.count})</sup>
                                    </>
                                ) : (
                                    <>
                                        — {item.label}
                                        <sup className="text-base leading-none mt-2">({item.count})</sup>
                                    </>
                                )}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>


            {filteredProjects.length === 0 ? (
                <p className="text-lg text-gray-400 text-center mt-10">
                    No projects found.
                </p>
            ) : (
                <>
                    <div className="w-full pt-14 px-3  md:hidden">
                        {filteredProjects.map((item, index) => {
                            return (
                                <a href={`/projects/${item.id}`} key={index} >
                                    <div className={`w-full flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                        <div className="w-1/2 overflow-hidden border border-[#8585855b] aspect-square ">
                                            <img className='w-full h-full object-cover' src={item.coverImg} alt={item.title} />
                                        </div>
                                        <div className="w-1/2 border border-[#8585855b] aspect-square p-3  flex flex-col justify-end ">
                                            <h3 className='text-lg uppercase leading-none'>{item.title}</h3>
                                            <p className='text-sm opacity-70 leading-none'>{item.industry}</p>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                    <div className=" hidden md:block w-full pt-12 px-5 pb-32">
                        {filteredProjects.map((project, i) => {
                            const layout = pattern(i);

                            // 1st layout (1st, 7th, 13th, ...)
                            if (layout === 1)
                                return (
                                    <div key={project.id} className="w-full">
                                        <a
                                            href={`/projects/${project.id}`}
                                            className="group border border-[#8585855b] relative w-full flex items-end"
                                        >
                                            <div className="flex w-1/2 px-3 lg:px-5 py-5 items-center justify-between group-hover:text-[#FB0401]  transition-colors duration-300">
                                                <div>
                                                    <h3 className="  text-xl lg:text-3xl anim-tx-y font-semibold leading-none uppercase">
                                                        {project.title}
                                                    </h3>
                                                    <p className=" text-base  lg:text-xl anim-tx-y">{project?.industry || ""}</p>
                                                </div>
                                                <RiArrowRightUpLine size={32} />
                                            </div>
                                            <div

                                                className="aspect-[16/12] border border-[#8585855b] relative w-1/2"
                                            >
                                                <img
                                                    className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                    src={project.coverImg}
                                                    alt={project.title}
                                                />
                                            </div>
                                        </a>
                                    </div>
                                );

                            // 2nd & 3rd layout (paired grid)
                            if (layout === 2 || layout === 3) {
                                // Render pair only once (on even index in pattern 2)
                                if (layout === 3) return null;
                                const pair = filteredProjects[i + 1] ? [project, filteredProjects[i + 1]] : [project];
                                return (
                                    <div key={project.id} className="w-full flex">
                                        {pair.map((p) => (
                                            <a
                                                key={p.id}
                                                href={`/projects/${p.id}`}

                                                className="group border border-[#8585855b] relative w-1/2 flex items-end"
                                            >
                                                <div className="flex aspect-square w-1/2 px-3 lg:px-5 py-5 items-end justify-between group-hover:text-[#FB0401]  transition-colors duration-300">
                                                    <div>
                                                        <h3 className="  text-xl lg:text-3xl anim-tx-y  leading-none font-semibold uppercase">
                                                            {p.title}
                                                        </h3>
                                                        <p className=" text-base  lg:text-xl anim-tx-y leading-none mt-2 ">{p.industry || ""}</p>
                                                    </div>
                                                    <RiArrowRightUpLine size={26} />
                                                </div>
                                                <div
                                                    className="aspect-square border w-1/2 border-[#8585855b] relative"
                                                >
                                                    <img
                                                        className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                        src={p.heroImg}
                                                        alt={p.title}
                                                    />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                );
                            }

                            // 4th layout (mirrored full-width)
                            if (layout === 4)
                                return (
                                    <div key={project.id} className="w-full">
                                        <a
                                            href={`/projects/${project.id}`}
                                            className="group border border-[#8585855b] relative w-full flex items-end"
                                        >
                                            <div

                                                className="aspect-[16/12] border border-[#8585855b] relative w-1/2"
                                            >
                                                <img
                                                    className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                    src={project.coverImg}
                                                    alt={project.title}
                                                />
                                            </div>
                                            <div className="flex w-1/2 px-3 lg:px-5 py-5 items-center justify-between group-hover:text-[#FB0401]  transition-colors duration-300">
                                                <div>
                                                    <h3 className="  text-xl lg:text-3xl anim-tx-y font-semibold leading-none uppercase">
                                                        {project.title}
                                                    </h3>
                                                    <p className=" text-base  lg:text-xl anim-tx-y">{project?.industry || ""}</p>
                                                </div>
                                                <RiArrowRightUpLine size={32} />
                                            </div>
                                        </a>
                                    </div>
                                );

                            // 5th & 6th layout (same as 2nd & 3rd)
                            if (layout === 5 || layout === 6) {
                                if (layout === 6) return null;
                                const pair = filteredProjects[i + 1] ? [project, filteredProjects[i + 1]] : [project];
                                return (
                                    <div key={project.id} className="w-full flex">
                                        {pair.map((p) => (
                                            <a
                                                key={p.id}
                                                href={`/projects/${p.id}`}

                                                className="group border border-[#8585855b] relative w-1/2 flex items-end"
                                            >
                                                <div className="flex aspect-square w-1/2 px-3 lg:px-5 py-5 items-end justify-between group-hover:text-[#FB0401]  transition-colors duration-300">
                                                    <div>
                                                        <h3 className="  text-xl lg:text-3xl anim-tx-y  leading-none font-semibold uppercase">
                                                            {p.title}
                                                        </h3>
                                                        <p className=" text-base  lg:text-xl anim-tx-y  leading-none mt-2 ">{p.industry || ""}</p>
                                                    </div>
                                                    <RiArrowRightUpLine size={26} />
                                                </div>
                                                <div
                                                    className="aspect-square border w-1/2 border-[#8585855b] relative"
                                                >
                                                    <img
                                                        className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                        src={p.heroImg}
                                                        alt={p.title}
                                                    />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                );
                            }
                        })}
                    </div>
                </>
            )}

        </>
    )
}

export default index