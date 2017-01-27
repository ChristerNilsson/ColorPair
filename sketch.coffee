game = 0 

class Game
	constructor : (@width,@height) ->
		@level = 1
		@init 0
		@start = Date.now()
		@stopp = Date.now()

	init : (dlevel) ->
		@level += dlevel
		@level = constrain @level,1,64
		@circles = []
		@marked = null # Marked Circle
		@select_colors()
		@stopp = Date.now()
			
	select_colors : ->
		if @level <= 26
			n=3
		else
			n=4
		radius = width/(1.5+@level)
		colors = []
		for i in range n
			for j in range n
				for k in range n
					r = int 255*i/(n-1)
					g = int 255*j/(n-1)
					b = int 255*k/(n-1)
					if i+j+k>0
						colors.push color r,g,b,128
		print colors
		for i in range @level
			index = int random 0,colors.length-1
			col = colors[index]
			colors.splice index,1
			@circles.push new Circle(col,radius,@circles)
			@circles.push new Circle(col,radius,@circles)

	mousePressed : ->
		# You must only mark one circle
		# The second circle must have the same color as the first one.
		n = @circles.length
		count = 0 
		for c,i in @circles
			if c.within mouseX,mouseY
				cc = c 
				index = i		
				count += 1

		@circles = (circle for circle,i in @circles when i != index)
		if count != 1
			@init -1
			return

		if @marked == null
			@marked = cc.col
		else if cc.col == @marked
			@marked = null
			if @circles.length == 0 
				@init 1 # Win
		else
			@init -1 # Lose

setup = ->
	createCanvas windowWidth,windowHeight
	game = new Game windowWidth,windowHeight 
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