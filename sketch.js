let angle = 0;

let button_x = 40;
let button_y = 70;
let growth = 0.2;

let boxColor01 = 152;
let colorChange = 1;
let bgColor = 0;

let boxColor02 = 254;


function setup() {
  createCanvas(600, 600);
   rectMode(CENTER)
  ellipseMode(CENTER)
 noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(000);


fill(color(152));
push();
translate(300, 300);
rotate(angle);
circle(300, 185, 296)
pop();
angle++;


fill(color(0));
push();
translate(300, 208);
rotate(angle);

rect(0, 0, 300, 313);
pop();
angle++;

fill(color(152));
push();
translate(300, 362);
rotate(angle);
rect(0, 0, 140, 400, 5, 5, 3, 3);
pop();
angle++;


fill(boxColor01);
if (boxColor01 > 152 || boxColor01 < bgColor) {
    colorChange = -colorChange;
  }
  boxColor01 = boxColor01 + colorChange;
push();
translate(300, 104);
rotate(angle);
rect(300, 104, 140, 110, 15, 15, 3, 3);
pop();
angle--;



fill(boxColor01);

push();
translate(300, 100);
rotate(angle);
push()
    translate(398, 70);
    rotate(175);
    rect(0, 0, 60, 70, 5);
pop()
push()
    translate(202, 70);
    rotate(-175);
    rect(0, 0, 60, 70, 5);
pop()
pop();
angle++;

push();
translate(300, 111);
rotate(angle);
fill(color(50));
rect(300, 114, 58, 90, 20, 20, 0, 0);

fill(color(100));
rect(300, 119, 40, 78, 10, 10, 0, 0);
pop();
angle--;

fill(color(200));
if (button_x > 110 || button_x < 40) {
    growth = growth*-1;
  }
  button_x = button_x + growth;

if (button_y > 100 || button_y < 70) {
    growth = growth*-1;
  }
  button_y = button_y + growth;
rect(300, 116, button_x, button_y, 10, 10, 10, 10);



fill(boxColor02);
if (boxColor02 > 255 || boxColor02 < bgColor) {
    colorChange = -colorChange;
  }
  boxColor02 = boxColor02 + colorChange;
rect(300, 140, 30, 8, 4, 4, 4, 4)

fill(boxColor02);
rect(347, 132, 36, 34, 0, 7, 7, 0)


fill(boxColor01);
rect(333, 132, 6, 33, 3)
rect(355, 132, 6, 33, 3)


fill(boxColor01);
rect(255, 104, 50, 2);
rect(345, 104, 50, 2);

}
