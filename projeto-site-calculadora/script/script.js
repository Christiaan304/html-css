var constantes = 
{
    c : 299792458, /* light velocity */
    G : 6.67408e-11, /* gravitational constant */
    pi : 3.14159,
    hbar : 1.05457e-34, /* planck constant */
    k : 1.38064e-23, /* boltzmann constant */
    au : 149597870700,
    massa_solar : 1.98847e30
}

var massa = document.querySelector(`input#massa_txt`)

/*
function limpar()
{
    var clean = document.querySelector(`td.limpar`)
    clean.innerHTML = ``
}
*/

function get_rad()
{
    var select = document.querySelector(`select#rad_unit`)
    var value = select.options[select.selectedIndex].value

    var raio = Number(massa.value) * constantes.massa_solar * ( (2 * constantes.G) / constantes.c ** 2 )

    res_rs.innerHTML = ``

    if ( value == `m` )
    {
        res_rs.innerHTML += `${raio}`
    }
    else if ( value == `km` )
    {
        var raio_km = raio / 1000
        res_rs.innerHTML += `${raio_km}`
    }
    else if ( value == `au` )
    {
        var raio_au = raio / constantes.au
        res_rs.innerHTML += `${raio_au}`
    }
}

function get_surface()
{
    var select = document.querySelector(`select#surface_unit`)
    var value = select.options[select.selectedIndex].value

    var surface_area = (16 * constantes.pi * constantes.G ** 2 * Number(massa.value) * constantes.massa_solar ** 2) / (constantes.c ** 4)
    var surface_area_km2 = surface_area / 1e6

    res_as.innerHTML = ``

    if ( value == `m2` )
    {
        res_as.innerHTML += `${surface_area}`
    }
    else if ( value == `km2` )
    {
        res_as.innerHTML += `${surface_area_km2}`
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

        var res_density = document.querySelector(`td#res_density`)
        var densidade =  (3 * constantes.c ** 6) / (32 * constantes.pi * constantes.G ** 3 * massa_bh ** 2)
        res_density.innerHTML += `${densidade}`

        var res_gs = document.querySelector(`td#res_gs`)
        var gravidade_superficie = (constantes.c ** 4) / (4 * constantes.G * massa_bh)
        res_gs.innerHTML += `${gravidade_superficie}`

        var res_st = document.querySelector(`td#res_st`)
        var mare = (constantes.c ** 6) / (4 * constantes.G ** 2 * massa_bh ** 2)
        res_st.innerHTML += `${mare}`

        var res_ts = document.querySelector(`td#res_ts`)
        var tempo_singularidade = massa_bh * ( constantes.pi * constantes.G / constantes.c ** 3 )
        res_ts.innerHTML += `${tempo_singularidade}`

        var res_entropy = document.querySelector(`td#res_entropy`)
        var entropy = massa_bh ** 2 * ( 4 * constantes.pi * constantes.G) / (constantes.c *  constantes.hbar)
        res_entropy.innerHTML += `${entropy}`

        var res_temperature = document.querySelector(`td#res_temperature`)
        var kelvin = (constantes.hbar * constantes.c ** 3) / (8 * constantes.pi * constantes.G * massa_bh * constantes.k)
        res_temperature.innerHTML += `${kelvin}`

        var res_luminosity = document.querySelector(`td#res_luminosity`)
        var luminosity = (constantes.hbar * constantes.c ** 6) / (15360 * constantes.pi * constantes.G ** 2 * massa_bh ** 2)
        res_luminosity.innerHTML += `${luminosity}`

        var res_time = document.querySelector(`td#res_time`)
        var time = massa_bh ** 3 * ( (5120 * constantes.pi * constantes.G ** 2) / (1.8083 * constantes.hbar * constantes.c ** 4) )
        res_time.innerHTML += `${time}`
    }
}