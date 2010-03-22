var cwd = system.getcwd();

exports.conf = {
    'paths': {
        'project': cwd + '/myproject/', 
        'jason': cwd + '/jason/',
        'templates': cwd + '/assets/templates/',
        'apps': {
            'testapp': cwd + '/myproject/testapp/'
        }
    }
};
