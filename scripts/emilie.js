// Animating the brows of our characters
const brows = [
    document.querySelector("#_4-guy-brows"),
    document.querySelector("#_4-gal-brows")
  ];
  
// GSAP animation running once when hovered over
const browsAnim = gsap.to(brows, {
    y: -5,
    duration: 0.7,
    yoyo: true,
    repeat: 1,
    ease: "sine.inOut",
    paused: true
  });


const guy = document.querySelector("#_4-guy"); 
guy.addEventListener('mouseenter', () => {
    browsAnim.restart(); 
  });


const gal = document.querySelector("#_4-gal"); 
gal.addEventListener('mouseenter', () => {
    browsAnim.restart(); 
  });
  


// Making the rubbish disappear when clicked
  document.querySelectorAll("#_4-bottle-wave-2, #_4-cup-wave, #_4-plastic-bag, #_4-bottle-wave-1").forEach(item => {
    item.addEventListener('click', function() {
      item.style.transition = 'opacity 0.5s ease-out';  // Gradient
      item.style.opacity = 0;  // Starts the fade effect
      setTimeout(() => item.style.display = 'none', 500);  // Removes elements after fade effect
    });
  });


  // Making the glitter 
  function showSparkle(targetId, sparkleId) {
    const target = document.getElementById(targetId);
    const sparkle = document.getElementById(sparkleId);
  
    // Find position of clicked SVG element
    const rect = target.getBoundingClientRect();
    const container = document.querySelector('.svg-container');
    const containerRect = container.getBoundingClientRect();
  
    sparkle.style.left = (rect.left - containerRect.left + rect.width / 2) + "px";
    sparkle.style.top = (rect.top - containerRect.top + rect.height / 2) + "px";
  
    sparkle.style.opacity = 1;
    sparkle.style.animation = "glitter 1s ease-in-out forwards";
  
    // Hide sparkle after animation
    setTimeout(() => {
      sparkle.style.opacity = 0;
    }, 1000);
  
    // Remove clicked element
    target.style.opacity = 0;
    target.style.pointerEvents = "none";
  }

// Popup message after all rubbish is removed
const trashItems = document.querySelectorAll('.rubbish');
const totalTrash = trashItems.length;
let trashRemoved = 0;

trashItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove rubbish
    item.style.transition = 'opacity 0.5s ease';
    item.style.opacity = 0;
    setTimeout(() => {
      item.style.display = 'none';
      trashRemoved++;

      // Check that everything is removed
      if (trashRemoved === totalTrash) {
        document.getElementById('congrats');
        congrats.style.display = 'block';
        congrats.classList.add('spin');
      }
    }, 500);
  });
});


  // The final words
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

