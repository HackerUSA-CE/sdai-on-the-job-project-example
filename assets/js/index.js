document.addEventListener("DOMContentLoaded", () => {
    // Function to handle animation
    const animateElements = (elements, delay, duration) => {
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.transition = `opacity ${duration}ms`;
          element.style.opacity = "1";
        }, delay + (index * 100));
      });
    };
  
    // Animate nav links
    const navLinks = document.querySelectorAll(".navLinks li a");
    animateElements(navLinks, 300, 600);
  
    // Animate hero content
    const heroLogo = document.querySelector(".heroContent .logo");
    const heroButton = document.querySelector(".heroContent button");
    animateElements([heroLogo, heroButton], 300, 600);
  
    // Function to handle scroll animations
    const handleScroll = () => {
      const fadeInElements = document.querySelectorAll(".fade-in");
      fadeInElements.forEach((element) => {
        const bottomOfObject = element.offsetTop + element.offsetHeight;
        const bottomOfWindow = window.scrollY + window.innerHeight;
  
        if (bottomOfWindow > bottomOfObject) {
          element.style.transition = "opacity 500ms";
          element.style.opacity = "1";
        }
      });
    };
  
    // Initial check and scroll event listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });  