require.paths.push(system.env.DOCUMENT_ROOT + "/..");
var HTTPResponse = require("jason/core/responder").HTTPResponse;

try {
    var myResponse = new HTTPResponse(request, response);
    myResponse.route();
} catch (e) {
    response.write("Error: " + e);
}
