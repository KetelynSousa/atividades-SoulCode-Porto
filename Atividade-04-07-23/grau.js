function calcularDelta(a, b, c) {
    return (b ** 2) - (4 * a * c);
  }
  
  const coeficienteA = 1;
  const coeficienteB = -5;
  const coeficienteC = 6;
  console.log("Delta: " + calcularDelta(coeficienteA, coeficienteB, coeficienteC));
  