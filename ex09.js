const readline = require("readline-sync")

let maior = 0 
console.log("")
console.log("________________________________________")
console.log("")
console.log("              MAIOR TERMO")
console.log("________________________________________")
console.log("")
console.log("DIGITE 3 NUMEROS INTEIROS")
console.log("~~~")
console.log("")


for (let i = 1; i < 4; i++) {
   let nun = readline.questionInt(`${i}º NUMERO; `)
   if(nun>maior){
    maior = nun
   }
   if(nun>maior){
    maior= nun
   }
   if(nun>maior)
    maior= nun

   console.log("~~~")
}
console.log("")
console.log("_______________________")
console.log("")
console.log(`O MAIOR NUMERO É ${maior}`)
console.log("")
console.log("________________________________________")
console.log("")