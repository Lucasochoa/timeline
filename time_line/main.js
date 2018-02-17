var myFont;
var input;
var sampleDates = [];
var eventList = [];
var timeLine;

function preload() {
  myFont = loadFont('assets/GTAmericaMonoRegular.otf');
  textFont(myFont);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  //angleMode(DEGREES);

  input = createInput();
  input.position(20, 65);
  input.style('border',"none");
  input.changed(updateText);

  pos = 25;

  //sampleDates = [1910,1915,1945,1930,1925,1954,1956,1965,1966];
  //var eventList = createTestEvents(sampleDates);

  //creates sample date arraylist to build min/max
  for (var i = 0; i < eventList.length; i++){
    sampleDates.push(eventList[i].date);
  }

  lowerLimit = int((min(sampleDates) - 10) / 10) * 10;
  upperLimit = int((max(sampleDates) + 10) / 10) * 10;

  timeLine = new Timeline(eventList,lowerLimit,upperLimit);
  scanner = new ScanMarker(30);
}

function draw() {
  background(30);
  //fill(0);
  rect(pos, 100, 50, 50); // scrolling test

  scanner.draw(windowWidth);
  timeLine.draw(windowWidth,windowHeight);
}

function mouseWheel(event) {
  print(event.delta);
  pos += event.delta/10;
}

function createTestEvents(dates){
  result  = [];
  for (var i = 0; i < dates.length; i++){
    result.push(new Event("test1",dates[i]));
  }
  return result;
}

function updateMinMax(){
  tempDates = []
  for (var i = 0; i < timeLine.events.length; i++){
    tempDates.push(timeLine.events[i].date);
  }
  timeLine.lowerLimit = int((min(tempDates) - 10) / 10) * 10;
  timeLine.upperLimit = int((max(tempDates) + 10) / 10) * 10;
}

function updateText(){
  print(timeLine.events);
  timeLine.events.push(new Event("test1",int(input.value())));
  updateMinMax();
  print(input.value());
  input.value("");
}
