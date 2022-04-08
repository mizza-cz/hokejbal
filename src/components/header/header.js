headerNavOpenerClick();
function headerNavOpenerClick() {
  const bodyEl = document.querySelector('body');
  const headerNavOpener = document.querySelector('.js-header__opener');
  if (!bodyEl || !headerNavOpener) {
    return
  }
  headerNavOpener.addEventListener('click', function() {
    if (!this.classList.contains('is-open')) {
      bodyEl.classList.add('is-nav-open');
      this.classList.add('is-open');
    } else {
      bodyEl.classList.remove('is-nav-open');
      this.classList.remove('is-open');
    }
  });
}


$(function(){
   $('.navbar__menu-item').on('click', function () {
      $(this).closest('.navbar__menu-list').toggleClass('active');
    });
})