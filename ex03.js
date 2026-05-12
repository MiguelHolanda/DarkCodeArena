const readline = require("readline-sync")

console.log("")
console.log("________________________________________")
console.log("")
console.log("     ~~NOTA DE COMPRA")
console.log("________________________________________")
console.log("")
let v = readline.questionFloat("QUAL O VALOR DA SUA COMPRA?: ")
console.log("")
console.log("________________________________________")
console.log("")
console.log("  ~PAGAMENTO")
console.log("~~~~~~")
console.log("")
console.log(` COMPRA DE R$${v}`)
if(v<200){
}else if(v<=500){
    console.log("")
console.log("  DESCONTO DE 10%")
console.log("~~~")
console.log(`  VOCÊ CONSEGUIU R$${v*0.1} DE DESCONTO`)
}else{
    console.log("")
console.log("  DESCONTO DE 20%")
console.log("~~~")
console.log(`  VOCÊ CONSEGUIU R$${v*0.2} de desconto`)
}
if(v<200){
}else if (v<=500){
    console.log("")
    console.log(`VALOR FINAL DA COMPRA: R$${v-(v*0.1)}`)
}else{
    console.log("")
    console.log(`VALOR FINAL DA COMPRA: R$${v-(v*0*2)}`)
}
console.log("")
console.log("________________________________________")
console.log("")





