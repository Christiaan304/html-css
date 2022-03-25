/** https://coursesweb.net/javascript/zodiac-signs_cs */

$(document).ready(function(){

    function calcularSigno(dia, mes)
    {
        let zodiaco =['', 'Capricórnio', 'Aquário', 'Peixes', 'Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitario', 'Capricórnio']
        let ultimoDia =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19]
        return (dia > ultimoDia[mes]) ? zodiaco[mes + 1] : zodiaco[mes]
    }

    $(`input#descobrir`).click(function verificarSigno(){
        let signo = calcularSigno( $(`select#diaNascimento`).val(), $(`select#mesNascimento`).val() )

        let img = document.querySelector(`img#imagem`)
        
        if ( signo == `Capricórnio` )
        {
            img.src = `image/capricorn.png`
            res.innerHTML = `capricorn`
        }
        else if ( signo == `Aquário` )
        {
            img.src = `image/aquarius.png`
            res.innerHTML = `aquário`
        }
        else if ( signo == `Peixes` )
        {
            img.src = `image/pisces.png`
            res.innerHTML = `peixe`
        }
        else if ( signo == `Áries` )
        {
            
            res.innerHTML = `áries`
        }
    })
})