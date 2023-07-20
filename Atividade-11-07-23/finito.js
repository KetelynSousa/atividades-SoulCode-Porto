function verificarTipoNumero(numero) {
    if (Number.isFinite(numero)) {
      return "Finito";
    } else if (Number.isNaN(numero)) {
      return "NaN";
    } else {
      return "Infinito";
    }
  }
  
  const numeroExemplo = 42;
  const tipoNumero = verificarTipoNumero(numeroExemplo);
  console.log("Tipo do número:", tipoNumero);
  