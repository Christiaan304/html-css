/** https://coursesweb.net/javascript/zodiac-signs_cs */

$(document).ready(() => {

    let calcularSigno = (dia, mes) => {
        let zodiaco = ['', 'Capricórnio', 'Aquário', 'Peixes', 'Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio']
        let ultimoDia = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19]
        return (dia > ultimoDia[mes]) ? zodiaco[mes + 1] : zodiaco[mes]
    }

    $(`button#descobrir`).click(function verificarSigno() {
        let signo = calcularSigno($(`select#diaNascimento`).val(), $(`select#mesNascimento`).val())
        let img = document.querySelector(`img#imagem`)
        let frase = `Seu signo é <strong>${signo}</strong>.`

        if (signo == `Capricórnio`) {
            img.src = `image/capricorn.png`
            img.alt = `imagem signo de capricórnio`

            res.innerHTML = `<p>${frase} Quem tem Sol em Capricórnio pode se identificar com virtudes como persistência e responsabilidade. Capricórnio signo costuma ter metas bem definidas e noção dos seus limites. A relação próxima com o trabalho também pode ser uma característica de capricórnio bem marcante.</p>`
        }
        else if (signo == `Aquário`) {
            img.src = `image/aquarius.png`
            img.alt = `imagem signo de aquário`

            res.innerHTML = `<p>${frase} Um aquariano ou uma aquariana pode se identificar com características como o desejo de inovar e a independência. Sabe aquela galera diferentona? São eles. Aquário signo costuma ser bastante idealista e seus nativos prezam por experiências que trazem liberdade. Podem ter posturas consideradas radicais e é bem comum o aquariano ser o "do contra" da turma.</p>`
        }
        else if (signo == `Peixes`) {
            img.src = `image/pisces.png`
            img.alt = `imagem signo de peixes`

            res.innerHTML = `<p>${frase} Quem nasce com o sol no signo de Peixes pode se identificar com virtudes como a sensibilidade e a intuição. Piscianos e piscianas típicos costumam ser bastante solidários e muitas vezes têm uma forte conexão com a espiritualidade. Por serem bastante sonhadores, se iludir com certa facilidade também é uma característica de Peixes.</p>`
        }
        else if (signo == `Áries`) {
            img.src = `image/aries.png`
            img.alt = `imagem signo de áries`

            res.innerHTML = `<p>${frase} Quem tem Sol no signo de Áries pode se identificar com características como a impulsividade e a coragem. Sabe aquela galera que não tem medo de nada? Provavelmente tem Áries forte no Mapa. Eles também amam motivar quem está ao seu redor e são guerreiros por natureza.</p>`
        }
        else if (signo == `Touro`) {
            img.src = `image/taurus.png`
            img.alt = `imagem signo de touro`

            res.innerHTML = `<p>${frase} Quem nasce com o sol no signo Touro pode se identificar com virtudes como a paciência, o bom gosto e a sensualidade. Afeto e valorização do prazer e conforto também podem ser características de Touro, mas sabe aquela galera meio teimosa? Pode ser que tenham o signo de Touro forte no Mapa também.</p>`
        }
        else if (signo == `Gêmeos`) {
            img.src = `image/gemini.png`
            img.alt = `imagem signo de gêmeos`

            res.innerHTML = `<p>${frase} Quem nasce com o sol no signo de Gêmeos geralmente se identifica com características como a curiosidade, a inteligência e o desejo de liberdade. Sabe aquela galera que ama ler, aprender coisas novas, puxar conversa e fazer novas amizades? Provavelmente tem gêmeos signo forte no mapa.</p>`
        }
        else if (signo == `Câncer`) {
            img.src = `image/cancer.png`
            img.alt = `imagem signo de câncer`

            res.innerHTML = `<p>${frase} Quem nasce com o sol no signo de Câncer pode se identificar com características como a sensibilidade e o carinho. Um canceriano ou canceriana típicos costumam ter uma ótima intuição, além de um forte vínculo com seus familiares. A busca constante por segurança também é uma característica do signo de câncer.</p> `
        }
        else if (signo == `Leão`) {
            img.src = `image/leo.png`
            img.alt = `imagem signo de leão`

            res.innerHTML = `<p>${frase} Quem nasce com o sol no signo Leão pode se identificar com características como a criatividade e a coragem. Sabe aquela galera com a autoestima lá em cima? Provavelmente tem Leão signo forte no mapa. A generosidade e o otimismo também podem ser bem presentes.</p>`
        }
        else if (signo == `Virgem`) {
            img.src = `image/virgo.png`
            img.alt = `imagem signo de virgem`

            res.innerHTML = `<p>${frase} Quem nasce com o Sol no signo Virgem pode se identificar com características como a objetividade e a organização. Virginianas e virginianos típicos costumam buscar constantemente a perfeição e identificar facilmente detalhes que passam despercebidos por todos os outros, essa é uma das características de Virgem mais admiradas.</p>`
        }
        else if (signo == `Libra`) {
            img.src = `image/libra-200px.png`
            img.alt = `imagem signo de libra`

            res.innerHTML = `<p>${frase} Quem nasce com o sol no signo Libra, em geral, se identifica com características como a cortesia, a delicadeza e a busca constante pelo equilíbrio. Librianas e librianos típicos adoram viver relacionamentos e tendem a ter um pouco de dificuldade para tomar decisões.</p>`
        }
        else if (signo == `Escorpião`) {
            img.src = `image/scorpio.png`
            img.alt = `imagem signo de escorpião`

            res.innerHTML = `<p>${frase} Quem nasce com o sol no signo Escorpião pode se identificar com características como a intensidade e o poder de transformação. Escorpianas e escorpianos típicos costumam ser bastante passionais e muito generosos. O espírito de detetive e o sexto sentido afiado também são bem marcantes em quem tem escorpião forte no mapa também.</p>`
        }
        else if (signo == `Sagitário`) {
            img.src = `image/sagittarius.png`
            img.alt = `imagem signo de sagitário`

            res.innerHTML = `<p>${frase} Quem nasce com o sol no signo de Sagitário pode se identificar com características como o otimismo e o desejo de liberdade. Sagitarianas e sagitarianos típicos costumam ser viajantes e, geralmente, enxergam o mundo inteiro como sua casa. A jovialidade também é uma característica marcante de Sagitário.</p>`
        }
    })
})