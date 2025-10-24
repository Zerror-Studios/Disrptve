import { motion, AnimatePresence, useSpring } from "framer-motion";
import React, { useRef, useState, useCallback, useEffect } from "react";
import RedBtn from "../buttons/RedBtn";

const TRAIL_TEXT_LIFESPAN = 3000;
const MIN_DISTANCE = 8;
const MAX_COUNT_PER_WORD = 50;

const springConfig = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
};

const WORDS = [
    "expertise",
    "creative vision",
    "innovation",
    "refined craft",
    "impact",
    "strategic insight",
];

const TextPop = () => {
    const containerRef = useRef(null);
    const [trailTexts, setTrailTexts] = useState([]);
    const lastPos = useRef({ x: 0, y: 0 });
    const wordIndex = useRef(0);
    const wordCount = useRef(0);

    const springX = useSpring(0, springConfig);
    const springY = useSpring(0, springConfig);

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

                // Sequential looping logic
                const currentWord = WORDS[wordIndex.current];
                wordCount.current += 1;

                if (wordCount.current >= MAX_COUNT_PER_WORD) {
                    wordCount.current = 0;
                    wordIndex.current = (wordIndex.current + 1) % WORDS.length;
                }

                const newText = {
                    id: Date.now() + Math.random(),
                    x,
                    y,
                    text: currentWord,
                };

                setTrailTexts((prev) => [...prev, newText]);

                // remove after lifespan
                setTimeout(() => {
                    setTrailTexts((prev) => prev.filter((t) => t.id !== newText.id));
                }, TRAIL_TEXT_LIFESPAN);
            }
        });

        return () => unsubscribeX();
    }, [springX, springY]);

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseMove}
            onMouseMove={handleMouseMove}
            className="text_pop_parent flex center flex-col uppercase text-4xl lg:text-7xl font-semibold text-center w-full h-[80vh] lg:h-screen relative overflow-hidden"
        >
            <AnimatePresence>
                {trailTexts.map((t) => (
                    <motion.h3
                        key={t.id}
                        initial={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        animate={{
                            scale: 0.5,
                            opacity: [1, 1, 0],
                            x: "-50%",
                            y: "-50%",
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            scale: { duration: .8, ease: [0.19, 1, 0.22, 1]},
                            opacity: { delay: 0.8, duration: 0.2, ease: [0.175, 0.885, 0.32, 1.275] },
                        }}
                        className="absolute origin-center pointer-events-none text-white/90 font-semibold text-xl"
                        style={{
                            left: `${t.x}px`,
                            top: `${t.y}px`,
                            position: "absolute",
                            transformOrigin: "center center",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {t.text}
                    </motion.h3>
                ))}
            </AnimatePresence>

            <div>
                <h2>Dive into our</h2>
                <h2 className="red">vision, craft, and</h2>
                <h2 className="red">expertise</h2>
                <h2>that shape impact.</h2>
            </div>

            <div className="text-sm lg:text-base mt-12">
                <RedBtn text="Download our Deck" />
            </div>
        </div>
    );
};

export default TextPop;
