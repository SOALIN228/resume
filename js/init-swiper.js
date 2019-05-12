!function () {
  let view = View('.swiper-container')

  let controller = Controller({
    swiper: null,
    init: function (view) {
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
  })

  controller.init(view)
}.call()
