
$(document).ready(function() {
var date= moment().format("dddd, MMMM Do YYYY");

//Create a variable that calls for current time and append to HTML element
function() {
$("#currentDay").text(date);
console.log(date);

}

// //Click funtion to enter an event 

   

// $("<btn>").on("click", function() {
// localStorage.setItem("event")

