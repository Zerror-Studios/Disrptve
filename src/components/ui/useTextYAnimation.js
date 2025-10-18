import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function useTextYAnimation(selector = ".anim-tx-y") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
      // Split text into lines
      const split = new SplitText(el, { type: "lines", tagName: "span" });

      // Wrap each line for overflow-hidden effect
      split.lines.forEach((line) => {
        const wrapper = document.createElement("span");
        wrapper.style.display = "block";
        wrapper.style.paddingBottom = "2px";
        wrapper.style.position = "relative";
        wrapper.style.overflow = "hidden";
        wrapper.style.width = "100%";

        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      // Initial state: lines start below
      gsap.set(split.lines, {
        yPercent: 150,
      });

      // Animate upward reveal
      gsap.to(split.lines, {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
        //   toggleActions: "play none none reverse",
        },
        yPercent: 0,
        ease: "ease-secondary",
        duration: 0.9,
        stagger: {
          each: 0.12,
          from: "start",
        },
      });
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [selector]);
}
