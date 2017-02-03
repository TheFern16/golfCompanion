angular.module('golfCompanion.stats', ['golfCompanion.scores'])

.controller('StatsController', function($scope, $http) {

  $scope.areaspline = $(document).ready(() => {
    let options = {
      chart: {
        backgroundColor: '#FFFFD5',
        renderTo: 'container',
        type: 'areaspline'
      },
      title: {
        text: 'Snapshot: Your Scores'
      },
      yAxis: {
        title: {
          text: 'Score'
        }
      },
      xAxis: {
        categories: []
      },
      series: [{}]
    };

    $.getJSON('/api/golfer', (data) => {
        options.series[0].data = data.map(v => v.score);
        options.series[0].name = data[0].name;
        let chart = new Highcharts.Chart(options);
    });
  });

  $scope.getWeather = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let url = "https://cors-anywhere.herokuapp.com/http://weathers.co/api.php?city=New+York"
      $http.get(url)
        .then((data) => {
          $scope.weatherData = data;
          console.log($scope.weatherData);
        });
      });
    };
});