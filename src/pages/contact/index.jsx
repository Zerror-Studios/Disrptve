import { useGSAP } from '@gsap/react'
import { RiArrowRightUpLine, RiFacebookFill, RiFacebookLine, RiInstagramFill, RiInstagramLine, RiLinkedinFill, RiLinkedinLine, RiTwitterFill, RiTwitterLine, RiYoutubeFill, RiYoutubeLine } from '@remixicon/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)


const index = () => {
  useGSAP(() => {
    gsap.to(".fixy_con", {
      filter: "blur(14px) brightness(.6)",
      scrollTrigger: {
        trigger: ".slide_u",
        start: "top top",
        scrub: true
      }
    })

  })
  return (
    <>
      <div className="w-full fixy_con fixed z-[-1] brightness-[1] blur-[0] top-0 left-0 h-screen pt-20 bg-[#FB0401] text-black center flex-col gap-y-10 text-center">
        <h2 className='uppercase leading-[8.5vw] text-[10vw] font-bold'>Ready to Find <br /> Your dream <br /> heaven?</h2>
        <h2 className=' font-semibold leading-tight uppercase'>Our manager will contact you <br /> as soon as possible.</h2>
      </div>

      <div className="w-full">
        <div className="w-full slide_u h-screen"></div>
        <div className="w-full pt-20 pb-5 bg-black  center">
          <div className="w-[80%]  gap-20 flex justify-between items-stretch">
            <div className="w-1/2 h-full">
              <div className=" grid grid-cols-2 space-y-20">
                <div className="">
                  <p className=' mb-2 text-xl uppercase font-semibold opacity-70'>location</p>
                  <p className='text-lg' >Mumbai, India</p>
                </div>
                <div className="">
                  <p className=' mb-2 text-xl uppercase font-semibold opacity-70'>email</p>
                  <a href="">
                    <div className="flex mb-1 group  w-fit relative items-center gap-2">
                      <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                      <p className='text-lg w-[180px] group-hover:italic' >team@disrptve.com</p>
                      <RiArrowRightUpLine size={20} />
                    </div>
                  </a>
                  <a href="">
                    <div className="flex mb-1 group  w-fit relative items-center gap-2">
                      <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                      <p className='text-lg w-[180px] group-hover:italic' >kanishq@disrptve.com</p>
                      <RiArrowRightUpLine size={20} />
                    </div>
                  </a>
                  <a href="">
                    <div className="flex mb-1 group  w-fit relative items-center gap-2">
                      <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                      <p className='text-lg w-[180px] group-hover:italic' >kaushik@disrptve.com</p>
                      <RiArrowRightUpLine size={20} />
                    </div>
                  </a>
                </div>
                <div className="">
                  <p className=' mb-2 text-xl uppercase font-semibold opacity-70'>contact</p>
                  <a href="" className='flex mb-1 group  w-fit relative items-center gap-2'>
                    <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                    <p className='text-lg group-hover:italic' >
                      +91 97693 31076
                    </p>
                  </a>
                  <a href="" className='flex mb-1 group  w-fit relative items-center gap-2'>
                    <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                    <p className='text-lg group-hover:italic' >
                      +91 91672 10094
                    </p>
                  </a>
                </div>
                <div className="">
                  <p className=' mb-2 text-xl uppercase font-semibold opacity-70'>socials</p>
                  <div className="flex gap-4">
                    <div className="size-14 group hover:bg-[#FB0401] transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                      <RiInstagramLine className='group-hover:opacity-0 transition-all duration-300  ' />
                      <RiInstagramFill className='absolute group-hover:opacity-100 text-[#000000] opacity-0 transition-all duration-300  ' />
                    </div>
                    <div className="size-14 group hover:bg-[#FB0401] transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                      <RiFacebookLine className='group-hover:opacity-0 transition-all duration-300  ' />
                      <RiFacebookFill className='absolute group-hover:opacity-100 text-[#000000] opacity-0 transition-all duration-300  ' />
                    </div>
                    <div className="size-14 group hover:bg-[#FB0401] transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                      <RiTwitterLine className='group-hover:opacity-0 transition-all duration-300  ' />
                      <RiTwitterFill className='absolute group-hover:opacity-100 text-[#000000] opacity-0 transition-all duration-300  ' />
                    </div>
                    <div className="size-14 group hover:bg-[#FB0401] transition-all duration-300 cursor-pointer rounded-full border border-white/20 center">
                      <RiLinkedinLine className='group-hover:opacity-0 transition-all duration-300  ' />
                      <RiLinkedinFill className='absolute group-hover:opacity-100 text-[#000000] opacity-0 transition-all duration-300  ' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <p className='text-lg  leading-tight ' >We’d love to hear from you. Whether you’re looking to disrupt your category, need a fresh perspective, or want to explore potential collaborations.</p>
              </div>
            </div>
            <div className="w-1/2 flex items-end justify-center overflow-hidden    ">
              <img className='w-[30vw] ' src="/gifs/whiteEyeDrop.gif" alt="" />
            </div>
          </div>
        </div>

        <div className="px-5 pt-20 bg-black">
          <div className="w-full flex justify-between ">
            <h2 className='uppercase text-5xl red'>openings</h2>
            <p className='w-[25%] text-lg'>Think you’d be a great fit for what we do? Reach out to us at <span className='uppercase italic underline'> team@disrptve.com,</span> even if a role isn’t listed here.</p>
          </div>
          <div className=" w-full mt-32">
            <h2 className='uppercase '>filters</h2>
            <div className="mt-10">
              {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className=" cursor-pointer hover:border-b-white/100 transition-all duration-300 w-full h-20 border-b border-white/10 flex items-center justify-between">
                  <p className=' font-semibold capitalize text-2xl'>social media manager</p>
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
      </div>



    </>
  )
}

export default index