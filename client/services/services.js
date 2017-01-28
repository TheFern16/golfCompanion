angular.module('golfCompanion.services', [])
  .factory('Scores', function($http) {
    return {

      postScore: (name, course, score) => {
        let data = {
          name: name,
          course: course,
          score: score
        };
        return $http({
          method: 'POST',
          url: '/golfer',
          data: data
        })
        .then(res => {
          return res.data;
        })
      },

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