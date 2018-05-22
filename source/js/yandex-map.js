(function () {

  ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init(){
      myMap = new ymaps.Map("map", {
          center: [59.78627996, 30.17684996],
          zoom: 15,
          controls: []
      });

      myPlacemark = new ymaps.Placemark([59.78718856, 30.18766950], {
        iconContent: 'Волхонское шоссе, д. 4',
      },
      {
        preset: 'islands#darkOrangeStretchyIcon',
        // Задаем цвет метки (в формате RGB).
        // iconColor: '#ff0000'
      });

      var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small",
            position: {
              right: 10,
              top: 50
            }
        }
    });
      // myPlacemark.setIconContent("Щелкни меня");
      myMap.geoObjects.add(myPlacemark);
      myMap.controls.add(zoomControl);
      myMap.controls.add('geolocationControl', {
        float: 'right'
    });
      // myPlacemark.setIconContent("Щелкни меня");
  }

})();
