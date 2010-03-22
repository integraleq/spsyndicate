include('./myproject/config');
var HTTPResponse = require(conf.paths.jason + 'core/responder').HTTPResponse;

try {
    var myResponse = new HTTPResponse(request, response);
    myResponse.route();
} catch (e) {
    response.write("Error: " + e);
}
