function media() {
    var total = 0
    for(let idx in arguments){
        total +=arguments[idx]
    }

    return total/(arguments.length)    
}

function calcular(valor, desconto) {
    if (typeof(desconto) =="undefined") desconto = '25'    
    //desconto = desconto || 25 //não funciona para o valor de descont 0

    var valorComDesconto = valor - (valor *(desconto/100))

    return valorComDesconto    
}

function executar(funcao, ...args) {  
    return funcao(...args)
}

const adicao = (a, b) => a + b 

let pegaMaiorValor =(a,b) => (a > b) ? a : b

let arr = [1, 2, 3]

function spread(x, y, z){
    console.log(x, y, z)
}
function rest(...args){
    console.log(args)
}

console.log('A média é : ', media(10,8,7,6,5))
console.log('O valor com desconto é: ', calcular(100, 0))
console.log('O valor com desconto é: ', executar(calcular, 100, 50))
console.log('A média é : ', executar(media, 10, 9))
console.log('A soma é : ', (1,2))
console.log('O nvalor maior é : ', pegaMaiorValor(5,6))
console.log('O nvalor maior é : ', pegaMaiorValor(6, 7))
spread(...arr)
rest(10,8,7,6,5)