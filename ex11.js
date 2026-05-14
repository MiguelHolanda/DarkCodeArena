const readline = require("readline-sync")
let nf = 1
console.log("")
console.log("________________________________________")
console.log("")
console.log(" DESCUBRA O VALOR FATORIAL(!) DE UM NUMERO")
console.log("~~~")
console.log(" (fatorial, é um numero mutiplicado por todos seus antecessores, até o 1)")
console.log("")
console.log("________________________________________")
console.log("")

let n = readline.questionInt(" DIGITE UM NUMERO; ")
console.log("")
console.log("________________________________________")
console.log("")
for(let i = 2; i<=n; i++){
     nf = nf*i
}
console.log(`    ~~ ${n}! =`)
console.log(`            ${nf}`)