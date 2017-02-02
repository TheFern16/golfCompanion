const restful = require('node-restful');

module.exports = (app, route) => {

  let rest = restful.model('golfer', app.models.golfer)
    .methods(['get', 'put', 'post', 'delete'])

  rest.register(app, route);

  return (req, res, next) => {
    next();
  };

};