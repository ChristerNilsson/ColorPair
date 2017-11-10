// Generated by CoffeeScript 1.12.7
var client, game, info, keyPressed, mousePressed, newGame, setup, touchStarted, xdraw,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

game = 0;

client = null;

setup = function() {
  var c;
  if (screen && screen.orientation) {
    screen.orientation.lock('landscape');
  }
  client = info();
  print(client);
  if (client.cw === 1920) {
    start.style.position = "absolute";
    start.style.left = "500px";
    start.style.top = "250px";
    start.style.width = "1000px";
    start.style.height = "500px";
    return c = createCanvas(1900, 1059);
  } else {
    start.style.position = "absolute";
    start.style.left = "160px";
    start.style.top = "85px";
    start.style.width = "320px";
    start.style.height = "170px";
    return c = createCanvas(620, 338);
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
  return text("Level " + game.level + " in " + (game.stopp - game.start) + " milliseconds", width / 2, height - 20);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsaUZBQUE7RUFBQTs7QUFBQSxJQUFBLEdBQU87O0FBQ1AsTUFBQSxHQUFTOztBQUVULEtBQUEsR0FBUSxTQUFBO0FBR1AsTUFBQTtFQUFBLElBQUcsTUFBQSxJQUFXLE1BQU0sQ0FBQyxXQUFyQjtJQUFzQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQW5CLENBQXdCLFdBQXhCLEVBQXRDOztFQUVBLE1BQUEsR0FBUyxJQUFBLENBQUE7RUFDVCxLQUFBLENBQU0sTUFBTjtFQUNBLElBQUcsTUFBTSxDQUFDLEVBQVAsS0FBYSxJQUFoQjtJQUNDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBWixHQUF1QjtJQUN2QixLQUFLLENBQUMsS0FBSyxDQUFDLElBQVosR0FBbUI7SUFDbkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFaLEdBQWtCO0lBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBWixHQUFvQjtJQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQVosR0FBcUI7V0FDckIsQ0FBQSxHQUFJLFlBQUEsQ0FBYSxJQUFiLEVBQW1CLElBQW5CLEVBTkw7R0FBQSxNQUFBO0lBVUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFaLEdBQXVCO0lBQ3ZCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBWixHQUFtQjtJQUNuQixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQVosR0FBa0I7SUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFaLEdBQW9CO0lBQ3BCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBWixHQUFxQjtXQUNyQixDQUFBLEdBQUksWUFBQSxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFmTDs7QUFQTzs7QUEwQlIsT0FBQSxHQUFVLFNBQUE7RUFDVCxJQUFBLEdBQU8sSUFBSSxJQUFKLENBQVMsS0FBVCxFQUFlLE1BQWY7RUFDUCxRQUFBLENBQVMsRUFBVDtFQUNBLFNBQUEsQ0FBVSxNQUFWLEVBQWlCLE1BQWpCO1NBQ0EsS0FBQSxDQUFBO0FBSlM7O0FBTVYsS0FBQSxHQUFRLFNBQUE7QUFDUCxNQUFBO0VBQUEsSUFBRyxDQUFJLElBQVA7QUFBaUIsV0FBakI7O0VBQ0EsVUFBQSxDQUFXLElBQUksQ0FBQyxFQUFoQjtBQUNBO0FBQUEsT0FBQSxxQ0FBQTs7SUFDQyxDQUFDLENBQUMsSUFBRixDQUFBO0FBREQ7RUFFQSxJQUFBLENBQUssR0FBQSxHQUFJLElBQUksQ0FBQyxFQUFkLEVBQWlCLEdBQUEsR0FBSSxJQUFJLENBQUMsRUFBMUIsRUFBNkIsR0FBQSxHQUFJLElBQUksQ0FBQyxFQUF0QyxFQUF5QyxHQUF6QztFQUNBLEVBQUEsQ0FBQTtFQUNBLEVBQUEsQ0FBRyxDQUFIO1NBQ0EsSUFBQSxDQUFLLFFBQUEsR0FBUyxJQUFJLENBQUMsS0FBZCxHQUFvQixNQUFwQixHQUF5QixDQUFDLElBQUksQ0FBQyxLQUFMLEdBQVcsSUFBSSxDQUFDLEtBQWpCLENBQXpCLEdBQWdELGVBQXJELEVBQXFFLEtBQUEsR0FBTSxDQUEzRSxFQUE4RSxNQUFBLEdBQU8sRUFBckY7QUFSTzs7QUFVUixZQUFBLEdBQWUsU0FBQTtFQUNkLElBQUcsQ0FBSSxNQUFNLENBQUMsY0FBWCxJQUE4QixJQUFqQztJQUNDLElBQUksQ0FBQyxZQUFMLENBQUE7SUFDQSxLQUFBLENBQUEsRUFGRDs7U0FHQTtBQUpjOztBQU1mLFlBQUEsR0FBZSxTQUFBO0VBQ2QsSUFBRyxNQUFNLENBQUMsY0FBUCxJQUEwQixJQUE3QjtJQUNDLElBQUksQ0FBQyxZQUFMLENBQUE7SUFDQSxLQUFBLENBQUEsRUFGRDs7U0FHQTtBQUpjOztBQU1mLFVBQUEsR0FBYSxTQUFBO0VBQ1osSUFBRyxJQUFIO0lBQ0MsSUFBRyxHQUFBLEtBQU8sR0FBVjtNQUFtQixJQUFJLENBQUMsSUFBTCxHQUFZLENBQUksSUFBSSxDQUFDLEtBQXhDOztJQUNBLElBQUcsT0FBQSxLQUFXLEVBQWQ7TUFDQyxLQUFBLENBQU0sT0FBTjtNQUNBLElBQUksQ0FBQyxFQUFMLEdBQVUsR0FBQSxHQUFNLElBQUksQ0FBQyxHQUZ0Qjs7V0FHQSxLQUFBLENBQUEsRUFMRDs7QUFEWTs7QUFRYixJQUFBLEdBQU8sU0FBQTtBQUNOLE1BQUE7RUFBQSxLQUFBLEdBQVEsTUFBTSxDQUFDLGdCQUFQLElBQTJCO1NBQ25DO0lBQUEsS0FBQSxFQUFRLEtBQVI7SUFDQSxlQUFBLEVBQWtCLGFBQWtCLFFBQVEsQ0FBQyxlQUEzQixFQUFBLGNBQUEsTUFEbEI7SUFFQSxFQUFBLEVBQUssTUFBTSxDQUFDLEtBRlo7SUFHQSxFQUFBLEVBQUssTUFBTSxDQUFDLE1BSFo7SUFJQSxFQUFBLEVBQUssUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUo5QjtJQUtBLEVBQUEsRUFBSyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBTDlCO0lBTUEsRUFBQSxFQUFLLE1BQU0sQ0FBQyxLQUFQLEdBQWUsS0FOcEI7SUFPQSxFQUFBLEVBQUssTUFBTSxDQUFDLE1BQVAsR0FBZ0IsS0FQckI7O0FBRk0iLCJzb3VyY2VzQ29udGVudCI6WyJnYW1lID0gMCBcclxuY2xpZW50ID0gbnVsbFxyXG5cclxuc2V0dXAgPSAtPlxyXG5cdCNzY3JlZW4ubG9ja09yaWVudGF0aW9uVW5pdmVyc2FsID0gc2NyZWVuLmxvY2tPcmllbnRhdGlvbiB8fCBzY3JlZW4ubW96TG9ja09yaWVudGF0aW9uIHx8IHNjcmVlbi5tc0xvY2tPcmllbnRhdGlvblxyXG5cdCNpZiBzY3JlZW4ubG9ja09yaWVudGF0aW9uVW5pdmVyc2FsIGFuZCBzY3JlZW4ubG9ja09yaWVudGF0aW9uVW5pdmVyc2FsIFwibGFuZHNjYXBlXCIgdGhlbiBwcmludCAnbGFuZHNjYXBlJ1xyXG5cdGlmIHNjcmVlbiBhbmQgc2NyZWVuLm9yaWVudGF0aW9uIHRoZW4gc2NyZWVuLm9yaWVudGF0aW9uLmxvY2sgJ2xhbmRzY2FwZScgXHJcblxyXG5cdGNsaWVudCA9IGluZm8oKVxyXG5cdHByaW50IGNsaWVudCBcclxuXHRpZiBjbGllbnQuY3cgPT0gMTkyMFxyXG5cdFx0c3RhcnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcclxuXHRcdHN0YXJ0LnN0eWxlLmxlZnQgPSBcIjUwMHB4XCJcclxuXHRcdHN0YXJ0LnN0eWxlLnRvcCA9IFwiMjUwcHhcIlxyXG5cdFx0c3RhcnQuc3R5bGUud2lkdGggPSBcIjEwMDBweFwiXHJcblx0XHRzdGFydC5zdHlsZS5oZWlnaHQgPSBcIjUwMHB4XCJcclxuXHRcdGMgPSBjcmVhdGVDYW52YXMgMTkwMCwgMTA1OVxyXG5cdFx0I2MucGFyZW50IFwiY2FudmFzXCJcdFx0XHJcblx0XHQjYy5wb3NpdGlvbiAxMCwxMCBcclxuXHRlbHNlXHJcblx0XHRzdGFydC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxyXG5cdFx0c3RhcnQuc3R5bGUubGVmdCA9IFwiMTYwcHhcIlxyXG5cdFx0c3RhcnQuc3R5bGUudG9wID0gXCI4NXB4XCJcclxuXHRcdHN0YXJ0LnN0eWxlLndpZHRoID0gXCIzMjBweFwiXHJcblx0XHRzdGFydC5zdHlsZS5oZWlnaHQgPSBcIjE3MHB4XCJcclxuXHRcdGMgPSBjcmVhdGVDYW52YXMgNjIwLCAzMzhcclxuXHRcdCNjLnBhcmVudCBcImNhbnZhc1wiXHRcdFxyXG5cdFx0I2MucG9zaXRpb24gMTAsMTAgXHJcblxyXG5uZXdHYW1lID0gLT5cclxuXHRnYW1lID0gbmV3IEdhbWUgd2lkdGgsaGVpZ2h0IFxyXG5cdHRleHRTaXplIDI0XHJcblx0dGV4dEFsaWduIENFTlRFUixDRU5URVJcclxuXHR4ZHJhdygpXHJcblx0XHRcdFx0XHRcclxueGRyYXcgPSAtPlxyXG5cdGlmIG5vdCBnYW1lIHRoZW4gcmV0dXJuIFxyXG5cdGJhY2tncm91bmQgZ2FtZS5iZ1xyXG5cdGZvciBjIGluIGdhbWUuY2lyY2xlc1xyXG5cdFx0Yy5kcmF3KClcclxuXHRmaWxsIDI1NS1nYW1lLmJnLDI1NS1nYW1lLmJnLDI1NS1nYW1lLmJnLDEyN1xyXG5cdHNjKClcclxuXHRzdyAxXHJcblx0dGV4dCBcIkxldmVsICN7Z2FtZS5sZXZlbH0gaW4gI3tnYW1lLnN0b3BwLWdhbWUuc3RhcnR9IG1pbGxpc2Vjb25kc1wiLCB3aWR0aC8yLCBoZWlnaHQtMjBcclxuXHJcbm1vdXNlUHJlc3NlZCA9IC0+XHJcblx0aWYgbm90IGNsaWVudC5pc3RvdWNoX2RldmljZSBhbmQgZ2FtZVxyXG5cdFx0Z2FtZS5tb3VzZVByZXNzZWQoKVxyXG5cdFx0eGRyYXcoKVxyXG5cdGZhbHNlXHJcblxyXG50b3VjaFN0YXJ0ZWQgPSAtPlxyXG5cdGlmIGNsaWVudC5pc3RvdWNoX2RldmljZSBhbmQgZ2FtZSBcclxuXHRcdGdhbWUubW91c2VQcmVzc2VkKClcclxuXHRcdHhkcmF3KClcclxuXHRmYWxzZVx0XHJcblxyXG5rZXlQcmVzc2VkID0gLT5cclxuXHRpZiBnYW1lIFxyXG5cdFx0aWYga2V5ID09ICdSJyB0aGVuIGdhbWUucmluZyA9IG5vdCBnYW1lLnJpbmdcdFxyXG5cdFx0aWYga2V5Q29kZSA9PSAzMlxyXG5cdFx0XHRwcmludCAnc3BhY2UnXHJcblx0XHRcdGdhbWUuYmcgPSAyNTUgLSBnYW1lLmJnXHJcblx0XHR4ZHJhdygpXHJcblxyXG5pbmZvID0gLT5cclxuXHRyYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuXHRyYXRpbyA6IHJhdGlvXHJcblx0aXNfdG91Y2hfZGV2aWNlIDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcblx0c3cgOiBzY3JlZW4ud2lkdGggXHJcblx0c2ggOiBzY3JlZW4uaGVpZ2h0XHJcblx0Y3cgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcclxuXHRjaCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuXHRydyA6IHNjcmVlbi53aWR0aCAqIHJhdGlvXHJcblx0cmggOiBzY3JlZW4uaGVpZ2h0ICogcmF0aW9cclxuIl19
//# sourceURL=C:\github\ColorPair\coffee\sketch.coffee