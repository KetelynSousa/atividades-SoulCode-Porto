function contarDivisores(numero) {
    let divisores = 0;
  
    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        divisores++;
      }
    }
  
    return divisores;
  }
  