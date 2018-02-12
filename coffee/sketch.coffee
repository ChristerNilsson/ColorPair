game = 0 

setup = ->
	createCanvas windowWidth,windowHeight
	colorMode HSB
	newGame()

newGame = ->
	game = new Game width,height 
	textSize 24
	textAlign CENTER,CENTER
	xdraw()
					
xdraw = ->
	if not game then return 
	background game.bg
	for c in game.circles
		c.draw()
	fill 255-game.bg,255-game.bg,255-game.bg,127
	sc()
	sw 1
	text "Level #{game.level} in #{game.stopp-game.start} milliseconds", width/2, height-20
	false # to prevent double click on Android

mousePressed = ->
	game.mousePressed()
	xdraw()

touchStarted = ->
	game.mousePressed()
	xdraw()

keyPressed = ->
	if game 
		if key == 'R' then game.ring = not game.ring	
		if keyCode == 32
			print 'space'
			game.bg = 255 - game.bg
		xdraw()
