// All code that interacts with the DOM is wrapped in a call to jQuery to ensure that the code isn't run until 
//the browser has finished rendering all the elements in the html.

var currentHour = dayjs().hour();
var firstHour = 9;
var lastHour = 17;
//global variables accessiable by all code
//first hour set at 9:00am and last hour set at 17:00 to represent average office hours.
//current hour found using jQuery dayjs api

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

function hourCheck() {
$('.hour').each (function (){
  var officeHour = parseInt($(this).attr("id"))
  console.log(officeHour)

  if (officeHour < currentHour) {
    $(this).addClass('past');
  }else if (officeHour === currentHour) {
    $(this).removeClass('past');
    $(this).addClass('present');
 } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
console.log('hour check')
}})}
//This function find's the hour class in the html, added via javascript, in createBlock function, and uses .each to 
//loop through all office hours checking if it is past present or future using an if statement. The variable 
//officeHour is created to turn the "hour" string into a number and is found using 'this' and calling it by its 
//attribute 'id'. Once the office hour is assigned to the officeHour variable it is compared with the current hour. 
//The if statement says that if the officeHour is smaller than the current hour it is in the past add adds the past 
//class to it. If the officeHour is equal to the currentHour it removes the past class and adds the present class.
//If the office hour is not smaller than or equal to the currentHour it removes past or present class and adds the 
//future class. Console.log was used to check the functionality of the code.

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
//This function finds the hour class and loops through all office hours assigning text ":00am" or ":00pm" 
//depending on whether the office hour is greater than or equal to 0, representing midnight. Or smaller than 
//or equal to 12, representing midday. It finds the hour element by its id attribute and assigns it to the 
//variable hour. The variable timeText is also created and declared as a string. The hour and timeText 
//variables are added together, then added to the 'this' refering to each office hour.

function onSaveToDo(event) {
  var hour = $(event.target).parent().parent().attr('time-hour');
  var toDo = $(event.target).parent().prev().children().val();

  localStorage.setItem(hour, toDo);
  console.log('saved event');
}
//This function creates the variable hour and gets the div html element, created in the createBlock function, by 
//getting it's time-hour class attribute. It also creates the toDo function, named as such as the information 
//entered is similiar to a to do list, and sets it as a value.
//The event target refers to the button element that was clicked (the specific save button). It is necessary to use 
//event.target when using an event listener, an event listener is used later in the code in the init function.
//It stores the hour as the key and the toDo, users plan input, as the value in local storage. 
//It then logs the string 'saved event' in the console to check if it is working.

function init() {

  var currentDay = dayjs().format('dddd, D MMMM YYYY');
  $('#currentDay').text(currentDay);  
//This adds in the written current date in the header by getting the html element <p> by it's id "currentDay" 
//and adding the text to it. 

    createBlock();
    hourCheck();
    amPm();

    $('.saveBtn').on('click', onSaveToDo);

    setInterval(function(){
      hourCheck();
    }, 10000);
}

init();

//init in jquery is a shorthand for initiate, this funtion calls all functions at the same time and is used at the 
//bottom of the javascript page to avoid errors as it needs to use previous code.

//createBlock() -loads in the html time blocks, including the office hour, text box and save button.  

//hourCheck() -Updates the background and text colour of the office hours block to indicate if it is past present 
//or future, definded colours in css.

//amPm() -checks whether the office hour is am or pm and adds the ":00am" or ":00pm" strings accordingly

//$('.saveBtn').on('click', onSaveToDo); finds and adds event listener to the save button when it is clicked by the 
//user.

//setInterval(function() sets up the timer poller and updates the time every second