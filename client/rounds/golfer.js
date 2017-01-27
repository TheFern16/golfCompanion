angular.module('golfCompanion.scores', ['golfCompanion.services'])
  .controller('GolferController', ($scope, Scores) => {
    $scope.data = {};

  var getScores = () => {
    Scores.getScores().then(scores => {
      $scope.data.scores = scores;
    });
  }
  getScores();

  var postScore = (val) => {
    Scores.postScore(val).then(score => {
      $scope.getScores();
    });
  };

});