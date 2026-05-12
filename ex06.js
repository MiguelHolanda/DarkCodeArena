const readline = require("readline-sync")


console.log("")
console.log("________________________________________")
console.log("")
console.log("              TABUADA")
console.log("________________________________________")
console.log("")
let nun = readline.questionInt(" DIGITE O NUMERO QUE DESEJA VER A TABUADA: ")
console.log("")
console.log("________________________________________")
console.log("")
console.log(`         TABUADA DO ${nun}`)
console.log("")
for(let i = 1; i<11; i++){
    console.log(`${nun} x ${i} = ${nun*i}`)
    console.log("~~~~")
}
console.log("")
console.log("________________________________________")
console.log("")