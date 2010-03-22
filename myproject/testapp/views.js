include('./myproject/config');
var Template = require(conf.paths.jason + 'core/template').Template;

exports.hello = function(httpResponse) {
    temp = new Template(conf.paths.templates + 'hello.html.js', {});
    return temp.render();
};
