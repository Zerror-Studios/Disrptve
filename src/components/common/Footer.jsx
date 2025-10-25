import { useGSAP } from '@gsap/react'
import { RiFacebookFill, RiFacebookLine, RiInstagramFill, RiInstagramLine, RiLinkedinFill, RiLinkedinLine, RiTwitterFill, RiTwitterLine, RiYoutubeFill, RiYoutubeLine } from '@remixicon/react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import Link from 'next/link'

import React from 'react'

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);

const menuItems = [
  { name: "About", href: "/about" },
  { name: "case studies", href: "/projects" },
  { name: "services", href: "/services" },
  { name: "careers", href: "/career" },
  { name: "contact", href: "/contact" },
];

const Footer = () => {

  CustomEase.create("in-out-quint", "0.83,0,0.17,1");

  useGSAP(() => {

    gsap.from(".footer_anim_border", {
      width: 0,
      ease: "ease-secondary",
      duration: 1,
      scrollTrigger: {
        trigger: ".footer_anim_border",
        start: "top 80%",
        toggleActions: "play none none reverse",

      }
    })

    const text1 = SplitText.create(".footer_txt", { type: "chars" });
    const text2 = SplitText.create(".footer_txt_2", { type: "chars" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5, defaults: { ease: "in-out-quint" } });
    tl.to(text1.chars, {
      yPercent: -100,
      stagger: 0.05,
      duration: .8,
    });

    tl.to(
      text2.chars,
      {
        yPercent: -101,
        stagger: 0.05,
        duration: .8,
      },
      "<=0.1"
    );

    tl.set([text1.chars, text2.chars], { yPercent: 0 });

    return () => {
      text1.revert();
      text2.revert();
      tl.kill();
    };
  }, []);

  return (
    <>
      <div className="w-full relative  space-y-6   ">
        <div className="absolute w-full h-full bg-black z-[-1] pointer-events-none"></div>
        <div className="w-full px-3 lg:px-5">
        <div className=" footer_anim_border w-full border-t pb-5 lg:pb-14 border-white/30"></div>
        </div>
        <div className="w-full px-3 lg:px-5 items-stretch  flex   justify-between ">
          <div
            className="flex flex-col gap-y-1 uppercase text-xl lg:text-3xl"
          >
            {menuItems.map((item, i) => (
              <Link
                scroll={false}
                key={i}
                href={item.href}
                // onClick={() => navigate(router, item.href)}
                className="group block overflow-hidden cursor-pointer w-fit relative"
              >
                <h2
                  className="w-fit  font-semibold group-hover:translate-y-[-100%] transition-all duration-300"
                >
                  {item.name}
                </h2>
                <h2 className="absolute font-semibold top-[100%] group-hover:top-0 w-fit text-[#D70000] transition-all duration-300 cursor-pointer">
                  {item.name}
                </h2>
              </Link>
            ))}
          </div>
          <div className=" flex flex-col items-end text-end  gap-y-5 justify-end">
            <div className="   text-sm lg:text-xl">
              <p className='opacity-0'>
                +91 97693 31076
              </p>
              <p className='opacity-0'>
                +91 91672 10094
              </p>
              <p>team@disrptve.com</p>
            </div>
            <div className=" w-full justify-end flex">
              <div className="flex gap-4">
                <a href="https://www.instagram.com/bedisrptve?igsh=MWw3enZqcWZnYmZkbQ==" target="_blank" >
                  <div className="  size-12 group hover:bg-[#FB0401] transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                    <RiInstagramLine size={20} className='group-hover:opacity-0 transition-all duration-300  ' />
                    <RiInstagramFill size={20} className='absolute group-hover:opacity-100 text-[#000000] opacity-0 transition-all duration-300  ' />
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/disrptve/" target="_blank">
                  <div className="  size-12 group hover:bg-[#FB0401] transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                    <RiLinkedinLine size={20} className='group-hover:opacity-0 transition-all duration-300  ' />
                    <RiLinkedinFill size={20} className='absolute group-hover:opacity-100 text-[#000000] opacity-0 transition-all duration-300  ' />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" translate-y-6  px-3 lg:px-5  text-xs lg:text-sm  w-full ">
          <p className='  opacity-50 capitalize'>© 2025. All rights reserved.</p>
        </div>
        <div className="w-full   relative ">
          <div className="h-[20vw] relative  overflow-hidden  ">
            <h2 className='font-bold absolute top-0  footer_txt leading-[19.8vw] uppercase text-[20.2vw] whitespace-nowrap lg:text-[20.5vw] text-[#FB0401] mix-blend-difference'>
              disrptve
            </h2>
            <h2 className='font-bold absolute top-[100%] footer_txt_2  leading-[19.8vw] uppercase text-[20.2vw] whitespace-nowrap lg:text-[20.5vw] text-[#FB0401] mix-blend-difference'>
              disrptve
            </h2>
          </div>
          <img className=' absolute top-0 left-0 z-[-1] w-full h-full object-cover' src="/gifs/footerVid.gif" alt="" />
        </div>
      </div>
    </>
  )
}

export default Footer