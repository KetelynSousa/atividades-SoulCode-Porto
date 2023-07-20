function verificarDivisivelPor3e5(numero) {
    return numero % 3 === 0 && numero % 5 === 0;
  }
  
  const numeroVerificar = 15;
  console.log(verificarDivisivelPor3e5(numeroVerificar));
  