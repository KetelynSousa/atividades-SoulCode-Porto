function inverterString(texto) {
    let resultado = '';
    for (let i = texto.length - 1; i >= 0; i--) {
      resultado += texto[i];
    }
    return resultado;
  }
  
  const textoExemplo = "Exemplo de texto";
  const textoInvertido = inverterString(textoExemplo);
  console.log("Texto invertido:", textoInvertido);
  