import { RiArrowRightUpLine, RiCloseLine } from '@remixicon/react'
import React from 'react'

const Form = ({setOpenForm}) => {
    return (
        <>
            <div className="fixed h-screen w-full z-[99] center backdrop-blur-sm bg-black/10">
                <div className=" w-[95%] md:w-[50%] relative p-5 md:p-10 bg-black">
                    <h3 className='text-xl lg:text-3xl  leading-none w-[80%] '>Our team will contact you as soon as possible. </h3>
                    <div onClick={() => setOpenForm(false)} className="absolute cursor-pointer top-5 right-5">
                        <RiCloseLine size={32} />
                    </div>

                    <div className="w-full">
                        <form method='POST' className="mt-12 space-y-10">
                            {/* Full Name */}
                            <div className="w-full relative">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="border-b w-full text-lg outline-none"
                                />
                                <h2 className='absolute right-0 top-1/2 -translate-y-1/2 text-[#FB0401] text-2xl'>*</h2>
                            </div>

                            {/* Email + Phone */}
                            <div className="flex gap-6">
                                <div className=" relative w-1/2">

                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="border-b w-full text-lg outline-none"
                                    />
                                    <h2 className='absolute right-0 top-1/2 -translate-y-1/2 text-[#FB0401] text-2xl'>*</h2>
                                </div>
                                <div className=" w-1/2 relative">

                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        className="border-b w-full  text-lg outline-none"
                                    />
                                    <h2 className='absolute right-0 top-1/2 -translate-y-1/2 text-[#FB0401] text-2xl'>*</h2>
                                </div>
                            </div>
                            <div className=" w-full relative">

                                <textarea
                                    type="text"
                                    placeholder="Enter your message"
                                    className="border-b w-full h-[12vw] resize-none break-words  text-lg outline-none"
                                />
                                <h2 className='absolute right-0 top-0  text-[#FB0401] text-2xl'>*</h2>
                            </div>

                            <div className="w-full center">
                                <button className={`  bgred group  px-6 py-2  uppercase `}>
                                    <div className="relative flex items-center gap-1">
                                        <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
                                        <h3 className=" group-hover:italic uppercase">Submit</h3>
                                        <RiArrowRightUpLine size={20} />
                                    </div>
                                </button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Form