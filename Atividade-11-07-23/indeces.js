function extrairParteString(texto, inicio, fim) {
    return texto.substring(inicio, fim);
  }
  
  const textoExemplo = "Exemplo de texto para extrair parte.";
  const indiceInicio = 9;
  const indiceFim = 22;
  const parteExtrair = extrairParteString(textoExemplo, indiceInicio, indiceFim);
  console.log("Parte extraída:", parteExtrair);
  