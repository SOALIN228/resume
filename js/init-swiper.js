!function () {
  let view = document.querySelector('.swiper-container')

  let controller = {
    view: null,
    swiper: null,
    init: function (view) {
      this.view = view
      this.initSwiper()
    },
    initSwiper: function () {
      this.swiper = new Swiper(this.view, {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })
    }
  }

  controller.init(view)
}.call()
