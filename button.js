class Button {
  constructor(x, y, xsize, ysize, red, green, blue, label, textsize){
    this.x = x;
    this.y = y;
    this.xsize = xsize;
    this.ysize = ysize;
    this.red = red;
    this.green = green;
    this.blue = blue;
	this.label = label;
	this.textsize = textsize;
  }
  
  drawButton(){
      fill(255);
      rect(this.x, this.y, this.xsize, this.ysize);
      fill(this.red, this.green, this.blue);
      rect(this.x + 5, this.y + 5, this.xsize - 10, this.ysize - 10);
	  textSize(this.textsize);
	  textAlign(CENTER, CENTER);
	  noStroke();
	  fill(0);
	  text(this.label, (this.x + (this.x + this.xsize)) / 2, (this.y + (this.y + this.ysize)) / 2);
  }
  
  get click(){
    return this.isClicked();
  }
  
  isClicked(){
    if ((mouseX >= this.x && mouseX <= this.x + this.xsize) && 
      (mouseY >= this.y && mouseY <= this.y + this.ysize)){
        return true;
      }
    return false;
  }
}