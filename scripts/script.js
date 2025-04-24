gsap.registerPlugin(ScrollTrigger);

gsap.from(".scene1__text", {
  y: "-100vh",      // Start from above the viewport
  duration: 3,      // Adjust time as needed
  ease: "power2.out"
});

let tl = gsap.timeline ({
  scrollTrigger: {
    trigger: ".stage",
    start: "top top",
    end: "+=8000",
    pin: true,
    scrub: true
  }
})

tl.to(".scene1__text", {
  scale: 0,
  opacity: 0,
  duration: 1,
  ease: "back.in(1.7)" // Nice snappy zoom
}, 0);


tl.to(["#_1-guy", "#_1-gal"], {
  y: "120%",
  x: "60%",
  duration: 1
}, 1.2);

tl.to(["#_1-water", "#_1-sand", "#_1-wave-1", "#_1-wave-2", "#_1-wave-3", "#_1-wave-4", "#_1-wave-5", "#_1-stone", "#_1-tree", "#_1-bush"], {
  opacity: 1,
  duration: 1
}, 1.2); // same start time

tl.to("#_1-sand", {
  y: "44%",             // Move down 50% of its own height
  duration: 0.8,        // How long the drop takes
  repeat: 1,            // Do the animation once more (back up)
  yoyo: true,           // Go back to starting position
  ease: "power1.inOut"  // Smooth ease
}, 2.3);                // Start right after background fade-in

tl.to("#_1-shadow", {
  opacity: 0,
  duration: 0.4,
  ease: "power1.out"
}, 2.6); // Bottle fade-out happens at the same time

tl.to("#_1-bottle", {
  x: 600,       // Move to the right (adjust this number)
  y: -1000,       // Move down toward the sea
  scale: 0,   // Shrink to simulate distance
  opacity: 0, // Optional fade
  duration: 3,
  ease: "power1.out"
}, 3.2); // Adjust this to your timeline

tl.to(".scene1", {
  scale: 20,                // Zoom in
  transformOrigin: "center center", // Zoom into middle
  duration: 2,
  ease: "power2.inOut"
}, 4); // Start the zoom later in your timeline (adjust timing!)




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