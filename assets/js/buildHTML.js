
// Display date using moment.js
var currentDay = $('#currentDay');
currentDay.text(moment().format("dddd, MMMM Do"));
var currentHour = moment().format("hA");
//----------------------------------------------------------------------------------- 
var sectionEl = $('.schedules');
var todoArray = [];
var businessHoursArray = [];
var todoInputArray = [];
var saveButtonArray = [];
var saveIconArray = [];
var j;
//-----------------------------------------------------------------------------------
for (var i = 0; i<24; i++){
    todoArray.push($('<div class="todo">'));
    businessHoursArray.push($('<span class="businessHours">'));
    todoInputArray.push($('<input class = "scheduleItem">'));
    saveButtonArray.push($('<button class="btn">'));
}
//-----------------------------------------------------------------------------------
function renderPage(){
    for (var i = 0; i<24; i++){
        sectionEl.append(todoArray[i]);
        todoArray[i].append(businessHoursArray[i]);
        todoArray[i].append(todoInputArray[i]);
        todoArray[i].append(saveButtonArray[i]);
        saveButtonArray[i].text('💾');
        //Assign data-index to each button for identifying particular user input in the next script file
        saveButtonArray[i].attr('data-index', i);
        businessHoursArray[i].text(moment().hour(i+9).format("hA"));
        //Find out the current hour on planner, change input background to red,
        //input background default in lightgray.
        if (currentHour===moment().hour(i+9).format("hA"))
        {todoInputArray[i].css('background-color', 'red'); j=i;}
    }
    //hours after current change to green background.
    for (j=j+1; j<24; j++){
        todoInputArray[j].css('background-color', 'green')
    }
}

renderPage();




