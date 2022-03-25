/** https://coursesweb.net/javascript/zodiac-signs_cs */

$(document).ready(function(){

    function calcularSigno(dia, mes)
    {
        let zodiaco =['', 'Capricórnio', 'Aquário', 'Peixes', 'Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio']
        let ultimoDia =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19]
        return (dia > ultimoDia[mes]) ? zodiaco[mes + 1] : zodiaco[mes]
    }

    $(`select#diaNascimento`).mouseenter(function(){
        location.reload()
    })

    $(`input#descobrir`).click(function verificarSigno(){
        let signo = calcularSigno( $(`select#diaNascimento`).val(), $(`select#mesNascimento`).val() )

        let img = document.querySelector(`img#imagem`)
        
        if ( signo == `Capricórnio` )
        {
            img.src = `image/capricorn.png`
            img.alt = `imagem signo de capricórnio`
            res.innerHTML = `Sei signo é <strong>${signo}</strong>. Pé no chão, disciplinado, trabalhador e que tem poucos, mas bons amigos.`
        }
        else if ( signo == `Aquário` )
        {
            img.src = `image/aquarius.png`
            img.alt = `imagem signo de aquário`
            res.innerHTML = `aquário`
        }
        else if ( signo == `Peixes` )
        {
            img.src = `image/pisces.png`
            img.alt = `imagem signo de peixes`
            res.innerHTML = `peixe`
        }
        else if ( signo == `Áries` )
        {
            img.src = `image/aries.png`
            img.alt = `imagem signo de áries`
            res.innerHTML = `áries`
        }
        else if ( signo == `Touro` )
        {
            img.src = `image/taurus.png`
            img.alt = `imagem signo de touro`
            res.innerHTML = `touro`
        }
        else if ( signo == `Gêmeos` )
        {
            img.src = `image/gemini.png`
            img.alt = `imagem signo de gêmeos`
            res.innerHTML = `Gêmeos`
        }
        else if ( signo == `Câncer` )
        {
            img.src = `image/cancer.png`
            img.alt = `imagem signo de câncer`
            res.innerHTML = `câncer`
        }
        else if ( signo == `Leão` )
        {
            img.src = `image/leo.png`
            img.alt = `imagem signo de leão`
            res.innerHTML = `leão`
        }
        else if ( signo == `Virgem` )
        {
            img.src = `image/virgo.png`
            img.alt = `imagem signo de virgem`
            res.innerHTML = `virgem`
        }
        else if ( signo == `Libra` )
        {
            img.src = `image/libra-200px.png`
            img.alt = `imagem signo de libra`

            res.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique temporibus ipsa autem ad illo quia maxime ipsum aliquam, amet, doloribus id fugiat! Similique dolorem at cupiditate earum explicabo. Enim?</p>`
        }
        else if ( signo == `Escorpião` )
        {
            img.src = `image/scorpio.png`
            img.alt = `imagem signo de escorpião`
            res.innerHTML = `escorpião`
        }
        else if ( signo == `Sagitário` )
        {
            img.src = `image/sagittarius.png`
            img.alt = `imagem signo de sagitário`
            res.innerHTML = `sagitário`
        }
    })
})