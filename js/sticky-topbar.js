!function () {
  // 控制导航栏黏在顶部
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      topNavBar.classList.add('sticky')
    } else {
      topNavBar.classList.remove('sticky')
    }
  })
}.call()
