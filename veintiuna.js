const baraja = llenarBaraja()
console.log(baraja)

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

