function converterStringParaNumeroInteiroAnterior(texto) {
    return Math.floor(parseFloat(texto));
  }
  
  const textoExemplo = "3.7";
  const numeroInteiroAnterior = converterStringParaNumeroInteiroAnterior(textoExemplo);
  console.log("Número inteiro anterior:", numeroInteiroAnterior);
  