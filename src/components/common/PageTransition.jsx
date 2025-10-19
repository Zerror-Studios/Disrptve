"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { gsap } from "gsap";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("ease-secondary", "0.16, 1, 0.35, 1");

const PageTransition = forwardRef((_, ref) => {
  const screenRef = useRef(null);
  const [grid, setGrid] = useState({ cols: 1, rows: 1 });
  const blocksRef = useRef([]);

  useEffect(() => {
    function handleResize() {
      const size = 50; // each block size in px
      const cols = Math.ceil(window.innerWidth / size);
      const rows = Math.ceil(window.innerHeight / size);
      setGrid({ cols, rows });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalBlocks = grid.cols * grid.rows;

  useImperativeHandle(ref, () => ({
    fadeIn: () =>
      new Promise((resolve) => {
        const el = screenRef.current;
        if (!el || !blocksRef.current.length) return resolve();
        gsap.set(el, { autoAlpha: 1 });
        gsap.set(blocksRef.current, { autoAlpha: 0 });
        gsap.to(blocksRef.current, {
          autoAlpha: 1,
          duration: 0.2,
          ease: "ease-secondary",
          stagger: { amount: 0.5, from: "random" },
          onComplete: resolve,
        });
      }),

    fadeOut: () =>
      new Promise((resolve) => {
        const el = screenRef.current;
        if (!el || !blocksRef.current.length) return resolve();
        gsap.to(blocksRef.current, {
          autoAlpha: 0,
          duration: 0.2,
          ease: "ease-secondary",
          stagger: { amount: 0.5, from: "random" },
          onComplete: () => {
            gsap.to(el, {
              autoAlpha: 0,
              duration: 0.2,
              ease: "ease-secondary",
              onComplete: resolve,
            });
          },
        });
      }),
  }));

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-[9999] pointer-events-none grid"
      style={{
        gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
        gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
        opacity: 0,
      }}
    >
      {Array.from({ length: totalBlocks }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (blocksRef.current[i] = el)}
          className="bgred shrink-0 border border-black w-full h-full"
        />
      ))}
    </div>
  );
});

PageTransition.displayName = "PageTransition";
export default PageTransition;
