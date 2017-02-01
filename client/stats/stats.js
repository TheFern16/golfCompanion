angular.module('golfCompanion.stats', [])

.controller('StatsController', function($scope) {
  $scope.analysis = $(document).ready(function() {
    var options = {
      chart: {
        renderTo: 'container',
        type: 'areaspline'
      },
      title: {
        text: 'Your stats'
      },
      yAxis: {
        tickPixelInterval: 1,
      },
      xAxis: {
        categories: []
      },
      series: [{}]
    };

    $.getJSON('/api/golfer', function(data) {
        options.series[0].data = data.map(v => v.score);
        options.series[0].name = data[0].name;
        var chart = new Highcharts.Chart(options);
    });
  });

})