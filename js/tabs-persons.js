// Выведение информации об авторе при клике на фамилию

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__list-author-fr').forEach(function(tabsBtn1) {
    tabsBtn1.addEventListener('click', function(event) {
      const namefr = event.currentTarget.dataset.namefr

      document.querySelectorAll('.catalog__person-fr').forEach(function(tabContent1) {
        tabContent1.classList.remove('catalog__person-fr_active');
      });
      document.querySelector(`[data-personfr="${namefr}"]`).classList.add('catalog__person-fr_active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__list-author-ge').forEach(function(tabsBtn2) {
    tabsBtn2.addEventListener('click', function(event) {
      const namege = event.currentTarget.dataset.namege

      document.querySelectorAll('.catalog__person-ge').forEach(function(tabContent2) {
        tabContent2.classList.remove('catalog__person-ge_active');
      });
      document.querySelector(`[data-personge="${namege}"]`).classList.add('catalog__person-ge_active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__list-author-it').forEach(function(tabsBtn3) {
    tabsBtn3.addEventListener('click', function(event) {
      const nameit = event.currentTarget.dataset.nameit

      document.querySelectorAll('.catalog__person-it').forEach(function(tabContent3) {
        tabContent3.classList.remove('catalog__person-it_active');
      });
      document.querySelector(`[data-personit="${nameit}"]`).classList.add('catalog__person-it_active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__list-author-ru').forEach(function(tabsBtn4) {
    tabsBtn4.addEventListener('click', function(event) {
      const nameru = event.currentTarget.dataset.nameru

      document.querySelectorAll('.catalog__person-ru').forEach(function(tabContent4) {
        tabContent4.classList.remove('catalog__person-ru_active');
      });
      document.querySelector(`[data-personru="${nameru}"]`).classList.add('catalog__person-ru_active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__list-author-bel').forEach(function(tabsBtn5) {
    tabsBtn5.addEventListener('click', function(event) {
      const namebel = event.currentTarget.dataset.namebel

      document.querySelectorAll('.catalog__person-bel').forEach(function(tabContent5) {
        tabContent5.classList.remove('catalog__person-bel_active');
      });
      document.querySelector(`[data-personbel="${namebel}"]`).classList.add('catalog__person-bel_active');
    });
  });
});

// Подсветка фамилии текущего автора:

document.querySelector('.catalog').addEventListener('click', function(e) {
  if (e.target.classList.contains('catalog__list-author-fr')) {

          this.querySelector('.catalog__list-author-fr_active').classList.remove('catalog__list-author-fr_active');
          e.target.classList.add('catalog__list-author-fr_active');
      }

  });

document.querySelector('.catalog').addEventListener('click', function(e) {
  if (e.target.classList.contains('catalog__list-author-ge')) {

          this.querySelector('.catalog__list-author-ge_active').classList.remove('catalog__list-author-ge_active');
          e.target.classList.add('catalog__list-author-ge_active');
      }

  });

document.querySelector('.catalog').addEventListener('click', function(e) {
  if (e.target.classList.contains('catalog__list-author-it')) {

          this.querySelector('.catalog__list-author-it_active').classList.remove('catalog__list-author-it_active');
          e.target.classList.add('catalog__list-author-it_active');
      }

  });

document.querySelector('.catalog').addEventListener('click', function(e) {
  if (e.target.classList.contains('catalog__list-author-ru')) {

          this.querySelector('.catalog__list-author-ru_active').classList.remove('catalog__list-author-ru_active');
          e.target.classList.add('catalog__list-author-ru_active');
      }

  });

document.querySelector('.catalog').addEventListener('click', function(e) {
  if (e.target.classList.contains('catalog__list-author-bel')) {

          this.querySelector('.catalog__list-author-bel_active').classList.remove('catalog__list-author-bel_active');
          e.target.classList.add('catalog__list-author-bel_active');
      }

  });
