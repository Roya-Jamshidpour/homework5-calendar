
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

// // function to use current time to dictate color of boxes 
function changeColor() {

    // get current time
    let currentTime = moment().hours();
    console.log(currentTime)

    // apply new class based on if the description row is past, present, or future
    $('.time-block').each(function () {
        let hour = $(this).attr('data-time');
        // make hour string into integer to compare with currentTime
        hour = parseInt(hour, 10);
        // applies color classes based on hour of day
        if (currentTime > hour) {
            $(this).addClass('past');
        
        } else if (currentTime === hour) {
            $(this).addClass('present');
    
    } else {
            $(this).addClass('future');
        }
    });
}

// every row to display saved text content in
$('#five .description').val(localStorage.getItem('05'))
$('#six .description').val(localStorage.getItem('06'));
$('#seven .description').val(localStorage.getItem('07'));
$('#eight .description').val(localStorage.getItem('08'));
$('#nine .description').val(localStorage.getItem('09'));
$('#ten .description').val(localStorage.getItem('10'));
$('#eleven .description').val(localStorage.getItem('11'));
$('#twelve .description').val(localStorage.getItem('12'));
$('#thirteen .description').val(localStorage.getItem('13'));
$('#fourteen .description').val(localStorage.getItem('14'));
$('#fifteen .description').val(localStorage.getItem('15'));
$('#sixteen .description').val(localStorage.getItem('16'));
$('#seventeen .description').val(localStorage.getItem('17'));
$('#eighteen .description').val(localStorage.getItem('18'));
