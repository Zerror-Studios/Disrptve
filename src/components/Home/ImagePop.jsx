import { motion, AnimatePresence, useSpring } from "framer-motion";
import React, { useRef, useState, useCallback, useEffect } from "react";
import RedBtn from "../buttons/RedBtn";
import { RiArrowRightUpLine } from "@remixicon/react";

const TRAIL_TEXT_LIFESPAN = 1000;
const MIN_DISTANCE = 10;
const MAX_COUNT_PER_WORD = 50;

const springConfig = {
  stiffness: 120,
  damping: 14,
  mass: 0.08,
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
  const rafRef = useRef(null);

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
    const updateTrail = () => {
      const x = springX.get();
      const y = springY.get();
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance >= MIN_DISTANCE) {
        lastPos.current = { x, y };

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

        // batch update to minimize re-renders
        setTrailTexts((prev) => [...prev.slice(-20), newText]);

        // cleanup after lifespan
        setTimeout(() => {
          setTrailTexts((prev) => prev.filter((t) => t.id !== newText.id));
        }, TRAIL_TEXT_LIFESPAN);
      }

      rafRef.current = requestAnimationFrame(updateTrail);
    };

    rafRef.current = requestAnimationFrame(updateTrail);

    return () => cancelAnimationFrame(rafRef.current);
  }, [springX, springY]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="text_pop_parent flex center flex-col uppercase text-4xl lg:text-7xl font-semibold text-center w-full h-[80vh] lg:h-screen relative overflow-hidden"
    >
      <AnimatePresence>
        {trailTexts.map((t) => (
          <motion.h3
            key={t.id}
            initial={{ scale: 1 }}
            animate={{ scale: 0.55 }}
            exit={{  }}
            transition={{
              duration: TRAIL_TEXT_LIFESPAN / 2000,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 text-white/90 font-semibold text-xl fade-text"
            style={{
              left: `${t.x}px`,
              top: `${t.y}px`,
            //   transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
            }}
          >
            {t.text}
          </motion.h3>
        ))}
      </AnimatePresence>

      <div className="">
        <h2>Explore our </h2>
        <h2 className="red">case studies &</h2>
        <h2 className="red">capabilities</h2>
        <h2>in detail.</h2>
      </div>

      <div className="text-sm relative z-[1] lg:text-base mt-12">
         <a href="https://docs.google.com/presentation/d/1BEQxetUTZTY6-0YxjrLKsfljOPqqJY1-HzT6tjYvfqE/edit?slide=id.g38123aab2f1_3_969#slide=id.g38123aab2f1_3_96900"  target="_blank" >
            <button className={`  bgred group  px-6 py-2  uppercase `}>
                <div className="relative flex items-center gap-1">
                    <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
                    <h3 className=" text-sm md:text-base group-hover:italic uppercase"> View our deck</h3>
                    <RiArrowRightUpLine size={20} />
                </div>
            </button>
            </a>
      </div>
    </div>
  );
};

export default TextPop;
