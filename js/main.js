import header from "./header.js";
header();
import "../jquery/dist/jquery.js";

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  autoHeight: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".myClients", {
  spaceBetween: 30,
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".petroProducts", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 150,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 200,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 250,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 120,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
