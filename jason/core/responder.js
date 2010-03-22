include('./myproject/config');
include(conf.paths.jason + 'core/mootools');

var HTTPResponse = new Class({
    initialize: function(request, response){
        this.request = request;
        this.response = response;
    },
    route: function(){
        var routes = new Hash(require(conf.paths.project + 'routes').routes);
        this.response.write(HTML.dump(request));
    }
});

exports.HTTPResponse = HTTPResponse;
