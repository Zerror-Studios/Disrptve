import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function useHeadingAnimation(selector = ".animate-heading") {
  useEffect(() => {
    const headings = document.querySelectorAll(selector);

    headings.forEach((heading) => {
      const split = new SplitText(heading, { types: "chars", tagName: "span" });

      gsap.set(split.chars, { opacity: 0, filter: "blur(0px)" });

      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          // toggleActions: "play none none reverse",
        },
        opacity: 1,
        filter: "blur(0px)",
        stagger: {
          each: 0.05,
          grid: "auto",
          from: "random",
        },
        duration: 0.6,
        ease: "ease-secondary", 
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [selector]);
}
