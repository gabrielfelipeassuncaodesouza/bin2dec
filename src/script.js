const visor = document.getElementById("visor")

function converter() {
  
  let numberValue = parseInt(visor.value, 2)
  visor.value = numberValue.toString(10)
}

function limpar() {
  
  visor.value = ""
}