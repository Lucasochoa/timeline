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
function drawTrace(x,y){ //update this to a fucking doted line
  strokeWeight(.5);
  line(x-5,y+10,x-5,windowHeight/2);
}
