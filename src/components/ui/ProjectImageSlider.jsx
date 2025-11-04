import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectImageSlider({ images = [] }) {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current || images.length === 0) return;

    // Kill old ScrollTriggers
    ScrollTrigger.getAll().forEach(st => st.kill());

    const container = containerRef.current;
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth - container.offsetWidth;

    // Horizontal slide
    gsap.to(slider, {
      x: -totalWidth,
      ease: "linear",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.4,
        anticipatePin: 1,
      },
    });

    // Progress bar
    gsap.to(".anim_cont_wid", {
      width: "100%",
      ease: "linear",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 0.4,
      },
    });

    gsap.to(".pgrs_bar", {
      rotate: 5,
      y: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: container,
        start: "bottom 95%",
        toggleActions: "play none none reverse",
      },
    });

    // Refresh ScrollTrigger after layout
    ScrollTrigger.refresh();

    return () => {
      // Cleanup ScrollTriggers when unmounting
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [images]);
  

      useGSAP(() => {
        const container = containerRef.current;
        const slider = sliderRef.current;

        if (!container || !slider || images.length === 0) return;

        const totalWidth = slider.scrollWidth - container.offsetWidth;

     
        gsap.to(".anim_cont_wid", {
            width: "100%",
            ease: "linear",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${totalWidth}`,
                scrub: .4,
            },
        });
        gsap.to(".pgrs_bar", {
            rotate: 5,
            y: 10,
            opacity: 0,
            scrollTrigger: {
                trigger: container,
                start: "bottom 95%",
                toggleActions: "play none none reverse",
            },
        })

    }, [images]);

  return (
    <div
      ref={containerRef}
      className="w-full relative serv_img_paren mt-20 h-screen overflow-hidden flex items-center"
    >
      <div
        ref={sliderRef}
        className="serv_img_slide flex gap-x-20 px-[15vw] items-center"
      >
        {images.map((imgSrc, i) => (
          <div
            key={i}
            className="h-[40vh] md:h-[75vh] shrink-0 w-[70vw] flex justify-center items-center"
          >
            <img
              src={imgSrc}
              alt={`project-image-${i}`}
              title={`project-image-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="w-full absolute bottom-10 md:bottom-[2vw] center">
        <div
          style={{
            gridTemplateColumns:
              window.innerWidth < 640
                ? `repeat(15, 1fr)`
                : `repeat(30, 1fr)`,
          }}
          className="pgrs_bar w-[30%] md:w-[18%] relative h-5 grid"
        >
          <div className="anim_cont_wid absolute h-full w-0 border border-[#ffff] bg-black"></div>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="border-r border-[#ffff] w-full h-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
