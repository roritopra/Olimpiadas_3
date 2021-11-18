//Juan José Rodriguez Carabali   Cod. A00362392
//Jhon Alex Serrano  Cod. A00368713

class Usuarios {
    constructor(x, r, g, b, genero, r2, g2, b2, r3, g3, b3, r4, g4, b4){
		//Location
		this.x =x;
		this.y = 300;
		//R G B, color of the circle behind user
		this.r = r;
		this.b = b;
		this.g = g;
		//Gender of the user, true (woman) and false (man)
		this.genero = genero;
		//R2 G2 B2, skin color 
		this.r2 = r2;
		this.b2 = b2;
		this.g2 = g2;
		//R3 G3 B3, shirt color
		this.r3 = r3;
		this.b3 = b3;
		this.g3 = g3;
		//R4 G4 B4, hair color
		this.r4 = r4;
		this.b4 = b4;
		this.g4 = g4;   
    }

    pintar(){
    //Shadow under circle
		noStroke();
		fill(50,50);
		ellipse(this.x,this.y+100,150,20);
		//Colored circle
		fill(this.r,this.g,this.b);
		circle(this.x,this.y, 200);
		//Shirt
		fill(this.r3,this.g3,this.b3);
		arc(this.x,this.y,200,200,PI/3-((PI/180)*40), 2*PI/3+((PI/180)*40));
		//Shirt slit
		fill(255);
		triangle(this.x-15,305,this.x,350,this.x+15,305);
		//Hair for woman
			if (this.genero==true) {
				fill(this.r4,this.g4,this.b4);
				rect(this.x,this.y-30,90,60);
			}
		//Neck
		fill(this.r2,this.g2,this.b2);
		rectMode(CENTER);
		rect(this.x,this.y-10,30,30);
		//Shadow on neck
		fill(50,20);
		arc(this.x,this.y-10,30,20,0,PI);
		//Head
		fill(this.r2,this.g2,this.b2);
		ellipse(this.x,this.y-60,90,110);
		//Eyes and smile
		fill(0);
		ellipse(this.x-20,this.y-55,9,15);
		ellipse(this.x+20,this.y-55,9,15);
		fill(255);
		arc(this.x,this.y-30,30,20,0,PI);
		stroke(200);
		line(this.x-13,this.y-25,this.x+5, this.y-25);	
		
		if (this.genero==false) {
			noStroke();
			//Hair
			fill(this.r4,this.g4,this.b4);
			quad(this.x,this.y-120,this.x-45,this.y-95, this.x-47, this.y-55, this.x, this.y-95);
			quad(this.x,this.y-120,this.x+45,this.y-95, this.x+47, this.y-55, this.x, this.y-95);
		}
		
		if (this.genero==true) {
			noStroke();
			//Hair
			fill(this.r4,this.g4,this.b4);
			quad(this.x,this.y-120,this.x-45,this.y-95, this.x-47, this.y-55, this.x, this.y-95);
			quad(this.x,this.y-120,this.x+45,this.y-95, this.x+47, this.y-55, this.x, this.y-95);
			//Lashes
			stroke(0);
			strokeWeight(2);
			line(this.x-24,this.y-60,this.x-29,this.y-63);
			line(this.x+24,this.y-60,this.x+29,this.y-63);
		}
   
    }
}