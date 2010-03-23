include('./myproject/config');
var HTTPResponse = require(conf.paths.jason + 'core/responder').HTTPResponse;

try {
    var myResponse = new HTTPResponse(request, response);
    myResponse.route();
}
catch (e) {
    response.write('<html> \
    <head><title>Oops!</title> \
    <style>body {font-family: "Helvetica Neue", Arial, sans-serif}</style> \
    </head><body> \
    <h1>An Error Occurred:</h1> \
    <p>'+e+'</p> \
    </body></html>');
}
