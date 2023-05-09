// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var options = {
    firstHour: 9,
    lastHour: 20,
}

var currentHour = dayjs().hour();

function onSaveToDo(event) {

  var hour = $(event.target).parent().parent().attr('data-hour');
  var toDo = $(event.target).parent().prev().children().val();

  localStorage.setItem(hour, toDo);

  console.log('saved')
}

function createBlock() {

  for (hour = options.firstHour; hour <= options.lastHour; hour++) {

    // load the toDo from local storage - jsn comment
    var savedToDo = localStorage.getItem(hour) || '';
    var html = `<div class="row" data-hour = "${hour}">
        <div class="col-sm-2 hour"id="${hour}">${hour}</div>
        <div class="col-sm-8 row past">
            <textarea class="col-md-10 description">${savedToDo}</textarea>
        </div>
        <div class="col-sm-2">
            <button class="btn btn-primary saveBtn">Save</button>
        </div>
      </div>`

      $('.container').append(html);
  }
}

// function updateTime() {

//     console.log('updateTime');
//     var currentHour = dayjs().hour();
//     $('.time-block').each(function (index, element) {

//       var hour = $(element).attr('data-hour');
//       console.log(hour, currentHour);

//       if(hour < currentHour) {
//         $(element).find('.description').addClass('past');
//       }
//       else if (hour == currentHour) {
//         $(element).find('.description').addClass('present');
//       }
//       else {
//         $(element).find('.description').addClass('future');
//       }
//     });
// }
// bug in this section ..................................................................

//add before 12 midday "am" and after 12 midday "pm".................................................

// function hourCheck() {
  // var currentHour = dayjs().hour(); 

//   console.log('hourcheck 1', currentHour);

//   $('.data-hour').each(function () {
//     var timeBlockHour = parseInt($(this).attr('data-hour').split('data-hour')[1]);
//     console.log('hourcheck 2');

//     if (timeBlockHour < currentHour) {
//       $(this).addClass('past');
//     } else if (timeBlockHour === currentHour) {
//       $(this).removeClass('past');
//       $(this).addClass('present');
//     } else {
//       $(this).removeClass('past');
//       $(this).removeClass('present');
//       $(this).addClass('future');
//     }
//     console.log(timeBlockHour);
//     console.log('hourCheck');
//   });
// }

//need to find data-hour class and loop through all checking if it is past present or future....................
function hourCheck() {
// var test = parseInt($(this).attr('data-hour').split('data-hour')[1]);
$('.hour').each (function (){
  var test = parseInt($(this).attr("id"))
  console.log(test)

  if (test < currentHour) {
    $(this).addClass('past');
  }else if (test === currentHour) {
    $(this).removeClass('past');
    $(this).addClass('present');
 } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
console.log('hour check')
}})}
//need to add 'am' and 'pm' text after data-hour NOT WORKING .........................................

function amPm () {
$('.hour').each (function(index, element){
  var timeText ="";
  var hour = $(element).attr('id');
  console.log(hour)
  if (hour >= 0 && hour <= 12) {
    timeText = "am";
  } else {
    timeText = "pm";
  }
  $(this).text(hour + timeText);
  console.log('AM PM');
})  
}


// var blockHour= $('<div>').attr('col-sm-2 hour')
// var timeText = "";
// if (hour >= 0 && hour <= 12) {
//   timeText = "am";
// }
// else {
//   timeText = "pm";
// }
// blockHour.text(hour + timeText);.............................................................

function init() {
  //load in the time slots -jsn comment- change to - add in list
    createBlock();

    //update the timeslot's background colours based on the times of day - jsn comment
    // updateTime();
    hourCheck();

    amPm();//.........................................................not working..........................

    //Set up the save button - jsn comment
    $('.saveBtn').on('click', onSaveToDo);

    //Set the current day - jsn comment
    var currentDay = dayjs().format('dddd D MMMM YYYY, h:mm:ss a');
    $('#currentDay').text(currentDay);

    //Set up the Time poller - jsn comment
    setInterval(function(){
      hourCheck();
      // updateTime();
    }, 10000);
}

init();



// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
