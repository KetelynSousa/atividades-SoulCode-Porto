function somarDigitos(numero) {
    const digitos = numero.toString().split('');
    const soma = digitos.reduce((acc, digit) => acc + parseInt(digit), 0);
  
    return soma;
  }
  