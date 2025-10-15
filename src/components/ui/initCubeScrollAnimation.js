import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCubeScrollAnimation() {
    const stickySection = document.querySelector(".sticky_sec");
    const cubesContainer = document.querySelector(".cubes");
    const cubes = document.querySelectorAll(".cube");
    const why_us = document.querySelector(".why_us")

    if (!stickySection || !cubes.length) return;

    const interpolate = (start, end, progress) => start + (end - start) * progress;

    const mainTl = gsap.timeline({
        scrollTrigger: {
            trigger: stickySection,
            start: "top top",
            endTrigger: why_us,
            end: "top bottom",
            scrub: 0.4,
            pin: true,
            // markers:true,
            pinSpacing: true,
            onUpdate: (self) => {
                const progress = self.progress;

                const firstPhaseProgress = Math.min(progress * 2, 1);
                const secondPhaseProgress = progress >= 0.5 ? (progress - 0.5) * 2 : 0;

                cubes.forEach((cube) => {
                    const initialAttr = cube.getAttribute("data-initial");
                    const finalAttr = cube.getAttribute("data-final");
                    if (!initialAttr || !finalAttr) return;

                    const initial = JSON.parse(initialAttr);
                    const final = JSON.parse(finalAttr);

                    const currentTop = interpolate(initial.top, final.top, firstPhaseProgress);
                    const currentLeft = interpolate(initial.left, final.left, firstPhaseProgress);
                    const currentRotateX = interpolate(initial.rotateX, final.rotateX, firstPhaseProgress);
                    const currentRotateY = interpolate(initial.rotateY, final.rotateY, firstPhaseProgress);
                    const currentRotateZ = interpolate(initial.rotateZ, final.rotateZ, firstPhaseProgress);
                    const currentScale = interpolate(initial.scale, final.scale, firstPhaseProgress);
                    const currentZ = interpolate(initial.z, final.z, firstPhaseProgress);

                    const additionalRotation = interpolate(0, 360, secondPhaseProgress);

                    cube.style.top = `${currentTop}%`;
                    cube.style.left = `${currentLeft}%`;
                    cube.style.scale = `${currentScale}`;
                    cube.style.transform = `
                    translate3d(-50%, -50%, ${currentZ}px)
                    rotateX(${currentRotateX}deg)
                    rotateY(${currentRotateY + additionalRotation}deg)
                    rotateZ(${currentRotateZ}deg)
                    `;
                });
            },
        },
    });

    const handleResize = () => {
        stickyHeight = window.innerHeight * 4;
        if (mainTl.scrollTrigger) mainTl.scrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
        if (mainTl.scrollTrigger) mainTl.scrollTrigger.kill();
        mainTl.kill();
        window.removeEventListener("resize", handleResize);
    };
}
