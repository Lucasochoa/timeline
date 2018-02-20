var myFont;
var input;
var sampleDates = [];
var eventList = [];
var timeLine;
var arrayOfJsonObjects=[];
var table;

function preload() {
  myFont = loadFont('assets/GTAmericaMonoRegular.otf');
  textFont(myFont);
  table = null;
  table = loadJSON('assets/maayan.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  setupInput();
  pos = 25;

  timeLine = new Timeline(eventList,0,0);
  scanner = new ScanMarker(30);

  if (table != null){
      setupImportedJSON();
  }
}

function draw() {
  background(30);
  //scanner.draw(windowWidth);
  timeLine.draw(windowWidth,windowHeight);
}

//sets up the input box
function setupInput(){
  input = createInput();
  input.position(width - 160 ,30);
  input.style('border',"none");
  input.changed(updateText);
}

//adds all events from imported json to timeline and updates it.\
function setupImportedJSON(){
  for(var i = 0; i < length(table); i++){
    print(table[i].name + table[i].value);
    name = ": "+table[i].name;
    date = table[i].value;
    timeLine.events.push(new Event(name,int(date)));
  }
  updateMinMax();
}

function keyPressed() {
  zoom = 10

  if (keyCode === UP_ARROW) {
    timeLine.upperLimit += zoom;
    timeLine.lowerLimit -= zoom;
  }
  else if(keyCode === DOWN_ARROW){
    timeLine.upperLimit -= zoom;
    timeLine.lowerLimit += zoom;
  }
  else if(keyCode ===  LEFT_ARROW){
    timeLine.lowerLimit += zoom;
  }
  else if(keyCode ===  RIGHT_ARROW){
    timeLine.upperLimit -= zoom;
  }
  else if(keyCode ===  OPTION){
    print("Saving Session");
    addRowsFromTimeline();
  }
}

function mouseWheel(event) {
  print(event.delta);
  pos += event.delta/10;

  zoom = 10
  if(event.delta >0){
    // timeLine.upperLimit += zoom;
    // timeLine.lowerLimit -= zoom;
  }
  else{
    // timeLine.upperLimit -= zoom;
    // timeLine.lowerLimit += zoom;
  }
}
function addRowsFromTimeline(){
  // table.events = {};

  for (var i = 0; i < timeLine.events.length; i++){
    var newJsonObj= {};
    e = timeLine.events[i];
    var newEventName =  ""+e.name.slice(2,e.name.length);
    newJsonObj.name = newEventName;
    newJsonObj.value = e.date;
    arrayOfJsonObjects.push(newJsonObj);
    //table.append or push({"Name":"})
    //table.addRow(new p5.TableRow(e.date +","+e.name));
  }
  save(arrayOfJsonObjects, 'myTable.json');
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
  //print(int((min(tempDates) - 10) / 10) * 10);
  timeLine.lowerLimit = int((min(tempDates) - 10) / 10) * 10;
  timeLine.upperLimit = int((max(tempDates) + 10) / 10) * 10;
  //timeLine.lowerLimit = 5;
  //print(timeLine.lowerLimit);
}
function mouseClicked() {
  for (var i = 0; i < timeLine.events.length; i++){
    timeLine.events[i].clicked();
  }
}
function updateText(){
  print(timeLine.events);

  splitIndex = input.value().search(":");
  if(splitIndex >= 0){
    date = input.value().slice(0,splitIndex);
    name = input.value().slice(splitIndex,input.value().length);
  }
  else{
    date = input.value();
    name = ": null";
  }
  timeLine.events.push(new Event(name,int(date)));
  updateMinMax();
  input.value("");
}
//HELPER FUNCTIONS
function length(obj) {
    return Object.keys(obj).length;
}
