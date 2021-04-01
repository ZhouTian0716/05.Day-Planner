//console.log('hello');
var messageFlash = $('#flash');
var todoEl = $('.todo');
var businessHours = $('.businessHours');
var todoInput = $('.scheduleItem');
var saveButton = $('.btn');

//localStorage variables
var todoList = [];
todoList.length = 24;
var index;
var storedTodos = JSON.parse(localStorage.getItem("todoList"));

todoEl.on('click', '.btn', clickSave);

function clickSave(event){
    var btnClicked = $(event.target);
    //get the index of the clicked button
    index = parseInt(btnClicked.attr("data-index"));
    //importain, check localStorage if exist!
    if (storedTodos!==null){
        for (var i=0; i<24; i++){
            todoList[i] = storedTodos[i];
        }
    }
    todoList[index] = btnClicked.siblings().eq(1).val();
    localStorage.setItem("todoList", JSON.stringify(todoList));
    messageFlash.css('opacity', '1');
    //Set timer to flash message
    setTimeout(function(){ 
        messageFlash.css('opacity','0');
    }, 2000)
}

//Fill in schedule with (localStorage) storedTodos
function init(){
    //importain, check localStorage if exist!
    if (storedTodos!==null){
        for(var i=0; i<24; i++){
            $(todoInputArray[i]).attr('value', storedTodos[i]);
        }
    }
}
init();
