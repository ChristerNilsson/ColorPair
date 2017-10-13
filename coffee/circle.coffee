THICKNESS = 0.05 # %

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
		if game.ring
			fill @col
			noStroke()
			sw THICKNESS * @radius
			circle @x, @y, (1-THICKNESS/2) * @radius

			noFill()
			stroke 255,255,255,225
			sw THICKNESS * @radius
			circle @x, @y, @radius
			#sw 1
			#text @col,@x,@y
		else
			fill @col
			noStroke()
			sw THICKNESS * @radius
			circle @x, @y, (1+THICKNESS/2) * @radius

	within : (x,y) -> dist(@x,@y, x,y) < (1+THICKNESS/2) * @radius		