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
  
  // JavaScript code goes here
  document.addEventListener('DOMContentLoaded', () => {
      // Your JavaScript logic
      let currentIndex = 0;
      const slides = document.querySelectorAll('.slide');
      const maxIndex = slides.length - 1;
      let slideInterval;

      slides[currentIndex].classList.add('visible');

      function startSlide() {
          slideInterval = setInterval(() => {
              moveSlider();
          }, 3000);
      }

      function moveSlider() {
          slides[currentIndex].classList.remove('visible');
          currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
          slides[currentIndex].classList.add('visible');
      }

      startSlide();
  });
