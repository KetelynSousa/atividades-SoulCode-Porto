function removerEspacosExtras(texto) {
    return texto.trim();
  }
  
  const textoExemplo = "   Texto com espaços em branco extras   ";
  const textoSemEspacosExtras = removerEspacosExtras(textoExemplo);
  console.log("Texto sem espaços extras:", textoSemEspacosExtras);
  