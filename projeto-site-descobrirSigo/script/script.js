/** https://coursesweb.net/javascript/zodiac-signs_cs */

$(document).ready(function(){

    function calcularSigno(dia, mes)
    {
        let zodiaco =['', 'Capricórnio', 'Aquário', 'Peixes', 'Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio']
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
            img.src = `image/aries.png`
            res.innerHTML = `áries`
        }
        else if ( signo == `Touro` )
        {
            img.src = `image/taurus.png`
            res.innerHTML = `touro`
        }
        else if ( signo == `Gêmeos` )
        {
            img.src = `image/gemini.png`
            res.innerHTML = `Gêmeos`
        }
        else if ( signo == `Câncer` )
        {
            img.src = `image/cancer.png`
            res.innerHTML = `câncer`
        }
        else if ( signo == `Leão` )
        {
            img.src = `image/leo.png`
            res.innerHTML = `leão`
        }
        else if ( signo == `Virgem` )
        {
            img.src = `image/virgo.png`
            res.innerHTML = `virgem`
        }
        else if ( signo == `Libra` )
        {
            img.src = `image/libra-200px.png`
            res.innerHTML = `libra`
        }
        else if ( signo == `Escorpião` )
        {
            img.src = `image/scorpio.png`
            res.innerHTML = `escorpião`
        }
        else if ( signo == `Sagitário` )
        {
            img.src = `image/sagittarius.png`
            res.innerHTML = `sagitário`
        }
    })
})