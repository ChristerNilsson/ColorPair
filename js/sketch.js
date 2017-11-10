// Generated by CoffeeScript 1.12.7
var client, game, info, keyPressed, mousePressed, newGame, setup, touchStarted, xdraw,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

game = 0;

client = null;

setup = function() {
  client = info();
  print(client);
  if (client.cw === 1920) {
    return createCanvas(1920, 1059);
  } else {
    return createCanvas(640, 338);
  }
};

newGame = function() {
  game = new Game(width, height);
  textSize(24);
  textAlign(CENTER, CENTER);
  return xdraw();
};

xdraw = function() {
  var c, i, len, ref;
  if (!game) {
    return;
  }
  background(game.bg);
  ref = game.circles;
  for (i = 0, len = ref.length; i < len; i++) {
    c = ref[i];
    c.draw();
  }
  fill(255 - game.bg, 255 - game.bg, 255 - game.bg, 127);
  sc();
  sw(1);
  return text("Level " + game.level + " in " + (game.stopp - game.start) + " milliseconds", width / 2, height - 50);
};

mousePressed = function() {
  if (!client.istouch_device && game) {
    game.mousePressed();
    xdraw();
  }
  return false;
};

touchStarted = function() {
  if (client.istouch_device && game) {
    game.mousePressed();
    xdraw();
  }
  return false;
};

keyPressed = function() {
  if (game) {
    if (key === 'R') {
      game.ring = !game.ring;
    }
    if (keyCode === 32) {
      print('space');
      game.bg = 255 - game.bg;
    }
    return xdraw();
  }
};

info = function() {
  var ratio;
  ratio = window.devicePixelRatio || 1;
  return {
    ratio: ratio,
    is_touch_device: indexOf.call(document.documentElement, 'ontouchstart') >= 0,
    sw: screen.width,
    sh: screen.height,
    cw: document.documentElement.clientWidth,
    ch: document.documentElement.clientHeight,
    rw: screen.width * ratio,
    rh: screen.height * ratio
  };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsaUZBQUE7RUFBQTs7QUFBQSxJQUFBLEdBQU87O0FBQ1AsTUFBQSxHQUFTOztBQUVULEtBQUEsR0FBUSxTQUFBO0VBQ1AsTUFBQSxHQUFTLElBQUEsQ0FBQTtFQUNULEtBQUEsQ0FBTSxNQUFOO0VBQ0EsSUFBRyxNQUFNLENBQUMsRUFBUCxLQUFhLElBQWhCO1dBQ0MsWUFBQSxDQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFERDtHQUFBLE1BQUE7V0FHQyxZQUFBLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUhEOztBQUhPOztBQVFSLE9BQUEsR0FBVSxTQUFBO0VBQ1QsSUFBQSxHQUFPLElBQUksSUFBSixDQUFTLEtBQVQsRUFBZSxNQUFmO0VBQ1AsUUFBQSxDQUFTLEVBQVQ7RUFDQSxTQUFBLENBQVUsTUFBVixFQUFpQixNQUFqQjtTQUNBLEtBQUEsQ0FBQTtBQUpTOztBQU1WLEtBQUEsR0FBUSxTQUFBO0FBQ1AsTUFBQTtFQUFBLElBQUcsQ0FBSSxJQUFQO0FBQWlCLFdBQWpCOztFQUNBLFVBQUEsQ0FBVyxJQUFJLENBQUMsRUFBaEI7QUFDQTtBQUFBLE9BQUEscUNBQUE7O0lBQ0MsQ0FBQyxDQUFDLElBQUYsQ0FBQTtBQUREO0VBRUEsSUFBQSxDQUFLLEdBQUEsR0FBSSxJQUFJLENBQUMsRUFBZCxFQUFpQixHQUFBLEdBQUksSUFBSSxDQUFDLEVBQTFCLEVBQTZCLEdBQUEsR0FBSSxJQUFJLENBQUMsRUFBdEMsRUFBeUMsR0FBekM7RUFDQSxFQUFBLENBQUE7RUFDQSxFQUFBLENBQUcsQ0FBSDtTQUNBLElBQUEsQ0FBSyxRQUFBLEdBQVMsSUFBSSxDQUFDLEtBQWQsR0FBb0IsTUFBcEIsR0FBeUIsQ0FBQyxJQUFJLENBQUMsS0FBTCxHQUFXLElBQUksQ0FBQyxLQUFqQixDQUF6QixHQUFnRCxlQUFyRCxFQUFxRSxLQUFBLEdBQU0sQ0FBM0UsRUFBOEUsTUFBQSxHQUFPLEVBQXJGO0FBUk87O0FBVVIsWUFBQSxHQUFlLFNBQUE7RUFDZCxJQUFHLENBQUksTUFBTSxDQUFDLGNBQVgsSUFBOEIsSUFBakM7SUFDQyxJQUFJLENBQUMsWUFBTCxDQUFBO0lBQ0EsS0FBQSxDQUFBLEVBRkQ7O1NBR0E7QUFKYzs7QUFNZixZQUFBLEdBQWUsU0FBQTtFQUNkLElBQUcsTUFBTSxDQUFDLGNBQVAsSUFBMEIsSUFBN0I7SUFDQyxJQUFJLENBQUMsWUFBTCxDQUFBO0lBQ0EsS0FBQSxDQUFBLEVBRkQ7O1NBR0E7QUFKYzs7QUFNZixVQUFBLEdBQWEsU0FBQTtFQUNaLElBQUcsSUFBSDtJQUNDLElBQUcsR0FBQSxLQUFPLEdBQVY7TUFBbUIsSUFBSSxDQUFDLElBQUwsR0FBWSxDQUFJLElBQUksQ0FBQyxLQUF4Qzs7SUFDQSxJQUFHLE9BQUEsS0FBVyxFQUFkO01BQ0MsS0FBQSxDQUFNLE9BQU47TUFDQSxJQUFJLENBQUMsRUFBTCxHQUFVLEdBQUEsR0FBTSxJQUFJLENBQUMsR0FGdEI7O1dBR0EsS0FBQSxDQUFBLEVBTEQ7O0FBRFk7O0FBUWIsSUFBQSxHQUFPLFNBQUE7QUFDTixNQUFBO0VBQUEsS0FBQSxHQUFRLE1BQU0sQ0FBQyxnQkFBUCxJQUEyQjtTQUNuQztJQUFBLEtBQUEsRUFBUSxLQUFSO0lBQ0EsZUFBQSxFQUFrQixhQUFrQixRQUFRLENBQUMsZUFBM0IsRUFBQSxjQUFBLE1BRGxCO0lBRUEsRUFBQSxFQUFLLE1BQU0sQ0FBQyxLQUZaO0lBR0EsRUFBQSxFQUFLLE1BQU0sQ0FBQyxNQUhaO0lBSUEsRUFBQSxFQUFLLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FKOUI7SUFLQSxFQUFBLEVBQUssUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUw5QjtJQU1BLEVBQUEsRUFBSyxNQUFNLENBQUMsS0FBUCxHQUFlLEtBTnBCO0lBT0EsRUFBQSxFQUFLLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLEtBUHJCOztBQUZNIiwic291cmNlc0NvbnRlbnQiOlsiZ2FtZSA9IDAgXHJcbmNsaWVudCA9IG51bGxcclxuXHJcbnNldHVwID0gLT5cclxuXHRjbGllbnQgPSBpbmZvKClcclxuXHRwcmludCBjbGllbnQgXHJcblx0aWYgY2xpZW50LmN3ID09IDE5MjBcclxuXHRcdGNyZWF0ZUNhbnZhcyAxOTIwLCAxMDU5XHJcblx0ZWxzZVxyXG5cdFx0Y3JlYXRlQ2FudmFzIDY0MCwgMzM4XHJcblxyXG5uZXdHYW1lID0gLT5cclxuXHRnYW1lID0gbmV3IEdhbWUgd2lkdGgsaGVpZ2h0IFxyXG5cdHRleHRTaXplIDI0XHJcblx0dGV4dEFsaWduIENFTlRFUixDRU5URVJcclxuXHR4ZHJhdygpXHJcblx0XHRcdFx0XHRcclxueGRyYXcgPSAtPlxyXG5cdGlmIG5vdCBnYW1lIHRoZW4gcmV0dXJuIFxyXG5cdGJhY2tncm91bmQgZ2FtZS5iZ1xyXG5cdGZvciBjIGluIGdhbWUuY2lyY2xlc1xyXG5cdFx0Yy5kcmF3KClcclxuXHRmaWxsIDI1NS1nYW1lLmJnLDI1NS1nYW1lLmJnLDI1NS1nYW1lLmJnLDEyN1xyXG5cdHNjKClcclxuXHRzdyAxXHJcblx0dGV4dCBcIkxldmVsICN7Z2FtZS5sZXZlbH0gaW4gI3tnYW1lLnN0b3BwLWdhbWUuc3RhcnR9IG1pbGxpc2Vjb25kc1wiLCB3aWR0aC8yLCBoZWlnaHQtNTBcclxuXHJcbm1vdXNlUHJlc3NlZCA9IC0+XHJcblx0aWYgbm90IGNsaWVudC5pc3RvdWNoX2RldmljZSBhbmQgZ2FtZVxyXG5cdFx0Z2FtZS5tb3VzZVByZXNzZWQoKVxyXG5cdFx0eGRyYXcoKVxyXG5cdGZhbHNlXHJcblxyXG50b3VjaFN0YXJ0ZWQgPSAtPlxyXG5cdGlmIGNsaWVudC5pc3RvdWNoX2RldmljZSBhbmQgZ2FtZSBcclxuXHRcdGdhbWUubW91c2VQcmVzc2VkKClcclxuXHRcdHhkcmF3KClcclxuXHRmYWxzZVx0XHJcblxyXG5rZXlQcmVzc2VkID0gLT5cclxuXHRpZiBnYW1lIFxyXG5cdFx0aWYga2V5ID09ICdSJyB0aGVuIGdhbWUucmluZyA9IG5vdCBnYW1lLnJpbmdcdFxyXG5cdFx0aWYga2V5Q29kZSA9PSAzMlxyXG5cdFx0XHRwcmludCAnc3BhY2UnXHJcblx0XHRcdGdhbWUuYmcgPSAyNTUgLSBnYW1lLmJnXHJcblx0XHR4ZHJhdygpXHJcblxyXG5pbmZvID0gLT5cclxuXHRyYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuXHRyYXRpbyA6IHJhdGlvXHJcblx0aXNfdG91Y2hfZGV2aWNlIDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcblx0c3cgOiBzY3JlZW4ud2lkdGggXHJcblx0c2ggOiBzY3JlZW4uaGVpZ2h0XHJcblx0Y3cgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcclxuXHRjaCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuXHRydyA6IHNjcmVlbi53aWR0aCAqIHJhdGlvXHJcblx0cmggOiBzY3JlZW4uaGVpZ2h0ICogcmF0aW9cclxuIl19
//# sourceURL=C:\github\ColorPair\coffee\sketch.coffee