function verificarProdutoParOuImpar(a, b) {
    const produto = a * b;
    if (produto % 2 === 0) {
      return "Par";
    } else {
      return "Ímpar";
    }
  }
  
  const num1 = parseInt(prompt("Digite o primeiro número: "));
  const num2 = parseInt(prompt("Digite o segundo número: "));
  
  const resultado = verificarProdutoParOuImpar(num1, num2);
  console.log(`O produto dos números é ${resultado}.`);
  