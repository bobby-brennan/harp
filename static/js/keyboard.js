var charToNote = {
  A: 'C',
  W: 'CS',
  S: 'D',
  E: 'DS',
  D: 'E',
  F: 'F',
  T: 'FS',
  G: 'G',
  Y: 'GS',
  H: 'A',
  U: 'AS',
  J: 'B',
}

$(document).ready(function() {
  $('body').keydown(function(e) {
    var note = charToNote[String.fromCharCode(e.which)];
    if (!note) return;
    var el = $('.key.' + note);
    var curClass = el.attr('class');
    el.attr('class', curClass + ' active');   
  });

  $('body').keyup(function(e) {
    var note = charToNote[String.fromCharCode(e.which)];
    if (!note) return;
    var el = $('.key.' + note);
    var curClass = el.attr('class');
    el.attr('class', curClass.replace(/active/g, ''));
  });
})
