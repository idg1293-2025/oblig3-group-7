gsap.registerPlugin(ScrollTrigger); //tell GSAP we want to use scrollTrigger plugin

gsap.from(".scene1__text", {
  y: "-100vh",  //start above viewport
  duration: 3,  //adjusts duration
  ease: "power2.out",  //fast -> slow smooth stop
});

gsap.to([
  "#scene1__wave1",
  "#scene1__wave2",
  "#scene1__wave3",
  "#scene1__wave4",
  "#scene1__wave5"], {
    y: -18,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

let tl = gsap.timeline({ //create timeline (tl)
  scrollTrigger: {  //connect timeline to scroll
    trigger: ".stage", //the element starting the chain reaction of animations
    start: "top top", //start when it hits top of viewport
    end: "+=8000", //set scroll distance (adjust for slower or faster animations)
    pin: true, //pin the stage
    scrub: true, //scrolling back reverses animations (when scrub is used "duration" becomes scroll based, not time based)
  }
})

tl.to(".scene1__text", { //add animation to the timeline (tl), start from the current value of element (to), targets element being animated
  scale: 0, //shrink the text to nothing
  duration: 1, //define scroll distance of animation
  ease: "back.in(2)", //predefined easing type (how an animation accelerates or decelerates) from the GSAP library, number indicates how much it zooms
}, 0); //tells GSAP to start animation at the time 0 in the timeline (immediately)


tl.to(["#scene1__guy", "#scene1__gal"], { //elements being animated
  y: "120%", //move down 120% of its own height
  x: "60%", //move right 60% of its own width
  duration: 1, //define scroll distance of animation
}, 1.2); //time in timeline to start animation

tl.to([
  "#scene1__water", 
  "#scene1__sand", 
  "#scene1__wave1", 
  "#scene1__wave2", 
  "#scene1__wave3", 
  "#scene1__wave4", 
  "#scene1__wave5", 
  "#scene1__stone", 
  "#scene1__tree", 
  "#scene1__bush"], { //elements being targeted
    opacity: 1, //fade in the targeted elements making them visible
    duration: 1, //scroll duration
}, 1.2); //start time of the animation in the timeline

tl.to("#scene1__sand", { 
  y: "44%", //move down 44% of its own height, making it look like a wave
  duration: 0.8,
  repeat: 1, //repeats the animation
  yoyo: true, //in combination with repeat, makes the animation reverse direction when it repeats, going back to its original position
  ease: "power1.inOut", //https://gsap.com/docs/v3/Eases
}, 2.3);

tl.to("#scene1__shadow", {
  opacity: 0,
  duration: 0.4,
  ease: "power1.out", //https://gsap.com/docs/v3/Eases
}, 2.6);

tl.to("#scene1__bottle", {
  x: 600,
  y: -1000,
  scale: 0, //shrink to simulate distance
  opacity: 0, //fade as bottle drifts further
  duration: 2,
  ease: "power1.out", //https://gsap.com/docs/v3/Eases
}, 3.2);

tl.to(".scene1", {
  opacity: 0,
  y: "10%",
  duration: 2,
  ease: "power2.out",
}, 5);

tl.set(".scene1", {
  display: "none",
}, 8.2); // after fade completes

tl.to(".scene2", {
  opacity: 1,
  duration: 2,
  ease: "power2.out"
}, 6.2);

tl.to(".scene2__text", { //add animation to the timeline (tl), start from the current value of element (to), targets element being animated
  scale: 0, //shrink the text to nothing
  duration: 1, //define scroll distance of animation
  ease: "back.in(2)" //predefined easing type (how an animation accelerates or decelerates) from the GSAP library, number indicates how much it zooms
}, 7.5); //tells GSAP to start animation at the time 0 in the timeline (immediately)

tl.to("#scene2__people", {
  x: -5,
  y: -4,
  scale: 0,
  transformOrigin: "left center",
  duration: 1.5,
}, 8.5)

tl.from(".scene2__facts", {
  scale: 0,
}, 9.5)