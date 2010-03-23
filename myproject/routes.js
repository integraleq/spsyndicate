include('./myproject/config');
include(conf.paths.apps.testapp + 'views');

exports.routes = {
    '^$': hello,
    '^philTest/?$': philTest,
};
