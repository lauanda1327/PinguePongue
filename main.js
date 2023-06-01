let disposivo
if ('ontouchstart' in window) {
	disposivo = "touch"
  }else{
	disposivo = "notouch"
  }

function setup() {
	if(disposivo == "notouch"){
		configurar();
	}else if(disposivo == "touch"){
		window.location.replace("./message.html");
	}
}

function draw() {
	if(disposivo == "notouch"){
		desenhar();
	}
}