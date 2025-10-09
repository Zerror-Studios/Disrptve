import gsap from 'gsap'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const menuItems = [
  { name: "About", href: "/about" },
  { name: "culture", href: "/culture" },
  { name: "case studies", href: "/case_studies" },
  { name: "Ventures", href: "/ventures" },
  { name: "career", href: "/career" },
];

const socailLinks = [
  { name: "instagram", href: "" },
  { name: "facebook", href: "" },
  { name: "twitter", href: "" },
  { name: "linkedin", href: "" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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



  return (
    <>

      <div className="blur_div h-screen w-full fixed z-[10] bg-[#000000] opacity-0 pointer-events-none"></div>

      {/* Open Menu */}
      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)" }}
        className="menu w-full fixed flex flex-col justify-center  bg-[#000000] z-[16] px-5 py-11 top-0 left-0 h-screen">
        <div className="w-full flex absolute top-0 left-0 px-5 py-11 justify-between ">
          <a href="/" className='cursor-pointer'>
            <img src="/logo.svg" alt="" />
          </a>
          <div className=" flex justify-end cursor-pointer">
            <img onClick={closeMenu} className='w-[50%]' src="/icons/close.svg" alt="" />
          </div>
        </div>
        <motion.div
          className="flex flex-col gap-y-2 uppercase text-4xl"
          variants={containerVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="group block overflow-hidden cursor-pointer w-fit relative"
            >
              <motion.h2
                className="w-fit group-hover:translate-y-[-100%] transition-all duration-300"
                variants={textVariants}
              >
                {item.name}
              </motion.h2>
              <h2 className="absolute top-[100%] group-hover:top-0 w-fit text-[#D70000] transition-all duration-300 cursor-pointer">
                {item.name}
              </h2>
            </a>
          ))}
        </motion.div>

        <div className=" menu_gif opacity-0 absolute right-5">
          <img src="/gifs/blocks.gif" alt="" />
          <img className='rotate-180 -translate-x-[.75px]' src="/gifs/blocks.gif" alt="" />
        </div>

        <motion.div
          className="absolute flex  gap-10 uppercase w-full bottom-11 "
          variants={containerVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          {socailLinks.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className="block w-fit cursor-pointer group relative overflow-hidden"
            >
              <motion.h2
                className="w-fit w-fit group-hover:translate-y-[-100%] transition-all duration-300"
                variants={textVariants}
              >
                {item.name}
              </motion.h2>
              <h2 className="absolute top-[100%] group-hover:top-0 w-fit text-[#D70000] transition-all duration-300 cursor-pointer">
                {item.name}
              </h2>
            </a>
          ))}
        </motion.div>

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