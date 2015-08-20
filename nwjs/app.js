var gui = require('nw.gui');
console.log('APP');
navigator.webkitGetUserMedia({video: true},
  function(stream) {
    document.getElementById('camera').src = URL.createObjectURL(stream);
  },
  function() {
    alert('could not connect stream');
  }
);

gui.Window.get().show();
