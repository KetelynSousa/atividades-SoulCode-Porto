function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
  }
  
  const num1 = parseFloat(prompt("Digite o primeiro número: "));
  const num2 = parseFloat(prompt("Digite o segundo número: "));
  const num3 = parseFloat(prompt("Digite o terceiro número: "));
  
  const maior = maiorNumero(num1, num2, num3);
  console.log(`O maior número é: ${maior}.`);
  