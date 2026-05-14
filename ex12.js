const readline = require("readline-sync")
let p = 0
let n = 0
console.log("")
console.log("________________________________________")
console.log("")
console.log("   POSITIVOS E NEGATIVOS~~~")
console.log("________________________________________")
console.log("")
console.log("  DIGITE 10 NUMEROS")
console.log("~~~")
console.log("")

for(let i = 1;  i<11; i++){
    let n = readline.questionInt(`${i}º NUMERO; `)
    console.log("~~~")
    if(n>=0){
p++
    }else{
        n++
    }
}
console.log("")
console.log(`NUMEROS POSIVOS DIGITADOS; ${p}`)
console.log("")
console.log("________________________________________")
console.log("")
