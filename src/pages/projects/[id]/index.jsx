import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useParams } from 'next/navigation';
import { ProjectsData } from '@/store/ProjectsData';
import ProjectImageSlider from '@/components/ui/ProjectImageSlider';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);


const index = () => {

    const id = useParams()

    const project = ProjectsData.find((p) => p?.id == id?.id)

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

        gsap.to(".clm_1", {
            rotate: 5,
            xPercent: -50,
            yPercent: 200,
            duration: 1.5,
            delay: 1.5,
            ease: "ease-secondary"
        })
        gsap.to(".clm_2", {
            rotate: -5,
            xPercent: 50,
            yPercent: 200,
            duration: 1.5,
            delay: 1.5,
            ease: "ease-secondary"
        })


        gsap.to(".fixy_img_dcd", {
            opacity: 0,
            duration: .1,
            scrollTrigger: {
                trigger: ".trick_di",
                start: "top top",
                scrub: true
            },
        })
        gsap.set(".main_pdcd", { backgroundColor: "black", })
        gsap.to(".main_pdcd", {
            backgroundColor: "#00000000",
            duration: .1,
            scrollTrigger: {
                trigger: ".main_pdcd",
                start: "5% top",
                // scrub:true,
                toggleActions: "play none none reverse",
                // markers:true
            },
        })


    })

    useGSAP(() => {
        gsap.utils.toArray(".pj_anim_border").forEach((border) => {
            gsap.to(border, {
                width: "100%",
                ease: "ease-secondary",
                duration: 1,
                scrollTrigger: {
                    trigger: border,
                    start: "top 80%",
                    // toggleActions: "play none none reverse",
                },
            });
        });
    });
    return (
        <>
            <div className="fixed fixy_img_dcd z-[-1] top-0 left-0 w-full h-screen">
                <img className='w-full h-full object-cover' src={project?.heroImg} alt="" />
            </div>
            <div className="absolute overflow-hidden h-[100vh]  w-full top-0 left-0 z-[-1]">
                <div className="w-full h-[70vh] bg-black"></div>
                <div className="w-full clm_1 h-[15vh] bg-black"></div>
                <div className="w-full clm_2 h-[15vh] bg-black"></div>
            </div>
            <div className="w-full px-5 ">
                <div className="w-full h-[185vh] ">
                    <div className="w-full h-[55vh] flex flex-col justify-end  ">
                        <div className=" w-full text-4xl lg:text-7xl font-semibold uppercase  py-4">
                            <h3 className='pj_anim_txt opacity-0'>{project?.title}</h3>
                        </div>
                        <div className=" border_animm w-0 border-b border-white"></div>
                    </div>
                    <div className="w-full  sticky z-[2] top-[50vh] text-base lg:text-xl uppercase leading-none py-4 flex flex-col gap-y-2 md:gap-y-0 md:flex-row  md:justify-between">
                        <div className="  w-full  md:w-1/2 flex items-center gap-2">
                            <p className=' pj_anim_txt opacity-0 w-[80%]'>{project?.tagline}</p>
                        </div>
                        <div className=" w-full  md:w-1/2 flex justify-between">
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
            <div className="w-full main_pdcd  relative bg-black">
                <div className=" main_pdcd trick_di w-full absolute bg-black h-24 -translate-y-24"></div>
                <div className="w-full flex p-5 ">
                    <div className="hidden md:block w-1/2"></div>
                    <div className=" w-full md:w-1/2">
                        <p className=' text-base lg:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum odio distinctio consectetur soluta eos nemo possimus delectus magnam quisquam voluptatibus illum at dolor recusandae tenetur officia, hic id cumque optio.</p>
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-3 text-base lg:text-xl px-5 gap-x-20 gap-y-10 mt-20 lg:mt-44">
                    <div className="w-full">
                        <div className=" w-full ">
                            <h3 className=' uppercase  text-xl lg:text-3xl '>The Challenge</h3>
                            <div className="pj_anim_border py-2 w-0  border-b border-white "></div>
                        </div>
                        <div className="py-4 text-base lg:text-xl">
                            <p>{project?.challenge}</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" w-full  ">
                            <h3 className=' uppercase  text-xl lg:text-3xl '>Our Approach</h3>
                            <div className="pj_anim_border py-2 w-0  border-b border-white "></div>
                        </div>
                        <div className="py-4 text-base lg:text-xl">
                            <p>{project?.approach}</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" w-full  ">
                            <h3 className=' uppercase  text-xl lg:text-3xl '>Our Role</h3>
                            <div className="pj_anim_border py-2 w-0  border-b border-white "></div>
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
                {
                    project?.Images?.length > 0 && (
                        <ProjectImageSlider images={project?.Images} />
                    )
                }

                <div className="w-full font-light gap-5 text-xl lg:text-3xl border-t h-10 lg:h-20 border-white/50 center uppercase flex justify-between">
                    {/* Prev */}
                    <Link
                        href={`/projects/${ProjectsData[
                                (ProjectsData.findIndex((work) => work.id === id) - 1 + ProjectsData.length) %
                                ProjectsData.length
                            ].id
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
                        href={`/projects/${ProjectsData[
                                (ProjectsData.findIndex((work) => work.id === id) + 1) % ProjectsData.length
                            ].id
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
                        <img className='w-full h-full object-cover' src="/pr0201.webp" alt="" />
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default index