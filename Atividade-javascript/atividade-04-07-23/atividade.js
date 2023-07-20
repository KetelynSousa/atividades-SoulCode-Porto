function verificarNumero(numero) {
    if (numero > 0) {
      return "Positivo";
    } else if (numero < 0) {
      return "Negativo";
    } else {
      return "Zero";
    }
  }
  
  const num = parseFloat(prompt("Digite um número: "));
  const resultado = verificarNumero(num);
  console.log(`O número é ${resultado}.`);

  
  
