angular.module('golfCompanion.services', [])
  .factory('Scores', ($http) => {
    return {
      getScores: () => {
        return $http({
          method: 'GET',
          url: '/golfer'
        })
        .then(res => {
          return res.data;
        })
      }
    }
  })