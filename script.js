// function initiated upon opening page. Gets saved tasks and makes hour rows change color based on time
 init ()

 function init() {
     changeColor()
    // checkTime every 5 minutes
     

 }

// Current date displayed at top of page
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// // when a save button is pressed it saves task to local storage
// $('.saveBtn').on('click', saveTask);



// // function to use current time to dictate color of boxes 
function changeColor() {
    // get current time
    let currentTime = moment().hour();
    console.log(currentTime)
}

    // // will need this in that function
//     let taskArea = $(".description");   
//     //remove any old classes from element
//     $(taskArea).removeClass(".present .past .future");

//     // apply new class based on if the description row is past, present, or future
//     if (currentTime > hour) {
//         $(this).addClass('past');
//     };
//     if (currentHour === hour) {
//         $(this).addClass('present');
//     };
//     if (currentHour < hour) {
//         $(this).addClass('future');
//     }
// };


// // when a save button is pressed it saves task to local storage
// $('.saveBtn').on('click', saveTask);

// need function saveTask to save tasks when button is pressed 
// need function to get getItem tasks upon opening app



