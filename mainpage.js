var b;

function setup(){
  createCanvas(window.innerWidth - 25, window.innerHeight - 30);
  background(0);
  stroke(255);
  strokeWeight(1);
  b = new Button(100, 100, 100, 50, 255, 0, 0, "Experiment #1", 12);
  b.drawButton();
}

function draw(){
	background(0);
	b.drawButton();
}

function mousePressed(){
  if (b.click){
    document.location.href = "./exp1.html";
  }
}