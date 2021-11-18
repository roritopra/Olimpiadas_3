let user1 = new Usuarios(150,206,254,249, false,254,243,206,41,53,131,255,161,15);
let user2 = new Usuarios(400,234,206,255, true,156,109,21,115,55,207,77,55,15);
let user3 = new Usuarios(650,221,255,153, false,216,176,109,137,176,59,38,31,5);
let user4 = new Usuarios(900,255,192,200,true,255,230,215,238,105,142,255,229,101);

function setup() {
  createCanvas(1050, 600);
}

function draw() {
  background(220);
  user1.pintar();
  user2.pintar();
  user3.pintar();
  user4.pintar();

}
