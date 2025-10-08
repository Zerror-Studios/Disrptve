import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Header = () => {

  const openMenu = () => {
    gsap.to(".blur_div", {
      opacity: .5,
      duration: .5,
    })
    gsap.fromTo(".menu", {
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
    }, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1,
      ease: "in-out-quint"
    })
  }
  const closeMenu = () => {
    gsap.to(".blur_div", {
      opacity: 0,
      duration: .5,
      delay:.5,
    })
    gsap.to(".menu", {
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
      duration: 1,
      ease: "in-out-quint"
    })
  }

  return (
    <>

      <div className="blur_div h-screen w-full fixed z-[10] bg-[#0E0E0E] opacity-0 pointer-events-none"></div>

      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)" }}
        className="menu w-full fixed flex flex-col justify-between bg-[#0E0E0E] z-[16] px-5 py-11 top-0 left-0 h-screen">
        <div className="w-full flex justify-between ">
          <a href="/" className='cursor-pointer'>
            <img src="/logo.svg" alt="" />
          </a>
          <div className=" flex justify-end cursor-pointer">
            <img onClick={closeMenu} className='w-[50%]' src="/icons/close.svg" alt="" />
          </div>
        </div>
        <div className="">
          <h2 className='uppercase font-semibold'>MENU</h2>
        </div>
        <div className="">
          <h2 className='mb-5 font-semibold'>Our Services</h2>
          <div className="space-y-1">
            <h2 className='uppercase w-fit text-4xl hover:text-[#D70000] transition-all duration-300 cursor-pointer'>Strategy & Insight</h2>
            <h2 className='uppercase w-fit text-4xl hover:text-[#D70000] transition-all duration-300 cursor-pointer'>Creative & Design</h2>
            <h2 className='uppercase w-fit text-4xl hover:text-[#D70000] transition-all duration-300 cursor-pointer'>Execution & Growth</h2>
            <h2 className='uppercase w-fit text-4xl hover:text-[#D70000] transition-all duration-300 cursor-pointer'>AI Agents</h2>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className=" flex capitalize text-lg  gap-20">
            <h2 className=' w-fit hover:text-[#D70000] transition-all duration-300 cursor-pointer'  >culture</h2>
            <h2 className=' w-fit hover:text-[#D70000] transition-all duration-300 cursor-pointer'  >case studies</h2>
            <h2 className=' w-fit hover:text-[#D70000] transition-all duration-300 cursor-pointer'  >career</h2>
            <h2 className=' w-fit hover:text-[#D70000] transition-all duration-300 cursor-pointer'  >ventures</h2>
          </div>
          <button className='px-6 py-1.5 bgred uppercase '>
            <p className='font-medium hover:underline decoration-1 decoration-white underline-offset-4  '>
              Let’s Talk
            </p>
          </button>
        </div>
      </div>

      <div className="flex fixed top-0 left-0 z-[15] w-full items-center justify-between px-5 py-10">
        <a href="/" className='cursor-pointer'>
            <img src="/logo.svg" alt="" />
          </a>
        <div className="flex items-center gap-7">
          <button className='px-6 py-1.5 bgred uppercase '>
            <p className='font-medium hover:underline decoration-1 decoration-white underline-offset-4  '>
              Let’s Talk
            </p>
          </button>
          <div className=" cursor-pointer">
            <img onClick={openMenu} src="/icons/menu.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header