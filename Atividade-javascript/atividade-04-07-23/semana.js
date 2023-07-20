function verificarDiaUtil(dia) {
    const diasUteis = ["segunda", "terça", "quarta", "quinta", "sexta"];
    if (diasUteis.includes(dia.toLowerCase())) {
      return "Dia útil";
    } else if (dia.toLowerCase() === "sábado" || dia.toLowerCase() === "domingo") {
      return "Fim de semana";
    } else {
      return "Dia inválido ou escrito incorretamente.";
    }
  }
  
  const nomeDia = prompt("Digite o nome de um dia da semana: ");
  const resultado = verificarDiaUtil(nomeDia);
  console.log(resultado);
  
  