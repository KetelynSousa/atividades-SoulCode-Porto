function verificarContemSubstring(texto, substring) {
    return texto.includes(substring);
  }
  
  const textoExemplo = "A casa é bonita.";
  const substringProcurada = "ba";
  const contemSubstring = verificarContemSubstring(textoExemplo, substringProcurada);
  console.log("Contém a substring:", contemSubstring);
  