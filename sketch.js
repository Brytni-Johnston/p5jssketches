function setup() { 
  createCanvas(displayWidth,displayHeight);
} 

function mousePressed() {
  	Rlow = random(255);
  	Rhigh = random(255);
  	Glow = random(150,200);
  	Ghigh = random(200,255);
  	Blow = random(150,200);
  	Bhigh = random(200,255);

}

function touchMoved() { 
	R = random(Rlow,Rhigh);
  G = random(Glow,Ghigh);
  B = random(Blow,Bhigh);
	W = random(2,15);
	
	line(mouseX,mouseY,pmouseX,pmouseY);
	stroke(R,G,B);
	strokeWeight(W);
  return false;
  
  
}

