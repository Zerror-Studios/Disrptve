import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import AOS from "aos";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import Iridescence from '@/components/ui/Iridescence';
import { RiArrowRightUpLine } from '@remixicon/react';
import useHeadingAnimation from '@/components/ui/useHeadingAnimation';
import useTextYAnimation from '@/components/ui/useTextYAnimation';
gsap.registerPlugin(ScrollTrigger, SplitText);

const teamMembers = [
    {
        name: "Ashish Chaudhary",
        role: "Managing Director",
        img: "/images/teamMember/ashish.webp",
        colSpan: "col-span-2",
        extraClasses: "teams_div",
    },
    {
        name: "Kaushik Sundararajan",
        role: "Chief Executive Officer",
        img: "/images/teamMember/kaushik.webp",
        colSpan: "col-span-1 col-start-3",
    },
    {
        name: "Kanishq Chhabria",
        role: "Chief Operating Officer",
        img: "/images/teamMember/kanishq.webp",
        colSpan: "col-span-2 col-start-4",
        extraClasses: "mt-[19.5vw]",
    },
    {
        name: "Chetan Chopra",
        role: "Chief Business Officer",
        img: "/images/teamMember/ashish.webp",
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
        name: "Karan Adodra",
        role: "Head of Content",
        img: "/images/teamMember/kanishq.webp",
        colSpan: "col-span-1 col-start-6",
        extraClasses: "mt-[-4.5vw]",
    },
];

const index = () => {
    useHeadingAnimation();
    useTextYAnimation()

    useGSAP(() => {

        gsap.from(".her_txt_anim", {
            width: "50%",
            duration: 1,
            delay: .5,
        })

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
            .to(".nam_2, .par1_b, .par2_b, .par3_b, .par4_b", { top: "0%" }, "<")
            .to(".nam_1, .par1_a, .par2_a, .par3_a, .par4_a", { yPercent: -100, opacity: 0 }, "<")
            .to(".nm_1", { opacity: 0.3 }, "<")
            .to(".crd_1", { scale: 0.9 }, "<")
            .from(".crd_2", { top: "100%", duration: 1 }, "<")
            .to(".mix_img_1", { opacity: 0, duration: .15 }, "<+=1.0");

        splitSets.forEach((set) => fadeInChars(set.b.chars));

        tl.to(".nm_3", { opacity: 1 }, ">")
            .to(".nam_3, .par1_c, .par2_c, .par3_c, .par4_c", { top: "0%" }, "<")
            .to(".nam_2, .par1_b, .par2_b, .par3_b, .par4_b", { yPercent: -100, opacity: 0 }, "<")
            .to(".nm_2", { opacity: 0.3 }, "<")
            .to(".crd_1", { scale: 0.8 }, "<")
            .to(".crd_2", { scale: 0.9 }, "<")
            .from(".crd_3", { top: "100%", duration: 1 }, "<")
            .to(".mix_img_2", { opacity: 0, duration: .15 }, "<+=1.0")
            .to(".crd_1", { opacity: .7, duration: .15 }, "<");

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
            once: false,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <div className="w-full  z-[-2] h-screen fixed center ">
                <img className=' scale-[1.5]' src="/gifs/globe.gif" alt="" />
            </div>
            <div className="  abt_her_prn w-full relative px-5 text-9xl uppercase flex-col h-screen center">
                <div className="w-full">
                    <div className="flex her_txt_anim gap-10 whitespace-nowrap justify-between w-[80%] ">
                        <h2 className='anim-tx-y'>A</h2>
                        <h2 className='anim-tx-y'>strategy-led</h2>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex her_txt_anim  gap-10 whitespace-nowrap justify-between  w-full ">
                        <h2 className='anim-tx-y'>marketing</h2>
                        <h2 className='anim-tx-y'>agency.</h2>
                    </div>
                </div>
            </div>

            <div className="w-full px-5 flex mb-32 items-stretch">
                <div className=" animate-heading w-1/2 pb-20">
                    <h2 className='anim-tx-y uppercase text-2xl font-semibold mb-5 red'>About Us</h2>
                    <p className='text-7xl'>It started with a simple idea: Let's build the agency we'd want to hire.</p>
                </div>
                <div className="w-1/2 flex flex-col text-xl items-end justify-end  ">
                    <div className="w-1/2 space-y-4">
                        <p className='anim-tx-y leading-none pb-0'>In late 2023, we decided to do just that. We wanted to create a place that was nimble, strategy-led, and obsessed with creative excellence. </p>
                        <p className='anim-tx-y leading-none pb-0'>No layers, no jargon - just a direct line between a client's vision and work that makes an impact.</p>
                    </div>
                </div>
            </div>


            <div className=" mix_paren w-full px-5 overflow-hidden  h-screen items-center grid grid-cols-3">
                <div className="w-full space-y-8">
                    <h2 className='leading-none animate-heading font-bold text-7xl red'>The <br /> Perfect Mix</h2>
                    <div className="text-xl space-y-3 ">
                        <p className='anim-tx-y leading-none'>We realized we had all the right pieces, each bringing a powerful and distinct advantage to the table.</p>
                        <p className='anim-tx-y leading-none'>It was the ideal blend of experience, relationships, and a fresh perspective. That conversation wasn't just talk. It became DISRPTVE.</p>
                    </div>
                </div>
                <div className="w-full h-full flex -translate-y-20 relative items-center justify-center">
                    <div className=" crd_1 absolute translate-y-10 overflow-hidden  aspect-square w-[80%] bgred rounded-2xl">
                        <img className='w-full h-full mix_img_1 object-cover' src="/images/teamMember/ashish.webp" alt="" />
                    </div>
                    <div className=" crd_2 absolute translate-y-20 overflow-hidden aspect-square w-[80%] bgred rounded-2xl">
                        <img className='w-full h-full mix_img_2 object-cover' src="/images/teamMember/kaushik.webp" alt="" />
                    </div>
                    <div className="crd_3 absolute  translate-y-32 overflow-hidden aspect-square w-[80%] bg-[#D9D9D9] rounded-2xl">
                        <img className='w-full h-full object-cover' src="/images/teamMember/kanishq.webp" alt="" />
                    </div>
                </div>
                <div className="w-full pl-20 space-y-5">
                    <div className=" block relative overflow-hidden ">
                        <div className='red nam_1 leading-none flex items-center gap-3 font-semibold text-lg'><div className="size-1 bgred"></div><h2>Ashish</h2></div>
                        <div className='red nam_2 absolute top-[100%] leading-none flex items-center gap-3 font-semibold text-lg'><div className="size-1 bgred"></div><h2>Kaushik</h2></div>
                        <div className='red nam_3 absolute top-[100%] leading-none flex items-center gap-3 font-semibold text-lg'><div className="size-1 bgred"></div><h2>Kanishq</h2></div>
                    </div>
                    <div className='text-2xl leading-tight'>
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

            <div className=" conv_parent  w-full mb-20 flex gap-x-10 items-stretch px-5 ">
                <div className=" red_bx_ey w-1/2 space-y-8 bg-black relative p-8 flex flex-col justify-between h-full border border-[#FB0401]">
                    <img className='rotate-180 w-[25%] absolute top-0 right-0' src="/gifs/blocks.gif" alt="" />
                    <h2 className=' animate-heading text-7xl red leading-none'>From <br /> Conversation <br /> to Campaign</h2>
                    <h2 className='text-3xl anim-tx-y font-semibold'>That simple idea grew. Fast.</h2>
                    <p className='text-lg anim-tx-y leading-none'>Today, we're a full-fledged agency with a rapidly growing team. Our portfolio is our proof, having worked on everything from shaping the identity for a craft beer brand to running data-driven national campaigns. We've partnered with major celebrities to launch brands, managed complex photoshoots from start to finish, and even used AI to create visuals that were once impossible.</p>
                </div>
                <div className="  w-1/2 relative p-8  flex flex-col justify-between bgred ">
                    <div
                        style={{ clipPath: "ellipse(46% 27% at 50% 50%)" }}
                        className=" absolute top-0 right-0"
                    >
                        <img className="w-[20vw]" src="/gifs/redEye.gif" alt="" />
                    </div>
                    <h2 className='text-7xl animate-heading text-black leading-none'>How we <br /> work</h2>
                    <p className='text-lg anim-tx-y leading-none'>Our process is simple. We listen more than we talk. We dive deep into your world to find the one thing that makes you special. Then we build a clear, honest plan and bring it to life with a team that’s genuinely passionate about what they do.</p>

                </div>
            </div>

            <div className="w-full  overflow-hidden relative h-screen gap-y-10 center text-center flex-col">
                <div className="absolute wave_bg top-0 left-0 z-[-2] w-full h-full center">
                    <Iridescence
                        color={[.5, 0, 0]}
                        mouseReact={false}
                        amplitude={0.1}
                        speed={0.5}
                    />
                </div>
                <h2 className=' animate-heading text-6xl uppercase'>Let's Build Something Great.</h2>
                <div className="space-y-4 text-center w-full center flex-col">
                    <p className='w-[45%] anim-tx-y leading-none text-2xl'>At the end of the day, we’re still driven by the spirit of that first conversation: a desire to do great work with good people. </p>
                    <p className='w-[45%]  anim-tx-y leading-none text-2xl'>If you’re building something you believe in, we’d love to have a conversation with you, too.</p>
                </div>
                <button className=' group relative flex items-center gap-1'>
                    <div className="w-full group-hover:w-0 transition-all duration-300  h-[1px] bg-white absolute bottom-0 right-0"></div>
                    <p className=' text-base md:text-xl group-hover:italic  '>Work with us</p>
                    <RiArrowRightUpLine size={20} />
                </button>

            </div>

            <div className=" py-20 px-5 ">
                <h2 className=' animate-heading anim-tx-y uppercase text-2xl font-semibold mb-5 red'>our team</h2>
                <div className="w-full  grid grid-cols-6 gap-5">
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className={`${member.colSpan} flex w-full flex-col items-start ${member.extraClasses || ""}`}
                        >
                            <div className="flex   w-full items-center justify-between">
                                <div className='anim-tx-y'>
                                    <h2 className="font-semibold uppercase leading-none">{member.name}</h2>
                                    <p className="text-sm opacity-70 mb-3">{member.role}</p>
                                </div>
                                <img
                                    className={`w-4 invert-100 rotate-90`}
                                    src="/icons/arrow_small.svg"
                                    alt=""
                                />
                            </div>
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
                        </div>
                    ))}
                </div>

            </div>


        </>
    )

}

export default index