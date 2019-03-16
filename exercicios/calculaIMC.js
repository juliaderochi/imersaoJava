
function calculaIMC(peso, altura) {
    var imc = peso/(altura*altura)
    console.log(imc)
     if (imc < 18.5){
        alert("Você está magro com esse indice: " + calculo);
     } else if (imc < 24.9)    {
        console.log('Você com o peso normal')
     } else{
        console.log('Você está acima do peso')
     }
}

//calculaIMC('70', '1.65')
//calculaIMC('65', '1.65')
calculaIMC('40', '1.65')
