function calcularIMC()
{
    let peso = document.querySelector(`input#pesotxt`)
    let altura = document.querySelector(`input#alturatxt`)
    let imc = Number(peso.value) / ( Math.pow(altura.value / 100, 2) )

    verificarIMC(imc)
}

function verificarIMC(imc)
{
    if ( imc < 18.4 )
    {
        console.log(`Seu imc é ${imc}, você está abaixo do peso`);
    }
    else if ( imc < 24.9 )
    {
        console.log(`Seu imc é ${imc}, você está com o peso normal`);
    }
    else if ( imc < 29.9 )
    {
        console.log(`Seu imc é ${imc}, você está acima do peso`);
    }
    else
    {
        console.log(`Seu imc é ${imc}, você está obeso`);
    }
}