// import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
// import 'swiper/css';
  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
//   import 'swiper/css';
//   import 'swiper/css/navigation';
//   import 'swiper/css/pagination';

const sliders = () => {
    // Главный слайдер
    new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        speed: 500,
        // spaceBetween: 11,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 11
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 11
            },

        }
    });
};

export default sliders;