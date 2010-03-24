var cwd = system.getcwd();

exports.conf = {
    'templates': {
        'doctype': '<!DOCTYPE html>',
    },
    'db-settings':{
        'database-engine': 'couchdb',
        'database-name': 'spsyndicate',
        'username': 'sp_admin',
        'password': 'intel@)!)Pass',
        'host': 'localhost',
        'port': '5984'
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
