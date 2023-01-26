

// let accordionNav = document.querySelectorAll('.case-accordion__nav'),
//     accordion = document.querySelectorAll('.case-accordion');
// console.log(accordion);

// accordion.forEach(elem => {
//   elem.addEventListener('click', () => {
//     // elem.classList.toggle('case-accordion-active');
//     accordion.forEach(item => item.classList.remove('active'));

//     elem.classList.toggle('active');
//   })
// })

var btn_title = document.querySelectorAll('.case-accordion__nav');
var disc = document.querySelectorAll('.case-accordion');
var body = document.querySelectorAll('.case-accordion__body');


for (var i = 0; i < btn_title.length; i++) {
  btn_title[i].addEventListener('click', fun_open);

  function fun_open(event) {
    for (var i = 0; i < btn_title.length; i++) {
      disc[i].classList.remove('case-accordion__body--active');
      body[i].style.height = '';
      if (btn_title[i] == event.currentTarget) {
        disc[i].classList.toggle('case-accordion__body--active');
        body[i].style.height = body[i].clientHeight + 'px';
      }
    }

  }

}


// accordionNav.forEach(item => {
//   item.addEventListener('click', () => {

//     let parent = item.nextElementSibling;

//     if (parent.style.maxHeight) {
//       accordion.forEach(elem => elem.style.maxHeight = null)
//     } else {
//       accordion.forEach(elem => elem.style.maxHeight = null)
//       parent.style.maxHeight = parent.scrollHeight + 'px';
//     }
//   })
// })


const swiper = new Swiper('.testi-swiper', {
  slidesPerView: 2,
  navigation: {
    nextEl: '.testi-next',
    prevEl: '.testi-prev',
    disabledClass: 'testi-arrow__dis',
  },

});

const swiper2 = new Swiper('.values-swiper', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.values-slider__arrow_next',
    prevEl: '.values-slider__arrow_prev',
    disabledClass: 'values-slider__arrow-disable',
  },

});


