(function() {
  var jade_render;

  jade_render = function(selector, template, message) {
    var fn, html, locals;
    locals = {
      'message': message
    };
    console.log(locals);
    console.log(template);
    fn = jade.compile(template);
    html = fn(locals);
    console.log(html);
    return $(selector).html(html);
  };

  $(function() {
    var template;
    template = '= message + \', and jaded!!!\'';
    return jade_render("#hello h1", template, 'greetings');
  });

}).call(this);
