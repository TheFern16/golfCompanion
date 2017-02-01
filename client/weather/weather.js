angular.module('golfCompanion.weather', [])
  .factory('Weather', function($http) {

    let getTheWeather = () => {
      $.get('https://www.amdoren.com/api/weather.php?api_key=IBZzdLmM2yCYaXjgTZ6x&lat=40.7127837&lon=-74.0059413', {

      })
    }


  })