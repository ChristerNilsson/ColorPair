game = 0 
client = null

setup = ->
	#screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation
	#if screen.lockOrientationUniversal and screen.lockOrientationUniversal "landscape" then print 'landscape'
	if screen and screen.orientation then screen.orientation.lock 'landscape' 

	client = info()
	print client 
	if client.cw == 1920
		start.style.position = "absolute"
		start.style.left = "500px"
		start.style.top = "250px"
		start.style.width = "1000px"
		start.style.height = "500px"
		c = createCanvas 1900, 1059
		#c.parent "canvas"		
		#c.position 10,10 
	else
		start.style.position = "absolute"
		start.style.left = "160px"
		start.style.top = "85px"
		start.style.width = "320px"
		start.style.height = "170px"
		c = createCanvas 620, 338
		#c.parent "canvas"		
		#c.position 10,10 

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
