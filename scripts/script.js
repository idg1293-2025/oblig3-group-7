gsap.registerPlugin(ScrollTrigger);

gsap.to([
    "#_1-wave-1",
    "#_1-wave-2",
    "#_1-wave-3",
    "#_1-wave-4",
    "#_1-wave-5",
], {
    y: -15,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });



let tl = gsap.timeline ({
  scrollTrigger: {
    trigger: ".scene",
    start: "top top",
    end: "+=8000",
    pin: true,
    scrub: true
  }
})