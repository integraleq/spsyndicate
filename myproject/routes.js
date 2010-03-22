include('./myproject/config');
var hello = require(conf.paths.apps.testapp + 'views').hello;

exports.routes = {
    'hello': hello
};
