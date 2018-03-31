function draw_triangle(x, y){
	stroke(255);
	push();
	translate(x, y);
	rotate(Math.atan2(mouseY - y, mouseX - x));
	line(10, 0, -10, -5);
	line(-10, -5, -10, 5);
	line(-10, 5, 10, 0);
	pop();
}

function setup(){
  createCanvas(window.innerWidth - 25, window.innerHeight - 30);
  background(0);
  stroke(255);
  strokeWeight(3);
}

function draw(){
	background(0);
	draw_triangle(100, 100);
	draw_triangle(width - 100, 100);
	draw_triangle(width - 100, height - 100);
	draw_triangle(100, height - 100);
	
	line(100, 100, mouseX, mouseY);
	line(width - 100, 100, mouseX, mouseY);
	line(width - 100, height - 100, mouseX, mouseY);
	line(100, height - 100, mouseX, mouseY);
}