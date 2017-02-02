const restful = require ('node-restful');

module.exports = {

  let rest = restful.model('weather', app.models.weather)
    .methods(['get', 'put', 'post', 'delete'])

  rest.register(app, route);

  return (req, res, next) => {
    next();
  };

}