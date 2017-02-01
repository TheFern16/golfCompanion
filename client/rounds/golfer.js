angular.module('golfCompanion.scores', ['golfCompanion.services', 'underscore'])
  .controller('GolferController', function golferController($scope, Scores, _) {
    $scope.data = {};
    $scope.name = 'Joe Golfer';
    $scope.score = 72;
    $scope.course = 'Rustic Canyon G.C.';
    $scope.mappedArray = [];

    $scope.getScores = () => {
      Scores.getScores().then(scores => {
        $scope.data.scores = scores;
      });
    };

    $scope.getScores();

    $scope.postScore = (name, course, score) => {
      Scores.postScore(name, course, score).then((data) => {
        $scope.inputConfirmed = "--- Your score has been posted."
        $scope.result = data;
      });
    };


    $scope.analysis = $(() => {
      const golferData = Highcharts.chart('container', {
        chart: {
          type: 'areaspline'
        },
        events: {
          load: function () {
            setInterval(() => {
              console.log(this.series[0].data())
            }, 1000);
          }
        },
        title: {
          text: 'Your Stats'
        },
        xAxis: {
          categories: ['Janurary']
        },
        yAxis: {
          title: {
            text: 'Your Scores'
          }
        },
        series: [{
          name: 'Joe Golfer',
          data: (function() {
            let data = [];
            Scores.getScores().then(scores => {
              // console.log(Array.isArray(scores))
              // console.log('scores', scores)
              scores.map((element) => {
                console.log(element)
                return element.score
              })
              _.each(scores, (element) => {
                data.push(element.score);
              });
            });
            console.log(JSON.parse(JSON.stringify(data)));
            return data;
          }())
        }]
      });

      $('#small').click(function () {
        chart.setSize(400);
      });

      $('#large').click(function () {
        chart.setSize(800);
      });

      $('#auto').click(function () {
        chart.setSize(null);
      });

    });
  });






