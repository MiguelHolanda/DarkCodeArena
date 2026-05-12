const readline = require("readline-sync")
let soma = 0
console.log("")
console.log("________________________________________")
console.log("")
console.log("              SOMA DE 5 TERMOS")
console.log("________________________________________")
console.log("")
console.log("DIGITE 5 NUMEROS INTEIROS")
console.log("~~~")
console.log("")


for (let i = 1; i < 6; i++) {
   let a = readline.questionInt(`${i}º NUMERO; `)
   console.log("~~~")
    soma = soma + a;
}
console.log("")
console.log("_______________________")
console.log("")
console.log(`A SOMA TOTAL É  ${soma}`)
console.log("")
console.log("________________________________________")
console.log("")