import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
Swiper.use([Navigation, Pagination, Scrollbar]);
const swiper = new Swiper(".eventSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});
