gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline ({
  scrollTrigger: {
    trigger: ".scene",
    start: "top top",
    end: "+=8000",
    pin: true,
    scrub: true
  }
})

tl.to(["#_1-guy", "#_1-gal"], {
  y: "120%",
  x: "20%"
}, 0.1);

tl.to(["#_1-water", "#_1-sand", "#_1-wave-1", "#_1-wave-2", "#_1-wave-3", "#_1-wave-4", "#_1-wave-5", "#_1-stone", "#_1-tree", "#_1-bush"], {
  opacity: 1,
  duration: 1
}, 0.1); // same start time

tl.to("#_1-sand", {
  y: "50%",             // Move down 50% of its own height
  duration: 0.8,        // How long the drop takes
  repeat: 1,            // Do the animation once more (back up)
  yoyo: true,           // Go back to starting position
  ease: "power1.inOut"  // Smooth ease
}, 0.6);                // Start right after background fade-in



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