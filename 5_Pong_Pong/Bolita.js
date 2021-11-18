//Juan José Rodriguez Carabali   Cod. A00362392
//Jhon Alex Serrano  Cod. A00368713
class Bolita {
    constructor (x, y, diametro, r, g, b){
        this.x = x;
        this.y = y;
        this.diametro = diametro;
        this.r = r;
        this.g = g;
        this.b = b;
        this.mov = true;
        this.moveRight = true;
        this.moveDown = true;
    }

    pintar(){
        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.diametro, this.diametro);      
    }

    mover(){
    this.speedSide = 2;
    this.speedVert = 2;
    this.score1 = 0;
    this.score2 = 0;
    
        if (this.moveRight === true){
            this.x = this.x + this.speedSide;
        } else{
            this.x = this.x - this.speedSide;
        }
        if (this.moveDown === true){
            this.y = this.y + this.speedVert;
        } else{
            this.y = this.y - this.speedVert;
        }
        if (this.y <= 10) {
			this.moveDown = true;
		}
		if (this.y >= 490) {
			this.moveDown = false;
		}
		if (this.x >= 490) {
            //puntaje jugador 1 
            this.score1++;
			this.x = 500 / 2;
			this.y = 500 / 2;
		}
		if (this.x <= 10) {
            //puntaje jugador 2
            this.score2++;
			this.x = 500 / 2;
			this.y = 500 / 2;
		}
        
    }
      
    getX(){
        return this.x;
    }
    setX(x){
        this.x = x;
    }
    getY(){
        return this.y;
    }
    setY(y){
        this.y = y;
    }
    getDiametro(){
        return this.diametro;
    }
    setDiametro(diametro){
        this.diametro = diametro;
    }
    isMov(){
        return this.mov;
    }
    setMov(mov){
        this.mov = mov;
    }
    getScore1(){
        return this.score1;
    }
    setScore1(score1){
        this.score1 = score1;
    }
    getScore2(){
        return this.score2;
    }
    setScore2(score2){
        this.score2 = score2;
    }
    getMoveRight(){
        return this.moveRight;
    }
    setMoveRight(moveRight){
        this.moveRight = moveRight;
    }
    getMoveDown(){
        return this.moveDown;
    }
    setMoveDown(moveDown){
        this.moveDown = moveDown;
    }
}