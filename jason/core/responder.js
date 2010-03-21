include("jason/core/mootools");

var HTTPResponse = new Class({
    initialize: function(request, response){
        this.request = request;
        this.response = response;
    },
    route: function(){
        this.response.write("RESPONSE!");
    }
});

exports.HTTPResponse = HTTPResponse;
