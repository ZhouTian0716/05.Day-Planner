var currentDay = $('#currentDay');
var sectionEl = $('.schedules');
// Display date using moment.js
var today = moment();
currentDay.text(today.format("dddd, MMMM Do"));


var currentHour = moment().format("hA"); 

function renderPage(){
    for (var i = 0; i<24; i++){
        var todoEl = $('<div class="todo">');
        var businessHours = $('<span class="businessHours">');
        var todoInput = $('<input class = "scheduleItem" id = i>');
        var saveButton = $('<button class="btn">');
        var saveIcon = $('<i class="fa fa-save"">');
        sectionEl.append(todoEl);
        todoEl.append(businessHours);
        todoEl.append(todoInput);
        todoEl.append(saveButton);
        saveButton.append(saveIcon);
        businessHours.text(moment().hour(i+9).format("hA"));
        if (moment().hour(i+9).format("hA")>currentHour){
        $('.scheduleItem').css('background-color', 'green');
        }
    }
}
renderPage();
//
//alert(moment().hour(25).format("hA"))

//console.log('hello');

//setInterval(function(){ alert(a); }, 2000);

