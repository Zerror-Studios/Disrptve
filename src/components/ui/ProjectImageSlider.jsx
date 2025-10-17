import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectImageSlider({ images = [] }) {
    const containerRef = useRef(null);
    const sliderRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        const slider = sliderRef.current;

        if (!container || !slider || images.length === 0) return;

        const totalWidth = slider.scrollWidth - container.offsetWidth;

        gsap.to(slider, {
            x: -totalWidth,
            ease: "linear",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${totalWidth}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            },
        });

    }, [images]);

    return (
        <div
            ref={containerRef}
            className="w-full serv_img_paren mt-20 h-screen overflow-hidden flex items-center"
        >
            <div
                ref={sliderRef}
                className="serv_img_slide flex gap-x-20 px-[15vw] items-center"
            >
                {images.map((imgSrc, i) => (
                    <div
                        key={i}
                        className="h-[75vh] shrink-0 w-[70vw] flex justify-center items-center"
                    >
                        <img
                            src={imgSrc}
                            alt={`project-image-${i}`}
                            className="w-full h-full object-cover "
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
