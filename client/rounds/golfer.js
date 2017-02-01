angular.module('golfCompanion.scores', ['golfCompanion.services', 'underscore'])
  .controller('GolferController', function golferController($scope, Scores, _, $location) {
    $scope.data = {};
    $scope.name = 'Joe Golfer';
    $scope.score = 72;
    $scope.course = 'Rustic Canyon G.C.';
    $scope.mappedArray = [];

    $scope.changeView = (view) => {
      $location.path(view)
    }

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



});
