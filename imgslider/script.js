// Initialize the index to keep track of the current slide
let index = 0;

// Function to move the slide
function moveSlide(step) {
    // Select all slides
    const slides = document.querySelectorAll('.slide');

    // Update the index based on the step and ensure it wraps around using modulo
    index = (index + step + slides.length) % slides.length;

    // Move the slider to show the current slide
    document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
}
