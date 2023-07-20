function arredondarParaInteiro(numero) {
    return Math.round(numero);
  }
  
  const numeroExemplo = 3.7;
  const inteiroMaisProximo = arredondarParaInteiro(numeroExemplo);
  console.log("Inteiro mais próximo:", inteiroMaisProximo);
  