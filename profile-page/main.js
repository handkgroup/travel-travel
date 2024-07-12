// header js

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("open");
        hamburger.classList.toggle("open");
    });

    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            nav.classList.remove("open");
            hamburger.classList.remove("open");
        }
    });
});
  
// slider js

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.background');
    const slideCount = slides.length;
    let currentIndex = 0;
    const slideDuration = 5000; // Interval duration in milliseconds
    let slideInterval;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        const textBottom = slide.querySelector('.text-bottom');
        if (i === index) {
          slide.style.display = 'flex';
          setTimeout(() => {
            slide.style.opacity = '1';
            textBottom.classList.add('active');
          }, 10); // Adding slight delay to ensure display change is processed
        } else {
          slide.style.display = 'none';
          slide.style.opacity = '0';
          textBottom.classList.remove('active');
        }
      });
    }
  
    function slideNext() {
      currentIndex = (currentIndex + 1) % slideCount;
      showSlide(currentIndex);
      resetInterval();
    }
  
    function resetInterval() {
      clearInterval(slideInterval);
      slideInterval = setInterval(slideNext, slideDuration);
    }
  
    // Make slideNext function accessible globally
    window.slideNext = slideNext;
  
    // Automatically slide to the next image at intervals
    slideInterval = setInterval(slideNext, slideDuration);
  
    // Show the initial slide
    showSlide(currentIndex);
  });
  