angular.module('golfCompanion', [
  'golfCompanion.scores',
  'golfCompanion.services',
  'golfCompanion.weather',
  'underscore',
  'ngRoute'
])

.config( function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/rounds/golfer.html',
      controller: 'GolferController'
    })
});