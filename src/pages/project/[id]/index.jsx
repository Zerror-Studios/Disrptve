import React from 'react'
import { useGSAP } from '@gsap/react'
import { RiArrowRightUpLine } from '@remixicon/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const index = () => {
    useGSAP(() => {
        gsap.to(".serv_slide", {
            scrollTrigger: {
                trigger: ".serv_paren",
                start: "top top",
                pin: true,
                end: "+300% top",
                anticipatePin: 1,
                scrub: .4,
            },
            xPercent: -56.1 * 4.5,
            ease: "linear",
        })

        gsap.to(".fixy_img_dcd", {
            opacity:0,
            duration:.1,
            scrollTrigger: {
                trigger: ".trick_di",
                start: "top top",
                scrub:true
            },
        })
        gsap.set(".main_pdcd",{backgroundColor:"black",})
        gsap.to(".main_pdcd", {
            backgroundColor:"#00000000",
            duration:.1,
            scrollTrigger: {
                trigger: ".main_pdcd",
                start: "5% top",
                // scrub:true,
                toggleActions :"play none none reverse",
                // markers:true
            },
        })

    })
    return (
        <>
            <div className="fixed fixy_img_dcd z-[-1] top-0 left-0 w-full h-screen">
                <img className='w-full h-full object-cover' src="/pr0201.webp" alt="" />
            </div>
            <div className="absolute h-[70vh]  w-full top-0 left-0 z-[-1] bg-black "></div>
            <div className="w-full px-5 ">
                <div className="w-full h-[185vh] ">
                    <div className="w-full h-[55vh] flex items-end  border-b border-[#8585855b]">
                        <div className=" w-full text-5xl  py-4">
                            <p>Bigpicture Company</p>
                        </div>
                    </div>
                    <div className="w-full sticky z-[2] top-[50vh] uppercase leading-none py-4 flex justify-between">
                        <div className=" w-1/2 flex items-center gap-2">
                            <a href="">
                                <div className="flex mb-1 group  w-fit relative items-center gap-2">
                                    <div className="absolute group-hover:w-full rounded-full transition-all duration-300 w-0 h-[1px] bgred bottom-0 left-0"></div>
                                    <p className='text-lg w-[120px] group-hover:italic' >website link</p>
                                    <RiArrowRightUpLine size={20} />
                                </div>
                            </a>
                        </div>
                        <div className="w-1/2 flex justify-between">
                            <div className="">
                                <p>December 2023</p>
                                <p>UXUI, Web development</p>
                            </div>
                            <div className="">
                                <p>Outdoor Advertising</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full main_pdcd  relative bg-black">
                <div className=" main_pdcd trick_di w-full absolute bg-black h-20 -translate-y-20"></div>
                <div className="w-full flex p-5 ">
                    <div className="w-1/2"></div>
                    <div className="w-1/2">
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum odio distinctio consectetur soluta eos nemo possimus delectus magnam quisquam voluptatibus illum at dolor recusandae tenetur officia, hic id cumque optio.</p>
                    </div>
                </div>

                <div className="w-full grid grid-cols-3 px-5 gap-x-20 mt-44">
                    <div className="w-full">
                        <div className=" w-full py-2 border-b border-[#8585855b]">
                            <p className=' uppercase'>Mission</p>
                        </div>
                        <div className="py-4">
                            <p className='opacity-70  mb-2'>Mission. 1</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident ex numquam fugit soluta, quis velit non sit, maiores perspiciatis iure officiis consequuntur. Cupiditate ipsum quam repudiandae. Amet, minima officiis.</p>
                        </div>
                        <div className="py-4">
                            <p className='opacity-70  mb-2'>Mission. 1</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident ex numquam fugit soluta, quis velit non sit, maiores perspiciatis iure officiis consequuntur. Cupiditate ipsum quam repudiandae. Amet, minima officiis.</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" w-full py-2 border-b border-[#8585855b]">
                            <p className=' uppercase'>Direction</p>
                        </div>
                        <div className="py-4">
                            <p className='opacity-70  mb-2'>Direction. 1</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident ex numquam fugit soluta, quis velit non sit, maiores perspiciatis iure officiis consequuntur. Cupiditate ipsum quam repudiandae. Amet, minima officiis.</p>
                        </div>
                        <div className="py-4">
                            <p className='opacity-70  mb-2'>Direction. 1</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident ex numquam fugit soluta, quis velit non sit, maiores perspiciatis iure officiis consequuntur. Cupiditate ipsum quam repudiandae. Amet, minima officiis.</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" w-full py-2 border-b border-[#8585855b]">
                            <p className=' uppercase'>Development</p>
                        </div>
                        <div className="py-4">
                            <p className='opacity-70  mb-2'>Frontend</p>
                            <p>NEXT.js, Three.js, GSAP, SASS</p>
                        </div>
                        <div className="py-4">
                            <p className='opacity-70  mb-2'>Backend</p>
                            <p>AWS, Node.js</p>
                        </div>
                    </div>

                </div>

                <div className="w-full serv_paren mt-20 h-screen overflow-hidden flex  pl-[15vw] items-center">
                    <div className="serv_slide w-full gap-x-20 flex ">
                        <div className="h-[75vh] shrink-0 w-[70vw]">
                            <img className='w-full h-full object-cover' src="https://www.rayraylab.com/_next/image?url=%2Fimg%2Fpr020201.jpg&w=3840&q=90" alt="" />
                        </div>
                        <div className="h-[75vh] shrink-0 w-[70vw]">
                            <img className=' w-full h-full object-cover' src="https://www.rayraylab.com/_next/image?url=%2Fimg%2Fpr020202.jpg&w=3840&q=90" alt="" />
                        </div>
                        <div className="h-[75vh] shrink-0 w-[70vw]">
                            <img className='w-full h-full object-cover' src="https://www.rayraylab.com/_next/image?url=%2Fimg%2Fpr020203.jpg&w=3840&q=90" alt="" />
                        </div>
                        <div className="h-[75vh] shrink-0 w-[70vw]">
                            <img className='w-full h-full object-cover' src="https://www.rayraylab.com/_next/image?url=%2Fimg%2Fpr020204.jpg&w=3840&q=90" alt="" />
                        </div>
                    </div>
                </div>

                <div className="w-full h-screen center">
                    <div className="w-[25%] h-[80%]">
                        <img className='w-full h-full object-cover' src="/pr0201.webp" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default index