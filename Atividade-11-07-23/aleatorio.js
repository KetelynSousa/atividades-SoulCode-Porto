function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 11) + 10;
  }
  
  const numeroAleatorio = gerarNumeroAleatorio();
  console.log("Número aleatório entre 10 e 20:", numeroAleatorio);
  