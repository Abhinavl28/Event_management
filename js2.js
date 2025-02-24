

// Step 1: Get DOM Elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = document.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let timeDom = document.querySelector('.carousel .time');

let thumbnailItemsDom = thumbnailBorderDom ? thumbnailBorderDom.querySelectorAll('.item') : [];

if (thumbnailItemsDom.length > 0) {
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
}

let timeRunning = 3000;
let timeAutoNext = 7000;

// Event Listeners for Custom Carousel
if (nextDom && prevDom) {
    nextDom.onclick = function () {
        showSlider('next');
    };
    prevDom.onclick = function () {
        showSlider('prev');
    };
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom?.click();
}, timeAutoNext);

function showSlider(type) {
    let SliderItemsDom = document.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom?.click();
    }, timeAutoNext);
}

// Swiper Carousel Setup
if (document.querySelector(".swiper mySwiper container")) {
    const swiper = new swiper('.swiper mySwiper container', {
        slidesPerView: 3, // Show 3 slides at once
        spaceBetween: 20, // Adjust spacing between slides
        loop: true, // Enable infinite loop
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      
}
