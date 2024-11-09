function toggleMenu() {
    const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle("open");
      icon.classList.toggle("open"); 
  }

  let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function updateSliderPosition() {
    const slides = document.querySelector(".slides");
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSliderPosition();
}

function setSlide(index) {
    currentSlide = index;
    updateSliderPosition();
}

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

// Initialize the first dot as active
updateDots();
