//Juan José Rodriguez Carabali   Cod. A00362392
//Jhon Alex Serrano  Cod. A00368713

class Gold {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diameter= 5;
    }

    display() {
        //Pintar moneda
        fill(255, 242, 0);
        noStroke();
        circle(this.x, this.y, this.diameter);
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    eat(x, y, diameter) {
        if (dist(x, y, this.x, this.y) < diameter) 
        return true;
        return false;
    }
}