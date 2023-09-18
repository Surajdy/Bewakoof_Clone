// Fetching data from '/home/json/swipers.json'

// import { initSwiper }  from "./swiperWrapper";


fetch('/home/json/swipers.json')
  .then(response => response.json())
  .then(data => {

    commonSlider(data.firstSwiperSlider, '.slider-swiper-first-container', '.first-swiper-slider', '.swiper-wrapper')

  })

function commonSlider(data, firstSwiparContainer1, firstSwiperSlider1, swiperSlider1) {
  let firstSwiparContainer = document.querySelector(firstSwiparContainer1);
  let firstSwiperSlider = document.querySelector(firstSwiperSlider1);
  let swiperSlider = document.querySelector(swiperSlider1);

  data.forEach((ele) => {
    let swiperSlide = document.createElement('a');
    swiperSlide.href = '#'
    swiperSlide.classList.add('swiper-slide');

    let imageBox = document.createElement('div');
    imageBox.classList.add('img-box-slider');

    let imageUrl = document.createElement('img');
    imageUrl.src = ele;

    imageBox.appendChild(imageUrl);
    swiperSlide.appendChild(imageBox);
    swiperSlider.appendChild(swiperSlide);
  });

  firstSwiperSlider.appendChild(swiperSlider);
  firstSwiparContainer.appendChild(firstSwiperSlider);
}

swiperWrapper('.first-swiper-slider')

function swiperWrapper(slide){
var swiper = new Swiper(slide, {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: false,
  loopedSlides: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2600, // Auto-play delay in milliseconds (2.5 seconds)
    disableOnInteraction: false, // Enable auto-play even when the user interacts with the slider
  },

});
}


