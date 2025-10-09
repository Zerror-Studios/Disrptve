import { useGSAP } from '@gsap/react'
import { RiFacebookFill, RiFacebookLine, RiInstagramFill, RiInstagramLine, RiLinkedinFill, RiLinkedinLine, RiTwitterFill, RiTwitterLine, RiYoutubeFill, RiYoutubeLine } from '@remixicon/react'
import gsap from 'gsap'
import CustomEase from 'gsap/dist/CustomEase'
import SplitText from 'gsap/dist/SplitText'
import React from 'react'

gsap.registerPlugin(CustomEase, SplitText);

const menuItems = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Ventures", href: "/ventures" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  CustomEase.create("in-out-quint", "0.83,0,0.17,1");

  useGSAP(() => {
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
      <div className="w-full  border-t pt-20 border-white/10">

        <div className="w-full px-5  flex  justify-between ">
          <div className="">
            <div
              className="flex flex-col gap-y-2 uppercase text-4xl"
            >
              {menuItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group block overflow-hidden cursor-pointer w-fit relative"
                >
                  <h2
                    className="w-fit group-hover:translate-y-[-100%] transition-all duration-300"
                  >
                    {item.name}
                  </h2>
                  <h2 className="absolute top-[100%] group-hover:top-0 w-fit text-[#D70000] transition-all duration-300 cursor-pointer">
                    {item.name}
                  </h2>
                </a>
              ))}
            </div>
          </div>
          <div className="h-full text-end space-y-12">
            <div className="w-full ">
              <p className='uppercase text-sm'>Mumbai, india</p>
            </div>
            <div className=" space-y-2 text-2xl">
              <p>team@disrptve.com</p>
              <p>
                +91 97693 31076
              </p>
              <p>
                +91 91672 10094
              </p>

            </div>
            <div className="">
              <div className="flex gap-4">
                <div className="size-14 group hover:bg-white transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                  <RiInstagramLine className='group-hover:opacity-0 transition-all duration-300  ' />
                  <RiInstagramFill className='absolute group-hover:opacity-100 text-[#0E0E0E] opacity-0 transition-all duration-300  ' />
                </div>
                <div className="size-14 group hover:bg-white transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                  <RiFacebookLine className='group-hover:opacity-0 transition-all duration-300  ' />
                  <RiFacebookFill className='absolute group-hover:opacity-100 text-[#0E0E0E] opacity-0 transition-all duration-300  ' />
                </div>
                <div className="size-14 group hover:bg-white transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                  <RiTwitterLine className='group-hover:opacity-0 transition-all duration-300  ' />
                  <RiTwitterFill className='absolute group-hover:opacity-100 text-[#0E0E0E] opacity-0 transition-all duration-300  ' />
                </div>
                <div className="size-14 group hover:bg-white transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                  <RiLinkedinLine className='group-hover:opacity-0 transition-all duration-300  ' />
                  <RiLinkedinFill className='absolute group-hover:opacity-100 text-[#0E0E0E] opacity-0 transition-all duration-300  ' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-20  relative ">
          <div className=" px-5 -translate-y-8  w-full flex justify-between">
            <h2 className='opacity-50'>© 2025. All rights reserved.</h2>
            <h2 className='opacity-50 capitalize'>developed by zerror studios</h2>
          </div>
          <div className="h-[20vw] relative  overflow-hidden  ">
            <h2 className='font-bold absolute top-0  footer_txt leading-none uppercase text-[19.8vw] text-[red] mix-blend-difference'>
              disrptve
            </h2>
            <h2 className='font-bold absolute top-[100%] footer_txt_2  leading-none uppercase text-[19.8vw] text-[red] mix-blend-difference'>
              disrptve
            </h2>
          </div>
          <img className=' absolute top-0 left-0 z-[-1] w-full h-full object-cover' src="/footerImg.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Footer