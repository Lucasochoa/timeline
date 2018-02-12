function Timeline(minYear,maxYear){
  this.currentPos = 0;
  this.minYear = minYear;
  this.maxYear = maxYear;


  this.draw = function(windowWidth,windowHeight){
      //print("working from timeline")
      // fill("white");
      // stroke(0);
      // text('test', 10, 60);
      //print("Timeline Object: " + windowWidth,windowHeight);
      var lineHeight = 25;
      stroke(255);
      for (var i = 0; i < 10; i++){
        if(i % 2 != 0){
          strokeWeight(2);
          lineHeight = 35
        }
        else{
          strokeWeight(1);
          lineHeight = 25
        }
        line((windowWidth/10)+i*windowWidth/10,windowHeight/2-lineHeight,(windowWidth/10)
          +i*windowWidth/10,windowHeight/2+lineHeight);
      }
      //horizontal middle line
      line(0,windowHeight/2,windowWidth,windowHeight/2);
  }
}
