include('./myproject/config');
include(conf.paths.jason + 'core/mootools');

var objToHTML = function(obj) {
    var theHTML = conf.templates.doctype + '<html>';
    
    var tagIt = function(value, key) {
        theHTML += '<' + key + '>';
        if ($type(value) == 'object') {
            $H(value).each(tagIt);
        }
        else {
            theHTML += value;
        }
        theHTML += '</' + key + '>';
    }
    
    $H(obj).each(tagIt);
    theHTML += '</html>';
    
    return theHTML;
}

var Template = new Class({
    initialize: function(filepath, context) {
        this.filepath = filepath;
        this.context = context;
    },
    render: function() {
        var template = new Hash(require(this.filepath).template),
            content = template.has('html') ? objToHTML(template.html) : null;

        if ($defined(content)) {
            return content;
        }
        else {
            throw this.filepath + " is an invalid JSON template.";
        }
    }
});

exports.Template = Template;
