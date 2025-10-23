import Form from '@/components/ui/Form'
import { useGSAP } from '@gsap/react'
import { RiArrowRightUpLine, RiCloseLine, RiFacebookFill, RiFacebookLine, RiInstagramFill, RiInstagramLine, RiLinkedinFill, RiLinkedinLine, RiTwitterFill, RiTwitterLine, RiYoutubeFill, RiYoutubeLine } from '@remixicon/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useState } from 'react'
gsap.registerPlugin(ScrollTrigger)


const index = () => {
  const [openForm, setOpenForm] = useState(false)

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
      {openForm && (
        <Form setOpenForm={setOpenForm} />
      )}

      <div className="  w-full fixy_con fixed  brightness-[1] blur-[0] top-0 left-0 h-screen lg:pt-20 bg-[#FB0401] text-black center flex-col gap-y-10 text-center">
        <h2 className='uppercase text-4xl md:text-6xl lg:text-9xl leading-none '>Want to <br /> build with us?</h2>
        <button onClick={()=>setOpenForm(true)} className={`  bg-black cursor-pointer group center  px-6 py-2  uppercase `}>
          <div className="relative cursor-pointer center text-white flex items-center gap-1">
                <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
            <h2 className=" text-white cursor-pointer group-hover:italic uppercase"> Fill the form</h2>
            <RiArrowRightUpLine size={20} />
          </div>
        </button>
      </div>

      <div className="w-full ">
        <div className="w-full slide_u pointer-events-none h-screen"></div>
        <div className="w-full relative pt-10 lg:pt-20 pb-5 bg-black  center">
          <div className=" w-full lg:w-[80%] px-3 lg:px-5  gap-20 flex flex-col md:flex-row justify-between items-stretch">
            <div className=" w-full md:w-1/2 h-full">
              <div className=" grid grid-cols-2 space-y-20">
                <div className="">
                  <h3 className=' mb-2 text-base lg:text-xl uppercase  opacity-70'>location</h3>
                  <p className=' text-base lg:text-xl' >Mumbai, India</p>
                </div>
                <div className="">
                  <h3 className=' mb-2 text-base lg:text-xl uppercase  opacity-70'>email</h3>
                  <a href="">
                    <div className="flex mb-1 group  w-fit relative items-center gap-2">
                      <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                      <p className=' text-base lg:text-xl  lg:w-[180px] group-hover:italic' >team@disrptve.com</p>
                      <RiArrowRightUpLine size={20} />
                    </div>
                  </a>
                  <a href="">
                    <div className="flex mb-1 group  w-fit relative items-center gap-2">
                      <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                      <p className=' text-base lg:text-xl  lg:w-[180px] group-hover:italic' >kanishq@disrptve.com</p>
                      <RiArrowRightUpLine size={20} />
                    </div>
                  </a>
                  <a href="">
                    <div className="flex mb-1 group  w-fit relative items-center gap-2">
                      <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                      <p className=' text-base lg:text-xl  lg:w-[180px] group-hover:italic' >kaushik@disrptve.com</p>
                      <RiArrowRightUpLine size={20} />
                    </div>
                  </a>
                </div>
                <div className="">
                  <h3 className=' mb-2 text-base lg:text-xl uppercase  opacity-70'>contact</h3>
                  <a href="" className='flex mb-1 group  w-fit relative items-center gap-2'>
                    <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                    <p className=' text-base lg:text-xl group-hover:italic' >
                      +91 97693 31076
                    </p>
                  </a>
                  <a href="" className='flex mb-1 group  w-fit relative items-center gap-2'>
                    <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                    <p className=' text-base lg:text-xl group-hover:italic' >
                      +91 91672 10094
                    </p>
                  </a>
                </div>
                <div className="">
                  <h3 className=' mb-2 text-base lg:text-xl uppercase  opacity-70'>socials</h3>
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
              <div className="">
                <p className=' text-base lg:text-xl w-full lg:w-[80%]  leading-tight ' >We’d love to hear from you. Whether you’re looking to disrupt your category, need a fresh perspective, or want to explore potential collaborations.</p>
              </div>
            </div>
            <div className=" w-full md:w-1/2 flex items-end justify-center overflow-hidden    ">
              <img className=' w-[50vw]  lg:w-[30vw] ' src="/gifs/whiteEyeDrop.gif" alt="" />
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default index