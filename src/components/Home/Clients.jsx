import React from 'react'
import Marquee from 'react-fast-marquee'

const Clients = () => {

    const clientsData = [
        {
            img: "https://images.prismic.io/inertia-website/Z6Y-S5bqstJ9-YBt_LouisVuitton.jpg?auto=format,compress&rect=424,0,1072,1080&w=412&h=415",
            icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6ZC6ZbqstJ9-YEw_MarinBikes.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y-wZbqstJ9-YCa_PARAMOUNT.png?auto=format%2Ccompress&rect=4%2C0%2C1072%2C1080&w=412&h=415",
            icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6Y8oJbqstJ9-YA4_AxelArigato.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y5ppbqstJ9-X-K_PUMA.jpg?auto=format%2Ccompress&rect=657%2C0%2C1430%2C1440&w=412&h=415",
            icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6Y-eZbqstJ9-YCN_Nike.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y605bqstJ9-X_I_CLINIQUE.png?auto=format%2Ccompress&rect=841%2C49%2C688%2C693&w=412&h=415",
            icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6Y-OZbqstJ9-YBr_LouisVuitton.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8tpbqstJ9-YA6_AXELARIGATO.png?auto=format%2Ccompress&rect=234%2C454%2C979%2C986&w=412&h=415",
            icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6Y-rJbqstJ9-YCX_Paramount.svg"
        },
        {
            img: "https://images.prismic.io/inertia-website/Z6Y8V5bqstJ9-YAk_Adidas.png?auto=format%2Ccompress&rect=424%2C0%2C1072%2C1080&w=412&h=415",
            icon: "https://inertia-website.cdn.prismic.io/inertia-website/Z6Y8oJbqstJ9-YA4_AxelArigato.svg"
        },
    ]


    return (
        <>
            <div className="w-full ">

                <div className="w-full uppercase overflow-hidden">
                    <Marquee>
                        <div className=" pl-10 flex text-8xl whitespace-nowrap uppercase font-semibold items-center gap-10">
                            <p>OUR clients</p>
                            <img className='w-[25%]' src="/icons/cut_blocks.svg" alt="" />
                        </div>
                        <div className=" pl-10 flex text-8xl whitespace-nowrap uppercase font-semibold items-center gap-10">
                            <p>OUR clients</p>
                            <img className='w-[25%]' src="/icons/cut_blocks.svg" alt="" />
                        </div>
                        <div className=" pl-10 flex text-8xl whitespace-nowrap uppercase font-semibold items-center gap-10">
                            <p>OUR clients</p>
                            <img className='w-[25%]' src="/icons/cut_blocks.svg" alt="" />
                        </div>
                    </Marquee>

                </div>
                <div className="w-full my-20 px-5">
                    <div className="w-full border border-[#ffffff0b] grid-cols-6 grid">
                        {[...clientsData, ...clientsData, ...clientsData, ...clientsData]
                            .sort(() => Math.random() - 0.5)
                            .map((item, index) => (
                                <div key={index} className=" group  aspect-square border border-[#ffffff0b] overflow-hidden relative center">
                                    <img className=' invert-100 group-hover:invert-0 absolute z-[1] w-[70%] transition-all duration-300 object-contain' src={item.icon} alt="" />
                                    <img className=' scale-105 group-hover:scale-100 brightness-[.8] group-hover:opacity-100 opacity-0 transition-all duration-300 absolute w-full h-full object-contain' src={item.img} alt="" />
                                </div>
                            ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Clients