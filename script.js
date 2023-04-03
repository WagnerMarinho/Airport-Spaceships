const hitchedSpaceships = [
    ["Fenix", 8, true ],
    ["Golias", 10, true ], //9+ trip.
    ["helmet", 5, false ],
    ["Elemental", 3, true ],
    ["Darwin", 15, false ] //9+ trip.
]


let crewGreaterThan9 = hitchedSpaceships.filter(spaceship =>{
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchedPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship [2] == false
})

let highlightedSpaceship = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})



let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(', ')
message += "\n Plataforma com processo de engate " + (ongoingHitchedPlatform + 1)
message += "\nEspaçonaves destacadas " + highlightedSpaceship.join(", ")

alert(`Naves que estão na base e suas caracteristicas: ${hitchedSpaceships}`)
alert(message)