var enviro = flock.init();
enviro.start();

var keyBindings = {
  a: 'c4',
  s: 'd4',
  d: 'e4',
  f: 'f4',
  g: 'g4',
  h: 'a4',
  j: 'b4',
  k: 'c5',
}

var synth = flock.synth({
  synthDef: {
    id: 'carrier',
    ugen: 'flock.ugen.sin',
    freq: 440
  },
  addToEnvironment: false,
});
synth.pause();
enviro.head(synth);

$(document).ready(function() {
  $('body').bind('keydown', function(e) {
    var c = String.fromCharCode(e.keyCode).toLowerCase();
    var note = keyBindings[c];
    if (note) {
      synth.set("carrier.freq", NOTES[note]);
      synth.play();
    }
  })
  $('body').bind('keyup', function(e) {
    synth.pause();
  })
});
