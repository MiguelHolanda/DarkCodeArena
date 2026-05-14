const readline = require("readline-sync")

console.log("")
console.log("________________________________________")
console.log("")
console.log("     ~~FECHAMENTO DE NOTAS")
console.log("________________________________________")
console.log("")
let al = readline.question("  ALUNO; ")
console.log("~~~~~")
let nt = readline.questionFloat("  NOTA FINAL; ")
console.log("")
console.log("________________________________________")
console.log("")
console.log("      ~~~RELATORIO")
console.log("")
if(nt < 5 ){
console.log(`O(a) aluno(a) ${al} esta reprovado(a) `)
} else if (nt<7){
    console.log(`o(a) aluno(a) ${al} esta de recuperação`)
}else{
    console.log(`o(a) aluno(a) ${al} esta aprovado(a)`)
}
console.log("")
console.log("________________________________________")
console.log("")