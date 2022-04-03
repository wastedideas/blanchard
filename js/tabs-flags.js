document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__flags-item').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__bottom-region').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');

      $('.accordion').accordion("refresh");
    });
  });

  $('.accordion').accordion()
});

// Подсветка текущего таба:
var menuItems = document.getElementsByClassName("catalog__flags-item");
  for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener("click", function() {
            var x = document.getElementsByClassName("catalog__flags-item");
            Array.prototype.forEach.call(x, function(el) {
            el.classList.remove("catalog__flags-item-active");
});
           this.classList.add('catalog__flags-item-active');
         });
  }
