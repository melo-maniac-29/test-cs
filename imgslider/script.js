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


// This JavaScript code manages an image slider. Here's an explanation:

// 1. Initializes `index` to track the current slide.
// 2. Defines the `moveSlide` function to change slides based on the `step` parameter.
// 3. Selects all elements with the class `slide`.
// 4. Updates the `index` using the step value and ensures it wraps around using modulo.
// 5. Moves the slider to display the current slide by translating the `slider` element horizontally.

