import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import AOS from "aos";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import Iridescence from '@/components/ui/Iridescence';
import { RiArrowRightUpLine } from '@remixicon/react';
import Link from 'next/link';
import SeoHeader from '@/components/seo/SeoHeader';
gsap.registerPlugin(ScrollTrigger, SplitText);

const teamMembers = [
    {
        name: "Ashish Chowdhry",
        role: "Managing Director",
        img: "/images/teamMember/ashish.webp",
        colSpan: "col-span-2",
        extraClasses: "teams_div",
    },
    {
        name: "Kanishq Chhabria",
        role: "Chief Operating Officer",
        img: "/images/teamMember/kanishq.webp",
        colSpan: "col-span-1 col-start-3",
    },
    {
        name: "Kaushik Sundararajan",
        role: "Chief Executive Officer",
        img: "/images/teamMember/kaushik.webp",
        colSpan: "col-span-2 col-start-4",
        extraClasses: "mt-[19.5vw]",
    },
    {
        name: "Karan Adodra",
        role: "Head of Content",
        img: "/images/teamMember/karan.png",
        colSpan: "col-span-1 col-start-6",
        extraClasses: "mt-[19.5vw]",
    },
    {
        name: "Rachit Rajguru",
        role: "Head of Operations",
        img: "/images/teamMember/rachit.webp",
        colSpan: "col-span-2",
        extraClasses: "mt-[-4.5vw]",
    },
    {
        name: "Aayush Panchal",
        role: "Head of Design",
        img: "/images/teamMember/aayush.webp",
        colSpan: "col-span-1 col-start-3",
        extraClasses: "mt-[-4.5vw]",
    },
    {
        name: "Chetan Chopra",
        role: "Chief Business Officer",
        img: "/images/teamMember/chetan.jpeg",
        colSpan: "col-span-1 col-start-6",
        extraClasses: "mt-[-4.5vw]",
    },
];

const About = () => {

    useGSAP(() => {

        gsap.to(".red_globe_bg", {
            top: 0,
            duration: 1.2,
            delay: .5,
            ease: "ease-secondary"
        })
        gsap.from(".her_txt_anim", {
            width: "50%",
            duration: 1,
            delay: .5,
        })

        if (window.innerWidth < 1024) return

        gsap.registerPlugin(SplitText, ScrollTrigger);

        const paragraphs = ["par1", "par2", "par3", "par4"];

        const splitSets = paragraphs.map((p) => ({
            a: new SplitText(`.${p}_a`, { type: "chars" }),
            b: new SplitText(`.${p}_b`, { type: "chars" }),
            c: new SplitText(`.${p}_c`, { type: "chars" }),
        }));

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".mix_paren",
                start: "top top",
                end: "+=400%",
                pinSpacing: true,
                scrub: 0.4,
                // markers: true,
                pin: true,
            },
            defaults: { ease: "none" },
        });

        const fadeInChars = (chars) =>
            tl.fromTo(
                chars,
                { opacity: 0.2 },
                {
                    opacity: 1,
                    stagger: 0.01,
                    duration: 0.01,
                },
                ">+=0.1"
            );

        splitSets.forEach((set) => fadeInChars(set.a.chars));

        tl.to(".nm_2", { opacity: 1 }, ">")
            .to(".crd_1", { z: 30, rotateY: 2, rotate: 0, scale: 1.05, ease: "linear", }, "<")
            .to(".nam_2, .par1_b, .par2_b, .par3_b, .par4_b", { top: "0%" }, "<")
            .to(".nam_1, .par1_a, .par2_a, .par3_a, .par4_a", { yPercent: -100, opacity: 0 }, "<")
            .to(".crd_1", { rotateY: -70, x: "-150%", opacity: 0, ease: "linear", }, "+=0.2")

        splitSets.forEach((set) => fadeInChars(set.b.chars));

        tl.to(".nm_3", { opacity: 1 }, ">")
            .to(".crd_2", { z: 30, rotateY: 2, rotate: 0, scale: 1.05, ease: "linear", }, "<")
            .to(".nam_3, .par1_c, .par2_c, .par3_c, .par4_c", { top: "0%" }, "<")
            .to(".nam_2, .par1_b, .par2_b, .par3_b, .par4_b", { yPercent: -100, opacity: 0 }, "<")
            .to(".crd_2", { rotateY: -70, x: "-150%", opacity: 0, ease: "linear", }, "+=0.2")

        splitSets.forEach((set) => fadeInChars(set.c.chars));


        gsap.fromTo(".red_bx_ey", {
            y: 100,
        }, {
            y: -100,
            ease: "linear",
            scrollTrigger: {
                trigger: ".conv_parent",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.4,
                // markers: true
            }
        })
    });

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
        AOS.refresh();
    }, []);

    return (
        <>

            <SeoHeader meta={meta} />

            <div className=" red_globe_bg w-full  z-[-2] h-screen top-[100vh] fixed center ">
                <img className=' w-[70vw] ' src="/gifs/globe.gif" alt="" />
            </div>

            <div className="  abt_her_prn w-full overflow-hidden relative  px-3  lg:px-5 text-4xl md:text-6xl lg:text-9xl uppercase flex-col h-[50vh] lg:h-screen center">
                <div className="w-full">
                    <div className="flex her_txt_anim gap-4 lg:gap-10 whitespace-nowrap justify-between w-[80%] ">
                        <h2>A</h2>
                        <h2>strategy-led</h2>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex her_txt_anim  gap-4 lg:gap-10 whitespace-nowrap justify-between  w-full ">
                        <h2>marketing</h2>
                        <h2>agency.</h2>
                    </div>
                </div>
            </div>

            <div className="w-full  px-3  md:px-5 flex flex-col md:flex-row mb-14 lg:mb-32 items-stretch">
                <div className=" w-full md:w-1/2 pb-4 md:pb-20">
                    <h2 className=' uppercase   text-lg  lg:text-2xl font-semibold mb-5 red'>About Us</h2>
                    <h2 className=' text-4xl  lg:text-7xl uppercase'>It started with a simple idea: Let's build the agency we'd want to hire.</h2>
                </div>
                <div className=" w-full md:w-1/2 md:flex flex-col text-base  lg:text-xl items-end justify-end  ">
                    <div className=" w-full md:w-[70%] lg:w-1/2 space-y-2 lg:space-y-4">
                        <p className=' leading-tight '>In late 2023, we decided to do just that. We wanted to create a place that was nimble, strategy-led, and obsessed with creative excellence. </p>
                        <p className=' leading-tight '>No layers, no jargon - just a direct line between a client's vision and work that makes an impact.</p>
                    </div>
                </div>
            </div>


            <div className=" mix_paren w-full  px-3  lg:px-5 overflow-hidden  lg:h-screen items-center grid grid-cols-1 lg:grid-cols-3">
                <div className="w-full space-y-8">
                    <h2 className='leading-none  uppercase text-4xl   lg:text-7xl red'>The <br /> Perfect Mix</h2>
                    <div className=" text-base  lg:text-xl space-y-2 lg:space-y-3 ">
                        <p className=' leading-tight md:w-[50%] lg:w-full'>We realized we had all the right pieces, each bringing a powerful and distinct advantage to the table.</p>
                        <p className=' leading-tight md:w-[50%] lg:w-full'>It was the ideal blend of experience, relationships, and a fresh perspective. That conversation wasn't just talk. It became DISRPTVE.</p>
                    </div>
                </div>

                <div className="w-full mb-14 mt-10 lg:hidden grid grid-cols-1 gap-y-12 gap-x-5 md:grid-cols-3">
                    <div className="  overflow-hidden space-y-2  w-full ">
                        <div className="w-full mb-2 aspect-square rounded-2xl overflow-hidden ">
                            <img className='w-full  h-full  object-cover' src="/images/teamMember/ashish.webp" alt="" />
                        </div>
                        <div className='red  leading-none flex items-center gap-3 font-semibold text-lg lg:text-lg'><h2>Ashish</h2></div>
                        <p className=' text-base  lg:text-xl leading-tight '>An actor and entrepreneur with an incredible network and a legacy in advertising—his father's agency, Art, was an icon of the 80s and 90s.</p>
                    </div>
                    <div className="  overflow-hidden space-y-2  w-full ">
                        <div className="w-full mb-2 aspect-square rounded-2xl overflow-hidden ">
                            <img className='w-full  h-full  object-cover' src="/images/teamMember/kaushik.webp" alt="" />
                        </div>
                        <div className='red  leading-none flex items-center gap-3 font-semibold text-lg lg:text-lg'><h2>Kaushik</h2></div>
                        <p className=' text-base  lg:text-xl leading-tight '>The seasoned strategist, who merged his own successful agency of 10+ years into this new vision, bringing a deep understanding of what it takes to win.</p>
                    </div>
                    <div className="  overflow-hidden space-y-2  w-full ">
                        <div className="w-full mb-2 aspect-square rounded-2xl overflow-hidden ">
                            <img className='w-full  h-full  object-cover' src="/images/teamMember/kanishq.webp" alt="" />
                        </div>
                        <div className='red  leading-none flex items-center gap-3 font-semibold text-lg lg:text-lg'><h2>Kanishq</h2></div>
                        <p className=' text-base  lg:text-xl leading-tight '>The new-gen, with a sharp eye for design, a knack for culture, and his own entrepreneurial grit.</p>
                    </div>
                </div>

                <div className=" hidden lg:flex team-wrapper perspective-distant transform-3d w-full h-full relative  items-center justify-center">
                    <div className="crd_item crd_1 absolute -rotate-4  z-[10] aspect-square w-[80%] rounded-2xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/teamMember/ashish.webp"
                            alt="Ashish"
                        />
                    </div>
                    <div className="crd_item crd_2 z-[6] absolute rotate-4 aspect-square w-[80%] rounded-2xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/teamMember/kaushik.webp"
                            alt="Kaushik"
                        />
                    </div>
                    <div className="crd_item crd_3 z-[2] absolute grayscale-100  aspect-square w-[80%] rounded-2xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/teamMember/kanishq.jpeg"
                            alt="Kanishq"
                        />
                    </div>
                </div>
                <div className=" hidden lg:block w-full h-[20vh] bg-black lg:bg-transparent z-[1] lg:pl-20 space-y-5">
                    <div className=" block relative overflow-hidden ">
                        <div className='red nam_1 uppercase leading-none flex items-center gap-3 font-semibold text-base lg:text-2xl'><h2>Ashish</h2></div>
                        <div className='red nam_2 absolute top-[100%] uppercase leading-none flex items-center gap-3 font-semibold text-base lg:text-2xl'><h2>Kaushik</h2></div>
                        <div className='red nam_3 absolute top-[100%] uppercase leading-none flex items-center gap-3 font-semibold text-base lg:text-2xl'><h2>Kanishq</h2></div>
                    </div>
                    <div className='  text-base  lg:text-2xl leading-none lg:leading-tight'>
                        <div className="block relative overflow-hidden ">
                            <p className='par1_a'>An actor and entrepreneur with an</p>
                            <p className='par1_b absolute left-0 top-full'>The seasoned strategist, who merged </p>
                            <p className='par1_c absolute left-0 top-full'>The new-gen, with a sharp eye for</p>
                        </div>
                        <div className="block relative overflow-hidden ">
                            <p className='par2_a'>incredible network and a legacy in</p>
                            <p className='par2_b absolute left-0 top-full'>  his own successful agency of 10+</p>
                            <p className='par2_c absolute left-0 top-full'> design, a knack for culture, and</p>
                        </div>
                        <div className="block relative overflow-hidden ">
                            <p className='par3_a'>advertising - his father's agency, Art,</p>
                            <p className='par3_b absolute left-0 top-full'> years into this new vision, bringing </p>
                            <p className='par3_c absolute left-0 top-full'> his own entrepreneurial grit.</p>
                        </div>
                        <div className="block relative overflow-hidden ">
                            <p className='par4_a'>was an icon of the 80s and 90s.</p>
                            <p className='par4_b absolute left-0 top-full'>a deep understanding of what it </p>
                            <p className='par4_c absolute left-0 top-full'>takes to win.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className=" conv_parent  w-full mb-14 lg:mb-20 flex flex-col md:flex-row gap-y-10 gap-x-10 items-stretch  px-3  lg:px-5 ">
                <div className=" red_bx_ey w-full md:w-1/2 space-y-8 bg-black relative p-5 lg:p-8 flex flex-col justify-between h-full border border-[#FB0401]">
                    <img className='rotate-180 w-[35%] lg:w-[25%] absolute top-0 right-0' src="/gifs/blocks.gif" alt="" />
                    <h2 className='  uppercase relative z-[1]  text-4xl  lg:text-7xl red leading-none'>From <br /> Conversation <br /> to Campaign</h2>
                    <h2 className=' text-xl lg:text-3xl '>That simple idea grew. Fast.</h2>
                    <p className=' text-base lg:text-xl  leading-tight'>Today, we're a full-fledged agency with a rapidly growing team. Our portfolio is our proof, having worked on everything from shaping the identity for a craft beer brand to running data-driven national campaigns. We've partnered with major celebrities to launch brands, managed complex photoshoots from start to finish, and even used AI to create visuals that were once impossible.</p>
                </div>
                <div className="  w-full md:w-1/2 space-y-12 md:space-y-0 relative p-5 lg:p-8  flex flex-col justify-between bgred ">
                    <div
                        style={{ clipPath: "ellipse(46% 27% at 50% 50%)" }}
                        className=" absolute top-0 right-0"
                    >
                        <img className=" w-[30vw] md:w-[20vw]" src="/gifs/redEye.gif" alt="" />
                    </div>
                    <h2 className=' text-4xl  lg:text-7xl uppercase  text-black leading-none'>How we <br /> work</h2>
                    <p className=' text-base lg:text-xl  leading-tight'>Our process is simple. We listen more than we talk. We dive deep into your world to find the one thing that makes you special. Then we build a clear, honest plan and bring it to life with a team that’s genuinely passionate about what they do.</p>

                </div>
            </div>

            <div className="w-full  overflow-hidden relative h-screen gap-y-10 center text-center flex-col">
                <div className="absolute wave_bg top-0 left-0 z-[-2] w-full h-full center">
                    <img className='w-full h-full object-cover' src="/gifs/work.gif" alt="" />
                </div>
                <h2 className='   text-4xl  lg:text-7xl uppercase'>Let's Build Something Great.</h2>
                <div className="space-y-5 px-3 text-center w-full center flex-col">
                    <p className=' w-full md:w-[50%]  leading-none   text-xl  lg:text-3xl '>At the end of the day, we’re still driven by the spirit of that first conversation: a desire to do great work with good people. </p>
                    <p className=' w-full md:w-[50%]   leading-none   text-xl  lg:text-3xl'>If you’re building something you believe in, we’d love to have a conversation with you, too.</p>
                </div>
                <Link scroll={false} href="/contact">
                    <button className=' group relative flex items-center gap-1'>
                        <div className="w-full group-hover:w-0 transition-all duration-300  h-[1px] bg-white absolute bottom-0 right-0"></div>
                        <p className=' text-base md:text-xl group-hover:italic  '>WORK WITH US</p>
                        <RiArrowRightUpLine size={20} />
                    </button>
                </Link>
            </div>

            <div className=" py-14 lg:py-28  px-3  lg:px-5 ">
                <h2 className='   uppercase   text-lg  lg:text-2xl font-semibold mb-5 red'>our team</h2>
                {/* for mobile */}
                <div className="w-full lg:hidden grid grid-cols-2 items-stretch gap-y-10 md:grid-cols-4 gap-3 md:gap-x-5">
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className={` flex w-full flex-col items-start `}
                        >
                            <div
                                data-aos-anchor-placement="top-bottom"
                                data-aos="clip"
                                className=" w-full bg-[#D9D9D9]">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full grayscale-100 aspect-[3/4] object-cover"
                                />
                            </div>
                            <div className="flex mt-2  w-full items-center justify-between">
                                <div className=''>
                                    <h3 className=" text-sm  uppercase leading-none">{member.name}</h3>
                                    <p className="text-sm opacity-70 ">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* for desktop */}
                <div className="w-full hidden lg:grid grid-cols-6 gap-5">
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className={`${member.colSpan} flex  group w-full flex-col items-start ${member.extraClasses || ""}`}
                        >
                            <div className="flex   w-full items-center justify-between">
                                <div className=''>
                                    <h3 className=" text-xl  uppercase leading-none">{member.name}</h3>
                                    <p className="text-base opacity-70 mb-3">{member.role}</p>
                                </div>
                            </div>
                            <div className="w-full overflow-hidden block group-hover:rounded-xl transition-all duration-300 ">
                            <div
                                data-aos-anchor-placement="top-bottom"
                                data-aos="clip"
                                className=" w-full overflow-hidden block bg-[#D9D9D9]">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full group-hover:scale-[1.05] transition-transform duration-300  grayscale-100 aspect-[3/4] object-cover"
                                    />
                            </div>
                                    </div>
                        </div>
                    ))}
                </div>

            </div>


        </>
    )

}

export default About




const meta = {
    title: "About DISRPTVE - Strategy-Led Marketing Agency Team",
    description:
        "Founded in 2023, DISRPTVE combines proven strategy, entertainment networks, and modern design to build brands that earn attention with interest.",
    canonical: "https://disrptve.vercel.app/about",
    og: {
        title: "About DISRPTVE - Strategy-Led Marketing Agency Team",
        description:
            "Founded in 2023, DISRPTVE combines proven strategy, entertainment networks, and modern design to build brands that earn attention with interest.",
        image: "https://disrptve.vercel.app/logo-og.png",
        url: "https://disrptve.vercel.app/about",
        type: "website",
        site_name: "DISRPTVE",
    },
    twitter: {
        card: "summary_large_image",
        title: "About DISRPTVE - Strategy-Led Marketing Agency Team",
        description:
            "Founded in 2023, DISRPTVE combines proven strategy, entertainment networks, and modern design to build brands that earn attention with interest.",
        image: "https://disrptve.vercel.app/logo-og.png",
        site: "@disrptve",
    },
    robots: "index,follow",
    keywords:
        "about DISRPTVE, marketing agency team, Mumbai agency, brand strategy experts, creative agency founders",
    author: "DISRPTVE",
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#000000",
};