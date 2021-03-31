var currentDay = $('#currentDay');
var sectionEl = $('.schedules');
// Display date using moment.js
currentDay.text(moment().format("dddd, MMMM Do"));
var currentHour = moment().format("hA"); 

var todoArray = [];
var businessHoursArray = [];
var todoInputArray = [];
var saveButtonArray = [];
var saveIconArray = [];
var j;






for (var i = 0; i<24; i++){
    todoArray.push($('<div class="todo">'));
    businessHoursArray.push($('<span class="businessHours">'));
    todoInputArray.push($('<input class = "scheduleItem">'));
    saveButtonArray.push($('<button class="btn">'));
    saveIconArray.push($('<i class="fa fa-save"">'));
}




function renderPage(){
    for (var i = 0; i<24; i++){
        sectionEl.append(todoArray[i]);
        todoArray[i].append(businessHoursArray[i]);
        todoArray[i].append(todoInputArray[i]);
        todoArray[i].append(saveButtonArray[i]);
        saveButtonArray[i].append(saveIconArray[i]);
        businessHoursArray[i].text(moment().hour(i+9).format("hA"));
        if (currentHour===moment().hour(i+9).format("hA")) {todoInputArray[i].css('background-color', 'red'); j=i;}
    }
    for (j=j+1; j<24; j++){
        todoInputArray[j].css('background-color', 'green')
    }
}
renderPage();
