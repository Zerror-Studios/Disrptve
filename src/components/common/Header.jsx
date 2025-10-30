import gsap from 'gsap'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { RiArrowRightUpLine } from '@remixicon/react';
import { Squeeze as Hamburger } from 'hamburger-react'
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import Form from '../ui/Form';

const menuItems = [
  { name: "About", href: "/about" },
  { name: "case studies", href: "/projects" },
  { name: "services", href: "/services" },
  { name: "careers", href: "/career" },
  { name: "contact", href: "/contact" },
];

const socailLinks = [
  { name: "instagram", href: "https://www.instagram.com/bedisrptve?igsh=MWw3enZqcWZnYmZkbQ==" },
  { name: "linkedin", href: "https://www.linkedin.com/company/disrptve/" },
]

const Header = () => {
  const [openForm, setOpenForm] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname()

  const openMenu = () => {
    setIsMenuOpen(true)
    const tl = gsap.timeline();
    tl.fromTo(
      ".menu",
      { clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)" },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        ease: "power4.inOut",
      }
    )
      .to(".blur_div", { opacity: 0.5, duration: 0.5 }, "<")
      .to(".menu_gif", { opacity: 1, delay: 0.5, duration: 0.8 }, "<")

  };

  const closeMenu = () => {
    setIsMenuOpen(false);

    const tl = gsap.timeline();
    tl.to(".menu", {
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
      duration: 1,
      ease: "power4.inOut",
    })
      .to(".blur_div", { opacity: 0, duration: 0.4 }, "<")
      .to(".menu_gif", { opacity: 0, duration: 0.6 }, "<");
  };

  const containerVariants = {
    open: {
      transition: { staggerChildren: 0.05, delayChildren: 0.3 },
    },
    closed: {
      transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
  };

  const textVariants = {
    open: {
      y: 0,
      transition: { ease: [0.83, 0, 0.17, 1], duration: 0.3 },
    },
    closed: {
      y: "100%",
      transition: { ease: [0.83, 0, 0.17, 1], duration: 0.1 },
    },
  };

  useGSAP(() => {
    gsap.from(".header", {
      yPercent: -100,
      duration: .5,
      ease: "ease-secondary",
      delay: 1
    })
    gsap.from(".burger", {
      opacity: 0,
      duration: .5,
      ease: "ease-secondary",
      delay: 1.5
    })
  })


  return (
    <>
      {/* {
        path === "/contact" && (
          <div onClick={() => {
            if (isMenuOpen) {
              closeMenu()
            } else {
              openMenu()
            }
          }} className={` text-black scale-[.8] lg:scale-100 cursor-pointer fixed z-[99]  top-1.5  lg:top-9 burger right-2 lg:right-5`}>
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
          </div>
        )
      } */}
      {/* {
        path !== "/contact" && ( */}
          <div onClick={() => {
            if (isMenuOpen) {
              closeMenu()
            } else {
              openMenu()
            }
          }} className={` ${isMenuOpen ? "text-black" : "text-white"} scale-[.8] lg:scale-100 cursor-pointer fixed z-[99]  top-1.5  lg:top-9 burger right-2 lg:right-5`}>
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
          </div>
        {/* )
      } */}


      <div className="blur_div h-screen w-full fixed z-[10] bg-[#000000] opacity-0 pointer-events-none"></div>

      {/* Open Menu */}
      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)" }}
        className="menu w-full fixed flex flex-col justify-between lg:justify-end  bg-[#FB0401] z-[16] px-3 md:px-5 py-11 top-0 left-0  h-screen">
        <div className="w-full flex absolute top-0 left-0 px-3 py-5 md:px-5 lg:py-11 justify-between ">
          <Link
            scroll={false}
            href="/"
            onClick={closeMenu}
            className='cursor-pointer'>
            <img className=' w-[35vw] md:w-[12vw] invert-100' src="/logo.png" alt="" />
          </Link>
          <div className=" opacity-0 flex justify-end cursor-pointer">
            <img className='w-[50%] invert-100' src="/icons/close.svg" alt="" />
          </div>
        </div>
        <motion.div
          className="flex mt-32 md:mt-10 lg:mt-0 justify-between w-full items-end  uppercase text-4xl lg:text-7xl"
          variants={containerVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <div className="">
            {menuItems.map((item, i) => (
              <Link
                scroll={false}
                key={i}
                href={item.href}
                onClick={closeMenu}
                // onClick={() => { navigate(router, item.href), closeMenu() }}
                className="group block  mt-2 lg:mt-4 font-semibold overflow-hidden cursor-pointer w-fit relative"
              >
                <motion.h2
                  className="w-fit text-white group-hover:translate-y-[-100%] transition-all duration-300"
                  variants={textVariants}
                >
                  {item.name}
                </motion.h2>
                <h2 className="absolute top-[100%] group-hover:top-0 w-fit text-[#000000] transition-all duration-300 cursor-pointer">
                  {item.name}
                </h2>
              </Link>
            ))}
          </div>
          <motion.div
            className=" hidden md:flex  text-sm lg:text-xl gap-y-2   uppercase  flex-col items-end justify-end text-end"
            variants={containerVariants}
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
          >
            {socailLinks.map((item, i) => (
              <a
                href={item.href}
                key={i}
                className="block text-end font-semibold w-fit cursor-pointer group relative overflow-hidden"
              >
                <motion.h2
                  className="w-fit text-white group-hover:translate-y-[-100%] transition-all duration-300"
                  variants={textVariants}
                >
                  {item.name}
                </motion.h2>
                <h2 className="absolute top-[100%] group-hover:top-0 w-fit text-[#000000] transition-all duration-300 cursor-pointer">
                  {item.name}
                </h2>
              </a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className=" md:hidden   text-sm lg:text-xl gap-y-2   uppercase  flex flex-col items-end justify-end text-end"
          variants={containerVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          {socailLinks.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className="block text-end font-semibold w-fit cursor-pointer group relative overflow-hidden"
            >
              <motion.h2
                className="w-fit text-white group-hover:translate-y-[-100%] transition-all duration-300"
                variants={textVariants}
              >
                {item.name}
              </motion.h2>
              <h2 className="absolute top-[100%] group-hover:top-0 w-fit text-[#000000] transition-all duration-300 cursor-pointer">
                {item.name}
              </h2>
            </a>
          ))}
        </motion.div>
        <div className="w-full center">
          {/* <div
            style={{ clipPath: "ellipse(46% 27% at 50% 50%)" }}
            className="  lg:hidden menu_gif opacity-0"
          >
            <img className="w-[60vw] md:w-[20vw]" src="/gifs/redEye.gif" alt="" />
          </div> */}
        </div>

        {/* <div
          style={{ clipPath: "ellipse(46% 27% at 50% 50%)" }}
          className=" hidden lg:block menu_gif opacity-0 top-[15%]  absolute right-5"
        >
          <img className="" src="/gifs/redEye.gif" alt="" />
        </div> */}



      </div>




      <div className=" header flex fixed top-0 left-0 z-[15] w-full items-center justify-between px-3 md:px-5 py-5 lg:py-10">
        <Link
        scroll={false}
          href="/"
          //  onClick={() => navigate(router, "/")}
          className='cursor-pointer'>
          <img className={`  w-[35vw] md:w-[12vw] ${path === "/contact" ? "invert-0" : "invert-0"}`} src="/logo.png" alt="" />
        </Link>
        <div className="flex items-center gap-7">

          {
            path !== "/contact" && (
              <Link
              scroll={false}
                // onClick={() => setOpenForm(true)}
                href="/contact"
                // onClick={() => navigate(router, "/contact")}
                className='hidden lg:block'>
                <button className={` ${path === "/contact" ? "bg-black" : "bgred"} group  px-6 py-2  uppercase `}>
                  <div className="relative flex items-center gap-1">
                    <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
                    <h2 className=" group-hover:italic uppercase"> Let's talk</h2>
                    <RiArrowRightUpLine size={20} />
                  </div>
                </button>
              </Link>
            )}
          <div className=" cursor-pointer opacity-0 ">
            <img className={`${path === "/contact" ? "invert-100" : "invert-0"}`} src="/icons/menu.svg" alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Header