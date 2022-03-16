let massa = document.querySelector(`input#massa_txt`)
let res_r = document.querySelector(`div#res_r`)

let constantes = 
{
    c : 299792458,
    massa_solar : 1.98847e30,
    G : 6.67408e-11
}

function calcular()
{
    if ( massa.value.length == 0 )  
    {
        window.alert(`[ERRO] Digite o valor da massa`)
    }
    else
    {
        let raio = Number(massa.value) * constantes.massa_solar * ( (2 * constantes.G) / constantes.c ** 2 )
        res_r.innerHTML += `${raio}`

    }
}