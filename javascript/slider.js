// let slideIndex = 1;
// let dots = document.querySelectorAll(".dot");
// for (let i = 0; i < dots.length; i++) {
//   dots[i].addEventListener("click", showSlides);
// }

// function showSlides() {
//   let i;
//   let slides = document.querySelectorAll(".slides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].classList.add("inactive-slider");
//     slides[i].classList.add("flex");
//     dots[i].classList.remove("active-dot");
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   dots[slideIndex - 1].classList.add("active-dot");
//   slides[slideIndex - 1].classList.remove("inactive-slider");
//   // setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-slider");
    slides[i].classList.add("inactive-slider");
    // slides[i].classList.add("flex");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex - 1].classList.add("active-slider");
  dots[slideIndex - 1].className += " active-dot";
}
