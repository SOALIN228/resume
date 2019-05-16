!function () {
  let view = View('nav.menu');
  let controller = Controller({
    init: function (view) {
      this.initAnimation();
    },
    initAnimation: function () {
      // 注册tween
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }

      requestAnimationFrame(animate);
    },
    bindEvents: function () {
      let aTags = this.view.querySelectorAll('ul > li > a'); // 监听导航栏点击事件,控制锚点跳转

      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = x => {
          x.preventDefault();
          let a = x.currentTarget;
          let href = a.getAttribute('href'); // #siteAbout

          let element = document.querySelector(href);
          this.scrollToElement(element);
        };
      }
    },
    scrollToElement: function (element) {
      let top = element.offsetTop;
      let currentTop = window.scrollY;
      let targetTop = top - 80;
      let s = targetTop - currentTop;
      let coords = {
        y: currentTop
      };
      let t = Math.abs(s / 100 * 300);
      t = t > 500 ? 500 : t; // 使用tween缓动动画

      let tween = new TWEEN.Tween(coords).to({
        y: targetTop
      }, t).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
        window.scrollTo(0, coords.y);
      }).start();
    }
  });
  controller.init(view);
}.call();