function Card(xPos, yPos, w, h, word) {
  this.pos = new p5.Vector(xPos, yPos);
  this.w = w;
  this.h = h;
  this.word = word;
  this.vectors = [];
  this.widths = [];
  this.arcLengths = [];
  this.arcGroup = [];
  this.num;
  this.rot;
  //this.img = img;

  this.makeShapes = function() {
    for (i = 0; i < 10; i++) {
      this.vectors[i] = new p5.Vector(random(-this.w / 2, this.w / 2), random(-this.h / 2, this.h / 6));
      this.arcLengths[i] = random(0, TWO_PI);
      this.widths[i] = random(0, this.w / 2);
    }

    this.num = int(random(0, 100));
    this.rot = (random(-QUARTER_PI / 10, QUARTER_PI / 10));
  };

  this.disp = function() {
    push();
    translate(this.pos.x, this.pos.y);
    //THE RECTANGLE
    push();
    fill(255);
    stroke(0);
    rectMode(CENTER);
    rect(0, 0, this.w + 5, this.h + 5, 10);
    rect(0, 0, this.w, this.h, 10);
    
    pop();
    //THE WORD
    push();
    noStroke();
    fill(0);
    textFont(bembo);
    textSize(16);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    text(this.word.toUpperCase(), 0, this.h / 2 - this.h / 6, this.w, this.h);
    pop();
    //DIVIDER
    push();
    stroke(0);
    line(-(this.w / 2),
      this.h / 6, (this.w / 2),
      this.h / 6);
    pop();
    //SHAPE(S)
    push();
    stroke(0);
    noFill();

    if (this.num >= 70) {
      for (m = 0; m < 30; m += 3) {
        line(
          constrain(
            wave2(m) + this.vectors[2].x, -this.w / 2,
            this.w / 2 - 30) + m,
          constrain(
            this.vectors[2].y, -this.h / 2,
            this.h / 6 - 30) + m,
          constrain(
            wave2(m) + this.vectors[1].x, -this.w / 2,
            this.w / 2 - 30) + m,
          constrain(
            this.vectors[1].y, -this.h / 2,
            this.h / 6 - 30) + m
        );
      }
    }
    if (this.num <= 30) {
      for (m = 0; m < 30; m += 3) {
        line(
          constrain(
            this.vectors[2].x, -this.w / 2,
            this.w / 2 - 30) + m,
          constrain(
            this.vectors[2].y, -this.h / 2,
            this.h / 6 - 30) + m,
          constrain(
            this.vectors[1].x, -this.w / 2,
            this.w / 2 - 30) + m,
          constrain(
            this.vectors[1].y, -this.h / 2,
            this.h / 6 - 30) + m
        );
      }
    }
    // line(
    //   this.vectors[1].x,
    //   this.vectors[1].y,
    //   this.vectors[2].x,
    //   this.vectors[2].y);
    // line(
    //   this.vectors[2].x,
    //   this.vectors[2].y,
    //   this.vectors[3].x,
    //   this.vectors[3].y);
    // line(
    //   this.vectors[4].x,
    //   this.vectors[4].y,
    //   this.vectors[3].x,
    //   this.vectors[3].y);
    if (this.num % 2 == 0) {
      triangle(
        this.vectors[4].x,
        this.vectors[4].y,
        this.vectors[1].x,
        this.vectors[1].y,
        this.vectors[3].x,
        this.vectors[3].y);
    }
    // triangle(
    // this.vectors[4].x,
    // this.vectors[4].y,
    // this.vectors[6].x,
    // this.vectors[6].y,
    // this.vectors[5].x,
    // this.vectors[5].y);
    if (this.num <= 80) {
      triangle(
        this.vectors[3].x,
        this.vectors[3].y,
        this.vectors[4].x,
        this.vectors[4].y,
        this.vectors[5].x,
        this.vectors[5].y);
    }
    if (this.num >= 60) {
      arc(
        constrain(
          this.vectors[5].x, -
          this.w / 2 + this.widths[0],
          this.w / 2 - this.widths[0]),
        constrain(
          this.vectors[5].y, -this.h / 2 + this.widths[0],
          this.h / 6 - this.widths[0]),
        this.widths[0],
        this.widths[0],
        this.arcLengths[0],
        this.arcLengths[1],
        OPEN);
    }
    if (this.num <= 40) {
      for (l = 0; l < 30; l += 6) {
        rotate(this.rot);
        arc(
          constrain(
            this.vectors[1].x, -this.w / 2 + this.widths[1],
            this.w / 2 - this.widths[1] - 30) + l,
          constrain(
            wave1(l) + this.vectors[1].y, -this.h / 2 + this.widths[1],
            this.h / 6 - this.widths[1] - 30) + l,
          this.widths[1],
          this.widths[1],
          this.arcLengths[2],
          this.arcLengths[3],
          OPEN);
      }
    }
    pop();
    pop();
  }
}

function wave1(x1) {
  return sin(frameCount / 40 + x1) * 5;
}

function wave2(x1) {
  return cos(frameCount / 60 + x1) * 20;
}

function wave3(x1) {
  return sin(frameCount / 50 + x1) * 12;
}

function wave4(x1) {
  return sin(frameCount / 70 + x1) * 8;
}