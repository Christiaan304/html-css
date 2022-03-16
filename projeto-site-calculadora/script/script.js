let massa = document.querySelector(`input#massa_txt`)

let constantes = 
{
    c : 299792458,
    G : 6.67408e-11,
    pi : 3.14159,
    massa_solar : 1.98847e30
}

function limpar()
{

}

function calcular()
{
    if ( massa.value.length == 0 )  
    {
        window.alert(`[ERRO] Digite o valor da massa`)
    }
    else
    {
        let massa_bh = Number(massa.value) * constantes.massa_solar

        let res_r = document.querySelector(`td#res_rs`)
        let raio = massa_bh * ( (2 * constantes.G) / constantes.c ** 2 )
        res_rs.innerHTML += `${raio}`

        let res_as = document.querySelector(`td#res_as`)
        let area_superficie = massa_bh ** 2 * ( (16 * constantes.pi * constantes.G ** 2) / constantes.c ** 4 )
        res_as.innerHTML += `${area_superficie}`

        let res_densidade = document.querySelector(`td#res_densidade`)
        let densidade =  (3 * constantes.c ** 6) / (32 * constantes.pi * constantes.G ** 3 * massa_bh ** 2)
        res_densidade.innerHTML += `${densidade}`

        let res_gs = document.querySelector(`td#res_gs`)
        let gravidade_superficie = (constantes.c ** 4) / (4 * constantes.G * massa_bh)
        res_gs.innerHTML += `${gravidade_superficie}`

        let res_st = document.querySelector(`td#res_st`)
        let mare = (constantes.c ** 6) / (4 * constantes.G ** 2 * (massa_bh) ** 2)
        res_st.innerHTML += `${mare}`

        let res_ts = document.querySelector(`td#res_ts`)
        let tempo_singularidade = massa_bh * ( constantes.pi * constantes.G / constantes.c ** 3 )
        res_ts.innerHTML += `${tempo_singularidade}`
    }
}