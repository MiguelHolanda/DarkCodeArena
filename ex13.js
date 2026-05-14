const readline = require("readline-sync")
console.log("")
console.log("________________________________________")
console.log("")
console.log("     CAUCULO DE IMC (indice de massa corporal)")
console.log("________________________________________")
console.log("")
console.log("   DIGITE SEUS DADOS")
console.log("~~~~~")
let a = readline.questionFloat("    ALTURA(m);  ")
console.log("~~~")
let p = readline.questionFloat("    PESO(kg);  ")
console.log("")
console.log("________________________________________")
console.log("")
console.log("     ~~~IMC")
console.log("")

if (a <= 0 || p <= 0) {
  console.log("   Altura e peso devem ser maiores que zero.")
  console.log("")
  console.log("________________________________________")
  console.log("")
  
} else {
  
let imc = p/(a*a)


console.log(` SEU IMC É ${imc.toFixed(2)}`)
console.log("")
if(imc<18.5){
    console.log("  VOCẼ ESTA ABAIXO DO PESO")
}else if(imc<25){
    console.log("  VOCẼ ESTA COM PESO NORMAL")
}else if(imc<30){
    console.log("  VOCÊ ESTA COM EXCESSO  DE PESO ")
}else{
    console.log("   VOCÊ ESTA COM OBESIDADE")
}
console.log("")
console.log("________________________________________")
console.log("")
}