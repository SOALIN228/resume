!function () {
  let view = document.querySelector('#topNavBar')
  // 控制导航栏黏在顶部
  let controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          this.active()
        } else {
          this.deactive()
        }
      })
    },
    active: function () {
      this.view.classList.add('sticky')
    },
    deactive: function () {
      this.view.classList.remove('sticky')
    }
  }

  controller.init(view)
}.call()
