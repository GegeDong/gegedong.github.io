var timeDiff;
var selectedCity;
var daylightSavingsAdjust = 0;

function updateTimeZone(){
  var lstCity = document.others.lstCity;
  timeDiff = lstCity.options[lstCity.selectedIndex].value;
  selectedCity = lstCity.options[lstCity.selectedIndex].text;
  updateTime();
}

function getTimeString(dateObject){
  var timeString;
  var hours = dateObject.getHours();
  if(hours < 10){
    hours = "0" + hours;
  }

  var minutes = dateObject.getMinutes();
  if(minutes<10){
    minutes = "0" + minutes;
  }

  var seconds = dateObject.getSeconds();
  if(seconds<10){
    seconds ="0" + seconds;
  }

  timeString = hours + ":" + minutes + ":" + seconds;
  return timeString;
}

setInterval(updateTime, 1000);
function updateTime(){
  var nowTime = new Date();
  var resultsText = "<p>Local Time is " + getTimeString(nowTime) + "</p>";

  nowTime.setMinutes(nowTime.getMinutes() + nowTime.getTimezoneOffset() + parseInt(timeDiff) + daylightSavingsAdjust);

  resultsText += "<p>" + selectedCity + " time is "+ getTimeString(nowTime)
  + "</p>";

  document.getElementById("otherlocations").innerHTML = resultsText;
}

function daylightSaving_onclick(){
  if(document.others.daylightSaving.checked){
    daylightSavingsAdjust = 60;
  }

  else{
    daylightSavingsAdjust = 0;
  }

  updateTime();
}
