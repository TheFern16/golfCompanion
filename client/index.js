angular.module('golfCompanion', [
  'golfCompanion.scores',
  'golfCompanion.services',
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