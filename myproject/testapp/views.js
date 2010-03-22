include('./myproject/config');

exports.hello = function(httpResponse) {
    return conf.paths.templates + 'hello.html.js';
};
