// All code that interacts with the DOM is wrapped in a call to jQuery to ensure that the code isn't run until 
//the browser has finished rendering all the elements in the html.

var currentHour = dayjs().hour();
var firstHour = 0;
var lastHour = 17;
//global variables accessiable by all code
//first hour set at 9:00am and last hour set at 17:00 to represent average office hours.

function createBlock() {
  for (hour = firstHour; hour <= lastHour; hour++) {

    var savedToDo = localStorage.getItem(hour) || '';   //this loads the plans entered by user from local storage
    var html = `<div class="row" time-hour = "${hour}">
        <div class="col-sm-2 hour"id="${hour}">${hour}</div>
        <div class="col-sm-8 row">
            <textarea class="col-md-10 description">${savedToDo}</textarea>
        </div>
        <div class="col-sm-2">
            <button class="btn btn-primary saveBtn">Save</button>
        </div>
      </div>`
      $('.container').append(html);
  }
}
//this function dynamically creates html and appends it to the div element in the index with the class name 
//"container". This creates div elements comprising the office hours, the text boxes and the save buttons. 
//This was achieved by the use of a for loop by starting at the first hour, 9:00 am and incrementing through 
//the hours until all div elements are created for every hour leading up to 17:00pm, office hours.
//Bootstrap is used with a class of row to add rows to the container and col-* classes for different column 
//sizes on different screens.

function onSaveToDo(event) {
  var hour = $(event.target).parent().parent().attr('time-hour');
  var toDo = $(event.target).parent().prev().children().val();

  localStorage.setItem(hour, toDo);
  console.log('saved event');
}
//this function 

function hourCheck() {
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
//need to find time-hour class and loop through all checking if it is past present or future

function amPm () {
$('.hour').each (function(index, element){
  var timeText ="";
  var hour = $(element).attr('id');
  console.log(hour)
  if (hour >= 0 && hour <= 12) {
    timeText = ":00 am";
  } else {
    timeText = ":00 pm";
  }
  $(this).text(hour + timeText);
  console.log('AM PM');
})  
}
//need to add 'am' and 'pm' text after time-hour

function init() {
  //load in the time slots -jsn comment- change to - add in list
    createBlock();

    //update the timeslot's background colours based on the times of day - jsn comment
    // updateTime();
    hourCheck();

    amPm();

    //Set up the save button - jsn comment
    $('.saveBtn').on('click', onSaveToDo);

    //Set the current day - jsn comment
    var currentDay = dayjs().format('dddd, D MMMM YYYY');
    $('#currentDay').text(currentDay);

    //Set up the Time poller - jsn comment
    setInterval(function(){
      hourCheck();
      // updateTime();
    }, 10000);
}

init();