// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var options = {
    firstHour: 9,
    lastHour: 24,
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

//need to find data-hour class and loop through all checking if it is past present or future....................
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