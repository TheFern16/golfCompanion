angular.module('golfCompanion.services', [])
  .factory('Scores', function($http) {
    return {

      postScore: (score) => {
        let data = {
          score: score
        };
        return $http({
          method: 'POST',
          url: '/api/golfer',
          data: data
        })
        .then(res => {
          return res.data;
        })
      },

      getScores: () => {
        return $http({
          method: 'GET',
          url: '/api/golfer'
        })
        .then(res => {
          return res.data;
        })
      }
    }
  })