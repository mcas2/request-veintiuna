let baraja = llenarBaraja()
baraja = barajar(baraja)
//console.log('Baraja recién barajada => ', baraja);

const manoJugador = []
repartir(2, manoJugador)
console.log('Mano del jugador => ', manoJugador)
//console.log('Baraja tras repartir al jugador => ',baraja);

function jugar() {
    console.log('¿Quieres otra?');
    
}

function repartir(numCartas, mano) {
    for (let i = 0; i < numCartas; i++) {
        mano.push(baraja.pop())
    }
}

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

