function IA(){
	let velocidade = 10;

	stroke(97,0,255);
	strokeWeight(4);
  fill(15,3,20);
	rect(oponente.x, oponente.y, oponente.width, oponente.height, 3);

  if (ball.y < height / 2  && ball.ydirection < 0) {
  	//mover o oponente para jogar
  	if (ball.x > oponente.x + oponente.width / 2 + velocidade) {
  		//mover para direita
  		if (oponente.x + oponente.width <= width) {//limite da tela
  			oponente.x += velocidade;
  		}
  	}
  	if (ball.x < oponente.x + oponente.width / 2 - velocidade) {
  		//mover para esquerda
  		if (oponente.x + oponente.width <= width) {//limite da tela
  			oponente.x -= velocidade;
  		}
  	}
  }else{
  	//posicionar o oponente no centro
  	if (oponente.x + oponente.width / 2 < width / 2) {
  		oponente.x += velocidade;
  	}
  	if (oponente.x + oponente.width / 2 > width / 2) {
  		oponente.x -= velocidade;
  	}
  }
}
