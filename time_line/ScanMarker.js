function ScanMarker(height){
  this.pos = 0;
  this.height = height;

  this.draw = function(windowWidth){
    stroke("red");
    line(this.pos,windowHeight/2-this.height/2,this.pos,windowHeight/2+this.height/2);
    this.pos += 1;

    if(this.pos > windowWidth) this.pos = 0;
  }
}
