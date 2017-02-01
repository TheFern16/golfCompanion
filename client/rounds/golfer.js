angular.module('golfCompanion.scores', ['golfCompanion.services', 'underscore'])
  .controller('GolferController', function golferController($scope, Scores, _) {
    $scope.data = {};
    $scope.name = 'Joe Golfer';
    $scope.score = 72;
    $scope.course = 'Rustic Canyon G.C.';
    $scope.mappedArray = [];

    $scope.getScores = () => {
      Scores.getScores().then(scores => {
        $scope.data.scores = scores;
      });
    };

    $scope.getScores();

    $scope.postScore = (name, course, score) => {
      Scores.postScore(name, course, score).then((data) => {
        $scope.inputConfirmed = "--- Your score has been posted."
        $scope.result = data;
      });
    };

    $scope.analysis = $(document).ready(function() {
      var options = {
        chart: {
          renderTo: 'container',
          type: 'areaspline'
        },
        title: {
          text: 'Your stats'
        },
        yAxis: {
          tickPixelInterval: 1,
        },
        xAxis: {
          categories: []
        },
        series: [{}]
      };

      $.getJSON('/api/golfer', function(data) {
          options.series[0].data = data.map(v => v.score);
          var chart = new Highcharts.Chart(options);
      });
    });

    $('#small').click(function () {
      chart.setSize(400);
    });

    $('#large').click(function () {
      chart.setSize(800);
    });

    $('#auto').click(function () {
      chart.setSize(null);
    });
});
