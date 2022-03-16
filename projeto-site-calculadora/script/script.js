var massa = document.querySelector(`input#massa_txt`)

var constantes = 
{
    c : 299792458, /* light velocity */
    G : 6.67408e-11, /* gravitational constant */
    pi : 3.14159,
    hbar : 1.05457e-34, /* planck constant */
    k : 1.38064e-23, /* boltzmann constant */
    au : 1495978707,
    massa_solar : 1.98847e30
}

function get_rad()
{
    var select = document.querySelector(`select#rad_unit`)
    var value = select.options[select.selectedIndex].value

    var raio = Number(massa.value) * constantes.massa_solar * ( (2 * constantes.G) / constantes.c ** 2 )
    var raio_au = raio / constantes.au

    if ( value == `m` )
    {
        res_rs.innerHTML += `${raio}`
    }
    else if ( value == `au` )
    {
        res_rs.innerHTML += `${raio_au}`
    }
}

function calcular()
{
    if ( massa.value.length == 0 )  
    {
        window.alert(`[ERRO] Digite o valor da massa`)
    }
    else
    {
        var massa_bh = Number(massa.value) * constantes.massa_solar

        let res_as = document.querySelector(`td#res_as`)
        let area_superficie = massa_bh ** 2 * ( (16 * constantes.pi * constantes.G ** 2) / constantes.c ** 4 )
        res_as.innerHTML += `${area_superficie}`

        let res_density = document.querySelector(`td#res_density`)
        let densidade =  (3 * constantes.c ** 6) / (32 * constantes.pi * constantes.G ** 3 * massa_bh ** 2)
        res_density.innerHTML += `${densidade}`

        let res_gs = document.querySelector(`td#res_gs`)
        let gravidade_superficie = (constantes.c ** 4) / (4 * constantes.G * massa_bh)
        res_gs.innerHTML += `${gravidade_superficie}`

        let res_st = document.querySelector(`td#res_st`)
        let mare = (constantes.c ** 6) / (4 * constantes.G ** 2 * massa_bh ** 2)
        res_st.innerHTML += `${mare}`

        let res_ts = document.querySelector(`td#res_ts`)
        let tempo_singularidade = massa_bh * ( constantes.pi * constantes.G / constantes.c ** 3 )
        res_ts.innerHTML += `${tempo_singularidade}`

        let res_entropy = document.querySelector(`td#res_entropy`)
        let entropy = massa_bh ** 2 * ( 4 * constantes.pi * constantes.G) / (constantes.c *  constantes.hbar)
        res_entropy.innerHTML += `${entropy}`

        let res_temperature = document.querySelector(`td#res_temperature`)
        let kelvin = (constantes.hbar * constantes.c ** 3) / (8 * constantes.pi * constantes.G * massa_bh * constantes.k)
        res_temperature.innerHTML += `${kelvin}`

        let res_luminosity = document.querySelector(`td#res_luminosity`)
        let luminosity = (constantes.hbar * constantes.c ** 6) / (15360 * constantes.pi * constantes.G ** 2 * massa_bh ** 2)
        res_luminosity.innerHTML += `${luminosity}`

        let res_time = document.querySelector(`td#res_time`)
        let time = massa_bh ** 3 * ( (5120 * constantes.pi * constantes.G ** 2) / (1.8083 * constantes.hbar * constantes.c ** 4) )
        res_time.innerHTML += `${time}`
    }
}