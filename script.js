// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var options = {
    firstHour: 8,
    lastHour: 23,
}

function updateTime() {

    console.log('updateTime');
    var currentHour = dayjs().hour();
}
    // $('.time-block').each(function (index, element) {

    //   var hour = $(element).attr('data-hour');
    //   console.log(hour, currentHour);

    //   if(hour < currentHour) {
    //     $(element).find('.descrition').addClass('past');
    //   }
    //   else if (hour == currentHour) {
    //     $(element).find('.description').addClass('present');
    //   }
    //   else {
    //     $(element).find('.description').addClass('future');
    //   }
//     });
// }
// bug in this section ..................................................................

//add before 12 midday "am" and after 12 midday "pm".................................................

function onSaveToDo(event) {

  var hour = $(event.target).parent().parent().attr('data-hour');
  var toDo = $(event.target).parent().prev().children().val();

  localStorage.setItem(hour, toDo);

  console.log('saved')
}

function createList() {

  for (hour = options.firstHour; hour <= options.lastHour; hour++) {

    // load the toDo from local storage - jsn comment
    var savedToDo = localStorage.getItem(hour) || '';
    var html = `<div class="row" data-hour="${hour}">
        <div class="col-sm-2 hour">${hour}</div>
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

function init() {
  //load in the time slots -jsn comment- change to - add in list
    createList();

    //update the timeslot's background colours based on the times of day - jsn comment
    updateTime();

    //Set up the save button - jsn comment
    $('.saveBtn').on('click', onSaveToDo);

    //Set the current day - jsn comment
    var currentDay = dayjs().format('dddd D MMMM YYYY, h:mm:ss a');
    $('#currentDay').text(currentDay);

    //Set up the Time poller - jsn comment
    setInterval(function(){
      updateTime();
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
