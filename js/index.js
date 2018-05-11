var clockFlag = 0;
var timer=null;
var seconds = 60;
var clockHasStartedFlag = 0
//functionality for - buttons
function decreaseNum(id){
 var val = document.getElementById(id).innerHTML;
  val--;
document.getElementById(id).innerHTML=val;
  document.getElementById("clock").innerHTML = document.getElementById("clockTime").innerHTML+":"+"00";
}

//functionality for + buttons
function increaseNum(id){
var val = document.getElementById(id).innerHTML;
  val++;
document.getElementById(id).innerHTML=(val);
  document.getElementById("clock").innerHTML = document.getElementById("clockTime").innerHTML+":"+"00";
}

//functionality for actual clock timer as well as conditions for when to switch between Session time and Break time

function runClock(){
  document.getElementById("startButton").value = "Reset";
  
  var sessionLength = document.getElementById("clockTime").innerHTML;
  
  var count = document.getElementById("clockTime").innerHTML;
  
  
  var breakLength = document.getElementById("breakLength").innerHTML;
  //breakFlag is ticker to keep track of if the session is in Session mode or Break mode (0 means Session mode)
  var breakFlag = 0;
  if (clockFlag == 0){
  timer = setInterval(function(){
  clockFlag = 1;
   seconds--;
  document.getElementById("clock").innerHTML = count-1 + ":" + seconds;
  
  //statement to add 0 in 10s digit of clock seconds when seconds reach single digits  
  if(seconds<10){
  document.getElementById("clock").innerHTML = count-1 + ":" + "0" + seconds
  }
  //check for break flag when clock expires. If break flag on, change to session mode  
  if(seconds == 0 && count == 1 && breakFlag > 0){
      count = sessionLength;
      seconds = 60;
      breakFlag = 0;
  document.getElementById("clock").style.color="mediumspringgreen";
  }    
   //rollover for minutes in clock upon seconds reaching 0 
  if(seconds == 0 && count > 0){
    count--;
    seconds = 60;
    }
  //condition to change to break mode
 if (count <= 0 && breakFlag <= 0){
    count = breakLength;
    seconds = 60;
    breakFlag = 1;
    document.getElementById("clock").style.color="Gold";
 }

    }, 1000);}
  //resets timer upon second press of "Click to Start Button"
  else{ 
    clearInterval(timer);
    clockFlag = 0;
    document.getElementById("clock").innerHTML = sessionLength + ":" + "00";
    seconds = 60;
    document.getElementById("startButton").value = "Click to Start";
    
  }
  }