game = 0 

setup = ->
	createCanvas 0.99*windowWidth, 0.98*windowHeight
	game = new Game width,height 
	textSize 24
	textAlign CENTER,CENTER
	xdraw()
					
xdraw = ->
	background 0
	for c in game.circles
		c.draw()
	fill 255,255,255,127
	sc()
	sw 1
	text "Level #{game.level} in #{game.stopp-game.start} milliseconds", width/2, height-50

mousePressed = ->
	game.mousePressed()
	xdraw()

keyPressed = ->
	game.ring = not game.ring	
	xdraw()