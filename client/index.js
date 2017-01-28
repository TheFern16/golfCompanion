angular.module('golfCompanion', [
  'golfCompanion.scores',
  'golfCompanion.services',
  'ngRoute'
])

.config( function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/rounds/golfer.html',
      controller: 'GolferController'
    })
});