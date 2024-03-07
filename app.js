//CONTROL SEARCH BOX BEHAVIOR
const searchInput = document.querySelector(".search-input");
const searchBox = document.getElementById("search-box");

// Function to update styles based on whether input value exists or not
function updateStyles() {
  if (searchInput.value.trim() !== "") {
    // Apply styles when input is not empty
    searchBox.style.width = "15rem";
  } else {
    // Reset styles when input is empty
    searchBox.style.width = "2.1rem";
  }
}

// Initial check
updateStyles();

// Listen for input changes
searchInput.addEventListener("input", updateStyles);

//CONTROL SLIDE
const wrapper = document.querySelector(".sliderWrapper");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const slideBg = document.querySelectorAll(".slideBg");
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    const slideWidth = slide.clientWidth;
    slide.style.width = slideWidth;
    if (screen.width < 400) {
      slideBg.forEach((slideBg) => {
        slideBg.style.width = slideWidth;
      });
    }
    slide.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

showSlide();

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
