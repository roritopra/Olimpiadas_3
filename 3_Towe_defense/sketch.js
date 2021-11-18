let torre
let arma
let armas
let villano1 = []
let villano2 = []

function setup() {
  createCanvas(500, 500);
  torre = new Torre(220, 220, 80, 100, 100)
  arma = new Arma(80, 80, 40, 40)
  armas = new Armas(80, 420, 40, 40)
}

function draw() {
  background(220);
  torre.pintar()
  arma.pintar()
  armas.pintar()

  if (frameCount % 240 == 0) {
   villano1.push(new villano(500, 80, 50, 50, 2))
    villano2.push(new villano(500, 420, 50, 50, 2))
  }

  villano1.forEach(function (elem, i) {
    elem.pintar()
    elem.mover()
  })

  villano2.forEach(function (elem, i) {
    elem.pintar()
    elem.mover()
  })

  arma.dispararAlt(villano1.length)
  armas.dispararAlt(villano2.length)

  villano1.forEach(function (villano, i) {
    arma.balas.forEach(function (bala, j) {
      if (dist(villano.x, villano.y, bala.x, bala.y) < villano.ancho / 2) {
        arma.balas.splice(j, 1)
        villano.vida -= 1
      }
    })
  })

  villano2.forEach(function (villano, i) {
    armas.balas.forEach(function (bala, j) {
      if (dist(villano.x, villano.y, bala.x, bala.y) < villano.ancho / 2) {
        armas.balas.splice(j, 1)
        villano.vida -= 1
      }
    })
  })

  villano1.forEach(function (elem, i) {
    if (elem.vida <= 0) {
      villano1.splice(i, 1)
      arma.objetivo = null
    }
  })

  villano2.forEach(function (elem, i) {
    if (elem.vida <= 0) {
      villano2.splice(i, 1)
      armas.objetivo = null
    }
  })
}

