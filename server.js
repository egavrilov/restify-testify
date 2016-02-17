const restify = require('restify');
const fs = require('fs');
const routes = require('./api');


var controllers = {},
  controllers_path = process.cwd() + '/api/'
fs.readdirSync(controllers_path).forEach(function(file) {
  if (file.indexOf('.js') != -1) {
    controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
  }
})

var server = restify.createServer({
  name: 'v2.36.3'
});

server
  .use(restify.fullResponse())
  .use(restify.bodyParser())

routes(server);

var port = process.env.PORT || 4000;

server.listen(port, (err) => {
  if (err)
    console.error(err)
  else
    console.log('App is ready at : ' + port)
});

if (process.env.environment == 'production')
  process.on('uncaughtException', function(err) {
    console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)))
  })
