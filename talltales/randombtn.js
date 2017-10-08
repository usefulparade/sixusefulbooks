function RandomBtn(x, y, w, h){
	this.pos = new p5.Vector(x, y);
	this.dim = new p5.Vector(w, h);
	this.fill = 255;
	this.over = false;

	this.disp = function(){
		push();
			rectMode(CENTER);
			translate(this.pos.x, this.pos.y);
			fill(255);
			stroke(0);
			rect(0, 0, this.dim.x+10, this.dim.y+10);

			if (this.over && mouseIsPressed){
				fill(0);
			} else {
				fill(255);
			}
			rect(0, 0, this.dim.x, this.dim.y);

			if (this.over){
				for (i=(-(this.dim.x/2));i<this.dim.x/2;i+=10){
					for (j=(-(this.dim.y/2));j<this.dim.y/2;j+=10){
						push();
							noFill();
							stroke(0);
							line(i, j, i+10, j+10);
						pop();
					}
				}

			} else {
				
			}

		pop();

		push();
		translate(this.pos.x, this.pos.y);
		if (this.over && mouseIsPressed){
			fill(255);
		} else {
			fill(0);
		}
		noStroke();
		textAlign(CENTER, CENTER);
		textFont(bembo);
		textSize(18);
		text('RESET', 0, 0);

		pop();


		if (mouseX > this.pos.x - this.dim.x/2 && mouseX < this.pos.x + this.dim.x/2 && mouseY > this.pos.y - this.dim.y/2 && mouseY < this.pos.y + this.dim.y/2){
			this.over = true;
		} else {
			this.over = false;
		}
	}
}