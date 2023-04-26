const swiper = new Swiper(".watch-swiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  // spaceBetween: 5,

  speed: 800,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  on: {
    slideChange() {
      let ollSliders = this.slides.length,
        slIndex = this.realIndex + 1,
        numIndex = (slIndex <= 9) ? '0' : '',
        numOll = (ollSliders <= 9) ? '0' : '';
      this.el.parentNode.querySelector(".carousel__number-of-watches").innerHTML = numIndex.toString() + slIndex.toString() + '<span class="dash"></span>' + numOll.toString() + ollSliders.toString();
    }
  }

});
