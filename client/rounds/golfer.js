angular.module('golfCompanion.scores', ['golfCompanion.services', 'underscore'])
  .controller('GolferController', function($scope, Scores, _) {
    $scope.data = {};
    $scope.name = 'Joe Golfer';
    $scope.score = 72;
    $scope.course = 'Rustic Canyon G.C.';
    $scope.array = [];

  $scope.getScores = () => {
    Scores.getScores().then(scores => {
      $scope.data.scores = scores;
    });
  }

  $scope.postScore = (name, course, score) => {
    Scores.postScore(name, course, score).then((data) => {
      $scope.inputConfirmed = "--- Your score has been posted."
      $scope.result = data;
    })
  }

  $scope.analysis = $(() => {
    $scope.getScores()
    const golferData = Highcharts.chart('container', {
      chart: {
        type: 'areaspline'
      },
      title: {
        text: 'Your Stats'
      },
      xAxis: {
        categories: ['Janurary']
      },
      yAxis: {
        title: {
          text: 'Your Scores'
        }
      },
      series: [{
        name: 'Joe Golfer',
        data: $scope.scores
      }]
    });
  })
});
