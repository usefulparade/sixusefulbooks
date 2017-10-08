var TextPlane = function(w, h, x, y, z, rx, ry, rz, txt){
  this.w = w;
  this.h = h;
  this.pos = new p5.Vector(x, y, z);
  this.rot = new p5.Vector(rx, ry, rz);
  this.txt = txt;
  this.gr = createGraphics(this.w, this.h);
  this.gr.text(txt, 10, 10, this.w, this.h);
  
  this.disp = function(){
    push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      if (camGo){
        rotateX(map(mouseY, 0, height, -QUARTER_PI, QUARTER_PI));
        rotateY(map(mouseX, 0, width, -QUARTER_PI, QUARTER_PI));
        } else {
          rotateY(0);
          rotateX(0);
      }
      
      push();
        rotateX(this.rot.x);
        rotateY(this.rot.y);
        //rotateZ(this.rot.z);
        texture(this.gr);
        //normalMaterial(255, 0, 0);
        plane(this.w, this.h);
      pop();
    
    pop();
  };
}