let tela = 2;

function setup() {

	if (tela === 1) {
		configurar();
	}
	if(tela === 2) {
		createCanvas(windowWidth / 1.6, windowHeight / 1.3);
  		noStroke();
  		frameRate(30);
	}
}

function draw() {
	if(tela === 1){
		desenhar();
	}
	if(tela === 2){
		background(15,3,20);
		fill(15,3,20);
		stroke(100);
		strokeWeight(4);
		rect(width / 2, height / 2, 200, 90, 15);
		stroke(120);
		strokeWeight(4);
		rect(width / 4, height / 2, 200, 90, 15);
	}
}