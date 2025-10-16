import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'

const LineBtn = ({text}) => {
    return (
        <>
            <button className=' group relative flex items-center gap-1'>
                <div className="w-full origin-right group-hover:w-0 transition-all duration-300  h-[1px] bg-white absolute bottom-0 right-0"></div>
                <p className=' text-base md:text-xl group-hover:italic uppercase '>{text}</p>
                <RiArrowRightUpLine size={20} />
            </button>
        </>
    )
}

export default LineBtn