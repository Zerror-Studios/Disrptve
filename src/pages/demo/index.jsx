import LaserFlow from '@/components/ui/LaserFlow'
import React from 'react'

const index = () => {
    return (
        <>
            <div className="fixed top-0 left-0  w-full h-screen center pointer-events-none">
                <LaserFlow horizontalBeamOffset={0.0}
                    verticalBeamOffset={-0.5} />
            </div>
        </>
    )
}

export default index