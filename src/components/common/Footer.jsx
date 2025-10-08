import { useGSAP } from '@gsap/react'
import { RiFacebookFill, RiFacebookLine, RiInstagramFill, RiInstagramLine, RiYoutubeFill, RiYoutubeLine } from '@remixicon/react'
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

        <div className="w-full h-[20vw] flex px-5 ">
          <div className="w-[30%] h-full">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="scroll-btn relative size-[20vw] cursor-pointer rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
                className="absolute w-full h-full"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  fill="transparent"
                  stroke="#ffffff3a"
                  strokeWidth=".5"
                />
                <circle
                  transform="rotate(-90 40 40)"
                  className="another-circle"
                  cx="40"
                  cy="40"
                  r="36"
                  fill="transparent"
                  stroke="white"
                  strokeWidth=".5"
                />
              </svg>

              <img
                src="/icons/arrow.svg"
                alt="scroll to top"
                className="w-[25%] z-10"
              />
            </div>

          </div>
          <div className="w-[70%] h-full flex ">
            <div className="w-[70%] flex flex-col justify-between h-full">
              <div className="">
                <h2 className='font-semibold uppercase mb-3 '>Location</h2>
                <p>Mumbai, India</p>
              </div>
              <div className="">
                <h2 className='font-semibold uppercase mb-3 '>contact</h2>
                <p>
                  team@disrptve.com
                </p>
                <p>
                  +91 97693 31076
                </p>
                <p>
                  +91 91672 10094
                </p>
              </div>
            </div>
            <div className="w-[30%] h-full flex flex-col justify-between">
              <div className="">
                <h2 className='font-semibold uppercase mb-3 '>Links</h2>
                <div className="grid grid-cols-2 space-y-1 capitalize">
                  {menuItems.map((item, index) => (
                  <a href={item.href} key={index} className=' group  cursor-pointer w-fit hover:opacity-50 relative'>
                    <div className="w-0 h-[1px] bg-white absolute group-hover:w-full left-0 bottom-0 transition-all duration-300"></div>
                    <p>
                      {item.name}
                    </p>
                  </a>
                  ))}
                </div>
              </div>
              <div className="">
                <h2 className='font-semibold uppercase mb-3'>Socials</h2>
                <div className="flex gap-4">
                  <div className="size-14 group hover:bg-white transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                    <RiFacebookLine className='group-hover:opacity-0 transition-all duration-300  ' />
                    <RiFacebookFill className='absolute group-hover:opacity-100 text-[#0E0E0E] opacity-0 transition-all duration-300  ' />
                  </div>
                  <div className="size-14 group hover:bg-white transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                    <RiInstagramLine className='group-hover:opacity-0 transition-all duration-300  ' />
                    <RiInstagramFill className='absolute group-hover:opacity-100 text-[#0E0E0E] opacity-0 transition-all duration-300  ' />
                  </div>
                  <div className="size-14 group hover:bg-white transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                    <RiYoutubeLine className='group-hover:opacity-0 transition-all duration-300  ' />
                    <RiYoutubeFill className='absolute group-hover:opacity-100 text-[#0E0E0E] opacity-0 transition-all duration-300  ' />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="w-full mt-20  relative ">
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