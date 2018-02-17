function Event(name,date){
  this.name = name;
  this.date = date;
  this.description = "lorem ipusm lorem ipsum";
  //this.font = font;

  this.draw = function(steps,min,max){
    screenStep = windowWidth/steps;

    var x = map(this.date,min,max,screenStep*2,screenStep*(steps-2));
    var y = 200; // will be based on clustering (fucking shit show)

    drawTrace(x,y);
    drawTexts(x,y,this.date);
  };
};

function drawTexts(x,y,name){
  push();
  translate(x,y)
  rotate(-PI / 2.0);
  fill("white");
  stroke(0);
  //textFont(this.font);
  text(name + " : Event Name \nlorem ipsum lorem ipsum",0,0);
  pop();
}
function drawDottedLine(x1,y1,y2){
  fill(204, 204, 204);
  stroke(204, 204, 204);
  for (var i = y1; i < y2;i+=6){
    ellipse(x1, i, 1 , 1);
  }
  stroke("red");
  fill("white");
}
function drawTrace(x,y){ //update this to a fucking doted line
  strokeWeight(.5);
  drawDottedLine(x,y,windowHeight/2 - 30);
  //line(x,y+10,x,windowHeight/2);
}
