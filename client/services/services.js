angular.module('golfCompanion.services', [])
  .factory('Scores', ($http) => {
    return {

      postScore: (val) => {
        let data = {val: val};
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