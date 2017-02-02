angular.module('golfCompanion.weather', [])
  .controller('Weather', function($http, $scope) {
    $scope.location = '';

    $scope.initial = function(){
      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

      $http.jsonp("https://www.amdoren.com/api/weather.php?api_key=IBZzdLmM2yCYaXjgTZ6x&lat="+lat+"&lon="+lon+"&callback=JSON_CALLBACK")
        .success((data) => {
          $scope.weatherData = data;
          $('.loading').hide();
        })
        .error(() => {
          $('.loading').hide();
          $('.error').show().html("Sorry there has been an error connecting to the API");
        });
      });

      console.log('position', position);
    };
    $scope.initial();

  })

