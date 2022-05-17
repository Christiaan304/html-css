resumo = {
    sun:`<p>O <span class="fw-bold">Sol</span> é a estrela central do sistema solar. Todos os outros corpos do Sistema Solar, como planetas, planetas anões, asteroides, cometas e poeira, giram ao seu redor. Ele é responsável por 99,86% da massa do Sistema Solar, a distância da Terra ao Sol é de cerca de 150 milhões de quilômetros ou 1 unidade astronômica e a luz solar demora aproximadamente 8 minutos e 18 segundos para chegar à Terra. É composto primariamente de hidrogênio (74% de sua massa) e hélio (24% da sua massa), com traços de outros elementos, incluindo ferro, níquel, oxigênio, silício, enxofre, magnésio, néon, cálcio e crômio. O Sol orbita em torno do centro da Via Láctea a uma velocidade de 250 km/s, atravessando no momento a Nuvem Interestelar Local de gás de alta temperatura, no interior do Braço de Órion da Via Láctea, entre os braços maiores Perseus e Sagitário.</p>`,

    mercury:`<p><span class="fw-bold">Mercúrio</span> é o menor e o primeiro planeta do Sistema Solar, orbitando o Sol a cada 87,97 dias terrestres e demora 56,64 dias para completar uma volta no seu eixo. Tem uma aparência similar à da Lua com crateras de impacto e planícies lisas, não possui satélites naturais e atmosfera, a temperatura em sua superfície varia de −183 °C a 427 °C.</p>`
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
            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 4:
            img.src = `./images/earth.jpg`
            img.alt = `imgaem do planeta terra`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 5:
            img.src = `./images/moon.jpg`
            img.alt = `imgaem da lua`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
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
