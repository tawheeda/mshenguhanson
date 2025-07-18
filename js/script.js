// Toggle mobile menu
function toggleMenu() {
    const header = document.querySelector("header");
    header.classList.toggle("active");
}

// Slideshow logic
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show specific slide
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
