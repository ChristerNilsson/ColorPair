game = 0 
client = null

setup = ->
	client = info()
	print client 
	if client.cw == 1920
		createCanvas 1920, 1059
	else
		createCanvas 640, 336

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
	text "Level #{game.level} in #{game.stopp-game.start} milliseconds", width/2, height-50

mousePressed = ->
	if not client.istouch_device and game
		game.mousePressed()
		xdraw()
	false

touchStarted = ->
	if client.istouch_device and game 
		game.mousePressed()
		xdraw()
	false	

keyPressed = ->
	if game 
		if key == 'R' then game.ring = not game.ring	
		if keyCode == 32
			print 'space'
			game.bg = 255 - game.bg
		xdraw()

info = ->
	ratio = window.devicePixelRatio || 1
	ratio : ratio
	is_touch_device : 'ontouchstart' in document.documentElement
	sw : screen.width 
	sh : screen.height
	cw : document.documentElement.clientWidth
	ch : document.documentElement.clientHeight
	rw : screen.width * ratio
	rh : screen.height * ratio
