function Timeline(minYear,maxYear){
  this.currentPos = 0;
  this.minYear = minYear;
  this.maxYear = maxYear;


  this.draw = function(){
      var sampleDates = [1910,1915,1945,1930,1925,1954,1956,1965,1966];
      var eventList = createTestEvents(sampleDates);

      for (var i = 0; i < eventList.length; i++){
        eventList[i].draw()
      }

      lowerLimit = int((min(sampleDates) - 10) / 10) * 10;
      upperLimit = int((max(sampleDates) + 10) / 10) * 10;

      screenSteps = (upperLimit - lowerLimit)/5 + 4; //amount of lines 14
      step = windowWidth/screenSteps;
      //upper = 1970 - lower 1900
      //print("upper limit: " + upperLimit + " lower limit: " +  lowerLimit);

      var lineHeight = 25;
      stroke(255);

      for (var i = 1; i < screenSteps; i ++){
        currentYear = lowerLimit + i*5;
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

function drawWords(i,lineHeight){
  fill("white");
  strokeWeight(0);
  yearText = (i-2)*5 + lowerLimit;
  textX = i * step;
  text(yearText,textX, windowHeight/2-lineHeight - 10);
}

function createTestEvents(dates){
  result  = [];
  for (var i = 0; i < dates.length; i++){
    result.push(new Event("test1",dates[i]));
  }
  return result;
}
