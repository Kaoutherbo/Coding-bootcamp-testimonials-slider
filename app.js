
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;


const displaySlide = (index) => {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'flex' : 'none';
  });
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  displaySlide(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  displaySlide(currentIndex);
};


nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Initialize the display
displaySlide(currentIndex);


