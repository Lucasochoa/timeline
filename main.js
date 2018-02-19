var myFont;
var input;
var sampleDates = [];
var eventList = [];
var timeLine;
var table;

function preload() {
  myFont = loadFont('assets/GTAmericaMonoRegular.otf');
  textFont(myFont);
  //table = loadJSON('assets/myTable.json');
  table = {};
}

function setup() {
  //table = new p5.Table();
  //save(myTable, 'myTable.csv')
  createCanvas(windowWidth, windowHeight);
  background(51);
  //angleMode(DEGREES);

  //printTable();

  input = createInput();
  input.position(width - 160 ,30);
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
  //rect(pos, 100, 50, 50); // scrolling test

  scanner.draw(windowWidth);
  timeLine.draw(windowWidth,windowHeight);
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
    print("working from shift");
    addRowsFromTimeline();
    //table.addRow(new p5.TableRow(["1920,apple"],[","]));
    //save(table, 'myTable.csv')
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
  //timeLine.upperLimit -=
}
function addRowsFromTimeline(){
  table.events = {};
  for (var i = 0; i < timeLine.events.length; i++){
    e = timeLine.events[i];
    var newEventName =  ""+e.name.slice(2,e.name.length);
    table.events[newEventName] = e.date;
    //table.addRow(new p5.TableRow(e.date +","+e.name));
  }

  //print(table);
  //table.addRow();
  //saveTable(table,'myTable');
  //saveJSON(json,'myTable.json');
  save(table, 'myTable.json');
}

function printTable(){
  //cycle through the table
  //print(table.getRowCount());
  print(table.getString(0,0));
  // for (var r = 0; r < table.getRowCount(); r++){
  //   for (var c = 0; c < table.getColumnCount(); c++) {
  //     print(table.getString(r, c));
  //     //table.addRow(new p5.TableRow(["1920,apple"],[","]));
  //   }
  // }
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
