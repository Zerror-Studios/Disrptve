import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useParams } from 'next/navigation';
import { ProjectsData } from '@/store/ProjectsData';
import ProjectImageSlider from '@/components/ui/ProjectImageSlider';
import Link from 'next/link';
import SeoHeader from '@/components/seo/SeoHeader';
gsap.registerPlugin(ScrollTrigger);


const ProjectDetail = ({ project, currentIndex }) => {

    const containerRef = useRef(null);
    const sliderRef = useRef(null);
    const prgrsbarRef = useRef(null);
    const prgrsbarInnerRef = useRef(null);

    useGSAP(() => {

        gsap.to(".border_animm", {
            duration: .5,
            delay: .5,
            width: "100%",
        })
        gsap.to(".pj_anim_txt", {
            opacity: 1,
            delay: 1,
            stagger: .2
        })

    })

    useGSAP(
        (context) => {
            const container = containerRef.current;
            const slider = sliderRef.current;
            const progressOuter = prgrsbarRef.current;
            const progressInner = prgrsbarInnerRef.current;

            if (!container || !slider || !project?.Images?.length) return;

            const totalWidth = slider.scrollWidth - container.offsetWidth;


            // Animate borders
            gsap.utils.toArray(".pj_anim_border").forEach((border) => {
                context.add(() =>
                    gsap.to(border, {
                        width: "100%",
                        ease: "ease-secondary",
                        duration: 1,
                        scrollTrigger: {
                            trigger: border,
                            start: "top 80%",
                        },
                    })
                );
            });

            // Horizontal scroll
            context.add(() =>
                gsap.to(slider, {
                    x: -totalWidth,
                    ease: "linear",
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: () => `+=${totalWidth}`,
                        pin: true,
                        scrub: 0.4,
                        anticipatePin: 1,
                    },
                })
            );

            // Fade effects
            context.add(() =>
                gsap.to(".fixy_img_dcd", {
                    opacity: 0,
                    duration: 0.1,
                    scrollTrigger: {
                        trigger: ".trick_di",
                        start: "top top",
                        scrub: true,
                    },
                })
            );

            // Background transition
            gsap.set(".main_pdcd", { backgroundColor: "black" });
            context.add(() =>
                gsap.to(".main_pdcd", {
                    backgroundColor: "#00000000",
                    duration: 0.1,
                    scrollTrigger: {
                        trigger: ".main_pdcd",
                        start: "5% top",
                        toggleActions: "play none none reverse",
                    },
                })
            );

            // Scroll-driven number counter animation
            if (progressOuter) {
                const numCount = project?.Images.length;

                // Get the height of one number (after render)
                const numberHeight = progressOuter.firstChild?.offsetHeight || 0;

                context.add(() => {
                    gsap.to(progressOuter, {
                        y: () => -(numberHeight * (numCount - 1)), // move by pixel height of one number per slide
                        ease: "none",
                        scrollTrigger: {
                            trigger: container,
                            start: "top top",
                            end: () => `+=${totalWidth}`,
                            scrub: true,
                        },
                    });
                });
            }



            ScrollTrigger.refresh(true);
        },
        { scope: containerRef, dependencies: [project?.id] }
    );




    return (
        <>
            <SeoHeader meta={meta} />
            <div className=" hidden md:block  fixed fixy_img_dcd z-[-1] top-0 left-0 w-full h-screen">
                {project?.heroImg === "" ? (
                    <img className='w-full h-full object-contain' src={project?.logo} alt="loading" title="Disrptive" />
                ) : (
                    <img className='w-full h-full object-cover' src={project?.heroImg} alt="loading" title="Disrptive" />
                )}
            </div>
            <div className=" hidden md:block absolute overflow-hidden h-[100vh]  w-full top-0 left-0 z-[-1]">
                <div className="w-full h-[70vh] bg-black"></div>
            </div>
            <div className=" hidden md:block w-full px-3  lg:px-5 ">
                <div className="w-full h-[185vh] ">
                    <div className="w-full h-[55vh] flex flex-col justify-end  ">
                        <div className=" w-full text-4xl lg:text-7xl font-semibold uppercase  py-4">
                            <h1 className='pj_anim_txt opacity-0'>{project?.title}</h1>
                        </div>
                        <div className=" border_animm w-0 border-b border-white"></div>
                    </div>
                    <div className="w-full  sticky z-[2] top-[50vh] text-base lg:text-xl uppercase leading-tight py-4 flex flex-col gap-y-2 md:gap-y-0 md:flex-row  md:justify-between">
                        <div className="  w-full  md:w-1/2 flex items-center gap-2">
                            <p className=' pj_anim_txt opacity-0 w-[80%]'>{project?.tagline}</p>
                        </div>
                        <div className=" w-full  mt-2 md:mt-0 md:w-1/2 flex justify-between">
                            <div className=" hidden md:block pj_anim_txt opacity-0 w-1/2">
                                {/* {project?.websiteLink !== "" && (
                                    <LineBtn text="website link" href={project?.websiteLink} />
                                )} */}
                            </div>
                            <div className="pj_anim_txt opacity-0 ">
                                <p>{project?.industry}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" pt-14 md:pt-0 w-full main_pdcd  relative bg-black">
                <div className=" hidden md:block main_pdcd trick_di w-full absolute bg-black h-24 -translate-y-24"></div>
                <div className="  md:hidden w-full aspect-video">
                    {project?.heroImg === "" ? (
                        <img className='w-full h-full object-contain' src={project?.logo} alt="loading" title="Disrptive" />
                    ) : (
                        <img className='w-full h-full object-cover' src={project?.heroImg} alt="loading" title="Disrptive" />
                    )}
                </div>


                <div className="md:hidden w-full px-3  lg:px-5 ">
                    <div className=" w-full text-4xl lg:text-7xl font-semibold uppercase  pt-6">
                        <h1 className=' '>{project?.title}</h1>
                    </div>
                    <div className="  w-full  md:w-1/2 flex items-center pt-2 gap-2">
                        <p className='  text-base uppercase leading-tight lg:text-xl  w-[100%]'>{project?.tagline}</p>
                    </div>
                    <div className=" text-base uppercase pt-2 leading-tight lg:text-xl  ">
                        <p>{project?.industry}</p>
                    </div>
                </div>
                <div className=" md:hidden mb-7 mt-5 border_animm w-0 border-b border-white"></div>


                <div className="w-full flex p-3 md:p-5 ">
                    <div className="hidden lg:block w-1/2"></div>
                    <div className=" w-full lg:w-1/2">
                        <p className=' text-base lg:text-xl'>{project?.desc}</p>
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-base lg:text-xl px-3  lg:px-5 gap-x-20 gap-y-10 mt-10 lg:mt-44">
                    <div className="w-full">
                        <div className=" w-full ">
                            <h3 className=' uppercase  text-xl lg:text-3xl '>The Challenge</h3>
                            <div className="border_animm py-2 w-0  border-b border-white "></div>
                        </div>
                        <div className="py-4 text-base lg:text-xl">
                            <p>{project?.challenge}</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" w-full  ">
                            <h3 className=' uppercase  text-xl lg:text-3xl '>Our Approach</h3>
                            <div className="border_animm py-2 w-0  border-b border-white "></div>
                        </div>
                        <div className="py-4 text-base lg:text-xl">
                            <p>{project?.approach}</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" w-full  ">
                            <h3 className=' uppercase  text-xl lg:text-3xl '>Our Role</h3>
                            <div className="border_animm py-2 w-0  border-b border-white "></div>
                        </div>
                        <div className="py-4 space-y-4">
                            {project?.tags.map((tag, i) => (
                                <div key={i} className="  flex gap-2">
                                    <div className='size-1.5 shrink-0  translate-y-2.5 bg-white' ></div>
                                    <p className="text-base lg:text-xl" > {tag}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div key={`project-${project?.id}`} className='w-full'>
                    {
                        project?.Images?.length > 0 && (
                            <div
                                ref={containerRef}
                                className="w-full relative serv_img_paren mt-20 h-screen overflow-hidden flex items-center"
                            >
                                <div
                                    ref={sliderRef}
                                    className="serv_img_slide flex gap-x-10 lg:gap-x-20 px-3 lg:px-[15vw] items-center"
                                >
                                    {project?.Images.map((imgSrc, i) => (
                                        <div
                                            key={i}
                                            className=" aspect-video shrink-0 w-[90vw] lg:w-[70vw] flex justify-center items-center"
                                        >
                                            <img
                                                src={imgSrc}
                                                alt={`project-image-${i}`}
                                                title="Disrptive"
                                                className="w-full h-full object-cover "
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="w-full absolute bottom-24 md:bottom-[2vw] flex justify-center items-center">
                                    <div className="text-xl md:text-2xl flex items-center gap-3 overflow-hidden h-7">
                                        <div className=" h-full lg:-translate-y-[2px] flex flex-col justify-start items-center overflow-hidden">
                                            <div ref={prgrsbarRef} className="num_slider flex flex-col">
                                                {project?.Images.map((_, i) => (
                                                    <p key={i} className="text-white">{i + 1}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-white/60">|</p>
                                        <p className="text-white">{project?.Images.length}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="w-full font-light gap-5 text-xl lg:text-3xl border-t border-b h-10 lg:h-20 border-white/50 center uppercase flex justify-between">
                    {/* Prev */}
                    <Link
                    title='link'
                        // scroll={false}
                        href={`/case-studies/${ProjectsData[
                            (currentIndex - 1 + ProjectsData.length) % ProjectsData.length
                        ]?.slug
                            }`}
                        className="flex group gap-2 items-center"
                    >
                        <div className="flex">
                            <p className="translate-x-1/2 group-hover:scale-100 origin-right scale-0 transition-all duration-300">←</p>
                            <p className="group-hover:scale-0 origin-left transition-all duration-300">←</p>
                        </div>
                        <p>Prev</p>
                    </Link>

                    <div className="h-full w-[1px] bg-white/50"></div>

                    {/* Next */}
                    <Link
                    title='link'
                        // scroll={false}
                        href={`/case-studies/${ProjectsData[
                            (currentIndex + 1) % ProjectsData.length
                        ]?.slug
                            }`}
                        className="flex gap-2 items-center group"
                    >
                        <p>Next</p>
                        <div className="flex">
                            <p className="group-hover:scale-0 origin-right transition-all duration-300">→</p>
                            <p className="-translate-x-1/2 group-hover:scale-100 origin-left scale-0 transition-all duration-300">→</p>
                        </div>
                    </Link>
                </div>


                {/* <div className="w-full h-screen center">
                    <div className="w-[25%] h-[80%]">
                        <img className='w-full h-full object-cover' src="/pr0201.webp" alt="loading" title="Disrptive" />
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default ProjectDetail


export async function getServerSideProps(context) {
    const { slug } = context.params;

    const project =
        ProjectsData.find(
            (p) =>
                p.slug === slug
        ) || null;

    if (!project) {
        return {
            notFound: true,
        };
    }

    const currentIndex = ProjectsData.findIndex((p) => p.slug === project.slug);

    return {
        props: {
            project,
            currentIndex,
        },
    };
}




const meta = {
    title: "Our Case Studies - Marketing Case Studies & Portfolio | DISRPTVE",
    description:
        "Explore our portfolio of successful brand campaigns, digital marketing projects, and creative excellence across industries.",
    canonical: "https://disrptve.vercel.app/case-studies",
    og: {
        title: "Our Case Studies - Marketing Case Studies & Portfolio | DISRPTVE",
        description:
            "Explore our portfolio of successful brand campaigns, digital marketing projects, and creative excellence across industries.",
        image: "https://disrptve.vercel.app/logo-og.png",
        url: "https://disrptve.vercel.app/case-studies",
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