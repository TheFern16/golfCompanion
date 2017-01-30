angular.module('golfCompanion.scores', ['golfCompanion.services'])
  .controller('GolferController', function($scope, Scores) {
    $scope.data = {};
    $scope.name = 'Joe Golfer';
    $scope.score = 72;
    $scope.course = 'Rustic Canyon G.C.';

  $scope.getScores = () => {
    Scores.getScores().then(scores => {
      $scope.data.scores = scores;
    });
  }
  console.log('invoked -----', $scope.getScores());

  $scope.postScore = (name, course, score) => {
    Scores.postScore(name, course, score).then((data) => {
      $scope.inputConfirmed = "--- Your score has been posted."
      $scope.result = data;
    console.log('invoked ======', $scope.getScores());
    })
  }

});
