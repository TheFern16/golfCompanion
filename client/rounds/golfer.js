angular.module('golfCompanion.scores', ['golfCompanion.services'])
  .controller('GolferController', function($scope, Scores) {
    $scope.data = {};
    $scope.score = 0;

  $scope.getScores = () => {
    Scores.getScores().then(scores => {
      $scope.data.scores = scores;
    });
  }
  console.log('invoked -----', $scope.getScores());

  $scope.postScore = (score) => {
    Scores.postScore(score).then((data) => {
      $scope.inputConfirmed = "--- Your score has been posted."
      $scope.result = data;
    console.log('invoked ======', $scope.getScores());
    })
  }

});
