class Circle
	constructor : (@col,@radius,circles) ->  
		count = 1 
		while count > 0
			@x = random width
			@y = random height
			count = 0
			for c in circles
				if dist(c.x,c.y,@x,@y) < @radius*0.4 then count += 1
		@marked = false

	draw : () ->
		fill @col
		noStroke()
		sw 0.05 * @radius
		circle @x, @y, @radius

		if game.ring
			noFill()
			stroke 255,255,255,225
			sw 0.05 * @radius
			circle @x, @y, 1.025*@radius

	within : (x,y) ->
		dist(@x,@y, x,y) < @radius		