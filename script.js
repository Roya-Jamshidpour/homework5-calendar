// Date displayed at top of page
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var timeBlockElements = $(".col-md-10 description");

// get current time
var currentTime = moment().format('H');

// function to use current time to dictate color of boxes 
