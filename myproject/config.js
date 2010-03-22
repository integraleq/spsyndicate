var cwd = system.getcwd();

exports.conf = {
    'templates': {
        'doctype': '<!DOCTYPE html>',
    },
    'paths': {
        'project': cwd + '/myproject/', 
        'jason': cwd + '/jason/',
        'templates': cwd + '/assets/templates/',
        'apps': {
            'testapp': cwd + '/myproject/testapp/'
        }
    }
};
