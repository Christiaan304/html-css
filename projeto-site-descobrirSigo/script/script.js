/** https://coursesweb.net/javascript/zodiac-signs_cs */

$(document).ready(function(){

    function calcularSigno(dia, mes)
    {
        let zodiaco =['', 'Capricórnio', 'Aquário', 'Peixes', 'Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitario', 'Capricórnio']
        let ultimoDia =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19]
        return (dia > ultimoDia[mes]) ? zodiaco[mes + 1] : zodiaco[mes]
    }

    $(`input#descobrir`).click(function(){
        let signo = calcularSigno( $(`select#diaNascimento`).val(), $(`select#mesNascimento`).val() )
        
        if ( signo == `Capricórnio` )
        {
            res.innerHTML += `test`
        }
    })
})