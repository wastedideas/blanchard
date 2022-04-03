document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelectorAll(
      '.header__first__nav, .header__burger, .header__first__burger-login'
      ).forEach(
      el => el.classList.toggle('is-active')
    )
  });
});
