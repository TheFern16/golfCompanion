angular.module('golfCompanion.stats', [])

.controller('StatsController', function($scope) {

  $scope.areaspline = $(document).ready(() => {
    let options = {
      chart: {
        renderTo: 'container',
        type: 'areaspline'
      },
      title: {
        text: 'Snapshot: Your Scores'
      },
      yAxis: {
        tickPixelInterval: 1,
        title: {
          text: 'Score'
        }
      },
      xAxis: {
        categories: []
      },
      series: [{}]
    };

    $.getJSON('/api/golfer', (data) => {
        options.series[0].data = data.map(v => v.score);
        options.series[0].name = data[0].name;
        let chart = new Highcharts.Chart(options);
    });
  });

});