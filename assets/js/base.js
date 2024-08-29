
window.addEventListener('load', function () {
  var loader = document.querySelector('.loader');
  // Initially fade in the logo
  loader.style.opacity = 1;

  // Wait for 2 seconds, then start fading out
  setTimeout(function () {
    loader.style.opacity = 0;
    loader.addEventListener('transitionend', function () {
      loader.style.display = 'none';
      // Show the content after the logo fades out
      document.querySelector('.page_content').style.display = 'block';
    });
  }, 2000); // Adjust the time here to keep the logo visible longer/shorter
});

document.addEventListener('scroll', function () {
  // ページのトップからのスクロール量を取得
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // 100vhの値をピクセル単位で計算
  var vh = window.innerHeight;

  // header要素を取得
  var header = document.querySelector('header.fixed');

  // スクロール位置が100vh以上かどうかを判断
  if (scrollPosition >= vh) {
    // .showedクラスを追加
    header.classList.add('showed');
  } else {
    // .showedクラスを削除
    header.classList.remove('showed');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let els = document.querySelectorAll('.elem');
  els.forEach(function (fadeIn) {
    function fadeOnScroll() {
      const windowHeight = window.innerHeight;
      const offset = fadeIn.getBoundingClientRect().top;
      const scroll = window.scrollY;
      if (offset < windowHeight && offset > -fadeIn.offsetHeight) {
        fadeIn.classList.add('is_showed');
        window.removeEventListener('scroll', fadeOnScroll);
      }
    }
    window.addEventListener('scroll', fadeOnScroll);
  });
});


