ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.75808939687435, 37.63767479367062],
          zoom: 14,
          controls: ['zoomControl', 'geolocationControl'],
      }, {
          searchControlProvider: 'yandex#search',
          autoFitToViewport: 'always',
      }),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemarkWithContent = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/for_map.svg',
      // Размеры метки.
      iconImageSize: [20, 20],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemarkWithContent);
});
