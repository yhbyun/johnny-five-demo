/*
select one randomly from six LED, and turn it on (off)
*/

var five = require("johnny-five")
  , board
  , led = [];

board = new five.Board();

board.on("ready", function() {
  var i, j, len;
  var rnd;

  // Create a standard `led` hardware instance
  for (i = 2, j = 0; i < 8; i++, j++) {
    console.log(i);
    console.log(j);
    led[j] = new five.Led({
      pin: i
    });
  }

  len = led.length;
  for (i = 0; i < len; i++) {
    led[i].on();
  }

  this.loop(10, function() {
    rnd = Math.floor(Math.random() * len);
    led[rnd].isOn ? led[rnd].off() : led[rnd].on();
  });
});
