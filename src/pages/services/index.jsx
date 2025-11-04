import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { initCubeScrollAnimation } from "@/components/ui/initCubeScrollAnimation";
import Iridescence from "@/components/ui/Iridescence";
import { useGSAP } from "@gsap/react";
import SeoHeader from "@/components/seo/SeoHeader";
gsap.registerPlugin(ScrollTrigger);

const serviceData = [
    {
        number: "01",
        title: "Brand Strategy & Go-to-Market",
        desc: "Before you can win, you need a plan. This is where we define your unique position in the market and craft the roadmap to launch and grow effectively.",
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
        servs: [
            "Go-to-Market (GTM) Strategy",
            "Brand Positioning & Narrative",
            "Audience Profiling & Segmentation",
            "Market Research & Competitive Intelligence",
        ],
    },
    {
        number: "02",
        title: "Brand Identity & Packaging",
        desc: "We design the complete sensory experience of your brand—what people see, touch, and feel. It’s more than a logo; it’s your entire visual world.",
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
        servs: [
            "Brand Guidelines",
            "Packaging Design",
            "Logo & Brand Mark Design",
            "Visual Identity Systems (Colors, Typography, Imagery)",
        ],
    },
    {
        number: "03",
        title: "Social Media & Performance Marketing",
        desc: "We find your audience where they are and give them a reason to engage. This is about building a community and driving measurable growth online.",
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
        servs: [
            "SEO & Content Strategy",
            "Social Media Strategy & Management",
            "Community Architecture & Engagement",
            "Performance Marketing (PPC, Paid Social)",
        ],
    },
    {
        number: "04",
        title: "Website Design & Development",
        desc: "Your website is your home base. We design and build beautiful, intuitive, and high-performing websites that serve as the core of your digital presence.",
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
        servs: [
            "E-commerce Solutions",
            "UX/UI Research & Design",
            "Landing Page Optimization",
            "Website & App Development",
        ],
    },
    {
        number: "05",
        title: "Political & National Strategy",
        desc: "We apply our strategic and data-driven approach to campaigns of national importance, helping candidates and causes shape public opinion and drive action.",
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
        servs: [
            "Digital Campaign Execution",
            "eGovernance & National Strategy Consulting",
            "Data & Communications Strategy for Elections",
        ],
    },
    {
        number: "06",
        title: "AI-Led Design & Photoshoots",
        desc: "Why be limited by reality? We use cutting-edge AI to create stunning, original visuals, from conceptual art to entire photoshoots, with unparalleled speed and creative freedom.",
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
        servs: [
            "Generative Visual Assets",
            "AI Concept Art & Moodboarding",
            "Virtual Photoshoots & Product Renders",
        ],
    },
    {
        number: "07",
        title: "Creative & Production",
        desc: "This is where ideas become reality. Our team manages the entire production process to create compelling content that captures attention.",
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
        servs: [
            "Photography",
            "Content Creation",
            "Video & Film Production",
            "Campaign Creative Development",
        ],
    },
    {
        number: "08",
        title: "Business Decks, Brochures & Collateral",
        desc: "We arm your team with the tools they need to communicate effectively. From investor pitches to sales materials, we design documents that are clear, compelling, and beautifully crafted.",
        img: "https://monogrid.com/api/optimized-image/4ae41e0c003ef27916080d64475c8d9404eed051057280207b20c2f08137195e.jpg?max-w=1200&auto=compress,format",
        servs: [
            "Bespoke Presentations",
            "Sales & Marketing Collateral",
            "Investor & Pitch Deck Design",
            "Corporate Brochures & Reports",
        ],
    },
];

const agencyData = [
    {
        id: 1,
        title: "A Unique Foundation",
        desc: "Most agencies are built on a single point of view. DISRPTVE was founded on a deliberate blend of three distinct worlds: the proven process and strategic rigor of an established agency, the network and legacy of the entertainment industry, and a modern perspective on design and culture. This structure means our work is strategically sound, culturally connected, and creatively fresh, all at the same time.",
    },
    {
        id: 2,
        title: "Strategy Over Everything",
        desc: "We don't believe in creative for creative's sake. Every design, campaign, and line of copy is born from a sharp, clear, and defensible strategy. We start with a deep dive into your world to find your most potent truth, and we don't build anything until we have a rock-solid plan to make it count.",
    },
    {
        id: 3,
        title: "A Direct Line to the Principals",
        desc: "When you partner with us, you partner with us. The founders are deeply involved in every project, ensuring you get the senior-level thinking and accountability you deserve. There are no layers of account managers to get through—just a direct, collaborative relationship focused on getting the best work done.",
    },
    {
        id: 4,
        title: "Built for the Modern Mandate",
        desc: "Our experience isn't limited to a single industry or channel. We've run national political campaigns, launched brands with A-list celebrities, built identities from scratch, and created photoshoots entirely with AI. This diverse expertise means we're uniquely equipped to handle the complex, multi-channel challenges that modern brands face.",
    },
];

const serviceImgs = [
    {
        id: 1,
        title: "Political",
        img: "https://images.unsplash.com/photo-1566460516667-ac306003c3aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
    },
    {
        id: 2,
        title: "Entertainment",
        img: "https://images.unsplash.com/photo-1751606801988-daa492edd7df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935",
    },
    {
        id: 3,
        title: "Fashion",
        img: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1659194726424-20d6a40ef80a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
        title: "Sports",
    },
    {
        id: 5,
        title: "Automotive",
        img: "https://plus.unsplash.com/premium_photo-1693776353300-a6171520f93b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
    },
];

const Services = () => {
    useGSAP(() => {
        const stickySection = document.querySelector(".sticky_sec");
        const cubesContainer = document.querySelector(".cubes");
        const cubes = document.querySelectorAll(".cube");
        const why_us = document.querySelector(".why_us");

        if (!stickySection || !cubes.length) return;

        const interpolate = (start, end, progress) => start + (end - start) * progress;

        const mainTl = gsap.timeline({
            scrollTrigger: {
                trigger: stickySection,
                start: "top top",
                endTrigger: why_us,
                end: "top bottom",
                scrub: 0.4,
                pin: true,
                pinSpacing: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const firstPhaseProgress = Math.min(progress * 2, 1);
                    const secondPhaseProgress = progress >= 0.5 ? (progress - 0.5) * 2 : 0;

                    cubes.forEach((cube) => {
                        const initialAttr = cube.getAttribute("data-initial");
                        const finalAttr = cube.getAttribute("data-final");
                        if (!initialAttr || !finalAttr) return;

                        const initial = JSON.parse(initialAttr);
                        const final = JSON.parse(finalAttr);

                        const currentTop = interpolate(initial.top, final.top, firstPhaseProgress);
                        const currentLeft = interpolate(initial.left, final.left, firstPhaseProgress);
                        const currentRotateX = interpolate(initial.rotateX, final.rotateX, firstPhaseProgress);
                        const currentRotateY = interpolate(initial.rotateY, final.rotateY, firstPhaseProgress);
                        const currentRotateZ = interpolate(initial.rotateZ, final.rotateZ, firstPhaseProgress);
                        const currentScale = interpolate(initial.scale, final.scale, firstPhaseProgress);
                        const currentZ = interpolate(initial.z, final.z, firstPhaseProgress);
                        const additionalRotation = interpolate(0, 360, secondPhaseProgress);

                        cube.style.top = `${currentTop}%`;
                        cube.style.left = `${currentLeft}%`;
                        cube.style.scale = `${currentScale}`;
                        cube.style.transform = `
            translate3d(-50%, -50%, ${currentZ}px)
            rotateX(${currentRotateX}deg)
            rotateY(${currentRotateY + additionalRotation}deg)
            rotateZ(${currentRotateZ}deg)
          `;
                    });
                },
            },
        });
    })

    useGSAP(() => {

        gsap.to(".sticky_sec", {
            opacity: 1,
            duration: 1,
            delay: 1
        })

        gsap.to(".wave_bg", {
            scrollTrigger: {
                trigger: ".anim_star",
                start: "top top",
                end: "+200% top",
                scrub: 0.4,
            },
            opacity: 0
        })

        if (window.innerWidth >= 768) {
            gsap.to(".serv_slide", {
                scrollTrigger: {
                    trigger: ".serv_paren",
                    start: "top top",
                    pin: true,
                    end: "+200% top",
                    anticipatePin: 1,
                    scrub: .4,
                },
                xPercent: -70,
                ease: "linear",
            })
        } else {
            gsap.to(".serv_slide", {
                scrollTrigger: {
                    trigger: ".serv_paren",
                    start: "top top",
                    pin: true,
                    end: "+200% top",
                    anticipatePin: 1,
                    scrub: .4,
                },
                xPercent: -470,
                ease: "linear",
            })
        }

    })

    useGSAP(() => {
        gsap.utils.toArray(".serv_anim_border").forEach((border) => {
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

    useGSAP(() => {
        if (window.innerWidth >= 1024) return
        gsap.to(".mobile_cube", {
            rotateY: 360,
            rotateX: 360,
            // scale: 1,
            scrollTrigger: {
                trigger: ".anim_star",
                start: "top top",
                scrub: true
            }
        })
        gsap.to(".mob_cub_pren", {
            scale: 1.2,
            scrollTrigger: {
                trigger: ".anim_star",
                start: "top top",
                scrub: true
            }
        })
    })


    return (
        <>
            <SeoHeader meta={meta} />

            <div className="fixed wave_bg top-0 left-0 z-[-1] w-full h-screen center">
                <img className="w-full h-full object-cover" src="/gifs/work.gif" alt="loading" title="Disrptive" />
            </div>



            <div className=" hidden lg:block  sticky_sec opacity-0 absolute top-0 w-full left-0 z-[2]  h-[100vh]  overflow-hidden">
                <div className="cubes">
                    <div
                        className="cube absolute scale-[.4] w-[200px] top-1/2 left-1/2 h-[200px] [transform-style:preserve-3d]"
                        data-initial='{"top":40,"left":46,"rotateX":-360,"rotateY":-360,"rotateZ":-180,"z":-180000,"scale":0.4}'
                        data-final='{"top":50,"left":20,"rotateX":0,"rotateY":0,"rotateZ":0,"z":0,"scale":1.4}'
                    >
                        <div
                            className="cube relative w-[200px] h-[200px] [transform-style:preserve-3d]"
                        >
                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:translateZ(100px)] overflow-hidden">
                                <video
                                    loop
                                    autoPlay
                                    muted
                                    playsInline
                                    src="/video/show_reel.mp4"
                                    alt="Up Face"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(100px)] overflow-hidden">
                                <img
                                    src="/images/servicesHomepage/whatwedo_strategy.webp"
                                    alt="Down Face"
                                    title="Cube face"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(90deg)_translateZ(100px)] overflow-hidden">
                                <img
                                    src="/images/servicesHomepage/whatwedo_ai.webp"
                                    alt="Right Face"
                                    title="Cube face"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(-90deg)_translateZ(100px)] overflow-hidden">
                                <img
                                    src="/images/servicesHomepage/whatwedo_decks.webp"
                                    alt="Left Face"
                                    title="Cube face"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(90deg)_translateZ(100px)] overflow-hidden">
                                <img
                                    src="/images/servicesHomepage/whatwedo_socialmedia.webp"
                                    alt="Top Face"
                                    title="Cube face"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(100px)] overflow-hidden">
                                <img
                                    src="/images/servicesHomepage/whatwedo_website.webp"
                                    alt="Bottom Face"
                                    title="Cube face"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" anim_star  h-screen flex flex-col justify-end w-full">
                <div className=" w-full center lg:hidden ">
                    <div className="mob_cub_pren  scale-50 ">
                        <div
                            className=" lg:hidden mobile_cube  w-[200px] h-[200px] [transform-style:preserve-3d]"
                        >
                            <div
                                className=" relative w-[200px] h-[200px] [transform-style:preserve-3d]"
                            >
                                <div className="absolute inset-0 [backface-visibility:hidden] [transform:translateZ(100px)] overflow-hidden">
                                    <img
                                        src="/images/servicesHomepage/whatwedo_strategy.webp"
                                        alt="Down Face"
                                        title="Cube face"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(100px)] overflow-hidden">
                                    <img
                                        src="/images/servicesHomepage/whatwedo_website.webp"
                                        alt="Down Face"
                                        title="Cube face"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(90deg)_translateZ(100px)] overflow-hidden">
                                    <img
                                        src="/images/servicesHomepage/whatwedo_ai.webp"
                                        alt="Right Face"
                                        title="Cube face"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(-90deg)_translateZ(100px)] overflow-hidden">
                                    <img
                                        src="/images/servicesHomepage/whatwedo_decks.webp"
                                        alt="Left Face"
                                        title="Cube face"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(90deg)_translateZ(100px)] overflow-hidden">
                                    <img
                                        src="/images/servicesHomepage/whatwedo_socialmedia.webp"
                                        alt="Top Face"
                                        title="Cube face"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(100px)] overflow-hidden">
                                    <img
                                        src="/images/servicesHomepage/whatwedo_website.webp"
                                        alt="Bottom Face"
                                        title="Cube face"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:hidden mb-20  h-[45vh] flex flex-col justify-end p-3 lg:p-5 uppercase text-4xl lg:text-7xl ">
                    <h1 className="leading-none">
                        A service is just a tool.
                        It’s the strategy behind
                        it that creates the impact.
                    </h1>
                    <p className=" text-lg lg:text-2xl  leading-none mt-5 normal-case md:w-[60%] lg:w-[40%]">We believe in a strategy-first approach to everything we do. The capabilities listed here are the tools we use to execute on a clear, well-defined plan. </p>
                </div>
                <div className="w-full hidden   lg:flex flex-col justify-end p-3 lg:p-5 uppercase text-4xl lg:text-7xl ">
                    <h1 className="">A service is just a tool.</h1>
                    <h1 className="">
                        It’s the strategy behind
                    </h1>
                    <h1 className="">
                        it that creates the impact.
                    </h1>
                    <p className=" text-lg lg:text-2xl  leading-none mt-5 normal-case md:w-[60%] lg:w-[40%]">We believe in a strategy-first approach to everything we do. The capabilities listed here are the tools we use to execute on a clear, well-defined plan. </p>
                </div>
            </div>

            <div className="w-full flex pt-10 lg:pt-32 px-5 ">
                <div className=" hidden lg:block w-[40%] h-full"></div>
                <div className=" w-full lg:w-[60%]  h-full">
                    {serviceData.map((item, i) => (
                        <div key={i} className="w-full pb-10 lg:pb-24">
                            <div className={` serv_anim_border ${i === 0 ? "w-full" : 'w-0'} my-3 lg:my-5 border-b border-white`}></div>
                            <div className="w-full  flex">
                                <h3 className=" text-xl lg:text-3xl font-semibold">0{i + 1}</h3>
                            </div>
                            <div className=" py-2 lg:py-5 h-full w-full lg:gap-5 flex flex-col md:flex-row">
                                <div className=" w-full lg:w-[40%]  text-xl lg:text-3xl font-semibold leading-none uppercase  h-full ">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className=" w-full my-2 md:my-0 md:w-[60%]  h-full">
                                    <p className=" text-base lg:text-xl  leading-tight">{item.desc}</p>
                                    <div className="w-full mt-2 md:mt-8  space-y-2 gap-x-5 grid md:grid-cols-1 lg:grid-cols-2">
                                        {item?.servs.map((ser, i) => (
                                            <div key={i} className="  flex gap-2">
                                                <div className=' size-1.5 md:size-2 shrink-0  translate-y-2.5 bg-white' ></div>
                                                <p className=" text-base lg:text-xl " > {ser}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full why_us mt-5 lg:mt-0 mb-0 lg:mb-24 px-3 lg:px-5">
                <h2 className="text-4xl lg:text-7xl  red uppercase">Why We're Different</h2>
                <div className=" mt-5 lg:mt-12">
                    <div className="  w-full flex flex-col lg:flex-row items-stretch">
                        <div className=" w-full lg:w-[60%]  pt-2 gap-10 lg:gap-12 grid md:grid-cols-2 ">
                            {agencyData.map((item, i) => (
                                <div key={i} className="">
                                    <h3 className="  text-xl lg:text-3xl font-semibold mb-2 lg:mb-4"> 0{i + 1}. {item.title} </h3>
                                    <p className="  text-base lg:text-xl leading-tight">{item.desc}</p>
                                </div>
                            ))}

                        </div>
                        <div className=" mt-5  w-full lg:w-[40%]  flex items-center justify-center lg:justify-end ">
                            <div className="w-[100%] md:w-[40%] lg:w-[70%]">
                                <img className="w-full" src="/gifs/sandClock.gif" alt="loading" title="Disrptive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full  lg:mb-24 overflow-hidden  px-3 lg:px-5  ">
                <div className="  serv_paren w-full h-screen flex  flex-col justify-center ">
                    <h2 className="  text-4xl lg:text-7xl uppercase red " >Industries</h2>
                    <div className=" mt-5 lg:mt-12 h-fit serv_slide w-full flex gap-x-10 scroller_none ">
                        {serviceImgs.map((item, i) => (
                            <div key={i} className=" shrink-0 text-black text-center center relative w-[100vw] md:w-[30vw] aspect-[3/4]">
                                <div className="absolute bottom-0 w-full z-[1] h-44 bg-gradient-to-b from-transparent to-white"></div>
                                <h2 className="  text-xl lg:text-3xl absolute bottom-5 z-[2] uppercase">{item.title}</h2>
                                <img className="w-full h-full object-cover " src={item.img} alt="loading" title="Disrptive" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </>

    );
};

export default Services;

const meta = {
    title: "Marketing Services - Digital, Brand Strategy & AI Design",
    description:
        "Full-service marketing agency offering brand strategy, digital marketing, social media, web design, AI design, and political campaign services.",
    canonical: "https://disrptve.vercel.app/services",
    og: {
        title: "Marketing Services - Digital, Brand Strategy & AI Design",
        description:
            "Full-service marketing agency offering brand strategy, digital marketing, social media, web design, AI design, and political campaign services.",
        image: "https://disrptve.vercel.app/logo-og.png",
        url: "https://disrptve.vercel.app/services",
        type: "website",
        site_name: "DISRPTVE",
    },
    twitter: {
        card: "summary_large_image",
        title: "Marketing Services - Digital, Brand Strategy & AI Design",
        description:
            "Full-service marketing agency offering brand strategy, digital marketing, social media, web design, AI design, and political campaign services.",
        image: "https://disrptve.vercel.app/logo-og.png",
        site: "@disrptve",
    },
    robots: "index,follow",
    keywords:
        "marketing services, digital marketing services, brand strategy, social media management, web design, AI design, political campaigns",
    author: "DISRPTVE",
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#000000",
};
