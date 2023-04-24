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
      this.el.parentNode.querySelector(".carousel__number-of-watches").innerHTML = this.realIndex + 1 + '<span class="dash"></span>' + this.slides.length;
    }
  }

});
