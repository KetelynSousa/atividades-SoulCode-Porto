function calcularMedia(vetor) {
    const soma = vetor.reduce((acc, curr) => acc + curr, 0);
    return soma / vetor.length;
  }
  