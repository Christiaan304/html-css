const constants = {
    planckMass: 2.176434e-8,
    planckLength: 1.616255e-35,
    planckTime: 5.391247e-44,
    planckTemperature: 1.416784e32
}

function kilogramToPlanckMass() {
    let kilogram = Number(document.querySelector(`input#kilogram`).value)
    kilogramToPlanckMass = kilogram / constants.planckMass
    resPm.innerHTML += `${kilogramToPlanckMass}`
}

function planckMassToKilogram(){
    let planckMass = Number(document.querySelector(`input#planckMass`).value)
    planckMassToKilogram = planckMass * constants.planckMass
    resKg.innerHTML += `${planckMassToKilogram}`
}

function metersToPlancklength(){
    let meters = Number(document.querySelector(`input#meters`).value)
    metersToPlanckLength = meters / constants.planckLength
    resPlanckLength.innerHTML += `${metersToPlanckLength}`
}

function planckLengthToMeters(){
    let planckLength = Number(document.querySelector(`input#planckLength`).value)
    planckLengthToMeters = planckLength * constants.planckLength
    resMeters.innerHTML += `${planckLengthToMeters}`
}

function secondToPlanckTime(){
    let seconds = Number(document.querySelector(`input#seconds`).value)
    secondsToPlanckTime = seconds / constants.planckTime
    resPlanckTime.innerHTML += `${secondsToPlanckTime}`
}

function planckTimeToSecond(){
    let planckTime = Number(document.querySelector(`input#planckTime`).value)
    planckTimeToSeconds = planckTime * constants.planckTime
    resSeconds.innerHTML += `${planckTimeToSeconds}`
}