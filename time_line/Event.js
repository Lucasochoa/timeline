function Event(name,date){
  this.name = name;
  this.date = date;
  //this.font = font;

  this.draw = function(){
    //line to timeLine
    var x = 100
    var y = 200
    line(x,y,)

    //draw line modularize!!!!!!
    push();
    translate(100,200)
    rotate(-PI / 2.0);
    fill("white");
    stroke(0);
    //textFont(this.font);
    text(name + " : Event Name \nlorem ipsum lorem ipsum",0,0);
    pop();

  };
};
