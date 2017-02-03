angular.module('golfCompanion.scores', ['golfCompanion.services', 'underscore'])
  .controller('GolferController', function golferController($scope, Scores, _, $location, $http, $sce) {
    $scope.data = {};
    $scope.name = 'Joe Golfer';
    $scope.score = 72;
    $scope.course = 'Rustic Canyon G.C.';
    $scope.location = '';
    $scope.mappedArray = [];

    $scope.changeView = (view) => {
      $location.path(view)
    }

    $scope.getScores = () => {
      Scores.getScores().then(scores => {
        $scope.data.scores = scores;
      });
    };
        // let url = "https://cors-anywhere.herokuapp.com/https://www.amdoren.com/api/weather.php?api_key=K4yP7LzhASPgADmyPJkDkq3P6DAjLH&lat="+lat+"&lon="+lon+"";

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

    $scope.postScore = (name, course, score) => {
      Scores.postScore(name, course, score).then((data) => {
        $scope.inputConfirmed = "--- Your score has been posted."
        $scope.result = data;
      });
    };

   $scope.piechart = $(document).ready(() => {
    let options = {
      chart: {
        renderTo: 'container',
        type: 'column'
      },
      title: {
        text: 'Here are the courses you have played'
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total times played at each course.'
        }
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{}]
    };

    $.getJSON('/api/golfer', (data) => {
      let createObject = data.map(v => v.course)
        .reduce((result, element) => {
          result[element] = result[element] + 1 | 1
          return result;
        }, {});

      options.series = _.map(createObject, (value, key) => {
        return {
          name: key,
          data: [value]
        }
      });

      let chart = new Highcharts.Chart(options);

    });
  });

  $scope.getWeather();
  $scope.getScores();

});
