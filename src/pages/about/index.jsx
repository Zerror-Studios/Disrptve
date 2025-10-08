import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AOS from "aos";
import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'

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

const index = () => {

    useEffect(() => {
            AOS.init({
                duration: 1500,
                once: false,
            });
            AOS.refresh();
        }, []);

    useGSAP(() => {

        gsap.to(".exp_anim_div", {
            width:"100%",
            ease:"expo.inOut",
            duration:3,
            stagger:0.05
        })

        gsap.fromTo(
            ".show_reel_video",
            { y: -200 },
            {
                y: 200,
                ease: "linear",
                scrollTrigger: {
                    trigger: ".show_reel_paren",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.4,
                },
            }
        );
    });
    return (
        <>
            <div className="w-full  h-screen flex items-center flex-col  gap-y-24 justify-center   px-5">
                <div className="w-full">
                    <div className=" exp_anim_div gap-5 w-[70%]  whitespace-nowrap text-8xl pr-52 uppercase flex justify-between">
                        <h2>a</h2>
                        <h2>strategy-led </h2>
                    </div>
                    <div className="exp_anim_div gap-5 w-[65%]  text-8xl uppercase flex justify-between">
                        <h2>marketing</h2>
                        <h2>agency.</h2>
                    </div>
                </div>

                <div className="w-full flex justify-end ">
                    <div className="w-1/2 text-2xl uppercase">
                        <p className='w-[70%]'>we build on that foundation with resonant creative and flawless execution to reshape perceptions and establish market leadership.</p>
                    </div>
                </div>
            </div>

            <div className="w-full py-20 border-b border-t border-[#e5e7eb44] h-[100vh] flex px-5">
                <div className="w-1/2 h-full flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                        <img className='w-[1.5vw]' src="/icons/cut_blocks.svg" alt="" />
                        <h2 className='text-xl uppercase'>who we are</h2>
                    </div>
                    <div className="space-y-12">
                        <img
                        data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className='aspect-video w-[55%]' src="/images/ImagesPop/images06.jpg" alt="" />
                        <div className="w-[70%]  text-lg">
                            <div className=" w-full text-end">
                                <p>We are a strategy-led integrated marketing </p>
                            </div>
                                <p>agency. This means that disruption for us isn't about noise; it's about focus. It's a deliberate act, born from rigorous strategy and deep market understanding.Our process is one of calculated impact. We begin with meticulous research to find a brand's most potent truth. </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full">
                    <img
                    data-aos-anchor-placement="top-bottom"
                        data-aos="clip" className='w-full h-full object-cover' src="/projects/proostimg4.webp" alt="" />
                </div>
            </div>

            <div className=" my-24">
                <div className="w-full center">
                    <h2 className='text-3xl'>
                        PARTNERS AT WORK
                    </h2>
                </div>
                <div className="py-10">
                    <Marquee>
                        <div key={index} className="flex gap-5">
                            {[...clientsData, ...clientsData].map((item, index) => (
                                <img className=' w-[7vw]  invert-100' src={item.icon} alt="" />
                            ))}
                        </div>
                    </Marquee>
                </div>

                <div className=" show_reel_paren w-full h-[120vh] overflow-hidden">
                    <video
                        className="show_reel_video brightness-[.7]"
                        loop
                        autoPlay
                        muted
                        playsInline
                        src="/video/show_reel.mp4"
                    ></video>                </div>
            </div>

            <div className="px-5">
                <div className=" mt-10 mb-20 text-6xl">
                    <h2>Growing Doesn’t <br /> mean being bigger, <br /> but being better</h2>
                </div>
                <div className="w-full py-20 grid grid-cols-6 gap-5">
                    <div className="col-span-2 flex flex-col items-start">
                        <div className="flex w-full items-center justify-between">
                            <div className="">
                                <h2 className="font-medium leading-none">HENRY YEOMANS</h2>
                                <p className="text-sm opacity-70 mb-3">Partner, Creative Director</p>
                            </div>
                            <img className=' w-4 invert-100 rotate-90' src="/icons/arrow_small.svg" alt="" />
                        </div>
                        <img
                        data-aos-anchor-placement="top-bottom"
                        data-aos="clip" src="https://images.prismic.io/inertia-website/Z73zTZ7c43Q3gNtv_BC20240408-05-0731.jpg?auto=format%2Ccompress&rect=0%2C297%2C1366%2C1539&w=750&h=845" alt="" className="w-full aspect-[3/4] object-cover mb-2" />
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

            <div className="px-5 py-20">
                <div className="w-full flex justify-between ">
                    <h2 className='uppercase text-7xl'>openings</h2>
                    <p className='w-[25%] text-lg'>Think you’d be a great fit for what we do? Reach out to us at <span className='uppercase italic underline'> team@disrptve.com,</span> even if a role isn’t listed here.</p>
                </div>
                <div className=" w-full my-32">
                    <h2 className='uppercase '>filters</h2>
                    <div className="mt-10">
                        {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className=" cursor-pointer hover:border-b-white/100 transition-all duration-300 w-full h-20 border-b border-white/10 flex items-center justify-between">
                        <h2 className='capitalize text-2xl'>social media manager</h2>
                        <div className="flex h-full items-center gap-4">
                            <p>Mumbai</p>
                            <div className="w-[1px] bg-white h-[20%]"></div>
                            <p>Hybrid</p>
                            <img className=' w-4 -rotate-45 invert-100' src="/icons/arrow_small.svg" alt="" />
                        </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default index