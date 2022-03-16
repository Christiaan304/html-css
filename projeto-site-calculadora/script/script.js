var constantes = 
{
    c : 299792458, /* light velocity */
    G : 6.67408e-11, /* gravitational constant */
    pi : 3.14159,
    hbar : 1.05457e-34, /* planck constant */
    k : 1.38064e-23, /* boltzmann constant */
    au : 149597870700,
    massa_solar : 1.98847e30,
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
        var raio_km = raio / 1e3
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

function get_gravity()
{
    var select = document.querySelector(`select#gravity_unity`)
    var value = select.options[select.selectedIndex].value

    var surface_gravity = ( constantes.c ** 4 ) / ( 4 * Number(massa.value) * constantes.massa_solar * constantes.G )

    res_gs.innerHTML = ``

    if ( value == `ms` )
    {
        res_gs.innerHTML += `${surface_gravity}`
    }
    else if ( value == `earth` )
    {
        var surface_gravity_earth = surface_gravity / 9.806
        res_gs.innerHTML += `${surface_gravity_earth}`
    }
}

function get_time()
{
    var select = document.querySelector(`select#time_unity`)
    var value = select.options[select.selectedIndex].value

    var seconds = ( Number(massa.value) * constantes.massa_solar ) * ( constantes.pi * constantes.G / constantes.c ** 3 )

    res_ts.innerHTML = ``

    if ( value == `second` )
    {
        res_ts.innerHTML += `${seconds}`
    }
    else if ( value == `days` )
    {
        var days = seconds / 86400
        res_ts.innerHTML += `${days}`
    }
    else if ( value == `years` )
    {
        var years = seconds / 31536000
        res_ts.innerHTML += `${years}`
    }
}

function get_temperature()
{
    var select = document.querySelector(`select#temperature`)
    var value = select.options[select.selectedIndex].value

    var temperature = ( constantes.hbar * constantes.c ** 3 ) / ( 8 * constantes.pi * constantes.k * constantes.G * Number(massa.value) * constantes.massa_solar )

    res_temperature.innerHTML = ``

    if ( value == `celsius` )
    {
        res_temperature.innerHTML += `${temperature}`
    }
    else if ( value == `kelvin` )
    {
        var kelvin = temperature / 273.15
        res_temperature.innerHTML += `${kelvin}`
    }
}

function calcular()
{
    res_entropy.innerHTML = ``
    var entropy = ( Number(massa.value) * constantes.massa_solar ) ** 2 * ( (4 * constantes.pi * constantes.G) / ( constantes.hbar * constantes.c ) )
    res_entropy.innerHTML += `${entropy}`

    res_luminosity.innerHTML = ``
    var luminosity = ( constantes.hbar * constantes.c ** 6 ) / ( 15360 * constantes.pi * constantes.G ** 2 * Number(massa.value) * constantes.massa_solar )
    res_luminosity.innerHTML += `${luminosity}`    
}