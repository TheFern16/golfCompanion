angular.module('golfCompanion', [
  'golfCompanion.scores',
  'golfCompanion.services',
])

.config(($routeProvider, $httpProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: '/rounds/golfer.html',
      controller: 'GolferController'
    })
});