gsap.to("#Hero", {duration: 2, y: 300, ease: "elastic"});

  
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100); 

  gsap.from(".animateButton", {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".animateButton", // Directly target element
      start: "top center", // Adjust start
      end: "bottom bottom",
      toggleActions: "restart none none restart",
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#specialist", {
  x: 200, // Slide in from the right
  opacity: 0, // Start with the section invisible
  duration: 1, // Duration of the animation
  ease: "elastic", // Smooth easing effect
  scrollTrigger: {
    trigger: "#specialist", // Trigger animation on reaching the section
    start: "-225% center", 
    end:"-200% bottom",
    toggleActions: "restart none none reverse", 
  }
});


gsap.from("#downloadimg", {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#downloadimg", // Directly target element
      start: "-900% center", // Adjust start
      end: "-800% bottom",
      toggleActions: "restart none none reverse",
    }
  });

  
  
  // Footer logo animation 
  gsap.fromTo("#footerimg", 
    { rotation: 0, scale: 0.8, opacity: 0.8 }, // Starting state
    { 
      rotation: 360,  // Full rotation
      scale: 1,       // Scales to full size
      opacity: 1,     // Full opacity
      duration: 2,    // Adjust duration as needed
      ease: "power2.inOut", 
      repeat: 2,     // Infinite loop
      yoyo: true      // Makes it reverse smoothly
    }
  );
  
// Select all pricing cards and add event listeners for the "sl-after-show" event
document.querySelectorAll(".pricingcard").forEach((card) => {
    card.addEventListener("sl-after-show", () => {
      // Select the .pricecardimg inside the opened pricing card
      const img = card.querySelector(".pricecardimg");
  
      // Start the pulsing animation on the .pricecardimg
      gsap.fromTo(img, 
        { scale: 1 }, // Starting scale
        { 
          scale: 1.1, // Slightly larger scale for a pulse effect
          duration: 1, // Animation duration for each pulse
          ease: "power1.inOut", // Easing for smooth effect
          repeat: 2, // Infinite loop
          yoyo: true // Reverses animation for a pulsing effect
        }
      );
    });
  });
  

  gsap.registerPlugin(MotionPathPlugin);

  // Animate #bear along the wiggling path
  gsap.to("#bear", {
    duration: 3,
    motionPath: {
      path: [
        { x: 0, y: 20 },    // Move slightly down
        { x: 100, y: -20 }, // Move right and up
        { x: 200, y: 20 },  // Move right and down
        { x: 300, y: -20 }, // Move right and up
        { x: 400, y: 20 },  // Move right and down
        { x: 500, y: -20 }, // Continue with right and up pattern
        { x: 600, y: 0 }    // End at the right edge
      ],
      curviness: 0.5,
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    },
    ease: "power1.inOut",
    onComplete: () => {
      // Small wiggle on the spot
      gsap.to("#bear", {
        rotation: 15 -15,       // Rotate to 15 degrees
        duration: 0.3,      // Quick wiggle duration
        yoyo: true,         // Back and forth wiggle
        repeat: 2,          // Wiggle 5 times
        ease: "power1.inOut",
        onComplete: () => {
          // Settle upright
          gsap.to("#bear", { rotation: 0, duration: 0.3 });
        }
      });
    }
  });
  
