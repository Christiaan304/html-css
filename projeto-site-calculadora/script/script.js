let massa = document.querySelector(`input#massa_txt`)
let constantes = 
{
    c : 299792458,
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
        let raio = massa * ( (2 * constantes.G) / constantes.c ** 2 )
        
    }
}