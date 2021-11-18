//Juan José Rodriguez Carabali   Cod. A00362392
//Jhon Alex Serrano  Cod. A00368713

class Rectangulo {
    constructor(x, y, base, altura){
    this.x = x;
    this.y = y;
    this.base = base;
    this.altura = altura;
    this.r = 0;
    this.g = 255;
    this.b = 0;
    }
    pintar(){
        noStroke();
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.base, this.altura);
    }
    mover(){
       if(keyIsPressed) {
        switch(key){
            case 'w'://arriba
                this.y -= 8;
                break;
            case 's'://abajo
                this.y += 8;
                break;
        }
        }
    }
    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
    
}