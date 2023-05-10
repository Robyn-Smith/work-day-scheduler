# work-day-scheduler

## Description

This project uses JavaScript, CSS and html code to create a helpful day schedule that can be used to plan and organise time. This is a useful website for all users to better manage their time and daily routines. When a user opens this webpage they are presented with a descriptive title, a blue header, a large heading and subheading giving more information to the reader, a colourful background and a selection of office hour time slots with blue text boxes and save buttons adjacent. 

jQuery was used within the JavaScript code of this project as it is a lightweight library and allows the code to do more. The use of jQuery allows the coder to complete a common task, that usually is quite lengthy, in a much quicker and easier way; as jQuery wraps these tasks into a single method which can be called upon. In this project jQuery was used throughout and was especially fundemental to call the dayjs api; which retrieves the current date. The current date is diplayed in the header so that the user is reminded what day they are planning for. The dayjs api was also used to compare the current time with the office times available for the user to plan for in order to see whether they are in the past, present or future. CSS styling was used to change the colour of each time block to indicate this. If the time of the event is in the past the block is grey with black text, if it is in present the block is red in colour with white text and if it is in the future it is displayed in green with white text. This supports user experience as they can clearly see not to plan for the past and how much time they have left in the day. Black and white text were used for different block colours so they are easier for the user to read. This is presentented in blocks with the current buisness hour on the left, an area to input their own text in the middle, adjacent to the corresponding time, and a save button on the right. 

This website is very simple to use. The user enters their plans/events and routines into the day schedulor and if they wish to save these plans they click the save button on the right. Once saved the user can refresh the page and their plans will still be visable as the events were saved in local storage. If a user wishes to remove or edit their plans they can retype or remove their text in the input area and save their changes again. 

The website is responsive to changes in screen size to support user experience, inclusion and allow users to clearly see the website from any device. CSS styling was also used to make the website more visually appealing and so that it is easier see which text box they are clicking or button they are hovering over. In the picture below the 9:00 am text box has been selected which is made clear by the black border and the first save button is a darker shade of blue to show that the mouse is hovering over it.

As seen in the image below:

![A screenshot of the Work Day Scheduler webpage, including a blue header, a large heading, a subheading, the current date, a colourful background, blue text boxes and blue save buttons](/assets/images/screenshot.png)

A link to the deployed webpage:

https://robyn-smith.github.io/work-day-scheduler/