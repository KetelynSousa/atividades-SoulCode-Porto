function contarLetrasA(texto) {
    const regex = /a/gi; // 'g' para procurar todas as ocorrências e 'i' para ignorar maiúsculas e minúsculas
    const quantidadeAs = texto.match(regex)?.length || 0;
    return quantidadeAs;
  }
  
  const textoExemplo = "Este é um texto de exemplo com algumas letras A.";
  const quantidadeAs = contarLetrasA(textoExemplo);
  console.log("Quantidade de letras 'a':", quantidadeAs);
  