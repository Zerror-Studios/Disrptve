"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("ease-secondary", "0.16, 1, 0.35, 1");

export default function Transition({ children, routeKey }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const containerRef = useRef(null);
  const screenRef = useRef(null);
  const blocksRef = useRef([]);
  const [grid, setGrid] = useState({ cols: 1, rows: 1 });

  useEffect(() => {
    const size = 50;
    const handleResize = () => {
      const cols = Math.ceil(window.innerWidth / size);
      const rows = Math.ceil(window.innerHeight / size);
      setGrid({ cols, rows });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalBlocks = grid.cols * grid.rows;

  // 🔥 Core route transition logic
  useEffect(() => {
    if (!screenRef.current || !containerRef.current) return;

    const el = screenRef.current;

    const fadeIn = () =>
      new Promise((resolve) => {
        gsap.set(el, { autoAlpha: 1 });
        gsap.set(blocksRef.current, { autoAlpha: 0 });
        gsap.to(blocksRef.current, {
          autoAlpha: 1,
          duration: 0.3,
          ease: "ease-secondary",
          stagger: { amount: 0.3, from: "random" },
          onComplete: resolve,
        });
      });

    const fadeOut = () =>
      new Promise((resolve) => {
        gsap.to(blocksRef.current, {
          autoAlpha: 0,
          duration: 0.3,
          ease: "ease-secondary",
          stagger: { amount: 0.3, from: "random" },
          onComplete: () => {
            gsap.to(el, {
              autoAlpha: 0,
              duration: 0.2,
              ease: "ease-secondary",
              onComplete: resolve,
            });
          },
        });
      });

    // 🔄 sequence:
    // 1. fadeIn overlay
    // 2. switch children AFTER fadeIn
    // 3. fadeOut overlay
    fadeIn().then(() => {
      // replace children only after overlay fully visible
      setDisplayChildren(children);
    });
  }, [routeKey]);

  // 🔄 Once displayChildren updated → run fadeOut and scroll reset
  useEffect(() => {
    if (!screenRef.current) return;
    const el = screenRef.current;

    requestAnimationFrame(() => {
      const lenis = window.lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    });

    gsap.to(blocksRef.current, {
      autoAlpha: 0,
      duration: 0.25,
      ease: "ease-secondary",
      stagger: { amount: 0.3, from: "random" },
      onComplete: () => {
        gsap.to(el, {
          autoAlpha: 0,
          duration: 0.2,
          ease: "ease-secondary",
        });
        ScrollTrigger.refresh();
      },
    });
  }, [displayChildren]);

  return (
    <>
      <div ref={containerRef}>{displayChildren}</div>

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
            className="bgred border opacity-0 border-black w-full h-full"
          />
        ))}
      </div>
    </>
  );
}
