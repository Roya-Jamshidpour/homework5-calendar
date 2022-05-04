
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
    // get the text
    let text = $(this).siblings('.description').val();
    let time = $(this).parent().attr('data-time');
    // set item in local storage
    localStorage.setItem(time, text);
    console.log(text);
    displayTask()
    
}

// function to display task in field upon refresh
function displayTask(time, text) {
    let displayedTask = localStorage.getItem(time, text);
    
    console.log(displayedTask)
        
}   
    
    
        
        
    
    
   
    // console.log(displayedTask)
    // localStorage.getItem('.time-block').siblings('.description').val();
    




// // function to use current time to dictate color of boxes 
function changeColor() {

    //remove any old classes from element
    $(".time-block").removeClass(".present .past .future");
    // get current time
    let currentTime = moment().format("HH");
    console.log(currentTime)

    // apply new class based on if the description row is past, present, or future
    let hour = $(this).attr('data-time');
    console.log(this)
    hour = parseInt(hour, 10);
    console.log(hour)
    // make hour string into integer to compare with currentTime


    //  make variables for every section

    $('.time-block').each(function () {
        if (currentTime > hour) {
            $(".time-block").addClass('past');
        }
        if (currentTime === hour) {
            $(".time-block").addClass('present');
        }
        if (currentTime < hour) {
            $(".time-block").addClass('future');
        }
    });
}








// // when a save button is pressed it saves task to local storage
// $('.saveBtn').on('click', saveTask);

// need function saveTask to save tasks when button is pressed 
// need function to get getItem tasks upon opening app



