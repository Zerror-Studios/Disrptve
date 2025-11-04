"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname, useSearchParams } from "next/navigation";

export default function SmoothScroller({ children }) {
  const lenis = useRef(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
  }, [pathname, searchParams]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
    
    if (window.innerWidth < 1024) return

    const instance = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      direction: "vertical",
      gestureDirection: "vertical",
      wheelMultiplier: 0.8,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenis.current = instance;
    window.lenis = instance; // optional for debugging

    let frame;
    const raf = (time) => {
      instance.raf(time);
      AOS.refresh(); // keep AOS synced with Lenis scroll
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Handle resize updates
    const handleResize = () => {
      instance.resize();
      AOS.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      instance.destroy();
      lenis.current = null;
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
}
