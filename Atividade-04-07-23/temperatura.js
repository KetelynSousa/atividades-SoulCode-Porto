function converterCelsiusParaFahrenheit(tempCelsius) {
    return (tempCelsius * 9/5) + 32;
  }
  
  const temperaturaCelsius = 25;
  console.log("Temperatura em Fahrenheit: " + converterCelsiusParaFahrenheit(temperaturaCelsius));
  