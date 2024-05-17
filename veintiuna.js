let baraja = llenarBaraja()
console.log(baraja)
baraja = barajar(baraja)
console.log(baraja);

function barajar(baraja) {
    return baraja.sort(function(a, b){return 0.5 - Math.random()})
}

function llenarBaraja() {
    let cartas = []
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j <= 10; j++) {
            if (j > 7) {
                cartas.push(10)
            } else {
                cartas.push(j)
            }
        }
    }
    return cartas
}

