require.paths.push(system.env.DOCUMENT_ROOT + "/..");
include("jason/core/mootools");
["apple", "orange", "lemon"].each(function(item, index){
        response.write(index + " = " + item + " ");
});
