import SeoHeader from '@/components/seo/SeoHeader'
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
      <SeoHeader meta={meta} />

      <div className="  w-full fixy_con fixed  brightness-[1] blur-[0] top-0 left-0 h-screen lg:pt-20 bg-[#FB0401] text-black center flex-col gap-y-10 text-center">
        <h2 className='uppercase text-4xl md:text-6xl lg:text-9xl text-white leading-none '>Want to <br /> build with us?</h2>

        <a
          href="#form"
          //  onClick={() => setOpenForm(true)} 
          className={`  bg-black cursor-pointer group center   px-6 py-2  uppercase `}>
          <div className="relative cursor-pointer center text-white flex items-center gap-1">
            <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
            <h2 className=" text-white cursor-pointer group-hover:italic uppercase"> let's talk</h2>
            <RiArrowRightUpLine size={20} />
          </div>
        </a>
      </div>

      <div className="w-full  ">
        <div className="w-full slide_u pointer-events-none h-screen"></div>
        <div id='form' className="w-full relative pt-10 lg:pt-20 pb-5 bg-black  center">
          <div className=" md:w-[90%]  lg:pb-20 w-full px-3 lg:px-5  gap-20 flex flex-col-reverse md:flex-row justify-between items-stretch">
            <div className=" w-full flex flex-col items-center md:items-start  justify-between md:w-1/2 ">
              <div className=" space-y-10 lg:space-y-20">
                <div className=" grid grid-cols-2 md:grid-cols-1 lg:gap-y-20 overflow-hidden ">
                  <div className="">
                    <h3 className=' mb-2 text-base lg:text-xl uppercase  opacity-70'>location</h3>
                    <p className=' text-base lg:text-xl' >Mumbai, India</p>
                  </div>
                  <div className="">
                    <h3 className=' mb-2 text-base lg:text-xl uppercase  opacity-70'>email</h3>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdGDgnwQxQWMjtkZqtpHwQCZBDQpccTZqnXWRXDXvkdfrGxjKPvbfSrzpSHfLzLqfDLlBHQ0" target="_blank">
                      <div className="flex mb-1 group  w-fit relative items-center gap-2">
                        <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                        <p className=' text-base lg:text-xl  group-hover:italic' >team@disrptve.com</p>
                        <RiArrowRightUpLine size={20} />
                      </div>
                    </a>
                  </div>
                </div>
                <div className=" mb-20">
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
              <img className=' w-[50vw]  lg:w-[30vw] ' src="/gifs/whiteEyeDrop.gif" alt="" />
            </div>
            <div className=" w-full md:w-1/2    ">
              <Form />
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default index


const meta = {
  title: "Contact DISRPTVE - Mumbai Marketing Agency | Get in Touch",
  description:
    "Contact DISRPTVE for strategy-led marketing solutions. Based in Mumbai, serving brands globally. Let's build something great together.",
  canonical: "https://disrptve.vercel.app/contact",
  og: {
    title: "Contact DISRPTVE - Mumbai Marketing Agency | Get in Touch",
    description:
      "Contact DISRPTVE for strategy-led marketing solutions. Based in Mumbai, serving brands globally. Let's build something great together.",
    image: "https://disrptve.vercel.app/logo-og.png",
    url: "https://disrptve.vercel.app/contact",
    type: "website",
    site_name: "DISRPTVE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DISRPTVE - Mumbai Marketing Agency | Get in Touch",
    description:
      "Contact DISRPTVE for strategy-led marketing solutions. Based in Mumbai, serving brands globally. Let's build something great together.",
    image: "https://disrptve.vercel.app/logo-og.png",
    site: "@disrptve",
  },
  robots: "index,follow",
  keywords:
    "contact marketing agency, Mumbai agency contact, marketing consultation, get in touch, agency enquiry",
  author: "DISRPTVE",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};