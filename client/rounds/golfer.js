angular.module('golfCompanion.messages', [])
  .controller('golferController', ($scope, Scores) => {
    $scope.scores = [];

    $scope.getScores = () => {
      Scores.getScores().then(score => {
        $scope.scores = score;
      });
    }


  });