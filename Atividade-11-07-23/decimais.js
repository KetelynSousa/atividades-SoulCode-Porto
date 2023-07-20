function arredondarParaCasasDecimais(numero, casasDecimais) {
    return Number(numero.toFixed(casasDecimais));
  }
  
  const numeroExemplo = 3.14159;
  const casasDecimaisDesejadas = 2;
  const numeroArredondado = arredondarParaCasasDecimais(numeroExemplo, casasDecimaisDesejadas);
  console.log(`Número arredondado para ${casasDecimaisDesejadas} casas decimais:`, numeroArredondado);
  