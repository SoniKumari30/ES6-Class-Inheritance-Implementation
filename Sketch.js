let p1, p2;
function setup() {
  createCanvas(600, 600);
  p1 = new Circle(300, 300);
  p2 = new Square(300//, 300);
}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
}