function obterDiaDaSemana(numero) {
    const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    if (numero >= 1 && numero <= 7) {
      return diasSemana[numero - 1];
    } else {
      return "Número inválido. Digite um número de 1 a 7.";
    }
  }
  
  const num = parseInt(prompt("Digite um número de 1 a 7: "));
  const diaSemana = obterDiaDaSemana(num);
  console.log(`O dia da semana correspondente é: ${diaSemana}.`);
  