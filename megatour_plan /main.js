// header jc

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

//slider js
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const thumbnails = document.getElementsByClassName("thumbnails")[0].getElementsByTagName("img");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active-thumbnail");
    }

    slides[slideIndex - 1].style.display = "block";
    thumbnails[slideIndex - 1].classList.add("active-thumbnail");

    // Scroll to the current slide if the viewport is narrow
    if (window.innerWidth < 768) {
        const slideContainer = document.querySelector('.slides');
        slideContainer.scrollTo({
            left: slides[slideIndex - 1].offsetLeft,
            behavior: 'smooth'
        });
        
        const thumbnailContainer = document.querySelector('.thumbnails');
        thumbnailContainer.scrollTo({
            left: thumbnails[slideIndex - 1].offsetLeft,
            behavior: 'smooth'
        });
    }
}
