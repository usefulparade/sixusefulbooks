var boxes = [];
var planes = [];
var texts = [];
var bc;
var s;
var camPos;
var camRot;
var camGo;
var canv;

function preload(){
  bc = loadImage('../img/logo-square.png');
}

function setup() {
  camGo = false;
  push();
    textSize(100);
    texts[0] = 'YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!! YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!!  YOU FOUND ME!!!! HOORAY!!!!!!!!!!! ';
    texts[1] = 'OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER OH BOTHER ';
  pop();
  s = 400;
  canv = createCanvas(s, s, WEBGL);
  canv.parent('logo');
  boxes[0] = new Box(0, 0, -180, s, 'useful books', bc);
  planes[0] = new TextPlane(width, height, 50, 0, -1200, QUARTER_PI, -QUARTER_PI*1.2, QUARTER_PI/2, texts[0]);
  planes[1] = new TextPlane(width, height, -50, 0, -1200, QUARTER_PI*1.2, QUARTER_PI, QUARTER_PI/40, texts[1]);
  camPos = new p5.Vector(0, 0, 0);
  camRot = new p5.Vector(0, 0, 0);
}

function draw() {
  background(255);
  cam();
  // pointLight(255, 255, 255, -1000, 1200, 5000)
  // ambientMaterial(255, 255, 255);
  for (i=0;i<boxes.length;i++){
    boxes[i].disp();
  }
  for (i=0;i<planes.length;i++){
    planes[i].disp();
  }
  move();
  //console.log(boxes[0].pos.z);
}

function move(){
  if (keyIsDown(BACKSPACE)){
    // camGo = true;
    // boxes[0].moveable = true;
  } else {
    // camGo = false;
    // boxes[0].moveable = false;
  }


  
  if (boxes[0].moveable){
    if (keyIsDown(UP_ARROW)){
      //boxes[0].pos.z += 10;
      camPos.z -= 10;
    } else if (keyIsDown(DOWN_ARROW)){
      //boxes[0].pos.z -= 10;
      camPos.z += 10;
    } else if (keyIsDown(LEFT_ARROW)){
      camRot.y -= QUARTER_PI/30;
    } else if (keyIsDown(RIGHT_ARROW)){
      camRot.y += QUARTER_PI/30;
    }
  } else {
    camRot.x = 0;
    camRot.y = 0;
    camRot.z = 0;
    //boxes[0].pos.z = -180;
    camPos.z = 0;
  }
  
  
}

function keyPressed(){
  if (keyCode === 54){
    camGo = true;
    boxes[0].moveable = true;
  }
  if (keyCode === 55){
    camGo = false;
    boxes[0].moveable = false;
  }
}

function cam(){
  //push();
    // if (camGo){
    //   rotateX(map(mouseY, 0, height, -HALF_PI, HALF_PI));
    //   rotateY(map(mouseX, 0, width, -HALF_PI, HALF_PI));
    // } else {
    //   rotateX(0);
    //   rotateY(0);
    // }
    
    
    //rotateX(camRot.x);
    //rotateY(camRot.y);
    //rotateZ(camRot.z);
    camera(camPos.x, camPos.y, camPos.z);
  //pop();
  
}
