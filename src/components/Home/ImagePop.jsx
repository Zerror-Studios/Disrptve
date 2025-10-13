import { motion, AnimatePresence, useSpring } from "framer-motion";
import { RiArrowRightUpLine } from "@remixicon/react";
import React, { useRef, useState, useCallback, useEffect } from "react";

const TRAIL_IMAGE_COUNT = 20;
const TRAIL_IMAGE_LIFESPAN = 600;
const MIN_DISTANCE = 180;

const springConfig = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
};

const ImagePop = () => {
    const containerRef = useRef(null);
    const [trailImages, setTrailImages] = useState([]);
    const lastPos = useRef({ x: 0, y: 0 });
    const preloadedImages = useRef([]);

    const springX = useSpring(0, springConfig);
    const springY = useSpring(0, springConfig);

    // Preload all images on mount
    useEffect(() => {
        const images = Array.from({ length: TRAIL_IMAGE_COUNT }, (_, i) => {
            const img = new Image();
            img.src = `/images/ImagesPop/images${String(i + 1).padStart(2, "0")}.jpg`;
            return img;
        });
        preloadedImages.current = images;
    }, []);

    const handleMouseMove = useCallback(
        (e) => {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            springX.set(x);
            springY.set(y);
        },
        [springX, springY]
    );

    useEffect(() => {
        const unsubscribeX = springX.on("change", (x) => {
            const y = springY.get();
            const dx = x - lastPos.current.x;
            const dy = y - lastPos.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance >= MIN_DISTANCE) {
                lastPos.current = { x, y };

                // Pick a random preloaded image
                const randomIndex = Math.floor(Math.random() * preloadedImages.current.length);
                const newImage = {
                    id: Date.now(),
                    x,
                    y,
                    src: preloadedImages.current[randomIndex].src,
                };

                setTrailImages((prev) => [...prev, newImage]);

                setTimeout(() => {
                    setTrailImages((prev) => prev.filter((img) => img.id !== newImage.id));
                }, TRAIL_IMAGE_LIFESPAN);
            }
        });

        return () => unsubscribeX();
    }, [springX, springY]);

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseMove}
            onMouseMove={handleMouseMove}
            className="image_pop_paren flex center flex-col uppercase text-7xl font-semibold text-center w-full h-screen"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <AnimatePresence>
                {trailImages.map((img) => (
                    <motion.img
                        key={img.id}
                        src={img.src}
                        initial={{ scale: 0.4, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.4, opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.35, 1],
                        }}
                        className="absolute w-[23vw] aspect-video object-cover pointer-events-none"
                        style={{
                            left: img.x - 170 + "px",
                            top: img.y - 100 + "px",
                        }}
                    />
                ))}
            </AnimatePresence>

            <h2>Explore our</h2>
            <h2>case credentials,</h2>
            <h2>studies, and</h2>
            <h2>capabilities in detail.</h2>

            <button className="mt-12 group px-6 py-2 border center border-white">
                <div className="relative flex items-center gap-1">
                    <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
                    <p className="text-lg group-hover:italic uppercase">Download</p>
                    <RiArrowRightUpLine size={20} />
                </div>
            </button>
        </div>
    );
};

export default ImagePop;
