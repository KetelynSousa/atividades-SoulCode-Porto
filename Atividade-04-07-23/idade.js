function podeDirigir(idade) {
    return idade >= 18 ? "Pode dirigir." : "Não pode dirigir.";
  }
  
  const idadePessoa = 20;
  console.log(podeDirigir(idadePessoa));
  