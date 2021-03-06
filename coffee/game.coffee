class Game
	constructor : (@width,@height) ->
		@level = 1
		@ring = true
		@bg = 0
		@stopp = Date.now()
		@init 0

	init : (dlevel) ->
		@start = @stopp
		@stopp = Date.now()
		@level += dlevel
		@level = constrain @level,1,64
		@circles = []
		@marked = null # Marked Circle
		@select_colors()
			
	select_colors : ->
		#n=4
		#if @level < 3*3*3 then n=3
		#if @level < 2*2*2 then n=2
		radius = width/(0.7+@level) 
		colors = []
		# for i in range n
		# 	for j in range n
		# 		for k in range n
					# r = int 255*i/(n-1)
					# g = int 255*j/(n-1)
					# b = int 255*k/(n-1)
					# if i+j+k>0 then colors.push color r,g,b,127.5
		for i in range @level
			h = int 360*i/@level
			s = 100
			b = 100
			colors.push color h,s,b,0.5
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
