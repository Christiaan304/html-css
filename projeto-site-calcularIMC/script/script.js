/*
function calcularIMC()
{
    let peso = document.querySelector(`input#pesotxt`)
    let altura = document.querySelector(`input#alturatxt`)
    let imc = ( Number(peso.value) / ( Math.pow(altura.value / 100, 2) ) ).toFixed(2)

    verificarIMC(imc)
}

function verificarIMC(imc)
{
    if ( imc < 18.4 )
    {
        res.innerHTML = ``
        res.innerHTML += `<p>Seu imc é ${imc}, você está abaixo do peso</p>`
    }
    else if ( imc < 24.9 )
    {
        res.innerHTML = ``
        res.innerHTML += `<p>Seu imc é ${imc}, você está com o peso normal</p>`
    }
    else if ( imc < 29.9 )
    {
        res.innerHTML = ``
        res.innerHTML += `<p>Seu imc é ${imc}, você está acima do peso</p>`
    }
    else
    {
        res.innerHTML = ``
        res.innerHTML += `<p>Seu imc é ${imc}, você está obeso</p>`
    }
}
*/

$(`#calcular`).click(function(){
    let peso = document.querySelector(`input#pesotxt`)
    let altura = document.querySelector(`input#alturatxt`)
    let imc = ( Number(peso.value) / ( Math.pow(altura.value / 100, 2) ) ).toFixed(2)

    verificarIMC(imc)
});

function verificarIMC(imc)
{
    if ( imc < 18.4 )
    {
        res.innerHTML = ``
        res.innerHTML += `<p>Seu imc é ${imc}, você está abaixo do peso</p>`
    }
    else if ( imc < 24.9 )
    {
        res.innerHTML = ``
        res.innerHTML += `<p>Seu imc é ${imc}, você está com o peso normal</p>`
    }
    else if ( imc < 29.9 )
    {
        res.innerHTML = ``
        res.innerHTML += `<p>Seu imc é ${imc}, você está acima do peso</p>`
    }
    else
    {
        res.innerHTML = ``
        res.innerHTML += `<p>Seu imc é ${imc}, você está obeso</p>`
    }
}