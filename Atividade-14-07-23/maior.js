function encontrarMaiorValor(vetor) {
    let maior = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
      if (vetor[i] > maior) {
        maior = vetor[i];
      }
    }
    return maior;
  }
  