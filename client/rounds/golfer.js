angular.module('golfCompanion.scores', ['golfCompanion.services'])
  .controller('GolferController', function($scope, Scores) {
    $scope.data = {};
    $scope.score = 0;

  var getScores = () => {
    Scores.getScores().then(scores => {
      $scope.data.scores = scores;
    });
  }
  getScores();

  var postScore = (val) => {
    console.log('here');
    Scores.postScore(val).then(() => {
      if ($scope.score) {
        $scope.data.scores.push(this.score);
        $scope.score = 0;
      }
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
// <form ng-submit="submit()" ng-controller="ExampleController">
//   Enter text and hit enter:
//   <input type="text" ng-model="text" name="text" />
//   <input type="submit" id="submit" value="Submit" />
//   <pre>list={{list}}</pre>
// </form>
