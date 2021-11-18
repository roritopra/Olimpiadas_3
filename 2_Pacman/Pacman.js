//Juan José Rodriguez Carabali   Cod. A00362392
//Jhon Alex Serrano  Cod. A00368713

class Pacman {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 4;
        this.diameter = 40;
    }

     display() {
    
            //Construcción del pacman
            fill(255,234,110);
            noStroke();
            arc(this.x, this.y, this.diameter, this.diameter,  10, 210);
            //Ojo del pacman
            fill(0);
            circle(this.x - 5, this.y - 11, 6);
        }

    move(){
        switch (key) {

            case 'D':
            case 'd':
                if (keyIsPressed == true) {
                    this.x += this.speed;
                }
                break;

            case 'A':
            case 'a':
                if (keyIsPressed == true) {
                    this.x -= this.speed;
                }
                break;

            case 'W':
            case 'w':
                if (keyIsPressed == true) {
                    this.y -= this.speed;
                }
                break;

            case 'S':
            case 's':
                if (keyIsPressed == true) {
                    this.y += this.speed;
                }
                break;
        }
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    gameOver(x, y, size) {
        if (dist(x, y, this.x, this.y) < size) 
        return true;
        return false;
    }
}