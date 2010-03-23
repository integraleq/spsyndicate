include('./myproject/config');
include(conf.paths.jason + 'core/mootools');

var HTTPResponse = new Class({
    initialize: function(request, response) {
        this.request = request;
        this.response = response;
    },
    route: function() {
        var dest = null,
            requestURI = system.env.REQUEST_URI.substring(1),
            routes = new Hash(require(conf.paths.project + 'routes').routes);
        
        routes.each(function(view, uri) {
            if (requestURI.test(uri)) {
                dest = view(this);
            }
        });

        if ($defined(dest)) {
            this.response.write(dest);
        }
        else {
            throw "No view mapped for the requested uri.";
        }
    }
});

exports.HTTPResponse = HTTPResponse;
