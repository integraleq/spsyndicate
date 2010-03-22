include('./myproject/config');
include(conf.paths.jason + 'core/mootools');

function objToHTML (obj) {
    var theHTML = conf.templates.doctype + '<html>';
    function tagIt (value, key) {
        theHTML += '<' + key + '>';
        if ($type(value) == 'object') $H(value).each(tagIt);
        else theHTML += value;
        theHTML += '</' + key + '>';
    }
    $H(obj).each(tagIt);
    theHTML += '</html>';
    return theHTML;
}

var Template = new Class({
    initialize: function(filepath, context){
        this.filepath = filepath;
        this.context = context;
    },
    render: function(){
        var content = null, 
            template = new Hash(require(this.filepath).template);
        
        if (template.has('html')) content = objToHTML(template.html);

        if ($defined(content)) return content;
        else throw this.filepath + " is an invalid JSON template.";
    }
});

exports.Template = Template;
