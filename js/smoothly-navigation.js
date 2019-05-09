!function () {
// 监听导航栏点击事件,控制锚点跳转
  let aTags = document.querySelectorAll('nav.menu > ul > li > a')

// 注册tween
  function animate (time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
  }

  requestAnimationFrame(animate)

  for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
      x.preventDefault()
      let a = x.currentTarget
      let href = a.getAttribute('href') // #siteAbout
      let element = document.querySelector(href)
      let top = element.offsetTop

      let currentTop = window.scrollY
      let targetTop = top - 80
      let s = targetTop - currentTop
      var coords = { y: currentTop }
      var t = Math.abs((s / 100) * 300)
      t = t > 500 ? 500 : t
      // 使用tween缓动动画
      var tween = new TWEEN.Tween(coords)
      .to({ y: targetTop }, t)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function () {
        window.scrollTo(0, coords.y)
      })
      .start()
    }
  }
}.call()
