//Juan José Rodriguez Carabali   Cod. A00362392
//Jhon Alex Serrano  Cod. A00368713

class Rectangulo2 {
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
        fill(0, 255, 0);
        rect(this.x, this.y, this.base, this.altura);
    }
    mover(){
        if(keyIsPressed) {
         switch(key){
             case 'p':
                 this.y -= 8;
                 break;
             case 'l':
                 this.y += 8;
                 break;
         }
         }
    }
    getX(){
        return this.x;
    }
    setX(x){
        this.x = x;
    }
    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
    getBase(){
        return this.base;
    }
    setBase(base){
        this.base = base;
    }
    getAltura(){
        return this.altura;
    }
    setBase(altura){
        this.altura = altura;
    }
    
}