angular.module('golfCompanion.scores', ['golfCompanion.services', 'underscore'])
  .controller('GolferController', function golferController($scope, Scores, _, $location, $http, $sce) {
    $scope.data = {};
    $scope.name = 'Joe Golfer';
    $scope.score = 72;
    $scope.course = 'Rustic Canyon G.C.';
    $scope.location = '';
    $scope.mappedArray = [];
    $scope.hardCoded = {
      "error" : 0,
      "error_message" : "-",
      "forecast":[
        {"date":"2016-11-04", "avg_c":17, "min_c":12, "max_c":22, "avg_f":63, "min_f":54, "max_f":72, "summary":"Light rain", "icon":"wi_color_drizzle.png"},
        {"date":"2016-11-05", "avg_c":17, "min_c":15, "max_c":22, "avg_f":63, "min_f":59, "max_f":72, "summary":"Sunny", "icon":"wi_color_sunny.png"},
        {"date":"2016-11-06", "avg_c":19, "min_c":13, "max_c":23, "avg_f":66, "min_f":55, "max_f":73, "summary":"Partly cloudy", "icon":"wi_color_partly_cloudy_day.png"},
        {"date":"2016-11-07", "avg_c":19, "min_c":14, "max_c":21, "avg_f":66, "min_f":57, "max_f":70, "summary":"Moderate or heavy rain", "icon":"wi_color_rain.png"},
        {"date":"2016-11-08", "avg_c":14, "min_c":8, "max_c":17, "avg_f":57, "min_f":46, "max_f":63, "summary":"Light rain", "icon":"wi_color_drizzle.png"}
    ]};

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
        backgroundColor: '#FFFFD5',
        renderTo: 'container',
        type: 'column',
        style: {
          fontFamily: 'lato'
        }
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
