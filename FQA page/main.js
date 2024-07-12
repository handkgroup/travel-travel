
// Header js
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

// FQA js

const items = document.querySelectorAll('.fql-list button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded') === 'true';

    // Toggle the current item's aria-expanded state
    this.setAttribute('aria-expanded', !itemToggle);
}

// Attach event listeners to each item
items.forEach((item) => item.addEventListener('click', toggleAccordion));