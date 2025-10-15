import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { initCubeScrollAnimation } from "@/components/ui/initCubeScrollAnimation";
import Iridescence from "@/components/ui/Iridescence";
import { useGSAP } from "@gsap/react";
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
        title: "Boutique Agency",
        desc: "We are a boutique agency that prioritises flexibility and adaptability. Our structure allows us to respond swiftly to our clients' changing needs, and offers high-level tailor-made solutions that large agencies can't match.",
    },
    {
        id: 2,
        title: "Creative Storytellers",
        desc: "Our team thrives on crafting narratives that connect emotionally with audiences. Every brand has a story, and we make sure yours is told with authenticity, creativity, and purpose.",
    },
    {
        id: 3,
        title: "Design-Driven Strategy",
        desc: "We merge design thinking with strategic insight to create impactful visual identities and campaigns that leave lasting impressions across every touchpoint.",
    },
    {
        id: 4,
        title: "Digital First Approach",
        desc: "From interactive experiences to social engagement, we focus on crafting digital-first strategies that align with modern behavior and evolving platforms.",
    },
    {
        id: 5,
        title: "Collaborative Mindset",
        desc: "We believe in partnership over transaction. Our process is built on transparency and collaboration, ensuring clients are part of the creative journey from start to finish.",
    },
    {
        id: 6,
        title: "Results That Matter",
        desc: "Our success is measured by the real-world impact we create. Whether it’s brand growth, audience engagement, or cultural relevance, we focus on results that move the needle.",
    },
];

const serviceImgs = [
    {
        id: 1,
        title: "Web Development",
        img: "https://cuberto.com/assets/projects/daoway/cover@2x.jpg",
    },
    {
        id: 2,
        title: "Brand Strategy",
        img: "https://cuberto.com/assets/projects/cisco/cover@2x.jpg",
    },
    {
        id: 3,
        title: "UI/UX Design",
        img: "https://cuberto.com/assets/projects/zelt/cover@2x.jpg",
    },
    {
        id: 4,
        img: "https://cuberto.com/assets/projects/puntopago/cover@2x.jpg",
        title: "Motion Graphics",
    },
    {
        id: 5,
        title: "3D Visualization",
        img: "https://cuberto.com/assets/projects/kzero/cover@2x.jpg",
    },
];

const index = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {
            const cleanup = initCubeScrollAnimation();
            return () => cleanup && cleanup();
        }
    }, []);

    useGSAP(() => {
        gsap.to(".wave_bg", {
            scrollTrigger: {
                trigger: ".anim_star",
                start: "top top",
                end: "+200% top",
                scrub: 0.4,
            },
            opacity: 0
        })


        gsap.to(".serv_slide", {
            scrollTrigger: {
                trigger: ".serv_paren",
                start: "top top",
                pin: true,
                end: "+200% top",
                anticipatePin: 1,
                scrub: .4,
            },
            xPercent: -81,
            ease: "linear",
        })

    })

    return (
        <>
            <div className="fixed wave_bg top-0 left-0 z-[-1] w-full h-full center">
                <Iridescence
                    color={[.5, 0, 0]}
                    mouseReact={false}
                    amplitude={0.1}
                    speed={0.5}
                />
            </div>
            <div class="sticky_sec absolute top-0 w-full left-0 z-[2]  h-[100vh]  overflow-hidden">
                <div class="cubes">
                    <div
                        className="cube absolute scale-[.4] w-[200px] top-1/2 left-1/2 h-[200px] [transform-style:preserve-3d]"
                        data-initial='{"top":40,"left":46,"rotateX":-360,"rotateY":-360,"rotateZ":-180,"z":-180000,"scale":0.4}'
                        data-final='{"top":50,"left":20,"rotateX":0,"rotateY":1,"rotateZ":0,"z":0,"scale":1.4}'
                    >
                        <div
                            className="cube relative w-[200px] h-[200px] [transform-style:preserve-3d]"
                        >
                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:translateZ(100px)] overflow-hidden">
                                <video
                                    src="/video/logo_loop.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(100px)] overflow-hidden">
                                <video
                                    src="/video/show_reel.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(90deg)_translateZ(100px)] overflow-hidden">
                                <img
                                    src="https://ning-h.com/wp-content/uploads/2025/06/cube_vtm.webp"
                                    alt="Right Face"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(-90deg)_translateZ(100px)] overflow-hidden">
                                <img
                                    src="https://ning-h.com/wp-content/uploads/2025/06/24_cover.webp"
                                    alt="Left Face"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(90deg)_translateZ(100px)] overflow-hidden">
                                <img
                                    src="https://ning-h.com/wp-content/uploads/2025/06/cube_gag.webp"
                                    alt="Top Face"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(100px)] overflow-hidden">
                                <img
                                    src="https://ning-h.com/wp-content/uploads/2025/06/cube_gag.webp"
                                    alt="Bottom Face"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" anim_star h-[55vh] w-full"></div>
            <div className="w-full h-[45vh] flex flex-col justify-end p-5 uppercase text-7xl ">
                <h2>We turn ideas into</h2>
                <h2>
                    tailored digital solutions
                </h2>
                <h2>
                    through design, data and
                </h2>
                <h2>
                    technology.
                </h2>
            </div>
            <div className="w-full flex pt-32 px-5 ">
                <div className="w-[42%] h-full"></div>
                <div className="w-[58%]  h-full">
                    {serviceData.map((item, i) => (
                        <div key={i} className="w-full pb-24">
                            <div className="w-full border-b border-white py-5 flex">
                                <p className="text-3xl">0{i + 1}</p>
                            </div>
                            <div className=" py-5 h-full w-full flex">
                                <div className="w-[40%] text-3xl font-semibold uppercase  h-full ">
                                    <p>{item.title}</p>
                                </div>
                                <div className="w-[60%]  h-full">
                                    <p className="text-xl leading-tight">{item.desc}</p>
                                    <div className="w-full mt-20 space-y-2 gap-x-5 grid grid-cols-2">
                                        {item?.servs.map((ser, i) => (
                                            <div key={i} className=" text-base flex gap-2">
                                                <p>»</p>
                                                <p > {ser}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full why_us mb-24  px-5">
                <h2 className="text-5xl red uppercase">WHY DISRPTIVE</h2>
                <div className="mt-12">
                    <div className="w-full flex items-stretch">
                        <div className="w-[60%]  pt-2 gap-12 grid grid-cols-2 ">
                            {agencyData.map((item, i) => (
                                <div key={i} className="">
                                    <p className="text-2xl font-semibold mb-4"> 0{i + 1}. {item.title} </p>
                                    <p className="leading-tight">{item.desc}</p>
                                </div>
                            ))}

                        </div>
                        <div className="w-[40%] flex items-center justify-end ">
                            <div className="w-[65%]  center">
                                <img className="w-full" src="/gifs/sandClock.gif" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full  mb-24  px-5 ">
                <h2 className="text-5xl uppercase red py-12" >Industries</h2>
                <div className=" serv_paren w-full h-screen flex items-center ">
                    <div className="serv_slide w-full flex gap-x-10 scroller_none ">
                        {serviceImgs.map((item, i) => (
                            <div key={i} className=" shrink-0 text-black text-center center relative w-[33vw] aspect-[3/4]">
                                <h2 className="text-5xl absolute bottom-5 z-[1] uppercase">{item.title}</h2>
                                <img className="w-full h-full object-cover " src={item.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </>

    );
};

export default index;
