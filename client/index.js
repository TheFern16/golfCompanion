angular.module('golfCompanion', [
  'golfCompanion.scores',
  'golfCompanion.services',
  'ngRoute'
])

.config(($routeProvider, $httpProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: '/rounds/golfer.html',
      controller: 'GolferController'
    })
});