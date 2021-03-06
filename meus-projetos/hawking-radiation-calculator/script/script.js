const constantes = 
{
    c : 299792458, /* light velocity */
    G : 6.67408e-11, /* gravitational constant */
    hbar : 1.05457e-34, /* planck constant */
    k : 1.38064e-23, /* boltzmann constant */
    au : 149597870700,
    massa_solar : 1.98847e30,
}

var massa = document.querySelector(`input#massa_txt`)

function calcular()
{ 
    res_density.innerHTML = ``
    var density = ( 3 * Math.pow(constantes.c, 6) / ( 32 * Math.PI * Math.pow(constantes.G, 3) * Math.pow(Number(massa.value) * constantes.massa_solar, 2) ))
    res_density.innerHTML += `${density}`

    res_st.innerHTML = ``
    var surface_tides = Math.pow(constantes.c, 6) / ( 4 * Math.pow(constantes.G, 2) * Math.pow(Number(massa.value) * constantes.massa_solar, 2) )   
    res_st.innerHTML += `${surface_tides}`

    res_entropy.innerHTML = ``
    var entropy = Math.pow(Number(massa.value) * constantes.massa_solar, 2) * ( (4 * Math.PI * constantes.G) / ( constantes.hbar * constantes.c ) )
    res_entropy.innerHTML += `${entropy}`

    res_temperature.innerHTML = ``
    var temperature = ( 1 / (Number(massa.value) * constantes.massa_solar) ) * ( (constantes.hbar * Math.pow(constantes.c, 3)) / (8 * Math.PI * constantes.k * constantes.G) )
    res_temperature.innerHTML += `${temperature}`

    res_luminosity.innerHTML = ``
    var luminosity = ( constantes.hbar * Math.pow( constantes.c, 6 ) ) / ( Math.pow( Number(massa.value) * constantes.massa_solar, 2 ) * 15360 * Math.PI * Math.pow( constantes.G, 2 ) )
    res_luminosity.innerHTML += `${luminosity}`    
}

function get_rad()
{
    var select = document.querySelector(`select#rad_unit`)
    var value = select.options[select.selectedIndex].value

    var raio = (( 2 * constantes.G * Number(massa.value) * constantes.massa_solar ) / Math.pow( constantes.c, 2 )).toFixed(5)

    res_rs.innerHTML = ``

    if ( value == `m` )
    {
        res_rs.innerHTML += `${raio}`
    }
    else if ( value == `km` )
    {
        var raio_km = (raio / 1e3).toFixed(5)
        res_rs.innerHTML += `${raio_km}`
    }
    else if ( value == `au` )
    {
        var raio_au = (raio / constantes.au).toFixed(5)
        res_rs.innerHTML += `${raio_au}`
    }
}

function get_surface()
{
    var select = document.querySelector(`select#surface_unit`)
    var value = select.options[select.selectedIndex].value

    var surface_area = ((16 * Math.PI * Math.pow(constantes.G, 2) * Math.pow(Number(massa.value) * constantes.massa_solar, 2) ) / (constantes.c ** 4)).toFixed(5)
    
    res_as.innerHTML = ``

    if ( value == `m2` )
    {
        res_as.innerHTML += `${surface_area}`
    }
    else if ( value == `km2` )
    {
        var surface_area_km2 = (surface_area / 1e6).toFixed(5)
        res_as.innerHTML += `${surface_area_km2}`
    }
}

function get_gravity()
{
    var select = document.querySelector(`select#gravity_unit`)
    var value = select.options[select.selectedIndex].value

    var surface_gravity = (( Math.pow(constantes.c, 4) ) / ( 4 * ( Number(massa.value) * constantes.massa_solar ) * constantes.G )).toFixed(4)

    res_gs.innerHTML = ``

    if ( value == `ms` )
    {
        res_gs.innerHTML += `${surface_gravity}`
    }
    else if ( value == `earth` )
    {
        var surface_gravity_earth = (surface_gravity / 9.806).toFixed(4)
        res_gs.innerHTML += `${surface_gravity_earth}`
    }
}

function get_time()
{
    var select = document.querySelector(`select#time_unity`)
    var value = select.options[select.selectedIndex].value

    var seconds = ( Number(massa.value) * constantes.massa_solar ) * ( Math.PI * constantes.G / Math.pow(constantes.c, 3) )

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
}

function get_lifetime()
{
    var select = document.querySelector(`select#lifetime`)
    var value = select.options[select.selectedIndex].value

    var lifetime = ( Math.pow( Number(massa.value) * constantes.massa_solar, 3 ) * 5120 * Math.PI * Math.pow( constantes.G, 2 ) ) / ( 1.8080 * constantes.hbar * Math.pow( constantes.c, 4 ) )

    res_time.innerHTML = ``

    if ( value == `seconds` )
    {
        res_time.innerHTML += `${lifetime}`
    }
    else if ( value == `Gyears` )
    {
        var gyears = lifetime / 3.1536e16
        res_time.innerHTML += `${gyears}`
    }
}