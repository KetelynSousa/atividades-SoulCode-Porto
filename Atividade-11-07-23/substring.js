function substituirSubstring(texto, substringAntiga, substringNova) {
    return texto.replace(new RegExp(substringAntiga, 'g'), substringNova);
  }
  
  const textoExemplo = "Esse é um exemplo de texto com exemplo.";
  const substringAntiga = "exemplo";
  const substringNova = "EXEMPLO";
  const textoAlterado = substituirSubstring(textoExemplo, substringAntiga, substringNova);
  console.log("Texto alterado:", textoAlterado);
  