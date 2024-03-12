// Import the Calendar class
const Calendar = require('controllers\calendarRoutes.js');

// Create a new instance of the Calendar class
const myCalendar = new Calendar();

// Add events to the calendar
myCalendar.addEvent({ title: 'Meeting', date: '2024-03-08' });
myCalendar.addEvent({ title: 'Appointment', date: '2024-03-10' });

// Display the events
console.log(myCalendar.events);
