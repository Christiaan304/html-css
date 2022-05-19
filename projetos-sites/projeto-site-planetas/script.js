resumo = {
    sun:`<p>O <span class="fw-bold">Sol</span> é a estrela central do sistema solar. Todos os outros corpos do Sistema Solar, como planetas, planetas anões, asteroides, cometas e poeira, giram ao seu redor. Ele é responsável por 99,86% da massa do Sistema Solar, a distância da Terra ao Sol é de cerca de 150 milhões de quilômetros ou 1 unidade astronômica e a luz solar demora aproximadamente 8 minutos e 18 segundos para chegar à Terra. É composto primariamente de hidrogênio (74% de sua massa) e hélio (24% da sua massa), com traços de outros elementos, incluindo ferro, níquel, oxigênio, silício, enxofre, magnésio, néon, cálcio e crômio. O Sol orbita em torno do centro da Via Láctea a uma velocidade de 250 km/s, atravessando no momento a Nuvem Interestelar Local de gás de alta temperatura, no interior do Braço de Órion da Via Láctea, entre os braços maiores Perseus e Sagitário.</p>`,

    mercury:`<p><span class="fw-bold">Mercúrio</span> é o menor e o primeiro planeta do Sistema Solar, orbitando o Sol a cada 87,97 dias terrestres e demora 56,64 dias para completar uma volta no seu eixo. Tem uma aparência similar à da Lua com crateras de impacto e planícies lisas, não possui satélites naturais e atmosfera, a temperatura em sua superfície varia de −183 °C a 427 °C.</p>`,

    venus:`<p><span class="fw-bold">Vênus</span> é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, é considerado um planeta do tipo terrestre ou telúrico, chamado com frequência de planeta irmão da Terra, já que são similares quanto ao tamanho, massa e composição. Vénus é coberto por uma camada opaca de nuvens de ácido sulfúrico altamente reflexivas, impedindo que a sua superfície seja vista do espaço na luz visível. Ele possui a mais densa atmosfera entre todos os planetas terrestres do Sistema Solar, constituída principalmente de dióxido de carbono e a pressão atmosférica na superfície do planeta é 92 vezes a da Terra.</p>`,

    earth:`<p>A <span class="fw-bold">Terra</span> é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar,  orbita o Sol a cada 365,2 dias, e é o único corpo celeste onde é conhecida a existência de vida. A sua superfície exterior está dividida em vários segmentos rígidos, chamados placas tectônicas, que migram sobre a superfície terrestre ao longo de milhões de anos. Cerca de 71% da superfície da Terra está coberta por oceanos de água salgada, com o restante consistindo de continentes e ilhas. O eixo de rotação da Terra possui uma inclinação de 23,4°, produzindo as estações do ano. A Lua é o único satélite natural conhecido da Terra, é responsável pelas marés, estabiliza a inclinação axial da Terra e desacelera gradualmente a rotação do planeta.</p>`,

    moon:`<p>A <span class="fw-bold">Lua</span> é o único satélite natural da Terra e o quinto maior do Sistema Solar, demora 29,5 dias para completar uma orbita ao redor da Terra. É o maior satélite natural de um planeta no sistema solar em relação ao tamanho do seu corpo primário, tendo 27% do diâmetro e 60% da densidade da Terra. A explicação mais atual da sua formação é que a Lua tenha sido formada a partir dos detritos de um impacto de proporções gigantescas entre a Terra e um outro corpo do tamanho de Marte. A Lua encontra-se em rotação sincronizada com a Terra, mostrando sempre a mesma face visível, marcada por mares vulcânicos escuros entre montanhas e crateras de impacto.</p>`
}

function update() 
{
    let select = document.querySelector(`#solarSystemObjects`)
    let value = Number(select.options[select.selectedIndex].value)

    let img = document.querySelector(`#image`)
    let information = document.querySelector(`#information`)

    switch(value)
    { 
        case 1:
            img.src = `./images/sun.jpg`
            img.alt = `imgaem do sol`
            information.innerHTML = resumo.sun
        break

        case 2:
            img.src = `./images/mercury.jpg`
            img.alt = `imgaem do planeta mercúrio`
            information.innerHTML = resumo.mercury
        break

        case 3:
            img.src = `./images/venus.jpg`
            img.alt = `imgaem do planeta venus`
            information.innerHTML = resumo.venus
        break

        case 4:
            img.src = `./images/earth.jpg`
            img.alt = `imgaem do planeta terra`

            information.innerHTML = resumo.earth
        break

        case 5:
            img.src = `./images/moon.jpg`
            img.alt = `imgaem da lua`

            information.innerHTML = resumo.moon
        break

        case 6:
            img.src = `./images/mars.jpg`
            img.alt = `imgaem do planeta marte`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 7:
            img.src = `./images/asteroidBelt.png`
            img.alt = `imgaem do cinturão de asteróides`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 8:
            img.src = `./images/vesta.jpg`
            img.alt = `imgaem do planeta anão vesta`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 9:
            img.src = `./images/ceres.png`
            img.alt = `imgaem do planeta anão ceres`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores? acer</p>`
        break

        case 10:
            img.src = `./images/jupiter.jpg`
            img.alt = `imgaem do planeta júpiter`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 11:
            img.src = `./images/saturn.jpg`
            img.alt = `imgaem do planeta saturno`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde natus explicabo tenetur rem dolorem, inventore quo saepe ipsa nobis laudantium labore possimus, quod blanditiis. Fuga tempora distinctio saepe voluptatibus.
            Odit quas laboriosam repellat labore? Nisi, repudiandae. Quasi odio quod rerum sunt laborum repudiandae eligendi sed sapiente illo facilis blanditiis iusto, iste reiciendis ratione magnam officiis aliquid incidunt nulla harum.</p>`
        break

        case 12:
            img.src = `./images/uranus.jpg`
            img.alt = `imgaem do planeta urano`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde natus explicabo tenetur rem dolorem, inventore quo saepe ipsa nobis laudantium labore possimus, quod blanditiis. Fuga tempora distinctio saepe voluptatibus.
            Odit quas laboriosam repellat labore? Nisi, repudiandae. Quasi odio quod rerum sunt laborum repudiandae eligendi sed sapiente illo facilis blanditiis iusto, iste reiciendis ratione magnam officiis aliquid incidunt nulla harum.</p>`
        break

        case 13:
            img.src = `./images/neptune.jpg`
            img.alt = `imgaem do planeta netuno`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde natus explicabo tenetur rem dolorem, inventore quo saepe ipsa nobis laudantium labore possimus, quod blanditiis. Fuga tempora distinctio saepe voluptatibus.
            Odit quas laboriosam repellat labore? Nisi, repudiandae. Quasi odio quod rerum sunt laborum repudiandae eligendi sed sapiente illo facilis blanditiis iusto, iste reiciendis ratione magnam officiis aliquid incidunt nulla harum.</p>`
        break

        case 14:
            img.src = `./images/pluto.jpg`
            img.alt = `imgaem do planeta anão plutão`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde natus explicabo tenetur rem dolorem, inventore quo saepe ipsa nobis laudantium labore possimus, quod blanditiis. Fuga tempora distinctio saepe voluptatibus.
            Odit quas laboriosam repellat labore? Nisi, repudiandae. Quasi odio quod rerum sunt laborum repudiandae eligendi sed sapiente illo facilis blanditiis iusto, iste reiciendis ratione magnam officiis aliquid incidunt nulla harum.</p>`
        break

        case 15:
            
        break
    }
}
