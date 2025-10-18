import { useGSAP } from '@gsap/react'
import { RiFacebookFill, RiFacebookLine, RiInstagramFill, RiInstagramLine, RiLinkedinFill, RiLinkedinLine, RiTwitterFill, RiTwitterLine, RiYoutubeFill, RiYoutubeLine } from '@remixicon/react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'

import React from 'react'
import useTextYAnimation from '../ui/useTextYAnimation'

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);

const menuItems = [
  { name: "About", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "services", href: "/services" },
  { name: "career", href: "/career" },
  { name: "contact", href: "/contact" },
];

const Footer = () => {
  useTextYAnimation()
  CustomEase.create("in-out-quint", "0.83,0,0.17,1");

  useGSAP(() => {

    gsap.from(".anim_border", {
      width: 0,
      ease: "ease-secondary",
      duration: 1,
      scrollTrigger: {
        trigger: ".anim_border",
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
      <div className="w-full px-3 lg:px-5  ">
        <div className=" anim_border w-full border-t pb-20 border-white/50"></div>
        <div className="w-full   flex  justify-between ">
          <div className="">
            <div
              className="flex flex-col gap-y-1 uppercase text-xl lg:text-3xl"
            >
              {menuItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group block overflow-hidden cursor-pointer w-fit relative"
                >
                  <h2
                    className="w-fit anim-tx-y font-semibold group-hover:translate-y-[-100%] transition-all duration-300"
                  >
                    {item.name}
                  </h2>
                  <h2 className="absolute font-semibold top-[100%] group-hover:top-0 w-fit text-[#D70000] transition-all duration-300 cursor-pointer">
                    {item.name}
                  </h2>
                </a>
              ))}
            </div>
          </div>
          <div className="h-full text-end space-y-12">
            <div className="w-full ">
              <p className='uppercase anim-tx-y text-xs lg:text-sm'>Mumbai, india</p>
            </div>
            <div className=" space-y-2 anim-tx-y text-sm lg:text-xl">
              <p>team@disrptve.com</p>
              <p>
                +91 97693 31076
              </p>
              <p>
                +91 91672 10094
              </p>

            </div>
            <div className="">
              <div className="flex lg:gap-4">
                <div className="  scale-75 lg:scale-100 size-12 group hover:bg-[#FB0401] transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                  <RiInstagramLine size={20} className='group-hover:opacity-0 transition-all duration-300  ' />
                  <RiInstagramFill size={20} className='absolute group-hover:opacity-100 text-[#000000] opacity-0 transition-all duration-300  ' />
                </div>
                <div className="  scale-75 lg:scale-100 size-12 group hover:bg-[#FB0401] transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                  <RiFacebookLine size={20} className='group-hover:opacity-0 transition-all duration-300  ' />
                  <RiFacebookFill size={20} className='absolute group-hover:opacity-100 text-[#000000] opacity-0 transition-all duration-300  ' />
                </div>
                <div className="  scale-75 lg:scale-100 size-12 group hover:bg-[#FB0401] transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                  <RiTwitterLine size={20} className='group-hover:opacity-0 transition-all duration-300  ' />
                  <RiTwitterFill size={20} className='absolute group-hover:opacity-100 text-[#000000] opacity-0 transition-all duration-300  ' />
                </div>
                <div className="  scale-75 lg:scale-100 size-12 group hover:bg-[#FB0401] transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                  <RiLinkedinLine size={20} className='group-hover:opacity-0 transition-all duration-300  ' />
                  <RiLinkedinFill size={20} className='absolute group-hover:opacity-100 text-[#000000] opacity-0 transition-all duration-300  ' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-20  relative ">
          <div className="  -translate-y-8 text-xs lg:text-sm  w-full flex justify-between">
            <p className='  opacity-50'>© 2025. All rights reserved.</p>
            <p className='  opacity-50 capitalize'>developed by zerror studios</p>
          </div>
          <div className="h-[20vw] relative  overflow-hidden  ">
            <h2 className='font-bold absolute top-0  footer_txt leading-none uppercase text-[19.8vw] text-[#FB0401] mix-blend-difference'>
              disrptve
            </h2>
            <h2 className='font-bold absolute top-[100%] footer_txt_2  leading-none uppercase text-[19.8vw] text-[#FB0401] mix-blend-difference'>
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