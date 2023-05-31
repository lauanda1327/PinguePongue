function victory() {
	if(pontos === 5) {
		alert('jogador venceu, clique em ok para jogar novamente')
		pontos = 0
	}if(pontosOponent === 5) {
		alert('computador venceu, clique em ok para jogar novamente')
		pontosOponent = 0
	}
}