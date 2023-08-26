import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.2,
    css: { overflowY: "hidden" },
    ease: "Power3.easeInOut",
  })

    .to(".texts-container", {
      duration: 0.1,
      opacity: 1,
      ease: "Power3.easeInOut",
    })
    .from(".texts-container h3", {
      duration: 0.8,
      delay: 0.5,
      y: 70,
      skewX: 0,
      stagger: 0.4,
      ease: "Power3.easeInOut",
    })
    .to(".texts-container h3", {
      duration: 2,
      y: 70,
      skewX: 0,
      stagger: 0.1,
      ease: "Power3.easeInOut",
    });
};
