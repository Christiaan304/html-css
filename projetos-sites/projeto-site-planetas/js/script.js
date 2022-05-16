function update() 
{
    let select = document.querySelector(`#solarSystemObjects`)
    let value = Number(select.options[select.selectedIndex].value)

    let img = document.querySelector(`#image`)
    let information = document.querySelector(`#information`)

    switch(value)
    { 
        case 1:
            img.src = `../images/sun.jpg`
            img.alt = `imgaem do sol`

            information.innerHTML = `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ipsam officia, nam deleniti earum
            dignissimos atque, corporis dolores voluptas excepturi similique ratione repudiandae laboriosam repellat
            soluta facilis quaerat sint exercitationem!</p>`
        break

        case 2:
            img.src = `../images/mercury.jpg`
            img.alt = `imgaem do planeta mercúrio`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 3:
            img.src = `../images/venus.jpg`
            img.alt = `imgaem do planeta venus`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 4:
            img.src = `../images/earth.jpg`
            img.alt = `imgaem do planeta terra`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 5:
            img.src = `../images/moon.jpg`
            img.alt = `imgaem da lua`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 6:
            img.src = `../images/mars.jpg`
            img.alt = `imgaem do planeta marte`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 7:
            img.src = `../images/asteroidBelt.png`
            img.alt = `imgaem do cinturão de asteróides`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 8:
            img.src = `../images/vesta.jpg`
            img.alt = `imgaem do planeta anão vesta`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 9:
            img.src = `../images/ceres.png`
            img.alt = `imgaem do planeta anão ceres`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores? acer</p>`
        break

        case 10:
            img.src = `../images/jupiter.jpg`
            img.alt = `imgaem do planeta júpiter`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ex, inventore nesciunt aut modi explicabo repudiandae, vel beatae quo cumque ducimus adipisci. Officiis velit exercitationem hic, aliquam numquam nemo asperiores?</p>`
        break

        case 11:
            img.src = `../images/saturn.jpg`
            img.alt = `imgaem do planeta saturno`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde natus explicabo tenetur rem dolorem, inventore quo saepe ipsa nobis laudantium labore possimus, quod blanditiis. Fuga tempora distinctio saepe voluptatibus.
            Odit quas laboriosam repellat labore? Nisi, repudiandae. Quasi odio quod rerum sunt laborum repudiandae eligendi sed sapiente illo facilis blanditiis iusto, iste reiciendis ratione magnam officiis aliquid incidunt nulla harum.</p>`
        break

        case 12:
            img.src = `../images/uranus.jpg`
            img.alt = `imgaem do planeta urano`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde natus explicabo tenetur rem dolorem, inventore quo saepe ipsa nobis laudantium labore possimus, quod blanditiis. Fuga tempora distinctio saepe voluptatibus.
            Odit quas laboriosam repellat labore? Nisi, repudiandae. Quasi odio quod rerum sunt laborum repudiandae eligendi sed sapiente illo facilis blanditiis iusto, iste reiciendis ratione magnam officiis aliquid incidunt nulla harum.</p>`
        break

        case 13:
            img.src = `../images/neptune.jpg`
            img.alt = `imgaem do planeta netuno`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde natus explicabo tenetur rem dolorem, inventore quo saepe ipsa nobis laudantium labore possimus, quod blanditiis. Fuga tempora distinctio saepe voluptatibus.
            Odit quas laboriosam repellat labore? Nisi, repudiandae. Quasi odio quod rerum sunt laborum repudiandae eligendi sed sapiente illo facilis blanditiis iusto, iste reiciendis ratione magnam officiis aliquid incidunt nulla harum.</p>`
        break

        case 14:
            img.src = `../images/pluto.jpg`
            img.alt = `imgaem do planeta anão plutão`

            information.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde natus explicabo tenetur rem dolorem, inventore quo saepe ipsa nobis laudantium labore possimus, quod blanditiis. Fuga tempora distinctio saepe voluptatibus.
            Odit quas laboriosam repellat labore? Nisi, repudiandae. Quasi odio quod rerum sunt laborum repudiandae eligendi sed sapiente illo facilis blanditiis iusto, iste reiciendis ratione magnam officiis aliquid incidunt nulla harum.</p>`
        break

        case 15:
            
        break
    }
}
