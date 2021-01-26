var wordList;
var bembo;
var fiveWords = [];
var randomInd = [];
var cards = [];
var cardw, cardh, spacer, margin;
var pentaY1, pentaY2, pentaX1, pentaX2;
var w, h;
var c;
var randomButton;

function preload() {
  wordList = loadStrings('assets/spookywordlist.txt');
  bembo = loadFont('assets/BemboStd.otf');
}

function setup() {
  if (windowWidth >=800){
    h = 1000;
  } else {
    h = 2000;
  }
  c = createCanvas(windowWidth, h);
  c.parent('cards');
  // var cardw = width/4.5;
  // var cardh = height/2.5;
  cardw = 178;
  cardh = 320;
  pentaX1 = cardw*1.5;
  pentaX2 = cardw*0.8;
  pentaY1 = cardh*0.33;
  pentaY2 = cardh*1.5;
  spacer = new p5.Vector(266, 360);
  margin = new p5.Vector(130, 200);
  if (windowWidth >=800){
    margin.y = 200;
    h = 1000;
  } else {
    margin.y = 400;
    h = 2080;
  }
  // var spacer = width/3;

  for (i=0;i<wordList.length;i++){
    if (wordList[i].charAt(0) === '#'){
      wordList.splice(i, 1);
    }
  }
  
  //console.log(wordList);
  cards[0] = new Card(width/2, margin.y, cardw, cardh, fiveWords[0]);
  cards[1] = new Card(width/2 - pentaX1, margin.y + pentaY1, cardw, cardh, fiveWords[1]);
  cards[2] = new Card(width/2 + pentaX1, margin.y + pentaY1, cardw, cardh, fiveWords[2]);
  cards[3] = new Card(width/2 - pentaX2, margin.y + pentaY2, cardw, cardh, fiveWords[3]);
  cards[4] = new Card(width/2 + pentaX2, margin.y + pentaY2, cardw, cardh, fiveWords[4]);
  // for (k=0;k<2;k++){
  //   cards[k + 3] = new Card(k*spacer+width/3, 3*height/4, cardw, cardh, fiveWords[k + 3]);
  // }  
  randomizeWords();
  
  for (l=0;l<cards.length;l++){
    cards[l].makeShapes();
  }

  randomButton = new RandomBtn(width/2, height/2-50, 200, 50);

  //RESPONSIVE CARD ARRANGEMENT

  randomButton.pos.x = width/2;
    cards[0].pos.x = width/2;
    cards[0].pos.y = margin.y;
  
  if (width >= 800){
    
    cards[1].pos.x = width/2 - pentaX1;
    cards[1].pos.y = margin.y + pentaY1;
    
    cards[2].pos.x = width/2 + pentaX1;
    cards[2].pos.y = margin.y + pentaY1;
    
    cards[3].pos.x = width/2 - pentaX2;
    cards[3].pos.y = margin.y + pentaY2;
    
    cards[4].pos.x = width/2 + pentaX2;
    cards[4].pos.y = margin.y + pentaY2;

    randomButton.pos.y = height/2-50
    
  } else if (width < 800){
    
    cards[1].pos.x = width/2;
    cards[1].pos.y = margin.y + spacer.y;
    
    cards[2].pos.x = width/2;
    cards[2].pos.y = margin.y + spacer.y*2;
    
    cards[3].pos.x = width/2;
    cards[3].pos.y = margin.y + spacer.y*3;
    
    cards[4].pos.x = width/2;
    cards[4].pos.y = margin.y + spacer.y*4;

    randomButton.pos.y = 170;

  }
  
}

function draw() {
  background(0);
  bg();
  
  // push();
  //   noStroke();
  //   fill(0);
  //   textSize(18);
  //   for (i=0;i<fiveWords.length;i++){
  //     text(fiveWords[i], width/2, i*height/6 + height/6);
  //   }
  // pop();
  
  for (i=0;i<cards.length;i++){
    cards[i].disp();
  }
  
  randomButton.disp();
  w = width;
  
}

function keyPressed(){
  if (keyCode === 39){
    randomizeWords();
  }
}

function randomizeWords(){
  
  //RANDOMIZE INDEX NUMBERS
  randomInd[0] = int(random(0, wordList.length-1));
  for (i=1;i<5;i++){
    randomInd[i] = int(random(0, wordList.length-1));
    
    //MAKE SURE THERE ISN'T A DOUBLE
    for (j=i-1;j>=0;j--){
      if (randomInd[i] === randomInd[j]){
        randomInd[i] = int(random(0, wordList.length-1));
      }
    }
  }
  //MAKE THE LIST OF FIVE WORDS
  for (j=0;j<5;j++){
    fiveWords[j] = wordList[randomInd[j]];
    cards[j].word = fiveWords[j];
    cards[j].makeShapes();
    // for (k=0;k<cards[j].vectors.length;k++){
    //   cards[j].vectors[l] = new p5.Vector()
    // }
    
  }
  //console.log(fiveWords);
}

function windowResized(){
  if (windowWidth >=800){
    margin.y = 200;
    h = 1000;
  } else {
    margin.y = 400;
    h = 2080;
  }
  resizeCanvas(windowWidth, h);
  
   //RESPONSIVE CARD ARRANGEMENT

    randomButton.pos.x = width/2;
    cards[0].pos.x = width/2;
    cards[0].pos.y = margin.y;
  
  if (width >= 800){
    
    cards[1].pos.x = width/2 - pentaX1;
    cards[1].pos.y = margin.y + pentaY1;
    
    cards[2].pos.x = width/2 + pentaX1;
    cards[2].pos.y = margin.y + pentaY1;
    
    cards[3].pos.x = width/2 - pentaX2;
    cards[3].pos.y = margin.y + pentaY2;
    
    cards[4].pos.x = width/2 + pentaX2;
    cards[4].pos.y = margin.y + pentaY2;

    randomButton.pos.y = height/2-50
    
  } else if (width < 800){
    
    cards[1].pos.x = width/2;
    cards[1].pos.y = margin.y + spacer.y;
    
    cards[2].pos.x = width/2;
    cards[2].pos.y = margin.y + spacer.y*2;
    
    cards[3].pos.x = width/2;
    cards[3].pos.y = margin.y + spacer.y*3;
    
    cards[4].pos.x = width/2;
    cards[4].pos.y = margin.y + spacer.y*4;

    randomButton.pos.y = 170;

  }
}

function mousePressed(){
  if (randomButton.over){
    randomizeWords();
    for(i=0;i<cards.length;i++){
      cards.makeShapes();
    }
  }
}

function bg(){
  //var xoff = map(frameCount%1000, 0, 1000, 0, -100);
  //var xoff = map(mouseY, 0, height, 0, -100);
  //var yoff = map(mouseX, 0, width, 0, 100)
  push();
  //   translate(-xoff, xoff);
  //   for (i=-100;i<width+100;i+=100){
  //     for (j=-100;j<height+100;j+=120){
  //       push();
  //         stroke(100);
  //         noFill();
  //         line(i, j, i+100, j+120);
  //       pop();
  //     }
  //   }
  // pop();
  // push();
  //   translate(xoff, xoff);
  //   for (k=-100;k<width+100;k+=100){
  //     for (l=-100;l<height+100;l+=40){
  //       push();
  //         stroke(100);
  //         noFill();
  //         line(k, l, k-100, l+40);
  //       pop();
  //     }
  //   }
  // pop();
  // push();
    //translate(-xoff, yoff);
    for (i=-100;i<width+100;i+=100){
      for (j=-100;j<height+100;j+=120){
        push();
          stroke(30);
          fill(0);
          triangle(i, j, i+100, j+120, i-100, j+120);
        pop();
      }
    }
  pop();
}