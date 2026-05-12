const readline = require("readline-sync")
let turma = 0
let acima = 0
let abaixo = 0

console.log("")
console.log("________________________________________")
console.log("")
console.log("         SALA SEDUC-DEST-1 ")
console.log("________________________________________")
console.log("")
let al = readline.questionInt("  QUANTOS ALUNO HÁ NA SALA?: ")
console.log("________________________________________")
console.log("")
console.log(" DIGITE A NOTA FINAL DOS ALUNOS")
console.log("~~~~")
console.log("")
for(let i = 1; i<=al; i++){
    let nt = readline.questionFloat(` nota do  aluno numero Nº${i}:  `)
    if(nt<5){
        acima ++
    }else {
        abaixo++
    }
    turma = turma + nt;
    console.log("~~~")
}
console.log("")
console.log("________________________________________")
console.log("")
console.log("   MEDIA FINAL DA TURMA:")
let media = turma/al
console.log(`   ~~~ ${media.toFixed(2)}`)
console.log("")
console.log(` ${acima} alunos estam acima da média`)
console.log("~~~")
console.log(` ${abaixo} estam a baixo da média`)
console.log("")
console.log("________________________________________")
console.log("")



