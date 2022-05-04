
// function initiated upon opening page. Gets saved tasks and makes hour rows change color based on time
init()

function init() {
    changeColor()
    
}

// Current date displayed at top of page
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// // when a save button is pressed it saves task to local storage
let saveButton = $(".saveBtn");
$('.saveBtn').on('click', saveTask);


// saves task to local storage
function saveTask() {
    // get the text typed inside row
    let time = $(this).parent().attr('data-time');
    let text = $(this).prev().val();
    
    // set item in local storage
    localStorage.setItem(time, text);
    console.log(text);
    displayTask(time, text)

}

// function to display task in field upon refresh
function displayTask() {
    $("#saveBtn").show().delay(300).fadeOut();
}

// // function to use current time to dictate color of boxes 
function changeColor() {

    //remove any old classes from element
    // $(".time-block").removeClass(".present .past .future");
    // get current time
    let currentTime = moment().format("HH");
    console.log(currentTime)

    // apply new class based on if the description row is past, present, or future
    $('.time-block').each(function () {
        let hour = $(this).attr('data-time');
        // make hour string into integer to compare with currentTime
        hour = parseInt(hour, 10);
        // applies color classes based on hour of day
        if (currentTime > hour) {
            $(this).addClass('past');
        };
        if (currentTime === hour) {
            $(this).addClass('present');
        };
        if (currentTime < hour) {
            $(this).addClass('future');
        }
    })
};
