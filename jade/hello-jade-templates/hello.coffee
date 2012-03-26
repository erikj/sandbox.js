
# e.g. https://github.com/visionmedia/jade/blob/master/examples/browser_simple.html

jade_render = ( selector, template, message ) ->

  locals = { 'message':message }
  console.log locals
  console.log template

  fn = jade.compile template
  html = fn locals
  console.log html
  $(selector).html html

$ ->

  template = '''
    = message + ', and jaded!!!'
  '''

  jade_render("#hello h1", template, 'greetings')