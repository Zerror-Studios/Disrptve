import LiquidEther from '@/components/ui/LiquidEther'
import React from 'react'

const index = () => {
    return (
        <>
            <div className="fixed z-[-1] top-0 left-0  w-full h-screen center ">
                <LiquidEther
                    colors={['#ff0000', '#ff0000', '#ff0000']}
                    mouseForce={10}
                    cursorSize={20}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.1}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>
        </>
    )
}

export default index