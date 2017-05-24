/* Name: Chase Keady
   COSC 365
   This assignment dealt with creating a webpage that displayed the date and time using javascript.
   This file contains the javascript code that is used to display the date and time, and change the font size and color.
*/

var today;
var dayOfWeek;
var day;
var month;
var year;
var hours;
var minutes;
var AmPm;

/*Function that initializes all global variables*/
function date() {
  today = new Date();
  dayOfWeek = "";
  day = today.getDate();
  month = "";
  year = today.getFullYear();
  hours = today.getHours();
  minutes = today.getMinutes();
  AmPm = "";
}

/*Function that when called displays the time in the US format.*/
function displayUSFormat() {
  date();
  var hrs = hours;
  dayAndMonth();
  
  if(hrs > 12) {
    hrs = hrs - 12;
    AmPm = "PM";
  }else {
     AmPm = "AM";
  }
  var n = hrs.toString();
  
  if (minutes < 10){
    document.getElementById("dateAndTime").innerHTML = dayOfWeek + "<br /> <br />" + month + "&nbsp;" + day + ",&nbsp;" + year + "<br /> <br />" + n + ":0" + minutes + "&nbsp;" + AmPm;
  }else {
    document.getElementById("dateAndTime").innerHTML = dayOfWeek + "<br /> <br />" + month + "&nbsp;" + day + ",&nbsp;" + year + "<br /> <br />" + n + ":" + minutes + "&nbsp;" + AmPm;
  }
}

/*Function that when called displays the time in the European format.*/
function displayEuroFormat() {
  date();
  dayAndMonth();
  
  if (minutes < 10){
    document.getElementById("dateAndTime").innerHTML = dayOfWeek + "<br /> <br />" + day + "&nbsp;" + month + "&nbsp;" + year + "<br /> <br />" + hours + ":0" + minutes;
  }else {
    document.getElementById("dateAndTime").innerHTML = dayOfWeek + "<br /> <br />" + day + "&nbsp;" + month + "&nbsp;" + year + "<br /> <br />" + hours + ":" + minutes;
  }
}

/*Function that when called changes the font size to x-small*/
function small() {
  document.getElementById("dateAndTime").style.fontSize = "x-small";
}

/*Function that when called changes the font size to medium*/
function medium() {
  document.getElementById("dateAndTime").style.fontSize = "medium";
}

/*Function that when called changes the font size to x-large*/
function large() {
  document.getElementById("dateAndTime").style.fontSize = "x-large";
}

/*Function that when called changes the font color*/
function changeColor() {
  var selectBox = document.getElementById("mySelect");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    
  if(selectedValue == 0){
    document.getElementById("dateAndTime").style.color = "rgb(38,38,38)";
  }else if(selectedValue == 1){
    document.getElementById("dateAndTime").style.color = "rgb(158,27,50)";
  }else if(selectedValue == 2){
    document.getElementById("dateAndTime").style.color = "rgb(66, 134, 244)";
  }else if(selectedValue == 3){
    document.getElementById("dateAndTime").style.color = "rgb(13,102,42)";
  }else if(selectedValue == 4){
    document.getElementById("dateAndTime").style.color = "rgb(85,14,127)";
  }
}

/*Function that when called coverts the day of the week and month from a number to a string*/
function dayAndMonth() {
  var temp = today.getDay();
  
  if(temp == 0){
    dayOfWeek = "Sunday";
  } else if(temp == 1){
    dayOfWeek = "Monday";
  } else if(temp == 2){
    dayOfWeek = "Tuesday";
  } else if(temp == 3){
    dayOfWeek = "Wednesday";
  } else if(temp == 4){
    dayOfWeek = "Thursday";
  } else if(temp == 5){
    dayOfWeek = "Friday";
  } else if(temp == 6){
    dayOfWeek = "Sunday";
  }
  
  temp = today.getMonth();
  if(temp == 0){
    month = "January";
  } else if(temp == 1){
    month = "February";
  } else if(temp == 2){
    month = "March";
  } else if(temp == 3){
    month = "April";
  } else if(temp == 4){
    month = "May";
  } else if(temp == 5){
    month = "June";
  } else if(temp == 6){
    month = "July";
  } else if(temp == 7){
    month = "August";
  } else if(temp == 8){
    month = "September";
  } else if(temp == 9){
    month = "October";
  } else if(temp == 10){
    month = "November";
  } else if(temp == 11){
    month = "December";
  }
}