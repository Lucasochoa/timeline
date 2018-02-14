var myFont;

function preload() {
  myFont = loadFont('assets/GTAmericaMonoRegular.otf');
  textFont(myFont);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  //angleMode(DEGREES);

  pos = 25;

  timeLine = new Timeline(0,2000);
  testEvent = new Event("test",1234);
  scanner = new ScanMarker(30);

  
  //testEvent.draw();

}

function draw() {
  background(30);


  //fill(0);
  rect(pos, 100, 50, 50); // scrolling test

  scanner.draw(windowWidth);
  timeLine.draw(windowWidth,windowHeight);
  testEvent.draw();


}

function mouseWheel(event) {
  print(event.delta);
  pos += event.delta/10;
}
