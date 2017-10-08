var Box = function(x, y, z, s, txt, skin){
  this.pos = new p5.Vector(x, y, z);
  this.s = s;
  this.txt = txt;
  this.txtgr = createGraphics(this.s, this.s);
  this.txtgr.text(this.txt, this.s/4, this.s/4);
  this.skin = skin;
  this.moveable = false;
  
  this.disp = function(){
    //console.log('yeah!');
    push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      if (this.moveable){
        rotateX(map(mouseY, 0, height, -QUARTER_PI, QUARTER_PI));
        rotateY(map(mouseX, 0, width, -QUARTER_PI, QUARTER_PI));
        } else {
          rotateY(0);
          rotateX(0);
      }
      texture(this.skin);
      box(this.s, this.s, this.s);
      
    pop();
  }
}