include('./myproject/config');

exports.hello = function(dispatch) {
    return conf.paths.templates + 'hello.html.js';
};
