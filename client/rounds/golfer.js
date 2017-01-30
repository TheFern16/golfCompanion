angular.module('golfCompanion.scores', ['golfCompanion.services'])
  .controller('GolferController', function($scope, Scores) {
    $scope.data = {};
    $scope.score = 0;

  $scope.getScores = () => {
    Scores.getScores().then(scores => {
      $scope.data.scores = scores;
    });
  }
  $scope.getScores();

  $scope.postScore = (score) => {
    console.log('here');
    Scores.postScore(score).then((data) => {
      $scope.feedback = data;
      $scope.getScores();
    });
  };

});


// <script>
// angular.module('submitExample', [])
//   .controller('ExampleController', ['$scope', function($scope) {
//     $scope.list = [];
//     $scope.text = 'hello';
//     $scope.submit = function() {
//       if ($scope.text) {
//         $scope.list.push(this.text);
//         $scope.text = '';
//       }
//     };
//   }]);
// </script>

