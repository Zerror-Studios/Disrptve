import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AOS from "aos";
import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RiArrowRightUpLine } from '@remixicon/react';
gsap.registerPlugin(ScrollTrigger);

const clientsData = [
    {
        img: "https://images.prismic.io/inertia-website/Z6Y-S5bqstJ9-YBt_LouisVuitton.jpg?auto=format,compress&rect=424,0,1072,1080&w=412&h=415",
        icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6ZC6ZbqstJ9-YEw_MarinBikes.svg"
    },
    {
        img: "https://images.prismic.io/inertia-website/Z6Y-wZbqstJ9-YCa_PARAMOUNT.png?auto=format%2Ccompress&rect=4%2C0%2C1072%2C1080&w=412&h=415",
        icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6Y8oJbqstJ9-YA4_AxelArigato.svg"
    },
    {
        img: "https://images.prismic.io/inertia-website/Z6Y5ppbqstJ9-X-K_PUMA.jpg?auto=format%2Ccompress&rect=657%2C0%2C1430%2C1440&w=412&h=415",
        icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6Y-eZbqstJ9-YCN_Nike.svg"
    },
    {
        img: "https://images.prismic.io/inertia-website/Z6Y605bqstJ9-X_I_CLINIQUE.png?auto=format%2Ccompress&rect=841%2C49%2C688%2C693&w=412&h=415",
        icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6Y-OZbqstJ9-YBr_LouisVuitton.svg"
    },
    {
        img: "https://images.prismic.io/inertia-website/Z6Y8tpbqstJ9-YA6_AXELARIGATO.png?auto=format%2Ccompress&rect=234%2C454%2C979%2C986&w=412&h=415",
        icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6Y-rJbqstJ9-YCX_Paramount.svg"
    },
    {
        img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
        icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6Y8oJbqstJ9-YA4_AxelArigato.svg"
    },
]

const flipImg = [
    "https://images.prismic.io/inertia-website/Z73zS57c43Q3gNts_BC20240408-03-0407.jpg?auto=format%2Ccompress&rect=0%2C254%2C1366%2C1539&w=750&h=845",
    "https://images.prismic.io/inertia-website/Z73zTJ7c43Q3gNtu_BC20240408-04-0653-BW.jpg?auto=format%2Ccompress&rect=2262%2C0%2C4204%2C4736&w=750&h=845",
    "https://images.prismic.io/inertia-website/Z73zTZ7c43Q3gNtv_BC20240408-05-0731.jpg?auto=format%2Ccompress&rect=0%2C297%2C1366%2C1539&w=750&h=845",
]
const index = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        });
        AOS.refresh();
    }, []);


    useEffect(() => {
        const img = document.querySelector(".img_sticky_rot");
        let prevRotation = 0;
        let currentIndex = 0;

        gsap.set(img, {
            transformStyle: "preserve-3d",
            perspective: 400,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky_div_paren",
                start: "top top",
                end: "bottom 50%",
                endTrigger: ".teams_div",
                end: "top center",
                scrub: 0.3,
                // markers: true,
            },
            onUpdate: (self) => {
                const rotation = gsap.getProperty(img, "rotateY") % 360;
                const direction = rotation - prevRotation > 0 ? "forward" : "backward";
                prevRotation = rotation;

                if (direction === "forward") {
                    if (rotation >= 85 && rotation < 95 && currentIndex !== 1) {
                        currentIndex = 1;
                        img.src = flipImg[1];
                    } else if (rotation >= 265 && rotation < 275 && currentIndex !== 2) {
                        currentIndex = 2;
                        img.src = flipImg[2];
                    }
                }

                else {
                    if (rotation >= 85 && rotation < 95 && currentIndex !== 0) {
                        currentIndex = 0;
                        img.src = flipImg[0];
                    } else if (rotation >= 265 && rotation < 275 && currentIndex !== 1) {
                        currentIndex = 1;
                        img.src = flipImg[1];
                    }
                }
            },
        });

        // Rotate Y twice (0 → 180 → 360)
        tl.to(".img_sticky_rot", { rotateY: 180, ease: "none" });
        tl.to(".img_sticky_rot", { rotateY: 360, ease: "none" });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [flipImg]);

    useGSAP(() => {
        gsap.to(".sticky_div", {
            scrollTrigger: {
                trigger: ".sticky_div_paren",
                start: "top top",
                endTrigger: ".teams_div",
                end: "top top",
                pin: true,
                scrub: 0.4,
                // markers: true,
            },
        });
        gsap.to(".sticky_about", {
            scrollTrigger: {
                trigger: ".teams_div",
                start: "top top",
                toggleActions: "play none none reverse",
                // markers: true,
            },
            opacity: 1,
        });

    })


    return (
        <>

            <div className=" sticky_sec  relative  px-5  w-full">

                <div className="sticky_div_paren absolute  top-[75vw] z-[11] left-0   px-5">
                    <div className="sticky_div">
                        <div className="grid grid-cols-6 gap-5 w-full ">
                            <div className="w-full  h-screen center col-span-2">
                                <div className="  aspect-[3/4] relative">
                                    <img
                                        data-aos-anchor-placement="top-bottom"
                                        data-aos="clip" src={flipImg[0]} alt=""
                                        className=" img_sticky_rot w-full h-full  object-cover mb-2" />

                                    <div className=" sticky_about opacity-0 absolute -bottom-13 flex w-full items-start justify-between">
                                        <div className="">
                                            <h2 className="font-medium leading-none">HENRY YEOMANS</h2>
                                            <p className="text-sm opacity-70 mb-3">Partner, Creative Director</p>
                                        </div>
                                        <img className=' w-4  invert-100 -rotate-90' src="/icons/arrow_small.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" about_vid  absolute top-0 left-0 z-[-1] w-full h-[80vw] pointer-events-none">
                    <img className='w-full h-full object-cover' src="https://images.prismic.io/malvah-v2/974b2180-2936-483d-82c7-4ff9b0286179_Hero.bw.2.jpg?auto=compress,format" alt="" />
                </div>

                <div className="w-full relative h-screen   center text-center">
                    <h2 className='uppercase text-5xl'>Investing In & Building the <br /> Next Wave of Disruption.</h2>
                </div>

                <div className="space-y-52">
                    <div className="w-full flex justify-end">
                        <div className="w-[25vw] ">
                            <img
                                data-aos-anchor-placement="top-bottom"
                                data-aos="clip" className=' aspect-[3/4] w-full object-cover' src="https://images.prismic.io/malvah-v2/bf6fc68f-b97c-4904-a2a2-489924668e23_01..jpg?auto=compress,format" alt="" />
                            <p className='text-xl leading-tight mt-2' >We extended the mandate to re-engineer Guyana for the next five years.</p>
                        </div>
                    </div>

                    <div className="w-full  flex justify-end">
                        <div className=" w-[30vw] uppercase text-7xl ">
                            <h2>Navigating a New Landscape</h2>
                        </div>
                    </div>

                    <div className="w-full  flex justify-end">
                        <div className="w-[50vw] ">
                            <img 
                            data-aos-anchor-placement="top-bottom"
                                    data-aos="clip" className=' aspect-[4/3] w-full object-cover' src="https://images.prismic.io/malvah-v2/18c08b41-8e6f-467a-bc92-6ecd39c4a437_03_Para2.jpg?auto=compress,format" alt="" />
                            <p className='text-2xl leading-tight mt-2' >We extended the mandate to re-engineer Guyana for the next five years.</p>
                        </div>
                    </div>

                    <div className="w-full  flex justify-end">
                        <div className=" w-[40vw]  ">
                            <h2 className='uppercase text-7xl'> <span className=' opacity-0'> ssss</span> We wired
                                <br /> a nation for the future.</h2>
                            <div className="w-full grid mt-10 gap-x-5 grid-cols-2">
                                <p> We are a strategy-led integrated marketing agency. This means that disruption for us isn't about noise; it's about focus. It's a deliberate act, born from rigorous strategy and deep market understanding.</p>
                                <p>Our work often involves shaping brands and driving growth. We are now applying that same data-driven rigour to challenges of national significance.</p>
                            </div>

                            <button className=' group mt-10 relative flex items-center gap-1'>
                                <div className="w-0 group-hover:w-[97%] transition-all duration-300  h-[1px] bg-white absolute bottom-0 left-0"></div>
                                <p className=' text-xl group-hover:italic uppercase '>Read more</p>
                                <RiArrowRightUpLine size={20} />
                            </button>
                        </div>
                    </div>

                    <div className=" ">
                        <div className="w-full center">
                            <h2 className='text-3xl'>
                                PARTNERS AT WORK
                            </h2>
                        </div>
                        <div className="pt-10">
                            <Marquee>
                                <div key={index} className="flex gap-5">
                                    {[...clientsData, ...clientsData].map((item, index) => (
                                        <img className=' w-[7vw]  invert-100' src={item.icon} alt="" />
                                    ))}
                                </div>
                            </Marquee>
                        </div>
                    </div>

                    <div className=" ">
                        <div className=" mt-10 mb-20w-full flex justify-end">
                            <div className="uppercase text-6xl">
                                <h2>Growing Doesn’t </h2>
                                <h2>mean being bigger,</h2>
                                <h2>but being better</h2>
                            </div>
                        </div>
                        <div className="  w-full py-20 grid grid-cols-6 gap-5">
                            <div className=" teams_div col-span-2  flex flex-col items-start">
                                <div className=" opacity-0 translate-y-14 flex w-full items-start justify-between">
                                    <div className="">
                                        <h2 className="font-medium leading-none">HENRY YEOMANS</h2>
                                        <p className="text-sm opacity-70 mb-3">Partner, Creative Director</p>
                                    </div>
                                    <img className=' w-4  invert-100 -rotate-90' src="/icons/arrow_small.svg" alt="" />
                                </div>
                                <img
                                    src="https://images.prismic.io/inertia-website/Z73zTZ7c43Q3gNtv_BC20240408-05-0731.jpg?auto=format%2Ccompress&rect=0%2C297%2C1366%2C1539&w=750&h=845" alt=""
                                    className="w-full opacity-0 aspect-[3/4] object-cover mb-2" />

                            </div>

                            <div className="col-span-1 col-start-3 flex flex-col items-start">
                                <div className="flex w-full items-center justify-between">
                                    <div className="">
                                        <h2 className="font-medium leading-none">JACK LIETTI</h2>
                                        <p className="text-sm opacity-70 mb-3">Senior 3D Artist</p>
                                    </div>
                                    <img className=' w-4 invert-100 rotate-90' src="/icons/arrow_small.svg" alt="" />
                                </div>
                                <img
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos="clip" src="https://images.prismic.io/inertia-website/Z73zUZ7c43Q3gNty_BC20240408-16-1699-BW.jpg?auto=format%2Ccompress&rect=0%2C64%2C4736%2C6972&w=360&h=530" alt="" className="w-full aspect-[3/4] object-cover mb-2" />
                            </div>

                            <div className="col-span-2 col-start-4 flex flex-col items-start mt-[19.5vw]">
                                <div className="flex w-full items-center justify-between">
                                    <div className="">
                                        <h2 className="font-medium leading-none">THOMAS VALENTE</h2>
                                        <p className="text-sm opacity-70 mb-3">Founder, Executive Creative Director</p>
                                    </div>
                                    <img className=' w-4 invert-100 rotate-90' src="/icons/arrow_small.svg" alt="" />
                                </div>
                                <img
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos="clip" src="https://images.prismic.io/inertia-website/Z73zS57c43Q3gNts_BC20240408-03-0407.jpg?auto=format%2Ccompress&rect=0%2C254%2C1366%2C1539&w=750&h=845" alt="" className="w-full aspect-[3/4] object-cover mb-2" />
                            </div>

                            <div className="col-span-1 col-start-6 flex flex-col items-start mt-[19.5vw]">
                                <div className="flex w-full items-center justify-between">
                                    <div className="">
                                        <h2 className="font-medium leading-none">GEMMA GARMAN</h2>
                                        <p className="text-sm opacity-70 mb-3">Senior Producer</p>
                                    </div>
                                    <img className=' w-4 invert-100 rotate-90' src="/icons/arrow_small.svg" alt="" />
                                </div>
                                <img
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos="clip" src="https://images.prismic.io/inertia-website/Z73zUJ7c43Q3gNtx_BC20240408-15-1597-BW.jpg?auto=format%2Ccompress&rect=1466%2C0%2C3217%2C4736&w=360&h=530" alt="" className="w-full aspect-[3/4] object-cover mb-2" />
                            </div>

                            <div className="col-span-2 flex flex-col items-start mt-[-4.5vw] ">
                                <div className="flex w-full items-center justify-between">
                                    <div className="">
                                        <h2 className="font-medium leading-none">HENRY YEOMANS</h2>
                                        <p className="text-sm opacity-70 mb-3">Partner, Creative Director</p>
                                    </div>
                                    <img className=' w-4 invert-100 rotate-90' src="/icons/arrow_small.svg" alt="" />
                                </div>
                                <img
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos="clip" src="https://images.prismic.io/inertia-website/Z73zTJ7c43Q3gNtu_BC20240408-04-0653-BW.jpg?auto=format%2Ccompress&rect=2262%2C0%2C4204%2C4736&w=750&h=845" alt="" className="w-full aspect-[3/4] object-cover mb-2" />
                            </div>

                            <div className="col-span-1 col-start-3 flex flex-col items-start   mt-[-4.5vw] ">
                                <div className="flex w-full items-center justify-between">
                                    <div className="">
                                        <h2 className="font-medium leading-none">JAIME BRAVO</h2>
                                        <p className="text-sm opacity-70 mb-3">Houdini Artist</p>
                                    </div>
                                    <img className=' w-4 invert-100 rotate-90' src="/icons/arrow_small.svg" alt="" />
                                </div>
                                <img
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos="clip" src="https://images.prismic.io/inertia-website/Z3-_NZbqstJ99O7G_JaimeBravo-HoudiniArtist.jpg?auto=format%2Ccompress&w=360&h=530" alt="" className="w-full aspect-[3/4] object-cover mb-2" />
                            </div>

                            <div className="col-span-1 col-start-6 flex flex-col items-start  mt-[-4.5vw]  ">
                                <div className="flex w-full items-center justify-between">
                                    <div className="">
                                        <h2 className="font-medium leading-none">ELLIOT HARRIS</h2>
                                        <p className="text-sm opacity-70 mb-3">3D Artist</p>
                                    </div>
                                    <img className=' w-4 invert-100 rotate-90' src="/icons/arrow_small.svg" alt="" />
                                </div>
                                <img
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos="clip" src="https://images.prismic.io/inertia-website/Z73zS57c43Q3gNtr_BC20240408-02-0241-BW.jpg?auto=format,compress&rect=0,64,4736,6972&w=360&h=530" alt="" className="w-full aspect-[3/4] object-cover mb-2" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default index