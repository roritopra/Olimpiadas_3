//Juan José Rodriguez Carabali   Cod. A00362392
//Jhon Alex Serrano  Cod. A00368713

let bolita = new Bolita(250,250,30,255,0,0);;
let player1 = new Rectangulo(0, 200, 15, 120);
let player2 = new Rectangulo2(465,250,15,120);
let sel = new Rectangulo2;

function setup() {
  createCanvas(500, 500); 
  sel = null;
  
}

function draw() {
  let yRect1 = player1.getY();
  let yRect2 = player2.getY();
  let bx = bolita.getX();
  let by = bolita.getY();
  let score1 = bolita.getScore1();
  let score2 = bolita.getScore2();

  background(255);
  textSize(20);
	text("PING PONG", 200, 30);
	text(score1, 150, 30);
	text(score2, 355, 30);

  bolita.pintar();
  player1.pintar();
  player2.pintar();
  bolita.mover();
  player1.mover();
  
  if (bx >= 460 && by > yRect2 && by < (yRect2 + 100)) {
    bolita.setMoveRight(false);
  }

  if (bx <= 15 && by > yRect1 && by < (yRect1 + 90)) {
    bolita.setMoveRight(true);
  }
  mousePressed();
  mouseDragged();
}


function mousePressed() {
  let xC2 = player2.getX();
  let yC2 = player2.getY();
  //lC2 = player2.getBase();
  let lC2 = player2.getAltura();
  let b1 = bolita.getX();
  let b2 = bolita.getY();
  let diam = bolita.getDiametro();
  let mov = bolita.isMov();

  if (dist(mouseX, mouseY, xC2, yC2) < lC2 && dist(mouseX, mouseY, xC2 + 20, yC2 + 80) < lC2) {
    sel = player2;
  }

  if (dist(mouseX, mouseY, b1, b2) < diam) {
    bolita.setMov(!mov);
  }
}

function mouseDragged(){
  if (sel != null) {
    sel.setY(mouseY);
  }
}


