import { RiArrowRightUpLine } from '@remixicon/react'
import React, { useEffect, useMemo, useState } from 'react'
import AOS from "aos";
import { ProjectsData } from '@/store/ProjectsData';
import Link from 'next/link';
import SeoHeader from '@/components/seo/SeoHeader';
const index = () => {
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
            <SeoHeader meta={meta} />

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
                            <h3 className=" text-xl lg:text-5xl uppercase  flex items-start">
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
                    <div className="w-full pt-14 px-3 md:hidden grid">
                        {filteredProjects.map((item, index) => {
                            const layoutType = index % 3;

                            // Layout A — full-width image with overlay text
                            if (layoutType === 0) {
                                return (
                                    <Link href={`/projects/${item.id}`} key={index}>
                                        <div key={index} className="w-full border border-[#8585855b] relative">
                                            <div className="w-full aspect-square overflow-hidden">
                                                {item.coverImg === "" ? (
                                                    <img
                                                        className="w-full transition-all duration-300 group-hover:scale-90 h-full object-contain"
                                                        src={item.logo}
                                                        alt={item.title}
                                                    />
                                                ) : (

                                                    <img
                                                        className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                        src={item.coverImg}
                                                        alt={item.title}
                                                    />
                                                )}
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
                                                {item.coverImg === "" ? (
                                                    <img
                                                        className="w-full transition-all duration-300 group-hover:scale-90 h-full object-contain"
                                                        src={item.logo}
                                                        alt={item.title}
                                                    />
                                                ) : (

                                                    <img
                                                        className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                        src={item.coverImg}
                                                        alt={item.title}
                                                    />
                                                )}
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
                                            {item.coverImg === "" ? (
                                                <img
                                                    className="w-full transition-all duration-300 group-hover:scale-90 h-full object-contain"
                                                    src={item.logo}
                                                    alt={item.title}
                                                />
                                            ) : (

                                                <img
                                                    className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                    src={item.coverImg}
                                                    alt={item.title}
                                                />
                                            )}
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
                    <div className=" hidden md:block w-full pt-12 px-5 pb-32">
                        {filteredProjects.map((project, i) => {
                            const layout = pattern(i);

                            // 1st layout (1st, 7th, 13th, ...)
                            if (layout === 1)
                                return (
                                    <div key={project.id} className="w-full">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="group border border-[#8585855b] relative w-full flex items-end"
                                        >
                                            <div className="flex w-1/2 px-3 lg:px-5 py-5 items-center justify-between group-hover:text-[#FB0401]  transition-colors duration-300">
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
                                                    />
                                                ) : (

                                                    <img
                                                        className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                        src={project.coverImg}
                                                        alt={project.title}
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
                                const pair = filteredProjects[i + 1] ? [project, filteredProjects[i + 1]] : [project];
                                return (
                                    <div key={project.id} className="w-full flex">
                                        {pair.map((p) => (
                                            <Link
                                                key={p.id}
                                                href={`/projects/${p.id}`}

                                                className="group border border-[#8585855b] relative w-1/2 flex items-end"
                                            >
                                                <div className="flex aspect-square w-1/2 px-3 lg:px-5 py-5 items-end justify-between group-hover:text-[#FB0401]  transition-colors duration-300">
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
                                                        />
                                                    ) : (

                                                        <img
                                                            className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                            src={p.coverImg}
                                                            alt={p.title}
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
                                            href={`/projects/${project.id}`}
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
                                                    />
                                                ) : (

                                                    <img
                                                        className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                        src={project.coverImg}
                                                        alt={project.title}
                                                    />
                                                )}
                                            </div>
                                            <div className="flex w-1/2 px-3 lg:px-5 py-5 items-center justify-between group-hover:text-[#FB0401]  transition-colors duration-300">
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
                                const pair = filteredProjects[i + 1] ? [project, filteredProjects[i + 1]] : [project];
                                return (
                                    <div key={project.id} className="w-full flex">
                                        {pair.map((p) => (
                                            <Link
                                                key={p.id}
                                                href={`/projects/${p.id}`}

                                                className="group border border-[#8585855b] relative w-1/2 flex items-end"
                                            >
                                                <div className="flex aspect-square w-1/2 px-3 lg:px-5 py-5 items-end justify-between group-hover:text-[#FB0401]  transition-colors duration-300">
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
                                                        />
                                                    ) : (

                                                        <img
                                                            className="w-full transition-all duration-300 group-hover:scale-90 h-full object-cover"
                                                            src={p.coverImg}
                                                            alt={p.title}
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

        </>
    )
}

export default index



const meta = {
    title: "Our Case Studies - Marketing Case Studies & Portfolio | DISRPTVE",
    description:
        "Explore our portfolio of successful brand campaigns, digital marketing projects, and creative excellence across industries.",
    canonical: "https://disrptve.vercel.app/projects",
    og: {
        title: "Our Case Studies - Marketing Case Studies & Portfolio | DISRPTVE",
        description:
            "Explore our portfolio of successful brand campaigns, digital marketing projects, and creative excellence across industries.",
        image: "https://disrptve.vercel.app/logo-og.png",
        url: "https://disrptve.vercel.app/projects",
        type: "website",
        site_name: "DISRPTVE",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Case Studies - Marketing Case Studies & Portfolio | DISRPTVE",
        description:
            "Explore our portfolio of successful brand campaigns, digital marketing projects, and creative excellence across industries.",
        image: "https://disrptve.vercel.app/logo-og.png",
        site: "@disrptve",
    },
    robots: "index,follow",
    keywords:
        "marketing portfolio, case studies, brand campaigns, creative projects, marketing work, agency portfolio",
    author: "DISRPTVE",
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#000000",
};