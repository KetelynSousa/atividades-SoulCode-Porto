function converterParaMaiusculas(texto) {
    return texto.toUpperCase();
  }
  
  function converterParaMinusculas(texto) {
    return texto.toLowerCase();
  }
  
  const textoExemplo = "Exemplo De TeXto";
  const textoMaiusculo = converterParaMaiusculas(textoExemplo);
  const textoMinusculo = converterParaMinusculas(textoExemplo);
  
  console.log("Texto em maiúsculas:", textoMaiusculo);
  console.log("Texto em minúsculas:", textoMinusculo);
  