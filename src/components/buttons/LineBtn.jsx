import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'

const LineBtn = ({ text, href }) => {
    return (
        <>
            <a title="link" href={href}>
                <button className=' group relative red flex items-center gap-1'>
                    <div className="w-full origin-right group-hover:w-0 transition-all duration-300  h-[1px] bgred absolute bottom-0 right-0"></div>
                    <h3 className=' text-sm lg:text-lg  group-hover:italic uppercase '>{text}</h3>
                    <RiArrowRightUpLine size={20} />
                </button>
            </a>
        </>
    )
}

export default LineBtn