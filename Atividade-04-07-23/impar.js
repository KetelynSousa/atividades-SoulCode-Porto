function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
      return "O número é par.";
    } else {
      return "O número é ímpar.";
    }
  }
  
  const numeroExemplo = 7;
  console.log(verificarParOuImpar(numeroExemplo));
  