include('./myproject/config');

var hello = require(conf.paths.apps.testapp + 'views').hello;
var hello2 = require(conf.paths.apps.testapp + 'views').hello2;

exports.routes = {
    '^$': function(httpResponse) {
        return "HONK";
    },
    '^hello/?$': hello,
    '^hello2/?$': hello2
};
