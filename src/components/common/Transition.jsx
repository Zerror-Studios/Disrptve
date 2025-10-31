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

  // 🧮 Calculate grid blocks
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

  // 🧠 Wait until scrollY === 0 (Lenis-safe)
  const waitForScrollTop = async (timeoutMs = 2000) => {
    return new Promise((resolve) => {
      const start = performance.now();

      const checkScroll = () => {
        const y = window.scrollY || window.pageYOffset || 0;
        const lenis = window.lenis;
        const lenisY = lenis ? lenis.scroll : y;

        if (lenisY <= 0.5 || y <= 0.5) {
          resolve();
          return;
        }

        if (performance.now() - start > timeoutMs) {
          resolve(); // fallback after timeout
          return;
        }

        requestAnimationFrame(checkScroll);
      };

      checkScroll();
    });
  };

  // 🟢 Fade In (Cover animation)
  const fadeIn = () =>
    new Promise((resolve) => {
      const el = screenRef.current;
      if (!el) return resolve();

      gsap.set(el, { autoAlpha: 1 });
      gsap.set(blocksRef.current, { autoAlpha: 0 });

      gsap.to(blocksRef.current, {
        autoAlpha: 1,
        duration: 0.25,
        ease: "ease-secondary",
        stagger: { amount: 0.3, from: "random" },
        onComplete: resolve,
      });
    });

  // 🔴 Fade Out (Reveal animation)
  const fadeOut = () =>
    new Promise((resolve) => {
      const el = screenRef.current;
      if (!el) return resolve();

      gsap.to(blocksRef.current, {
        autoAlpha: 0,
        duration: 0.25,
        delay: 0.25,
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

  // 🔁 Route change sequence
  useEffect(() => {
    if (!screenRef.current || !containerRef.current) return;

    const runSequence = async () => {
      // Step 1️⃣: Fade In transition cover
      await fadeIn();

      // Step 2️⃣: Switch to next children (new route content)
      setDisplayChildren(children);

      // Step 3️⃣: Force scroll to top
      const lenis = window.lenis;
      if (lenis) lenis.scrollTo(0, { immediate: false });
      else window.scrollTo({ top: 0, behavior: "smooth" });

      // Step 4️⃣: Wait until scroll reaches (0, 0)
      await waitForScrollTop(2500);

      // Step 5️⃣: Fade Out cover (reveal new page)
      await fadeOut();

      // Step 6️⃣: Refresh scroll + triggers
      ScrollTrigger.refresh();
      if (window.lenis) window.lenis.resize();
    };

    runSequence();
  }, [routeKey]);

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
            className="bgred border border-black opacity-0 w-full h-full"
          />
        ))}
      </div>
    </>
  );
}
