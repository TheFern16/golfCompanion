angular.module('golfCompanion.messages', [])
  .controller('golferController', ($scope, Scores) => {
    $scope.scores = [];

  $scope.getScores = () => {
    Scores.getScores().then(score => {
      $scope.scores = score;
    });
  }
  $scope.getScores();

  $scope.postScore = (val) => {
    Scores.postScore(val).then(score => {
      $scope.posted = score;
      $scope.getScores();
    });
  };
});