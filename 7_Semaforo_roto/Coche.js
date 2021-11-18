//Juan José Rodriguez Carabali   Cod. A00362392
//Jhon Alex Serrano  Cod. A00368713

class Coche {

    constructor(x, y, carril) {
      this.dir = int(random(0, 2));
      this.y = y + (this.dir * 9);
      this.x = x;
      this.tamAnch = 40;
      this.tamLarg = 80;
  
  
    
  
      this.carril = carril;
     
    }
  
    mostrar() {
  
  
      noStroke();
  
      fill(40);
      square(this.x - 10, this.y + this.tamAnch / 5, this.tamAnch / 3);
      square(this.x + 37, this.y + this.tamAnch / 5, this.tamAnch / 3);
  
      square(this.x - 10, this.y + (this.tamLarg - (this.tamAnch / 2)), this.tamAnch / 3);
      square(this.x + 37, this.y + (this.tamLarg - (this.tamAnch / 2)), this.tamAnch / 3);
  
  stroke(0)
  strokeWeight(3)
      fill(211, 41, 65);
      rect(this.x, this.y, this.tamAnch, this.tamLarg);
  
      this.mover();
  
  
  
  
  
  
    }
  
    mover() {
  
      switch (this.carril) {
        case 1:
  
  
          this.y -= 2;
          if (this.y < -85) {
            this.y = int(random(605, 685));
          }
  
  
  
          break;
  
        case 2:
          this.y += 2;
  
          if (this.y > 605) {
            this.y = int(random(-180, -85));
  
          }
          break;
  
      }
  
    }
  
    getRefCar() {
      return this.y;
    }
  }