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
            
        break

        case 4:
            
        break

        case 5:
            
        break

        case 6:
            
        break

        case 7:
            
        break

        case 8:
            
        break

        case 9:
            
        break

        case 10:
            
        break

        case 11:
            
        break

        case 12:
            
        break

        case 13:
            
        break

        case 14:
            
        break

        case 15:
            
        break
    }
}
