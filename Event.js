function Event(name,date){
  this.name = name;
  this.date = date;
  this.description = "lorem ipusm lorem ipsum";
  this.x;
  //this.font = font;
  this.clicked = function(){
    xColider = mouseX > this.x && mouseX < this.x + 20
    if(xColider){
        print(this.date +"working from event");
    }
  }

  this.draw = function(steps,min,max){
    screenStep = windowWidth/steps;

    var x = map(this.date,min,max,screenStep*2,screenStep*(steps-2));
    this.x = x;
    var y = 120; // will be based on clustering (fucking shit show)

    drawTrace(x,y);
    drawTexts(x,y,this.date,this.name);
  };
};

function drawTexts(x,y,date,name){
  push();
  translate(x+5,y-2)
  rotate(PI / 2.0);
  fill("white");
  stroke(0);
  //textFont(this.font);
  text(date + name,0,0);
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
  drawDottedLine(x,y,windowHeight/2);
  //line(x,y+10,x,windowHeight/2);
}
