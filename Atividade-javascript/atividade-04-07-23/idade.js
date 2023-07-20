function verificarIdade(idade) {
    if (idade >= 18) {
      return "Maior de idade";
    } else {
      return "Menor de idade";
    }
  }
  
  const idade = parseInt(prompt("Digite sua idade: "));
  const resultado = verificarIdade(idade);
  console.log(resultado);
  