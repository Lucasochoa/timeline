function Timeline(eventList,lowerLimit,upperLimit){
  this.events = eventList;
  this.currentPos = 0;
  this.lowerLimit = lowerLimit;
  this.upperLimit = upperLimit;

  this.draw = function(){


      screenSteps = (this.upperLimit - this.lowerLimit)/5 + 4; //amount of lines 14
      step = windowWidth/screenSteps;

      for (var i = 0; i < this.events.length; i++){
        this.events[i].draw(screenSteps,this.lowerLimit,this.upperLimit);
      }


      var lineHeight = 25;
      stroke(255);

      for (var i = 1; i < screenSteps; i ++){
        currentYear = this.lowerLimit + i*5;
        if(i % 2 != 0){
          lineHeight = 25;
          strokeWeight(1);
        }
        else{
          lineHeight = 35;
          drawWords(i,lineHeight);
          strokeWeight(2);
        }
        lineX = i * step
        line(lineX,windowHeight/2-lineHeight,lineX,windowHeight/2+lineHeight);
      }
      //horizontal middle line
      line(0,windowHeight/2,windowWidth,windowHeight/2);
  }
}
function returnMinMax(){
  minMax = []
  tempDates = []
  for (var i = 0; i < this.events.length; i++){
    tempDates.push(this.events[i].date);
  }
  minMax[0] = int((min(tempDates) - 10) / 10) * 10;
  minMax[1] = int((max(tempDates) + 10) / 10) * 10;
  return minMax
}

function drawWords(i,lineHeight){
  fill("white");
  strokeWeight(0);
  yearText = (i-2)*5 + this.lowerLimit;
  textX = i * step;
  text(yearText,textX, windowHeight/2-lineHeight - 10);
}
