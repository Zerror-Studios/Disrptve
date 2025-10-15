import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { initCubeScrollAnimation } from "@/components/ui/initCubeScrollAnimation";
import Iridescence from "@/components/ui/Iridescence";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);


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

const serviceData = [
    {
        id: 1,
        title: "Web Development",
        img: "https://ning-h.com/wp-content/uploads/2025/06/invasion_cover.webp",
    },
    {
        id: 2,
        title: "Brand Strategy",
        img: "https://ning-h.com/wp-content/uploads/2025/06/gag_cover.webp",
    },
    {
        id: 3,
        title: "UI/UX Design",
        img: "https://ning-h.com/wp-content/uploads/2025/06/other_cover.webp",
    },
    {
        id: 4,
        img: "https://ning-h.com/wp-content/uploads/2025/06/cube_vtm.webp",
        title: "Motion Graphics",
    },
    {
        id: 5,
        title: "3D Visualization",
        img: "https://ning-h.com/wp-content/uploads/2025/06/24_cover.webp",
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
                        data-final='{"top":50,"left":20,"rotateX":-1,"rotateY":1,"rotateZ":0,"z":0,"scale":1.4}'
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
            <div className="w-full flex pt-12 px-5 ">
                <div className="w-[42%] h-full"></div>
                <div className="w-[58%]  h-full">
                    {[1, 2, 3, 4, 5].map((item, i) => (
                        <div key={i} className="w-full pb-24">
                            <div className="w-full border-b border-white py-5 flex">
                                <p className="text-3xl">0{i + 1}</p>
                            </div>
                            <div className=" py-5 h-full w-full flex">
                                <div className="w-[40%] text-3xl font-semibold uppercase  h-full ">
                                    <p>Strategy and
                                        Consultancy.</p>
                                </div>
                                <div className="w-[60%]  h-full">
                                    <p className="text-xl leading-tight">Listening carefully, understanding, and analysing needs at every stage is essential to our work. We create and adapt strategies to overcome constantly evolving challenges and optimise results for sustainable success. We provide ongoing advice and support, accompanying businesses on their journey into the future.</p>
                                    <div className="w-full mt-20 grid grid-cols-2">
                                        <p>Product Strategy</p>
                                        <p>Brand Strategy</p>
                                        <p>Research Strategy</p>
                                        <p>Analytics Strategy</p>
                                        <p>Technical Consulting</p>
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
                <div className="w-full flex gap-x-10 scroller_none overflow-x-scroll">
                    {serviceData.map((item, i) => (
                        <div key={i} className=" shrink-0 text-center center relative w-[33vw] aspect-[3/4]">
                            <h2 className="text-4xl absolute z-[1] uppercase">{item.title}</h2>
                            <img className="w-full h-full object-cover brightness-75" src={item.img} alt="" />
                        </div>
                    ))}
                </div>

            </div>

        </>

    );
};

export default index;
