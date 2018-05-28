
// Первая карта на странице "Контакты"

(function () {

  ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init(){
      var map = document.querySelector('#map');
      if (map) {
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
      myMap.geoObjects.add(myPlacemark);
      myMap.controls.add(zoomControl);
      myMap.controls.add('geolocationControl', {
        float: 'right'
      });

      myMap.behaviors.disable('scrollZoom');
      myMap.events.add('mouseup', function(){
        myMap.behaviors.enable('scrollZoom')
      });
  }
      }

})();

// Вторая карта на странице "Контакты"

(function () {


    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init() {
      var map2 = document.querySelector('#map2');

        if (map2) {
        myMap = new ymaps.Map("map2", {
            center: [59.7875,30.1801],
            zoom: 15,
            controls: []
        });

        myPlacemark = new ymaps.Placemark([59.7872,30.1877], {
          iconContent: 'Волхонское шоссе, д. 4',
        },
        {
          preset: 'islands#darkOrangeStretchyIcon',
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
        myMap.geoObjects.add(myPlacemark);
        myMap.controls.add(zoomControl);
        myMap.controls.add('geolocationControl', {
          float: 'right'
        });

        myMap.behaviors.disable('scrollZoom')
        myMap.events.add('mouseup', function(){
          myMap.behaviors.enable('scrollZoom')
        });
        myMap.setBounds(myMap.geoObjects.getBounds());
    }
  }


})();

// Карта со страницы "Где купить"

(function () {

  ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init(){
    var map3 = document.querySelector('#map3');
    if(map3) {
      myMap = new ymaps.Map("map3", {
        center: [59.7868,30.1880],
        zoom: 15,
        controls: []
    });

    myPlacemark = new ymaps.Placemark([59.7872,30.1877], {
      iconContent: 'Волхонское шоссе, д. 4',
    },
    {
      preset: 'islands#darkOrangeStretchyIcon',
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
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add(zoomControl);
    myMap.controls.add('geolocationControl', {
      float: 'right'
    });

    myMap.behaviors.disable('scrollZoom')
    myMap.events.add('mouseup', function(){
      myMap.behaviors.enable('scrollZoom')
    });
    // myMap.setBounds(myMap.geoObjects.getBounds());
    }

  }

})();

// Карта со страницы "Где купить город"

(function () {

  ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init(){
    var map4 = document.querySelector('#map4');
    if(map4) {
      myMap = new ymaps.Map("map4", {
        center: [59.7868,30.1880],
        zoom: 15,
        controls: []
    });

    myPlacemark = new ymaps.Placemark([59.7872,30.1877], {
      iconContent: 'Волхонское шоссе, д. 4',
    },
    {
      preset: 'islands#darkOrangeStretchyIcon',
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
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add(zoomControl);
    myMap.controls.add('geolocationControl', {
      float: 'right'
    });

    myMap.behaviors.disable('scrollZoom')
    myMap.events.add('mouseup', function(){
      myMap.behaviors.enable('scrollZoom')
    });
    // myMap.setBounds(myMap.geoObjects.getBounds());
    }

  }

})();
