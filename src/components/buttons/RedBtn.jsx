import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'

const RedBtn = ({ text , href }) => {
    return (
        <>
            <a href={href}>
            <button className={`  bgred group  px-6 py-2  uppercase `}>
                <div className="relative flex items-center gap-1">
                    <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
                    <h3 className=" group-hover:italic uppercase"> {text}</h3>
                    <RiArrowRightUpLine size={20} />
                </div>
            </button>
            </a>
        </>
    )
}

export default RedBtn